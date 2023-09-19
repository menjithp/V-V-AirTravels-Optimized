import mongoose, { Schema } from "mongoose";

const CountrySchema = new Schema(
  { 
    Name: String,
    Comments:Array,
    imagedata: 
    {
        data: Buffer,
        contentType: String
    },
    imageurl:String
  },
  {
    timestamps: true,
  }
);

const Country = mongoose.models.Country || mongoose.model("Country", CountrySchema);

export default Country;