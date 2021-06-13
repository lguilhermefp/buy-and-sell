import Hapi from '@hapi/hapi';
import * as admin from 'firebase-admin';
import routes from './routes';
import { db } from './database';

admin.initializeApp();

let server;

const start = async () => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost'
    })
    
    routes.forEach(route => server.route(route));
    console.log(db);
    db.connect();
    
    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})

process.on('SIGINT', async () => {
    console.log('Stopping server');
    await server.stop({ timeout: 10000 });
    db.end();
    console.log('Server stopped');
    proccess.exit(0);
})

start();