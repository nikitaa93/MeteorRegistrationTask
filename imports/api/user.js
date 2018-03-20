import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';

export const Users = new Meteor.Collection('user_db1');

export const UserSchema = new SimpleSchema({

    name     :  {
        type     : String,
        unique   : true,
        required : true
    },
    email    : {
        type : String,
        unique   : true,
        required : true
    },
    password : {
        type     : String,  
        required : true,
    } 
});



Users.attachSchema(UserSchema);






