import { logger } from '../common-utils/index.js';


export const auth = {
  verify: async function(token) {
    logger.info('Verifying token: ' + token);
    return true;
  }
};


