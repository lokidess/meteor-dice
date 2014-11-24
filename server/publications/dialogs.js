Meteor.publish('dialogs', function(userId) {
    var or_fields = [
        {user_from: userId},
        {user_to: userId}
    ];
    if(this.userId){
        return DialogCollection.find({$or: or_fields});
    }
    return {}
});