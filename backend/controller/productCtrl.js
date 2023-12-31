const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../untils/validateMongodbId");
const { cloudinaryUploadImg } = require("../untils/cloudinary");

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      // Đường dẫn id bằng với title
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json({
      newProduct,
    });
  } catch (error) {
    throw new Error(error);
  }
});
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    // Validate and mounted req.body data
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    if (!updateProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({
      updateProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findOneAndDelete({ _id: id }); // Use { _id: id } to specify the query
    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(deleteProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json({
      findProduct,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    // lọc
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    // "gte" : Viết tắt của "lớn hơn hoặc bằng."
    // "gt" : Viết tắt của "lớn hơn."
    // "lte" : Viết tắt của "nhỏ hơn hoặc bằng."
    // "lt" : Viết tắt của "nhỏ hơn."
    let query = Product.find(JSON.parse(queryStr));
    // Sắp Xếp
    if (req.query.sort) {
      let sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // giới hạn các trường(Lọc các trường hiển thị)
    if (req.query.fields) {
      let fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // Phân trang (page)
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This Page does not exits");
    }

    // console.log(page, limit, skip);

    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});
// Thêm sản phẩm vào mục mình thích
const addToWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    // const compareIds = (id1, id2) => id1.toString() === id2;
    // const alreadAdd = user.wishlist.find((id) => compareIds(id, prodId));
    // Hàm này kiểm tra xem trong db User trường wishlist có ProdId hay chưa, bằng cách tìm
    // id trong bảng wishlist có ProId, nếu có thì dùng pull xóa nó, k có dùng hàm push thêm vào
    const alreadAdd = user.wishlist.find((id) => id.toString() === prodId);
    if (alreadAdd) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      // console.log("check pull", user.wishlist, _id);
      res.json(user);
    } else {
      // Nếu chưa có nó sẽ tìm đến Id User và thêm
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
      // console.log("Check push", user.wishlist, _id);
    }
  } catch (error) {
    throw new Error(err);
  }
});
// Người dùng đánh giá sản phẩm, thì nó bao gồm người đánh giá, sản phẩm đánh giá và đánh giá mấy sao
// Sửa đánh giá
const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;
  try {
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find(
      (rating) => rating.postedby.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        // Ví dụ:
        //   db.scores.find(
        //     { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
        //  )
        // Kết quả: { "_id" : 1, "results" : [ 82, 85, 88 ] }

        {
          // ratings: { $elemMatch: alreadyRated },
          _id: prodId,
          "ratings.postedby": _id,
        },
        // Vi du
        // "ratings": [
        //   {"_id": ObjectId("rating1"), "star": 3},
        // ]
        { $set: { "ratings.$.star": star, "ratings.$.comment": comment } }
        //  Kết quả
        // "ratings": [
        //   {"_id": ObjectId("rating1"), "star": 5},
        // ]
      );
    } else {
      let ratingProd = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        { new: true }
      );
    }
    // Lấy các sản phẩm
    const getAllRatings = await Product.findById(prodId);
    // Gắn độ dài của rating
    let totalRating = getAllRatings.ratings.length;
    // Tính tổng tất cả rating, giá trị ban đầu gắn bằng 0
    let ratingSum = getAllRatings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);

    //
    let actualRating = Math.round(ratingSum / totalRating);
    // console.log("check điểm ratingSum", ratingSum);
    // console.log("check điểm totalRating", totalRating);
    let finalProduct = await Product.findByIdAndUpdate(
      prodId,
      {
        totalRating: actualRating,
      },
      { new: true }
    );

    res.json({ finalProduct });
  } catch (error) {
    throw new Error(error);
  }
});
const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ID
  validateMongoDbId(id);

  try {
    const uploader = async (path) => cloudinaryUploadImg(path, "images");
    const urls = [];

    const files = req.files;

    // Use Promise.all for parallel execution of file uploads
    await Promise.all(
      files.map(async (file) => {
        const { path } = file;
        const newpath = await uploader(path);

        // console.log(newpath);
        urls.push(newpath);
      })
    );

    const findProduct = await Product.findByIdAndUpdate(
      id,
      {
        images: urls, // Simplified mapping
      },
      {
        new: true,
      }
    );

    res.json(findProduct);
  } catch (error) {
    // Handle errors more gracefully, log or customize the response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
  uploadImages,
};

// const createProduct = asyncHandler(async (req, res) => {
//   try {
//
//   } catch (error) {
//     throw new Error(error);
//   }
// });
