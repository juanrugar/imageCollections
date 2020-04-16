Images = new Mongo.Collection("images");

console.log(Images.find().count());

if (Meteor.isClient) {
   /*with Mongo collection we don't need to specify data here
   var img_data = [
      {
         img_src:"laptops.jpg",
         img_alt:"some laptops on a table" 
      }, 
      {
         img_src:"bass.jpg",
         img_alt:"a bass player" 
      }, 
      {
         img_src:"beard.jpg",
         img_alt:"some musicians with beards" 
      }, 
   ];*/

   //Template.images.helpers({images:img_data});
   //We change data origin from the former array to Mongo collecction
   //using .find() method to retrieve the objects in the collection
   Template.images.helpers({images:Images.find()});

   Template.images.events({
    'click .js-image':function(event){
        $(event.target).css("width", "50px");
    },
    
    'click .js-del-image':function(event){
       var image_id = this._id;
       console.log(image_id);
       //to imporve UX add a jQuery statement for hiding image before delinting it
       $("#"+image_id).hide('slow', function(){
         //HERE we add the event for the deletion
         Images.remove({"_id":image_id});
       })
      
    }
   });

}

/* No need of these message anymore
if (Meteor.isServer) {
   console.log("I am the server");
}


console.log("where am I running");

*/