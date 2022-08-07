import Database from "./database";
import environment from "./config/environment";
import dbConfig from "./config/database";

// IIFE : immediately invoked function express
(async () => {
    try {
        const db = new Database(environment.nodeEnv, dbConfig);
        await db.connect();
    } catch (err) {
        console.log('error while connecting to db', err.stack)
    }
})();
