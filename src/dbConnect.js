import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default () => {
  function dbConnect() {
    mongoose.connect(process.env.DB_FULL_URL, (err) => {
      if (err) {
        console.log('mongoDB Connection Error.', err);
      }
      console.log('mongoDB is Connected.');
    });
  }
  dbConnect();
  mongoose.connection.on('disconnected', dbConnect);
};
