Items = new Mongo.Collection('items');
Items.attachSchema(new SimpleSchema({
	itemName: {
		type: String,
		label: "Name of item",
		max: 100
	},
	// Defining category and giving it options
	itemCategory: {
		type: String,
		autoform: {
			options: function(){
				return [
				{value: 'accessories', label: 'Accessories'},
				{value: 'bags', label: 'Bags'},
				{value: 'clothes', label: 'Clothes'},
				{value: 'shoes', label: 'Shoes'}
				]
			}
		}
	},
	size: {
		type: String,
		label: "Size",
		max: 200
	},
	details: {
		type: String,
		label: "Details",
		max: 200,
		optional: true
	},
	price: {
		type: Number,
		label: "Price",
		min: 0
	},
	picture: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		}   
	}
})
)