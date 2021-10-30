import mongoose from "mongoose";
const dbconnection = async () => {
    try{
      await  mongoose.connect(process.env.DB_CONNECTION,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Conection with MongoDB : ON");
    } catch (e){
        console.log("Error connecting to MongoDB: \n " + e);
     }
};

export default { dbconnection }