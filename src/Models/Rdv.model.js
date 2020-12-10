const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const RdvSchema = new Schema({
    "day"     : {"type" : "string", "format" : "date"},
    "status"  :  {"type" : "boolean"}, 
    "day"  : [
        {
            "day_date" : {"type":"string", "format": "date"},
             "creno" : [
               {
                "fromHour" :  {"type":"string", "format": "date"},
                "toHour"   :  {"type":"string", "format": "date"},
                "status"   :  {"type" : "boolean"}
               }
             ],
             "doctor" : [
                {
                    "firstname"  :  {"type":"string"},
                    "lastname"   :  {"type":"string"},
                    "phone"      :  {"type":"string"},
                    "email"      :  {"type":"string"},
                    "location"   :  {"type":"string"},
                    "speciality" : [
                        "name" 
                    ]
                }
            ],
            "patient" : [
                {
                    "firstname"  :  {"type":"string"},
                    "lastname"   :  {"type":"string"},
                    "phone"      :  {"type":"string"},
                    "email"      :  {"type":"string"},
                    "location"   :  {"type":"string"},
                    "sexe"       :  {"type":"boolean"},
                    "birthday"   :  {"type":"string",  "format": "date"},
                }
            ],
        }
    ],
});


module.exports = mongoose.model('Rdv', RdvSchema);

