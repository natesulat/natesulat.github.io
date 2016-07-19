    module.exports = function(robot) {

    	/* Tighten up this Regex - can't be included in a word, 
    	 * but have to accommodate it coming at beginning or end of string
    	 */
        robot.hear(/\bboo\b/i, function(res) {
            return res.send('https://media.giphy.com/media/133DKEhjAa8aUE/giphy.gif');
        });

        //check out listener middleware, and then learn how to make it respond to just one user
        //use cases to consider: user asks the bot something while it's in this loop
        // OR
        //user takes too long to respond
        // OR
        //user's a dick and keeps trying to break the bot (might be good to use brain here)
        robot.respond(/\bboo\b (.*)/i, function(res) {
            var booed = res.match[1];
            var members = res.message.room.members;
            if (members.indexOf(booed) > -1) {
                return res.send(booed + ' https://media.giphy.com/media/133DKEhjAa8aUE/giphy.gif');
            } else {
            	return res.reply('But that person\'s not in the room...');
            }
        });

        //create an "actually pretty cool" exception
        // find a gif!
    }
