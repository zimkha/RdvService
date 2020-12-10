const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AgendaSchema = new Schema({
    "day" : {"type" : "string", "format" : "date"},
    "creneau"  : [
        {
            "fromHour" :  {"type":"string", "format": "date"},
            "toHour"   :  {"type":"string", "format": "date"},
            "status"   :  {"type" : "boolean"}

        }
    ],
    "unvaibledayHour" : [
        {
            "fromHour" :  {"type":"string", "format": "date"},
            "toHour"   :  {"type":"string", "format": "date"}
        }
    ],
    "doctor": {
        "firstname" : {"type":"string"},
        "lastname"  : {"type":"string"},
        "phone"     : {"type":"string"},
        "email"     : {"type":"string"},
        "location"  : {"type":"string"}, 
        "speciality" : [
            "name" 
        ]
    }
});


module.exports = mongoose.model('Agenda', AgendaSchema);