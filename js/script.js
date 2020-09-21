
let bots = [
    {
        botId: 1,
        botName: "John LaMeteo",
        botAvatar: "",
        botFeatures: ["weather", "time"],
        messages: [
            {
                time: new Date().setHours(12, 15),
                content: "heure",
                messageClass: "message__container--right"
            },
            {
                time: new Date().setHours(12, 15),
                content: "Il est 12 h 15 :)",
                messageClass: "message__container--left"
            },
            {
                time: new Date().setHours(12, 17),
                content: "meteo",
                messageClass: "message__container--right"
            },
            {
                time: new Date().setHours(12, 17),
                content: "Il fait soleil et 24 degrés",
                messageClass: "message__container--left"
            }
        ]
    },
    {
        botId: 1,
        botName: "Sarah Croche",
        botAvatar: "",
        botFeatures: ["roll", "time"],
        messages: [
            {
                time: new Date().setHours(12, 19),
                content: "heure",
                messageClass: "message__container--right"
            },
            {
                time: new Date().setHours(12, 19),
                content: "Il est 12 h 19 :)",
                messageClass: "message__container--left"
            },
            {
                time: new Date().setHours(12, 40),
                content: "roll",
                messageClass: "message__container--right"
            },
            {
                time: new Date().setHours(12, 40),
                content: "Le dé est tombé sur la case 6 !",
                messageClass: "message__container--left"
            }
        ]
    }

];

function contactClick() { }

function generateMessage(message) { }

function inputListener() { }

function botHandler() { }

