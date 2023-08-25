import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://yashmotwani:codeforinterview@user.ihtlslp.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting to database", error.message);
  }
};
export default Connection;
