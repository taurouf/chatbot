let bots = [
  {
    botId: 1,
    botName: "John LaMeteo",
    botAvatar: "./images/avatar.png",
    botFeatures: ["weather", "time"],
    messages: [
      {
        time: new Date(new Date().setHours(9, 05)),
        content: "time",
        messageClass: "message__container--right",
      },
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "Il est 12 h 15 :)",
        messageClass: "message__container--left",
      },
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "weather",
        messageClass: "message__container--right",
      },
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "Il fait soleil et 24 degrés",
        messageClass: "message__container--left",
      },
    ],
  },
  {
    botId: 2,
    botName: "Sarah Croche",
    botAvatar: "./images/avatar.png",
    botFeatures: ["roll", "time"],
    messages: [
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "time",
        messageClass: "message__container--right",
      },
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "Il est 12 h 19 :)",
        messageClass: "message__container--left",
      },
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "roll",
        messageClass: "message__container--right",
      },
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "Le dé est tombé sur la case 6 !",
        messageClass: "message__container--left",
      },
    ],
  },
  {
    botId: 3,
    botName: "Sarah Pelle",
    botAvatar: "./images/avatar.png",
    botFeatures: ["roll", "time", "weather"],
    messages: [
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "time",
        messageClass: "message__container--right",
      },
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "Il est 12 h 19 :)",
        messageClass: "message__container--left",
      },
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "roll",
        messageClass: "message__container--right",
      },
      {
        time: new Date(new Date().setHours(12, 15)),
        content: "Le dé est tombé sur la case 6 !",
        messageClass: "message__container--left",
      },
    ],
  },
];

window.onload = function () {
  main();
};

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
    newChild.addEventListener("click", function () {
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
  document.querySelector(".input__container").style.display = "block";
  document.querySelector("#" + contactId).classList.add("selected");
  document.querySelector(".discussion-feed__header h1").innerText = bot.botName;

  Array.from(discussionFeedInner.children).forEach((child) => {
    if (!child.classList.contains("input__container")) child.remove();
  });

  bot.messages.forEach((message) => {
    generateMessage(message);
  });

  scrollBottom();
}

function generateMessage(message) {
  let currentDiscussion = document.querySelector(".selected");
  let discussionFeedInner = document.querySelector(".discussion-feed__inner");
  let newMessage = document.createElement("div");
  let messageWrapper = document.createElement("div");
  let messageContent = document.createElement("p");
  let messageTime = document.createElement("span");
  let bot = bots.filter((bot) => {
    return bot.botId == currentDiscussion.id.split("t")[1];
  })[0];

  messageWrapper.className = "message__wrapper";
  newMessage.className = "message__container";
  messageContent.className = "message__content";
  messageContent.innerText = message.content;
  messageTime.innerText =
    hours_with_leading_zeros(message.time)+ ":"
    + minutes_with_leading_zeros(message.time);

  messageWrapper.appendChild(messageContent);

  if (message.messageClass === "message__container--left") {
    let avatar = document.createElement("img");
    avatar.src = bot.botAvatar;
    avatar.className = "message__avatar";
    newMessage.appendChild(avatar);
    messageWrapper.classList.add("message__wrapper--left");
  } else {
    newMessage.appendChild(messageTime);
    messageWrapper.classList.add("message__wrapper--right");
  }

  newMessage.appendChild(messageWrapper);
  if(message.messageClass === "message__container--left"){
    newMessage.appendChild(messageTime);
  }
  newMessage.classList.add(message.messageClass);
  discussionFeedInner.appendChild(newMessage);


  if (!bot.messages.includes(message)) {
    bot.messages.push(message);
  }
  currentDiscussion.querySelector(".discussion__message-counter").innerText =
    bot.messages.length;
}

function inputListener() {
  let input = document.querySelector(".discussion-feed__input");
  let sendButton = document.querySelector(".send-button");

  input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (input.value.length != 0)
        generateMessage({
          time: new Date(),
          content: input.value,
          messageClass: "message__container--right",
        });
      botHandler({
        time: new Date(),
        content: input.value,
        messageClass: "message__container--right",
      });
      input.value = "";
      scrollBottom();
    }
  });

  sendButton.addEventListener("click", function (event) {
    if (input.value.length != 0) {
      generateMessage({
        time: new Date(),
        content: input.value,
        messageClass: "message__container--right",
      });
      botHandler({
        time: new Date(),
        content: input.value,
        messageClass: "message__container--right",
      });
      input.value = "";
      scrollBottom();
    }
  });
}

function botHandler(message) {
  let bot = bots.filter(bot => {
    return bot.botId == document.querySelector(".selected").id.split("t")[1];
  })[0];
  let currentDate = new Date();
  let botMessage = { "time": currentDate, "content": "", "messageClass": "message__container--left" };

  if (bot.botFeatures.includes(message.content)) {
    switch (message.content) {
      case 'time':
        botMessage.content = "Il est actuellement " + currentDate.getHours() + "h " + currentDate.getMinutes();
        break;
      case 'weather': botMessage.content = "Il fait actuellement très beau et 25 degrés";
        break;
      case 'roll': botMessage.content = "Le dé est tombé sur : " + Math.floor(Math.random() * (7 - 1) + 1);
        break;
    }
  } else {
    botMessage.content = "Fonctionnalité non prise en charge \n Celles disponibles sont : " + bot.botFeatures.join(",")

  }
  generateMessage(botMessage);
}

function scrollBottom() {
  let discussionFeedInner = document.querySelector(".discussion-feed__inner");
  discussionFeedInner.scrollTop =
    discussionFeedInner.scrollHeight - discussionFeedInner.clientHeight;
}

function minutes_with_leading_zeros(date) 
{ 
  return (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}

function hours_with_leading_zeros(date) 
{ 
  return (date.getHours() < 10 ? '0' : '') + date.getHours();
}