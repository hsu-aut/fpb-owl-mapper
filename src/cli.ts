import figlet = require('figlet');
import { readFileSync, writeFileSync } from 'fs';
import yargs, { Arguments, Options } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { FpbJsModel } from './fpb-model/fpb.interface';
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

const argv = yargs(process.argv.slice(2))
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




// export const builder: CommandBuilder<Options, Options> = (yargs) =>
//     yargs
//         .usage('Usage: $0 map <fileName> [string] -ns [string]')
//         .command("map", "Map fpbjs export from given <fileName> into FPB ontology inside")
//         .positional('fileName', { 
//             describe: "Name of the file that is going to be mapped",
//             type: 'string',
//             demandOption: true
//         })
//         .options({
//             ns: {
//                 alias: "namespace",
//                 describe: "The namespace that all individuals are mapped into",
//                 type: 'string',
//             },
//         });

// export const handler = (argv: Arguments<Options>): void => {
//     console.log("handler called");
//     console.log(argv);
	
//     const { fileName, ns } = argv;
//     const fileContent = fs.readFileSync(fileName as string, 'utf-8').toString();
//     console.log("file");
	
//     console.log(fileContent);
	
//     const fpbModel = JSON.parse(fileContent) as FpbJsModel;
//     // const model = JSON.parse(fileName as string) as FpbJsModel;
//     const mappedFpbFile = map(fpbModel, ns as string);
//     fs.writeFileSync("./mapped-ontology.ttl", mappedFpbFile);
//     process.exit(0);
// };