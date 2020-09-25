// @flow

const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

const { ZEIT_TOKEN } = process.env;

if (ZEIT_TOKEN == null) {
  throw new Error('ZEIT_TOKEN missing.');
}
const execSync = (command) => {
  exec(command, { stdio: ['inherit', 'inherit', process.stdout] });
};

const deployPath = path.join(__dirname, '..', 'deploy', 'public');
const distPath = path.join(__dirname, '..', 'dist');

if (fs.existsSync(deployPath)) {
  // $FlowExpectedError[extra-arg] This does allow a second arg
  fs.rmdirSync(deployPath, { recursive: true });
}

fs.mkdirSync(deployPath, { recursive: true });

const distFiles = fs.readdirSync(distPath);

for (const file of distFiles) {
  fs.copyFileSync(path.join(distPath, file), path.join(deployPath, file));
}

execSync(`vercel deploy/ --confirm --prod --token=${ZEIT_TOKEN}`);
