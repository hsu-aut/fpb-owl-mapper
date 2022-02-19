import { FpbJsModel, ProcessContainer, ProcessOperator } from "./fpb-model/fpb.interface";
import { example } from "./fpb-model/simpleExamples";

// Note: Should the serialized version with all the references first be deserialized?
function map(fpbJson: FpbJsModel, individualsNamespace = "http://www.hsu-hh.de/aut/ontologies/example"): string {
    let fpbOntology = setupDocument(individualsNamespace);
    // get all processes
    const processContainers = fpbJson.filter(elem => elem.hasOwnProperty("process")) as ProcessContainer[];
    fpbOntology += createProcessContainers(processContainers);
    return fpbOntology;
}


/**
 * Setup all namespaces / prefixes
 * @param individualsNamespace Namespace that will be used for all individuals
 * @returns 
 */
function setupDocument(individualsNamespace: string): string {
    if (!(individualsNamespace.endsWith("/") || individualsNamespace.endsWith("#"))) {
        individualsNamespace += "#";
    }
    const prefixes = `
	@prefix VDI3682: <http://www.hsu-ifa.de/ontologies/VDI3682#> .
	@prefix in: <${individualsNamespace}> .`;

    return prefixes;
}



function createProcessContainers(processContainers: Array<ProcessContainer>): string {
    let processes = "\n";
    
	
    processContainers.forEach(pC => {
        // Create process
        const processIri = createIri(pC.process.id, pC.process.name);
        processes += `${processIri} a VDI3682:Process\n`;

        // Create process operators of this process
        const processOperators = pC.elementDataInformation.filter(elem => elem.$type == "fpb:ProcessOperator") as ProcessOperator[];
        processOperators.forEach(pO => {
            const processOperatorIri = createIri(pO.id, pO.identification.shortName);
        	processes += `${processOperatorIri} a VDI3682:ProcessOperator\n`;
        });

		
		
        // Add two empty lines after each process
        processes += "\n\n";
    });
    return processes;
}

/**
 * Creates an IRI from the name if name property is set. Takes the ID if name is not set
 * @param id ID of an element (every element in fpb.js should have one)
 * @param name Name of an element (needs to be set by the user)
 * @returns An IRI for an element with a given ID and name
 */
function createIri(id: string, name: string | undefined): string {
    // default case: iri made of id
    let iri = `<urn:uuid:${id}>`;
    // but if name is set, we will take the readable name
    if (name != null) {
        iri = `in:${name}`;
    }
    return iri;
}

const e = example;
const res = map(e);

console.log("\nresult:");
console.log(res);

