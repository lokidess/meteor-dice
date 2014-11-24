UI.registerHelper('isOwner', function(user_from) {
    return (Meteor.userId() === user_from);
});
Template.application.events({
    'click .message-box-head a': function() {
        $('.message-box').animate({'right': '-=300'}, 500, function(){
            $(this).hide();
        });
    },
    'click .send-message': function (e) {
        var data = {};
        var box = $(e.currentTarget).parent('.message-box');
        data.text = $('textarea', box).val();
        data.from = Meteor.userId();
        data.to = $('#user_to_id', box).val();
        data.dialog_id = $('#dialog_id', box).val();
        console.log(data);
        $.post('/add/message/', data, function (data) {
            $('textarea', box).val('');
        });
    }
});
