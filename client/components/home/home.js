Template.home.events({
    'click .show-message-dialog': function () {
        var data = {};
        var user_to_id = $(this)[0]._id;
        data.from = Meteor.userId();
        data.to = user_to_id;
        $.post('/add/dialog/', data, function (data) {
            var box = $('input[value="'+data.dialog_id+'"]').parents('.message-box');
            box.show();
            box.animate({'right': '+=300'}, 500);
        });
    }
});