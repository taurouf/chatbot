
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

  bots.forEach(function (bot) {
    let newChild = document.createElement("div");
    let messagesCounter = document.createElement("span");
    let contactAvatar = document.createElement("img");
    let contactName = document.createElement("span");

    contactAvatar.src = bot.botAvatar;
    contactName.innerText = bot.botName;
    messagesCounter.className = "discussion__message-counter";
    messagesCounter.innerText = bot.messages.length;
    newChild.className = "contact__discussion";
    newChild.id = "bot" + bot.botId;
    newChild.append(contactAvatar, contactName, messagesCounter);
    newChild.addEventListener('click', function () {
      contactClickHandler(newChild.id);
    });

    contactsList.appendChild(newChild);
  });

  inputListener();
}

function contactClickHandler(contactId) {
  let bot = bots.filter((bot) => {
    return bot.botId == contactId.split("t")[1];
  })[0];
  let discussionFeedInner = document.querySelector(".discussion-feed__inner");

  if (document.querySelector(".selected") != null) {
    document.querySelector(".selected").classList.remove("selected");
  }
  document.querySelector(".input__container").style.display="block"
  document.querySelector("#" + contactId).classList.add("selected");
  document.querySelector(".discussion-feed__header h1").innerText = bot.botName;

    Array.from(discussionFeedInner.children).forEach(
    child => {
      if(!child.classList.contains("input__container"))
        child.remove()
    }
  );

  bot.messages.forEach((message) => {
    generateMessage(message);
  });

}

function generateMessage(message) { }

function inputListener() {

  let input = document.querySelector(".discussion-feed__input");

  input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (input.value.length != 0)
        generateMessage({ "time": new Date, "content": input.value, "messageClass": "message__container--right" });
        botHandler({ "time": new Date, "content": input.value, "messageClass": "message__container--right" });
        input.value = "";
        scrollBottom();
    }
  });

  let sendButton = document.querySelector(".send-button");

  sendButton.addEventListener("click", function (event) {
    if (input.value.length != 0){
      generateMessage({ "time": new Date, "content": input.value, "messageClass": "message__container--right" })
      botHandler({ "time": new Date, "content": input.value, "messageClass": "message__container--right" });
      input.value = "";
      scrollBottom();
    }
  });
}

function botHandler(message) { }

function scrollBottom() {
  let discussionFeedInner = document.querySelector(".discussion-feed__inner");

  discussionFeedInner.scrollTop =
    discussionFeedInner.scrollHeight - discussionFeedInner.clientHeight;
}

