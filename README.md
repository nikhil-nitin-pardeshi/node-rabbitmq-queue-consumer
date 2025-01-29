# 🚀 RabbitMQ Queue Consumer in Node.js



This project implements a **Producer-Consumer** model using **RabbitMQ** and **Node.js**. The producer sends messages to a queue, and the consumer continuously listens for and processes messages.

---

## 📂 Project Structure

```
📂 node-rabbitmq-queue-consumer
 ├── 📂 config
 │   ├── rabbitmq.js       # 🔧 RabbitMQ connection setup
 ├── 📂 services
 │   ├── producer.js       # 📤 Sends messages to queue
 │   ├── consumer.js       # 📥 Listens and processes messages
 ├── index.js              # 🚀 Entry point (optional)
 ├── .env                  # 🔑 Environment variables
 ├── package.json          # 📦 Dependencies and scripts
 ├── README.md             # 📖 Documentation
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```
RMQ_HOST=localhost
RMQ_PORT=5672
RMQ_USERNAME=guest
RMQ_PASSWORD=guest
RMQ_VHOST=/
RABBITMQ_QUEUE=ps.sync.automate_user_provisioning
```

### 4️⃣ Start the Consumer (Continuous Listener) 🛠️

```sh
npm run consumer
```

This will start the consumer that continuously listens for messages in the queue.

### 5️⃣ Send Messages Using Producer 📤

```sh
node -e 'require("./services/producer").sendMessage("Hello, RabbitMQ!")'
```

Or run the producer script:

```sh
npm run producer
```

### 6️⃣ Run Everything (Producer + Consumer) 🚀

```sh
npm start
```

This will start both the consumer and a test producer that sends messages every 5 seconds.

---

## 📌 Scripts in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "producer": "node services/producer.js",
  "consumer": "node services/consumer.js"
}
```

---

## 🎯 Features

✅ **Modular & Maintainable** – Clean separation of concerns.
✅ **Persistent Consumer** – Listens for messages continuously.
✅ **RabbitMQ Connection Handling** – Auto-reconnect & error handling.
✅ **Environment Variables Support** – Configurable via `.env`.

---