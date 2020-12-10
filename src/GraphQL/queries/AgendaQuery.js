const GraphQL = require('graphql');
const {
	GraphQLList,
	GraphQLID,
    GraphQLString,
	GraphQLNonNull,
} = GraphQL;
const AgendaType = require('../types/AgendaType')


module.exports = {
     agandas () {
            return {
                type : new GraphQLList(AgendaType),
                description : 'list of agenda for one doctor' ,
                args : {
                    
                }
            }
     },
     aganda () {

     }
};