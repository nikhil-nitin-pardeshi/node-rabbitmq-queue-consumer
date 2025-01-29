const { sendMessage } = require("./services/producer");
require("./services/consumer");
setInterval(() => {
  sendMessage("Hello, this is a periodic message!");
}, 5000);
