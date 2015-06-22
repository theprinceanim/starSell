Images.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return userId && doc.owner == userId;
    },
    remove: function (userId, doc) {
        return userId;
    },
    download: function(userId, doc){
        return true;
    }
});