import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  personal_name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, maxlength: 50, unique: true },
  password: { type: String, required: true, maxlength: 5000 },
});
export default mongoose.model("User", schema);
