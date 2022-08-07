import { Sequelize } from "sequelize";
import { registerModels } from "../models/index.js";


class Database {
    constructor(environment, dbConfig) {
        this.environment = environment;
        this.dbConfig = dbConfig;
        this.isTestEnv = this.environment === 'test';
    }

    // construct connection string from from dbConfig
    getConnectionString() {
        const { username, password, host, port, database } = this.dbConfig.development;
        return `postgres://${username}:${password}@${host}:${port}/${database}`;
    }

    async syncDB() {
        await this.sequelize.connection.sync({
            force: this.isTestEnv ? true : false,
            logging: false
        });

        if (!this.isTestEnv) {
            console.log('Models synchronized')
        }
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
    }
}

export default Database;
