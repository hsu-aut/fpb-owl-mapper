```
  __       _                         _                                             
 / _|_ __ | |__         _____      _| |      _ __ ___   __ _ _ __  _ __   ___ _ __ 
| |_| '_ \| '_ \ _____ / _ \ \ /\ / / |_____| '_ ` _ \ / _` | '_ \| '_ \ / _ \ '__|
|  _| |_) | |_) |_____| (_) \ V  V /| |_____| | | | | | (_| | |_) | |_) |  __/ |   
|_| | .__/|_.__/       \___/ \_/\_/ |_|     |_| |_| |_|\__,_| .__/| .__/ \___|_|   
    |_|                                                     |_|   |_|              
```
# Convert JSON FPB models into an FPB ontology
Formalized Process Description (FPB) is a lightweight process modelling approach standardized in [VDI guideline 3682](https://www.vdi.de/richtlinien/details/vdivde-3682-blatt-1-formalisierte-prozessbeschreibungen-konzept-und-grafische-darstellung). It allows simple modelling of various processes in an intuitive and graphical way.

With [fpb.js](https://github.com/HamiedNabizada/FPB.JS), there is a modern, browser-based implementation that can be used to easily model processes according to FPB. It works on a JSON data model. 
In addition to that, there is an ontology that can be used to model processes according to FPB: (https://github.com/hsu-aut/IndustrialStandard-ODP-VDI3682)

FPB-OWL-Mapper can automatically transform a JSON FPB model into that FPB ontology.


## Usage
FPB-OWL-Mapper can be used both as a CLI and by importing it into one of your projects

### As a CLI
Simply take the CLI script from the releases and run it on your local machine:
```
node fpb2owl-cli.js map "filePath" -n "Namespace" -o "ontologyIri"
```

where
- *filePath* is a path to a file (fpb.js JSON export) you want to map
- *n* (alias: *namespace*) is the namespace of all individuals that will be created
- *o* (alias: *ontolgyIri*) is the IRI of the ontology that will be created


### Inside your own JavaScript / TypeScript projects
Simply import fpb-owl-mapper into your own npm project using `npm install fpb-owl-mapper`. After installing, you can import and use the map(fpbModel, namespace, ontologyIri) function. Here's a little example:

```JavaScript
import { map } from "fpb-owl-mapper";
import * as fs from "fs"

// In this case, the model is read from file. Of course, you could also have a model in your application
const file =  fs.readFileSync("./exampleProcess.json")
const fpbJson = JSON.parse(file.toString())

const res = map(fpbJson);
console.log(res);

// Output will be a long string with the transformed model in .ttl syntax
```
