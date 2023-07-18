import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';

export const car= new Mongo.Collection('car')
export const carSchema=new SimpleSchema({
carModel:{type:String},
carNumber:{type:Number},
carType:{type:String},
address:{type:String},
plan:{type:String},
isActive:{type:String},
createdAt:{type:String}
})

car.attachSchema(carSchema)

Meteor.methods({
    "cars.insert":function(carData){
        return car.insert(carData)
    },
    "cars.find":function(){
        return car.find().fetch()
    },
    "cars.findOne":function(documentId){
        return car.findOne(documentId)
    },
    "cars.update":function(documentId,updateData){
       return car.update({_id:documentId},{$set:updateData})
    },
    "cars.delete":function(documentId){
        return car.remove(documentId)
    }
})