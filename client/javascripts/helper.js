Template.registerHelper('getImg', function(picture){
	if (Images.findOne(picture)){
		return Images.findOne(picture).url();
	}
})