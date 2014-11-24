messageSchema = new SimpleSchema({
    user_from: {
        type: String
    },
    user_to: {
        type: String
    },
    message: {
        type: String
    }
});

dialogSchema = new SimpleSchema({
    messages: {
        type: [messageSchema],
        optional: true
    },
    user_from: {
        type: String
    },
    user_to: {
        type: String
    }
});

Dialog = new Mongo.Collection('Dialog');
Message = new Mongo.Collection('Message');

Dialog.attachSchema(dialogSchema);
Message.attachSchema(messageSchema);

this.DialogCollection = Dialog;
this.MessageCollection = Message;
