import { MONGO_URL } from '$env/static/private';
import { MongoClient } from 'mongodb';

const client = new MongoClient(MONGO_URL);

// connect to the database
export async function connect(): Promise<void> {
    await client.connect();
}

// disconnect from the database
export async function disconnect(): Promise<void> {
    await client.close();
}

// get the database
export function getDB(name: string | undefined): any {
    console.log(client)
    return client.db(name);
}