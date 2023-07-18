
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';

export  const userSchema=new SimpleSchema({
  username:{type:String},
  email:{type:String},
  mobile:{type:Object,optional:true},
  'mobile.mobileNo':{type:Number,optional:true},
  'mobile.countryCode':{type:Number,optional:true},
  address:{type:Object,optional:true},
  'address.street':{type:String,optional:true},
  'address.area':{type:String,optional:true},
  'address.city':{type:String,optional:true},
  'address.state':{type:String,optional:true},
  isAdmin:{type:String,optional:true},
  password:{type:String},
  createdAt:{type:String}
})

Meteor.users.attachSchema(userSchema,{replace:true})

Meteor.methods({
 
    "userDocuments.insert":function(usercredentials){
      return Meteor.users.insert(usercredentials)

    },
    'userDocuments.find':function(){
      return Meteor.users.find().fetch();

    },

    'userDocuments.delete':function(documentId){
      return Meteor.users.remove({_id:documentId})
    },
    'userDocuments.findOne':function(documentId){
      return Meteor.users.findOne(documentId)
    },

    'userDocuments.update':function(documentId,userData){
      return Meteor.users.update({ _id: documentId }, { $set: userData });
    },
        
      });
    
      