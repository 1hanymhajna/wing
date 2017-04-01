/**
 * Created by hanymhajna on 01/04/2017.
 */
var socket = io();

socket.on("connect", function () {
    console.log("Connected to socket.io server!");
});

socket.on("message", function (message) {
    var momentTimestamp = moment.utc(message.timestamp);
    console.log("new message ");
    console.log(message.text);
    jQuery('.messages').append('<p><strong>' + momentTimestamp.local().format('DD/MM/YYYY HH:mm:ss ') +'</strong>' + message.text + '</p>');
});

// Handle submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
    event.preventDefault();

    var messageInput = $form.find('input[name=message]');
    socket.emit('message', {
        text: messageInput.val()
    });


    messageInput.val("");

});