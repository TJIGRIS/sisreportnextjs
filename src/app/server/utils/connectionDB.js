import mongoose from 'mongoose';

export const connectionDB = async () => {
  const isConnected = {};

  try {
    if (isConnected.db) return;

    const db = await mongoose.connect(
      'mongodb+srv://igrisdev:220502JAkt@cluster0.5oyfrrs.mongodb.net/?retryWrites=true&w=majority'
    );

    isConnected.db = db.connections[0].readyState;

    // console.log(db);
  } catch (error) {
    console.log();
  }
};

// "mongodb+srv://root:root@cluster0.xzrgytm.mongodb.net/?retryWrites=true&w=majority",
