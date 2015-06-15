Router.configure({
	// routeControllerNameConverter: "camelCase"
})

Router.route('/', function () {      // Route is the path after the url
  this.render('items');               // 'home' refers to the home template
}, {
	name: 'home',
	data: function(){
		return {
  items: Items.find().fetch().reverse()                      // name is an arbitrary value. Useful for helpers
}
}                      // name is an arbitrary value. Useful for helpers
});


Router.route('/:_id/item-details', function(){
	this.render('itemDetails');
},
{
	name: 'itemDetails',
	data:function(){
		var _id = this.params._id;
		return{
			itemDetails: Items.findOne(_id)	
		} 
	}
});