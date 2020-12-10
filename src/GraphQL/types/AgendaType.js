const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
    GraphQLBoolean,
	GraphQLID,
	GraphQLInt,
    GraphQLList,
} = GraphQL;


 exports.AgendaType = new GraphQLObjectType({
    name : "Agenda",
    fields: ( ) => ({
        id: { type: GraphQLID },
        day: { type: GraphQLString },
        creno : [
            {
                fromHour :  { type: GraphQLString, description: 'hour to begain' },
                toHour   :  { type: GraphQLString , description: 'hour to End' },
                status   :  { type: GraphQLBoolean, description: 'Status of this creno, default status 0' },
    
            }
        ],
        unvailable : [
            {
                fromHour :  { type: GraphQLString },
                toHour   :  { type: GraphQLString }, 
            }
        ],
        doctor : [
            {
                firstname  :  { type: GraphQLString },
                lastname   :  { type: GraphQLString },
                phone      :  { type: GraphQLString },
                email      :  { type: GraphQLString },
                location   :  { type: GraphQLString },
                speciality :  { type : GraphQLList(GraphQLString)}
            }
        ],
        createdAt: {
			type: GraphQLString,
			description: 'Generate system to allow user to have secure resource access',
		},
		updatedAt: {
			type: GraphQLString,
			description: 'Date and time when this users account was last updated',
		}
    })
});



module.exports = AgendaType;