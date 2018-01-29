const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TempSchema = new Schema({
    name : {
        type: String,
        required : [true, 'name fiels is required']
    },
    alamat : {
        type : String
    },
    available :{
        type : Boolean,
        default : false
    }
});

const Temp = mongoose.model('users', TempSchema);
module.exports = Temp;