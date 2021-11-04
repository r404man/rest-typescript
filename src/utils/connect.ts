import mongoose from 'mongoose';
import config from 'config';

import logger from './logger';

async function connect() {
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri)
        logger.info('Data base connected');
    } catch (error) {
        logger.error('Could not connected to DB');
        process.exit(1);
    }
}

export default connect;