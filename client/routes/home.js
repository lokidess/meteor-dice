Router.route('/', {name: 'home'});
Router.route('/about', {name: 'about'});

HomeController = RouteController.extend({
    action: function () {
        this.layout('application');
        this.render();
    },
    subscriptions: function () {
        this.subscribe('users', 100);
        this.subscribe('dialogs', Meteor.userId());
    },
    data: function () {
        var userId = Meteor.userId();
        var or_fields = [
            {user_from: userId},
            {user_to: userId}
        ];
        return {registered_users: Meteor.users.find().fetch(),
                dialogs: DialogCollection.find({$or: or_fields}),
                user_id: Meteor.userId()
        }
    }
});

AboutController = RouteController.extend({
    action: function () {
        this.render();
    }
});