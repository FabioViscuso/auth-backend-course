import Database from "../src/database";
import dbConfig from "../src/config/database"

let db;

class TestsHelpers {
    static async startDb() {
        db = new Database('test', dbConfig);
        await db.connect();
        return db;
    }

    static async stopDb() {
        db.disconnect();
    }

    static async syncDb() {
        await db.sync();
    }
}

export default TestsHelpers;
