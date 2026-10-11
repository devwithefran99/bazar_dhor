require("dotenv").config();

const { MongoClient } = require("mongodb");

async function testDB() {
  const uri = process.env.MONGODB_URL;

  if (!uri) {
    console.log("❌ MONGODB_URL পাওয়া যায়নি");
    return;
  }

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  try {
    console.log("⏳ Connecting to MongoDB...");

    await client.connect();

    console.log("✅ MongoDB connected!");

    const db = client.db("bazar-dhor");
    await db.command({ ping: 1 });

    console.log("✅ Database ping successful!");
  } catch (error) {
    console.error("❌ Connection failed:");
    console.error(error);
  } finally {
    await client.close();
  }
}

testDB();