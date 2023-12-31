const mongoose = require("mongoose");

const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("This id is not valid or not found");
};
module.exports = validateMongoDbId;

// Đã thêm kiểm tra để đảm bảo rằng đó _id là ObjectId hợp lệ trước khi
//  thử cập nhật. Điều này ngăn chặn các truy vấn cơ sở dữ liệu không cần
//  thiết nếu nó _id không hợp lệ.

// Có thể viết luôn trong hàm xử lý luôn, thay validateMongoDbId thành hàm này
// if (!mongoose.Types.ObjectId.isValid(_id)) {
//   return res.status(400).json({ error: 'Invalid Color ID' });
// }