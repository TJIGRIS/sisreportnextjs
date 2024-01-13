// import mongoose from "mongoose";

// const connectionDB = async () => {
//   try {
//     const connection = await mongoose.connect(
//       "mongodb+srv://root:root@cluster0.xzrgytm.mongodb.net/?retryWrites=true&w=majority",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );

//     const url = `${connection.connection.host}:${connection.connection.port}`;
//     console.log(url);
//   } catch (error) {
//     console.log(`Error: ${error.message}`);
//     //Forzamos el cierre de los otros procesos en caso de error
//     process.exit(1);
//   }
// };

// export default connectionDB;
