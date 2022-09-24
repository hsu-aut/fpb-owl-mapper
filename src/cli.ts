// The following two lines are a horribly bad way to include the figlet font but the only one that worked 
// eslint-disable-next-line
// @ts-ignore
import standard from 'figlet/importable-fonts/Standard';
import * as figlet from "figlet";
import { readFileSync, writeFileSync } from 'fs';
import yargs, { Arguments, Options } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { FpbJsModel } from './fpb.interface';
import { map } from './mapper';

figlet.parseFont('Standard', standard);
const header = figlet.textSync('fpb.js to ODP', { horizontalLayout: 'full', font: 'Standard'});

function handler (argv: Arguments<Options>): void {
    const { filePath, n, o } = argv;
    const fileContent = readFileSync(filePath as string, 'utf-8').toString();
    const fpbModel = JSON.parse(fileContent) as FpbJsModel;
    const mappedFpbFile = map(fpbModel, n as string, o as string);
    writeFileSync("./mapped-ontology.ttl", mappedFpbFile);
    process.exit(0);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    .demandOption("filePath", "File path is missing. Please provide a filepath after the 'map' command.")
    .demandCommand()
    .option("n", {
        alias: "namespace",
        describe: "Namespace that all created individuals will be put into",
        type: "string",
        nargs: 1,
    })
    .option("o", {
        alias: "ontologyIri",
        describe: "IRI of the ontology that will be created",
        type: "string",
        nargs: 1,
    })
    .hide("version")
    .alias("h", "help")
    .wrap(null)
    .help()
    .epilog(" \n")
    .argv;
