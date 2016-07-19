    module.exports = function(robot) {

        robot.hear(/\bboo\b/i, function(res) {
            return res.send('https://media.giphy.com/media/133DKEhjAa8aUE/giphy.gif');
        });
        
        robot.respond(/\bboo\b (.*)/i, function(res) {
            var booed = res.match[1];
            var members = res.message.room.members;
            if (members.indexOf(booed) > -1) {
                return res.send(booed + ' https://media.giphy.com/media/133DKEhjAa8aUE/giphy.gif');
            } else {
            	return res.reply('But that person\'s not in the room...');
            }
        });

        robot.respond(/(.*) is actually pretty cool/i, function(res) {
            var cool = res.match[1];
            if (cool.indexOf('@') === 0) {
                return res.send(cool + ' Who\'s cool? You\'re cool. http://67.media.tumblr.com/f9806e179a6c1374185061c7b1967345/tumblr_inline_mlj8meVRpn1qz4rgp.gif');
            } else {
                return res.send('@channel Attention: ' + cool + ' is the coolest. https://media.giphy.com/media/26FxCOdhlvEQXbeH6/giphy.gif')
            }
        })
    }
