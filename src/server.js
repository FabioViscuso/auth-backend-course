import "./config"
import Database from "./database"
import env from "./config/env"
import dbConfig from "./config/dbconfig";

(async () => {
    try {
        const db = new Database(env, dbConfig);
        await db.connectToDB();
    } catch (err) {
        console.log('error while connecting to db', err.stack)
    }
})();
