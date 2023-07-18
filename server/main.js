import { Meteor } from 'meteor/meteor';
//import { LinksCollection } from '/imports/api/links';
import {userSchema} from '../imports/api/users/userMethds';
import { car, carSchema } from '../imports/api/users/carMethod';
import Cars from '../imports/ui/Components/car';
import User from '../imports/ui/Components/user';

// async function insertLink({ title, url }) {
//   await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
// }

Meteor.startup(async () => {
  if(Meteor.isClient){
    render(<User/>, document.getElementById('root'));
  }

  Meteor.publish('users',function(){
    return Meteor.users.find();
  })
  Meteor.publish("cars", function () {
    return car.find();
  });
});
