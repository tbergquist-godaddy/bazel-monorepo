// @flow

import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';

const dotEnvPath = path.join(__dirname, '..', '..', '.env');
let configExists;

export default function loadConfig() {
  if (configExists || fs.existsSync(dotEnvPath)) {
    config({ path: dotEnvPath });
    configExists = true;
  }
}
