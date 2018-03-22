import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';
import { User } from './regisDetails.js';
import { Users } from '../api/user.js';
if (Meteor.isServer) {
    describe('Users', () => {
        describe('methods', () => {
            before(() => {
                Users.remove({});
                console.log('Users in db : '+Users.find().count());
            });
            it('can add user tc1', () => {
                const name = 'nikita',
                    email= 'nikita@gmail.com',
                    pass= 'nikita';
                // const addUser = Meteor.server.method_handlers['user_db1.insert1'];
                // addUser.apply({name, email, pass});

                Meteor.call('user_db1.insert1', name, email, pass);
                assert.equal(Users.find().count(), 1);
                console.log('Users in db : '+Users.find().count());
            });
            it('can add user tc2', () => {
                const name = 'nikita',
                    email= 'nikita@gmail.com',
                    pass= 'nikita';
                // const addUser = Meteor.server.method_handlers['user_db1.insert1'];
                // user_db1.insert1.apply({name, email, pass});

                Meteor.call('user_db1.insert1', name, email, pass); 
                assert.equal(Users.find().count(), 1);
                console.log('Users in db : '+Users.find().count());
            });
            it('can add user tc3', () => {
                const name = '',
                    email= 'nikita@gmail.com',
                    pass= 'nikita';
                // const addUser = Meteor.server.method_handlers['user_db1.insert1'];
                // addUser.apply({name, email, pass});

                Meteor.call('user_db1.insert1', name, email, pass);
                assert.equal(Users.find().count(), 1);
                console.log('Users in db : '+Users.find().count());
            });
            it('can add user tc4', () => {
                const name = 'nikita45',
                    email= 'nikita54@gmail.com',
                    pass= 'nikitaghf';
                // const addUser = Meteor.server.method_handlers['user_db1.insert1'];
                // addUser.apply({name, email, pass});

                Meteor.call('user_db1.insert1', name, email, pass);
                assert.equal(Users.find().count(), 2);
                console.log('Users in db : '+Users.find().count());
            });
            it('can add user tc5', () => {
                const name = 'harshwardhan12',
                    email= '',
                    pass= '';
                // const addUser = Meteor.server.method_handlers['user_db1.insert1'];
                // addUser.apply({name, email, pass});

                Meteor.call('user_db1.insert1', name, email, pass);
                assert.equal(Users.find().count(), 2)
            });
        });
        describe('login', () => {
            it('login tc1', () => {
                const email= 'nikita@gmail.com',
                    pass= 'nikita';
                // addUser.apply({name, email, pass});
            
                Meteor.call('user_db1.find1', email, pass);
            });
            it('login with wrong password tc2', () => {
                
                const email= 'nikita@gmail.com',
                    pass= 'abcryghjfryghjtry';
                // addUser.apply({name, email, pass});
                console.log( '%%',email,'%%',pass)
                Meteor.call('user_db1.find1', email, pass);
            });
            it('login with wrong email tc3', () => {
                const email= 'harshwardhan08@gmail.com',
                    pass= 'harshpass';
                    console.log( '%%',email,'%%',pass)
            // addUser.apply({name, email, pass});
            
                Meteor.call('user_db1.find1', email, pass);
            });
        });
            
    });
}
