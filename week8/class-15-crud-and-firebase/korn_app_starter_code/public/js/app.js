$(function() {
    var messageAppReference = firebase.database();

    $('#message-form').submit(function(e) {
        e.preventDefault();
        var message = $('#message').val();
        var messagesReference = messageAppReference.ref('messages');

        messagesReference.push({
            message: message,
            votes: 0
        });

        $('#message').val('');
    });

    function getFanMessages() {
        messageAppReference.ref('messages').on('value', function(results) {
            $('.message-board').empty();
            results.forEach(function(msg) {
                var id = msg.key;
                var message = msg.val();
                var votes = message.votes;
                console.log(message);
                var $li = $('<li></li>').text(message.message);

                // create up vote element
                var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>');

                $upVoteElement.on('click', function() {
                    updateMessage(id, ++votes);
                });

                // create down vote element
                var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>');

                $downVoteElement.on('click', function() {
                    updateMessage(id, --votes);
                });

                var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');

                $deleteElement.on('click', function() {
                    deleteMessage(id);
                })

                $li.append($deleteElement);

                // add voting elements to $li
                $li.append($downVoteElement);
                $li.append($upVoteElement);
                $li.append('<div class="pull-right">' + votes + '</div>');

                $('.message-board').append($li);
            })
        })
    }

    function updateMessage(id, votes) {
        // find message whose objectId is equal to the id we're searching with
        var messageReference = messageAppReference.ref('messages/' + id);

        // update votes property
        messageReference.update({
            votes: votes
        });
    }

    function deleteMessage(id) {
    	var messageReference = messageAppReference.ref('messages/' + id);

    	messageReference.remove();
    }

    getFanMessages();
});
