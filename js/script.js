
let bots = [
  {
    "botId": 1,
    "botName": "John LaMeteo",
    "botAvatar": "./images/avatar.png",
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
    "botAvatar": "./images/avatar.png",
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
    "botAvatar": "./images/avatar.png",
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

window.onload = function () {
  main();
}

function main() {

  let contactsList = document.querySelector(".contacts__discussion__list");
  var i=0;
  bots.forEach(function (bot) {
    let newChild = document.createElement("div");
    newChild.className = "contact__discussion";
    newChild.id = "bot" + bot.botId;
    if(i==0)
      newChild.classList.add("selected")
      i++
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

  inputListener();
}

function contactClickHandler(contactId) {
    if (document.querySelector(".selected") != null) {
    document.querySelector(".selected").classList.remove("selected");
  }

  document.querySelector("#" + contactId).classList.add("selected");
  document.querySelector(".discussion-feed__inner h2").remove();

  let bot = bots.filter((bot) => {
    return bot.botId == contactId.split("t")[1];
  })[0];

  document.querySelector(".discussion-feed__header h1").innerText = bot.botName;

  bot.messages.forEach((message) => {
    generateMessage(message);
  })
 }

function generateMessage(message) { }

function inputListener() {

  let input = document.querySelector(".discussion-feed__input");
  let discussionFeedInner = document.querySelector(".discussion-feed__inner");
  
  input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      botHandler({ "time": new Date, "content": input.value, "messageClass": "message__container message__container--right" });
      if (input.value != "")
        generateMessage({ "time": new Date, "content": input.value, "messageClass": "message__container message__container--right" });
        input.value = "";
        scrollBottom();
      }
  });

  let sendButton = document.querySelector(".send-button");

  sendButton.addEventListener("click", function (event) {
    if (input.value != "")
      generateMessage({ "time": new Date, "content": input.value, "messageClass": "message__container message__container--right" })
      input.value = "";
      scrollBottom();
    });

    function scrollBottom(){
      discussionFeedInner.scrollTop = 
      discussionFeedInner.scrollHeight-discussionFeedInner.clientHeight;
    }
}




function botHandler(message) { }



