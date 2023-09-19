import connectMongoDB from "@/libs/mongodb";
import Snapshot from "@/models/snapshot";

import {
 
  formread,
} from "@/libs/node-functions/helper1";


import auth from './auth'

const connection = await connectMongoDB();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  let result, status, desc, message;

  // if(request.method==="POST"){
  //   if(await auth(request)===null)return response.status(401).json("Unauthorized access")
  // }


  if (request.method === "GET") {
    try {
      result = await Snapshot.find();
      status = 200
    } catch (e) {
      desc = e;
      message = "data fetch failed";
      status = 404;
    }
  } 
  
  
  
  
  else if (request.method === "DELETE") {
    const { id } = request.query;
    try {
      result = await Snapshot.deleteOne({ _id: id });
      status = 200;
    } catch (e) {
      desc = e;
      message = "data deletion failed";
      status = 404;
    }
  } 
  
  
  
  
  
  else if (request.method === "POST" ||request.method === "PUT") {
    const form = await formread(request);

    //check if form parsed successfully
    if (form.err) {
      return response
        .status(404)
        .json({status:404, message: "Form parsing failed", description: err, result: {} });
    }

    let formdata = form.fields.Snapshot;

    if (!formdata) {
      return response
        .status(400)
        .json({ status:404,message: "Snapshot object missing", description: form.err, result: {} });
    }
    formdata = JSON.parse(formdata[0]);

    let data_to_database = { ...formdata };

    try {
      result =
      !data_to_database._id
          ? await Snapshot.create(data_to_database)
          : await Snapshot.findOneAndUpdate(
              { _id: data_to_database._id },
              { $set: data_to_database },
              {upsert:true, returnDocument: 'after' }
            );
    
            if(!result._id){
                return response.status(404).json({status:404,result:{},message:"Data failed to upload",description:{}})
            }

      status = 200;
    } catch (e) {
      status = 404;
      message =
      !data_to_database._id
          ? "Snapshot Creation failed"
          : "Snapshot updation failed";
      desc = e;
    }
  }




  return response.status(status).json({ status,message: "", description: {}, result: result });
}
