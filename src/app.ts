import express from 'express';
import config from 'config';

import logger from './utils/logger';
import connect from './utils/connect';
import routes from './routes';

const PORT = config.get<number>('port');
const app = express();

app.listen(PORT, async () => {
    logger.info(`Server is running on port http://localhost:${PORT}`);
    await connect();

    routes(app);
});

