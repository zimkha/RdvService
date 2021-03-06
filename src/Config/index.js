import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load whatever's in the .env file
dotenv.config();

const cfg = {
  http_port: process.env.PORT || 80,
  cors_origin: process.env.CORS_REGEX
    ? [new RegExp(process.env.CORS_REGEX)]
    : [/localhost/],
  mongo: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017',
    db: process.env.DB_NAME || 'rdv_service',
    reconnectTimeout: process.env.DB_RECONNECT_TIMEOUT || 4000
  },
  public_key_file:
    process.env.JWT_PUB_KEY_FILE ||
    path.join(__dirname, '../config/sample_keys/public_key.pem'),
  public_key_b64: process.env.JWT_PUB_KEY_B64,
  card_ema: {
    n: 10
  },
  logging_level:
    process.env.LOGGING_LEVEL ||
    (process.env.NODE_ENV === 'production' ? 'info' : 'debug'),
  db_debug_log:
    process.env.DB_DEBUG_LOG || process.env.NODE_ENV !== 'production'
};

export default cfg;

export const jwtpublic_key = (() => {
  if (cfg.public_key_b64) {
    return new Buffer(cfg.public_key_b64, 'base64').toString('ascii');
  }
  return fs.readFileSync(cfg.public_key_file);
})();