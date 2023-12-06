import {data} from "./constants/data.js";
import News from "./model/new-schema.js";


const DefaultData = async () =>{
    try {
    // await News.deleteMany({});
      await News.insertMany(data);
      console.log("Data inserted successfully");
    } catch (error) {
        console.log("error" , error.message);
    }
}

export default DefaultData;