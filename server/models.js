import mongoose from "mongoose";

const models = {};
main();
async function main() {
  console.log("connecting to mongodb");

  await mongoose.connect(
    "mongodb+srv://wenyis:SUN19990520@cluster0.mpxqhoq.mongodb.net/data?retryWrites=true&w=majority"
  );

  console.log("successfully connected to mongodb!");

  // leasing and inquiry information schema
  const leasingSchema = new mongoose.Schema({
    id: Number,
    creater: String,
    create_date: Date,
    title: String,
    description: String,
    contact: { email: String, tel: String },
    social_media: { type: String, account: String },
  });
  models.Lease = mongoose.model("Lease", leasingSchema);

  const commentSchema = new mongoose.Schema({
    id: Number,
    creator: String,
    create_date: Date,
    content: String,
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Lease" },
  });

  models.comment = mongoose.model("Comment", commentSchema);

  console.log("mongoose models created");
}

export default models;
