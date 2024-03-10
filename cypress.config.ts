import {defineConfig} from "cypress";
import mysql from "mysql";

export default defineConfig({
    'env':{
        'db': {
            server: "127.0.0.1",
            user: 'root',
            password: 'pirgar704',
            database: 'rh'
        }
    },
    e2e: {
        testIsolation: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on('task', {
                queryDb: (query) => {
                    return queryOnDatabase(query, config)
                }
            })

        },
    },
});


function queryOnDatabase(query: any, config: any) {
  const connection = mysql.createConnection(config.env.db)
    connection.connect()
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) reject(error)
            else {
                connection.end()
                console.log(results)
                return resolve(results)
            }
        })
    })
}

