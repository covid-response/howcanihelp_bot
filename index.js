const config = require('config');
const express = require('express');
const _ = require('underscore');
var TelegramBotClient = require('telegram-bot-client');
const bodyParser = require('body-parser');

var client = new TelegramBotClient(NODE_BOT_TOKEN);


const app = express();
app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

client.setWebhook(config.webhook);

app.post('/webhook/callback', function(req, res) {
    res.sendStatus(200);
    if(req.body.message.new_chat_members)
    {
        _.each(req.body.message.new_chat_members,function(chatMember){
            if(chatMember.id!=config.botId)
            {
                let newChatPartipantUsername = chatMember.username;
                let MESSAGE = "@"+newChatPartipantUsername+", Welcome to Entreprenerus vs Covid-19 group. Please let us know which city you are currently located in and how you can help us? Use the #howcanIhelp with your answer";
                client.sendMessage(req.body.message.chat.id, MESSAGE)
            }
        });
    }
  });


const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Server running on port ${port}`));
