var mongoose = require('mongoose');
 var employeeSchema = mongoose.Schema({
     name:
     {
         type: String
     },
    totalDays:
    {
        type: Number
    },
    availableDays:
    {
        type: Number
    },
    bandScore:
    {
        type: String
    },

 });

 module.exports = mongoose.model('Employee',employeeSchema);