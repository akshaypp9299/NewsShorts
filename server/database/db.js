import mongoose from "mongoose";


const Connection = async (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@inshorts-clone.p0qpgjn.mongodb.net/INSHORTS-CLONE?retryWrites=true&w=majority`;//this is the URL of mongoose
    try {
       await mongoose.connect(URL,{useNewUrlParser : true});
       console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to the database ",error);
    }
}

export default Connection;