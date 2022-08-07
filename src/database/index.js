import { Sequelize } from "sequelize";
import { registerModels } from "../models";

export default class Database {
    constructor(environment, dbConfig) {
        this.environment = environment;
        this.dbConfig = dbConfig;
        this.isTestEnv = this.environment === 'test';
    }

    //
    getConnectionString() {
        const { username, password, host, port, database } = this.dbConfig[this.environment];
        return `postgres://${username}:${password}@${host}:${port}/${database}`;
    }

    async syncDB() {
        await this.connection.sync({
            force: this.isTestEnv ? true : false,
            logging: false
        });
    }

    async disconnectDB() {
        await this.connection.close();
    }

    async connectToDB() {
        const connectionURI = this.getConnectionString()
        // new sequelize instance, costructed from 'uri' option
        this.connection = new Sequelize(connectionURI, { logging: this.isTestEnv ? false : console.log });
        // attempt a connection
        await this.connection.authenticate({ logging: false });
        // log a success message if not in test mode
        if (!this.isTestEnv) {
            console.log('Connection to DB successful');
        };

        // register models
        registerModels(this.connection)

        // sync models
        await syncDB();
    }
}
