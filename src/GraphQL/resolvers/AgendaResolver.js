const { json } = require('body-parser');
const Agenda = require('../../Models/Rdv.model')
const moment = require('moment')
class AgendaResolver {
    
    constructor(model) {
        this.model = Agenda;
    }
    
    findCrenoExistCrenoByDate(fromH, toHour, day)
    {
        let exist = this.model.find({ 'day' : day, 'fromHour' : fromH, 'toHour' : toHour })
                    .exec().sort('createdAt')
                    then( agendas => {
                        return agendas.toJSON()
                    })
                        .catch( (err) => {
                            return err;
                        })
    }
    create(data)
    {
        let fromTohour =  momennt(data.fromTohour).format('DD-MM-YYYY HH:mm');
        let formOut    =  momennt(data.fromTo).format('DD-MM-YYYY HH:mm');
        let day        =  momennt(data.fromTohour).format('DD-MM-YYYY HH:mm');



        // On cherche dans la base si le docteur a déja une créno
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

    list()
    {
        return this.model.find()
        .sort('createdAt')
        .exec()
            .then(records => {
                return records;
        })
            .catch(error => {
                return error;
            }); 
    }
    listByDoctor (dataDoctor)
    {
         this.model.find({'doctor.firstname' : dataDoctor.firstname, 'doctor.lastname' : dataDoctor.lastname, 'doctor.phone' : dataDoctor.phone }
         )
         .exec().sort('createdAt')
            then( agendas => {
                return agendas.toJSON()
            })
                .catch( (err) => {
                    return err;
                })
    }


};
const agenda_resolver = new AgendaResolver();

module.exports = agenda_resolver;