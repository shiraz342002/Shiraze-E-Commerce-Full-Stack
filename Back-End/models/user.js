import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  name: { type: String, required: true, maxlength: 20 },
  email: { type: String, required: true, maxlength: 40, unique: true },
  password: { type: String, required: true, maxlength: 5000 },
});
export default mongoose.model("User", schema);
