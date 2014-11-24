Router.map(function () {
    this.route('addMessage', {
        path: '/add/message/',
        where: 'server',

        action: function () {
            var data = this.request.body;

            var msg = MessageCollection.insert({user_to: data.to, user_from: data.from, message: data.text});

            DialogCollection.update({_id: data.dialog_id}, {$push: {messages: MessageCollection.findOne({_id: msg})}});

            resp = {};
            this.response.writeHead(200, {'Content-Type':
                                    'application/json; charset=utf-8'});
            this.response.end(JSON.stringify(resp));
        }
    });
    this.route('addDialog', {
        path: '/add/dialog/',
        where: 'server',
        action: function () {
            var data = this.request.body;

            var or_field = [
                {user_from: data.from, user_to: data.to},
                {user_from: data.to, user_to: data.from}
            ];

            var dialog = DialogCollection.findOne({$or: or_field});

            if (!dialog) {
                console.log('there no dialog between this users. Create new one');
                dialog = {};
                dialog._id = DialogCollection.insert({user_to: data.to, user_from: data.from});
            }
            resp = {dialog_id: dialog._id};
            this.response.writeHead(200, {'Content-Type':
                                    'application/json; charset=utf-8'});
            this.response.end(JSON.stringify(resp));
        }
    });
});
