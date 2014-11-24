Meteor.publish('users', function(limit) {
    if (!limit) {
       limit = 10;
    }
    return Meteor.users.find({}, { limit: limit});
});