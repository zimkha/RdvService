
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} =   require('graphql');

const Agenda = require('../Models/Agenda.model')
const Rdv    = require('../Models/Rdv.model');



const AgendaType = new GraphQLObjectType({
  
});

const RdvType = new GraphQLObjectType({
    name : 'Rdv',
    fields : ( ) => ({
        id     : { type: GraphQLID },
        status   :  { type: GraphQLBoolean },
        day  : [
            {
                day_date : { type: GraphQLString },
                creno : [{
                    fromHour :  { type: GraphQLString },
                    toHour   :  { type: GraphQLString }, 
                    status   :  { type: GraphQLBoolean },
                }]
            }
        ],
        doctor : [
            {
                firstname  :  { type: GraphQLString },
                lastname   :  { type: GraphQLString },
                phone      :  { type: GraphQLString },
                email      :  { type: GraphQLString },
                location   :  { type: GraphQLString }
            }
        ],
        patient : [
            {
                firstname  :  { type: GraphQLString },
                lastname   :  { type: GraphQLString },
                phone      :  { type: GraphQLString },
                email      :  { type: GraphQLString },
                location   :  { type: GraphQLString },
                birthday   :  { type: GraphQLString },
                sexe       :  { type: GraphQLBoolean }
            }
        ]
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields : {
        Agenda : {
            type: AgendaType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Agenda.findById(args.id);
        },
        Agendas : {
            type: new GraphQLList(AgendaType),
            resolve(parent, args){
                return Agenda.find({});
            }
        }
    }
   }
});



module.exports = new GraphQLSchema({
    query: RootQuery
});

