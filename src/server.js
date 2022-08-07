import Database from "./database/db.js"
import { env } from "./config/env.js";
import { dbConfig } from "./config/dbconfig.js";

(async () => {
    try {
        const db = new Database(env, dbConfig);
        await db.syncDB();
        await db.connectToDB();
    } catch (err) {
        console.log('error while connecting to db', err.stack)
    }
})();
