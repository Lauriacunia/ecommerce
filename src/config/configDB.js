import 'dotenv/config'

/**Nota: Crear la database antes desde la terminal o workbench */

export const options = {
    mysql: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: process.env.DB_PASSWORD,
            database: 'ecommerce'
        },
        pool: { min: 0, max: 10 }
   },
   sqlite: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/ecommerce.sqlite',
        },
        useNullAsDefault: true,
    }
};
