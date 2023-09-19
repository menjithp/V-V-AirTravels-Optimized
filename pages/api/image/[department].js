import connectMongoDB from "@/libs/mongodb";
import Country from "@/models/country";
import Jobs from "@/models/jobs";
import General from "@/models/general";

await connectMongoDB();

export default async function handler(request,response){

  const { query } = request;
  let final_scheme;

  if(query.department==="country")final_scheme=Country
  else if(query.department==="general")final_scheme=General
  else if(query.department==="jobs")final_scheme=Jobs

  let result=await final_scheme.find( { _id: query._id }, { imagedata: 1} )
  let data=result[0].imagedata.data
  let type=result[0].imagedata.contentType

  response.setHeader('content-type', type)
  response.end(data)

}
