module.exports = {
    development: {
        client: 'postgresql',
        connection: 'postgres://postgres:root@localhost:5432/tarea'
    },
    
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl-true'
    }
};

 console.log('loading config...');