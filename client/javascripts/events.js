Template.masterLayout.events({
    'click #send-item': function (e,t) {
        $("#sendItemEmailModal").modal('show');

    }
});

Template.items.events({
    'click #post-item-btn': function (e,t) {
        $("#postItemModal").modal('show');
    }
});