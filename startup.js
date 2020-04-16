// we first look if the server is running
if (Meteor.isServer) {
	
	Meteor.startup(function(){
		
		if (Images.find().count() == 0) {
			// if collection is empty, insert these objects
			//instead of inserting every single object, we iterate them with a loop
			for (var i =1; i<23; i++) {
				Images.insert(
					{
					img_src:"img_"+i+".jpg", 
					img_alt:"Image"+i
					}
				);
			} //end of inserting loop
			console.log("startup.js says:"+Images.find().count());
		} 
		// end of id have no images
	
	});

}


