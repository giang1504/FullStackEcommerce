const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../untils/validateMongodbId");
const { cloudinaryUploadImg } = require("../untils/cloudinary");

const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json({
      status: "Success",
      newBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ updateBlog });
  } catch (error) {
    throw new Error(error);
  }
});
const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    //
    const getBlog = await Blog.findById(id)
      .populate("likes")
      .populate("dislikes");
    const updateBlogView = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );
    res.json({ getBlog });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const getAllBlog = asyncHandler(async (req, res) => {
  try {
    const getAllBlog = await Blog.find();
    res.json(getAllBlog);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongoDbId(id);
    const deleteBlog = await Blog.findByIdAndDelete(id);
    res.json({
      deleteBlog,
    });
  } catch (e) {
    throw new Error(e);
  }
});
const liketheBlog = asyncHandler(async (req, res) => {
  // const blogId = req.body.blogId
  const { blogId } = req.body;
  //   console.log("check blogId", blogId);
  validateMongoDbId(blogId);
  // Tìm blog bạn muốn thích
  const blog = await Blog.findById(blogId);
  // Tìm user đăng nhập req.user.id
  const loginUserId = req?.user?._id;

  // tìm user không thích bài viết
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  // Tìm nếu user thích bài viết
  const isLiked = blog?.isLiked;
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

const disliketheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);
  const blog = await Blog.findById(blogId);
  const loginUserId = req?.user?._id;
  const isDisLiked = blog?.isDisliked;
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isDisLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      { new: true }
    );
    res.json(blog);
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

    const findBlog = await Blog.findByIdAndUpdate(
      id,
      {
        images: urls, // Simplified mapping
      },
      {
        new: true,
      }
    );

    res.json(findBlog);
  } catch (error) {
    // Handle errors more gracefully, log or customize the response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlog,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadImages,
};
