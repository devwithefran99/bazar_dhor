import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const globalForMongo = globalThis as unknown as { _mongoClient?: MongoClient };

const client =
  globalForMongo._mongoClient ?? new MongoClient(process.env.MONGODB_URL!);

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}

const db = client.db("bazar-dhor");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }, 
    },
  database: mongodbAdapter(db), // client pass korbo na
});