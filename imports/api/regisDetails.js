import { Meteor } from 'meteor/meteor';
Future = Npm.require('fibers/future');
import { Users } from '../api/user.js';
import bcrypt from 'bcrypt';

if (Meteor.isServer) {
// This code only runs on the server
    Meteor.publish('Users', function tasksPublication() {
        return Users.find();
    });
}

Meteor.methods({
  
    'user_db1.insert1'(name,email,password) {
        const myFuture =  new Future();
        const saltRounds = 10;
        //console.log(name, '((' ,email, '((', password, 'in metetor method ');
        bcrypt.hash(password, saltRounds)
            .then(function(hash) {
            //console.log(hash , '---29----in metetor method ');
                Users.insert({
                    name, 
                    email,
                    password : hash
                });
                myFuture.return(true);
            }).catch(function(error){
                //console.log('%%5',error);
                //console.log(SimpleSchema.message)
                myFuture.throw(error);  
            });
            
        return myFuture.wait();
    },
  
    'user_db1.find1'(email,password){
        const myFuture =  new Future();
        //console.log(email);
        let x = Users.findOne({
            email: email
        });
        let hash = x.password;
        let setflag = 0;
        //console.log('hash' ,hash);
        //console.log('pass :',password)
        //console.log('bcrypt',bcrypt.compare(password, hash))
        bcrypt.compare(password, hash)
            .then(function (res) {
                setflag = 1;
                //console.log('res',res)
                myFuture.return(res);
            }).catch(function(error){
                //console.log('error',error);
                myFuture.return(error);
            });
            
        return myFuture.wait();
    
    },
 
    
});