const mongoose = require("mongoose");

const atlasUri = 'mongodb+srv://lawalt48:FrkJFmU6yiJzZRrR@hngx.3votegz.mongodb.net/?retryWrites=true&w=majority';



module.exports = function(){

    mongoose.connect(atlasUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } )

      const db = mongoose.connection;
        
      db.on('error', (error) => {
        console.error('MongoDB connection error:', error);
      });
      
      db.once('open', () => {
        console.log('Connected to MongoDB Atlas');
      });
      
    //   .then(()=>("connected to mongodb..."))
    //     .catch(err=>console.error("could not conect to mongodb",err))

}