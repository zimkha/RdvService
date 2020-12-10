const { json } = require('body-parser');
const Agenda = require('../../Models/Rdv.model')
class AgendaResolver {
    
    constructor(model) {
        this.model = Agenda;
    }
    
    create(data)
    {
        const record = new this.model(data);
            record.save()
                .then( (agenda) => {
                    return agenda.toJSON();
                })
                .catch((error) => {
                    return error;
                });
    }
    update(id , data)
    {
        return this.model.findOneAndUpdate( {'_id' : id}, data, {upsert : true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
                 return res.send('Updated saved.');   
        });
    }

    delete(option)
    {
        return this.model.findOne({ _id : option.id})
                    .exec()
                        .then((agenda) => {
                            const result =  agenda.remove()
                            if(result)
                            {
                                return {
                                    success: true,
                                    data : 1,
                                    message : "data are deleted"
                                }
                            }
                        })
                         .catch((error) => {
                            return error;
                        });

    }
    list(options = null)
    {

    }


};
const agenda_resolver = new AgendaResolver();

module.exports = agenda_resolver;