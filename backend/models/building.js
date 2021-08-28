const mongoose = require('mongoose');

   const Schema = mongoose.Schema;
   
   const buildingSchema = new Schema({
     name: {
       type: String,
       required: true,
       unique: true,
       index: true
     },
     location: Object
    }, 
    {
     timestamps: true,
   });
   
   const Buliding= mongoose.model('Building', buildingSchema);
   
   module.exports = Building;