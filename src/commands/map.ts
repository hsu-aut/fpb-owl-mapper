import type { Arguments, CommandBuilder } from 'yargs';
import {map} from "../mapper";
import * as fs from "fs";
import path = require('path');
import { FpbJsModel } from '../fpb-model/fpb.interface';

type Options = {
	name: string;
	upper: boolean | undefined;
};

export const command = 'map <fileName>';
export const desc = 'Map fpbjs export from given <fileName> into FPB ontology';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
    yargs
        .usage('Usage: $0 map <fileName> [string] -ns [string]')
        .positional('fileName', { 
            describe: "Name of the file that is going to be mapped",
            type: 'string',
            // coerce: f => fs.readFileSync(f)
        })
        .options({
            ns: {
                alias: "namespace",
                describe: "The namespace that all individuals are mapped into",
                type: 'string',
                // coerce: f => console.log(f)
            },
        });

export const handler = (argv: Arguments<Options>): void => {
    console.log("handler called");
    console.log(argv);
	
    const { fileName, ns } = argv;
    const fileContent = fs.readFileSync(fileName as string, 'utf-8').toString();
    console.log("file");
	
    console.log(fileContent);
	
    const fpbModel = JSON.parse(fileContent) as FpbJsModel;
    // const model = JSON.parse(fileName as string) as FpbJsModel;
    const mappedFpbFile = map(fpbModel, ns as string);
    fs.writeFileSync("./mapped-ontology.ttl", mappedFpbFile);
    process.exit(0);
};