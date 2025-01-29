const { connectRabbitMQ } = require("../config/rabbitmq");

async function sendMessage(message) {
  try {
    const { channel } = await connectRabbitMQ();
    channel.sendToQueue(process.env.RABBITMQ_QUEUE, Buffer.from(message), { persistent: true });
    console.log(`✅ Sent: ${message}`);
  } catch (error) {
    console.error("❌ Error sending message:", error);
  }
}

module.exports = { sendMessage };
