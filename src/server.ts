import dotenv from 'dotenv';
dotenv.config();

import app from "./routes/app";
import localtunnel from 'localtunnel';

console.log('APP_ENV from process.env:', process.env.APP_ENV);

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || 'development';
console.log('Final APP_ENV value:', APP_ENV);

const HOST = APP_ENV === 'development' ? 'localhost' : '0.0.0.0';

app.listen(Number(PORT), HOST, async () => {
    console.log(`Server is running in ${APP_ENV} mode`);
    console.log(`Server listening on ${HOST}:${PORT}`);

    if (APP_ENV !== 'development') {
        console.log('Server is exposed to external connections');
    } else {
        console.log('Server is only accessible locally');

        try {
            const tunnel = await localtunnel({ port: Number(PORT) });
            console.log(`🌐 localtunnel established at: ${tunnel.url}`);
            
            tunnel.on('close', () => {
                console.log('Tunnel closed');
            });
        } catch(err) {
            console.error('Failed to start localtunnel:', err);
        }
    }
});
