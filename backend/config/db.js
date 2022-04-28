import mongose from "mongoose";

// a mongoose stuf (mongoose.connect ....) return always a promise
const URL = `mongodb+srv://cars-hub:cars@cluster0.hjb1p.mongodb.net/test`;
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
