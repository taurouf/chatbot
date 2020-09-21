
let bots = [
    {
        "botId": 1,
        "botName": "John LaMeteo",
        "botAvatar": "https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png",
        "botFeatures": ["weather", "time"],
        "messages": [
            {
                "time": new Date().setHours(12, 15),
                "content": "heure",
                "messageClass": "message__container--right"
            },
            {
                "time": new Date().setHours(12, 15),
                "content": "Il est 12 h 15 :)",
                "messageClass": "message__container--left"
            },
            {
                "time": new Date().setHours(12, 17),
                "content": "meteo",
                "messageClass": "message__container--right"
            },
            {
                "time": new Date().setHours(12, 17),
                "content": "Il fait soleil et 24 degrés",
                "messageClass": "message__container--left"
            }
        ]
    },
    {
        "botId": 2,
        "botName": "Sarah Croche",
        "botAvatar": "https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png",
        "botFeatures": ["roll", "time"],
        "messages": [
            {
                "time": new Date().setHours(12, 19),
                "content": "heure",
                "messageClass": "message__container--right"
            },
            {
                "time": new Date().setHours(12, 19),
                "content": "Il est 12 h 19 :)",
                "messageClass": "message__container--left"
            },
            {
                "time": new Date().setHours(12, 40),
                "content": "roll",
                "messageClass": "message__container--right"
            },
            {
                "time": new Date().setHours(12, 40),
                "content": "Le dé est tombé sur la case 6 !",
                "messageClass": "message__container--left"
            }
        ]
    },
    {
        "botId": 3,
        "botName": "Sarah Croche",
        "botAvatar": "https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png",
        "botFeatures": ["roll", "time"],
        "messages": [
            {
                "time": new Date().setHours(12, 19),
                "content": "heure",
                "messageClass": "message__container--right"
            },
            {
                "time": new Date().setHours(12, 19),
                "content": "Il est 12 h 19 :)",
                "messageClass": "message__container--left"
            },
            {
                "time": new Date().setHours(12, 40),
                "content": "roll",
                "messageClass": "message__container--right"
            },
            {
                "time": new Date().setHours(12, 40),
                "content": "Le dé est tombé sur la case 6 !",
                "messageClass": "message__container--left"
            }
        ]
    },
    

];

// Builds contact and inserts them in the list,
// and add click listener to contacts  
window.onload = function () {

    let contactsList = document.getElementsByClassName("contacts__discussion__list")[0];
    bots.forEach(function (bot) {
        let newChild = document.createElement("div");
        newChild.className = "contact__discussion";
        newChild.id = "bot" + bot.botId;
        
        let contactAvatar = document.createElement("img");
        contactAvatar.src = bot.botAvatar;
        
        let contactName = document.createElement("span");
        contactName.innerText = bot.botName;
        
        let messagesCounter = document.createElement("span");
        messagesCounter.className = "discussion__message-counter";
        messagesCounter.innerText = bot.messages.length;

        newChild.append(contactAvatar, contactName, messagesCounter);
        newChild.addEventListener('click', function () {
            contactClickHandler(newChild.id);
        });

        contactsList.appendChild(newChild);
    });
}

function contactClickHandler(contactId) {
    console.log(contactId)
}

function generateMessage(message) { }

function inputListener() { }

function botHandler() { }



