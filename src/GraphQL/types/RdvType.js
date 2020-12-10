const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
    GraphQLBoolean,
	GraphQLID,
} = GraphQL;


exports.RdvType = new GraphQLObjectType({
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



