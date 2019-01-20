const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
console.log("asdasda")
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);
console.log("asdasda")

const campaignPath = path.resolve(__dirname, 'contracts', 'factory.sol');
console.log("asdasda")

const source = fs.readFileSync(campaignPath, 'utf8');
console.log("asdasda")
console.log(solc.compile(source,1));
const output = solc.compile(source, 1).contracts;
console.log(output);
//fs.ensureDirSync(buildPath);
console.log("hello");
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
