import mongose from "mongoose";

// a mongoose stuf (mongoose.connect ....) return always a promise
const URL = `mongodb://localhost:27017`;
const connectDB = async () => {
  try {
    const conn = await mongose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
