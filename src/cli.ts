import figlet = require('figlet');
import { readFileSync, writeFileSync } from 'fs';
import yargs, { Arguments, Options } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { FpbJsModel } from './fpb.interface';
import { map } from './mapper';


const header = figlet.textSync('fpb.js to ODP', { horizontalLayout: 'full' });

function handler (argv: Arguments<Options>): void {
    const { filePath, ns } = argv;
    const fileContent = readFileSync(filePath as string, 'utf-8').toString();
    const fpbModel = JSON.parse(fileContent) as FpbJsModel;
    const mappedFpbFile = map(fpbModel, ns as string);
    writeFileSync("./mapped-ontology.ttl", mappedFpbFile);
    process.exit(0);
}

const argv = yargs(hideBin(process.argv))
    .usage(header + "\n\n")
    .usage('Usage: $0 map <filePath> [string] -n [string]')
    .command({
        command: 'map <filePath>', 
        describe: "Map fpbjs export from given into FPB ontology inside",
        handler: (argv) => handler(argv),
    })
    .positional("filePath", {
        type: "string",
        describe: "Path to the model exported from fpb.js that should be mapped to an FPB ontology"
    })
    .demandOption("filePath", "wtf")
    .demandCommand()
    .option("n", {
        alias: "namespace",
        describe: "Namespace that all created individuals will be put into",
        type: "string",
        nargs: 1,
    })
    .hide("version")
    .hide("map")
    .wrap(null)
    .help()
    .epilog(" \n")
    .argv;
