import mongoose, { Schema } from "mongoose";

const JobsSchema = new Schema(
  {
    Name: String,
    imageurl:String,
    imagedata: 
{
    data: Buffer,
    contentType: String
},
  },
  {
    timestamps: true,
  }
);

const Jobs = mongoose.models.Jobs || mongoose.model("Jobs", JobsSchema);

export default Jobs;
