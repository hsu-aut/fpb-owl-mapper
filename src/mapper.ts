import { FpbJsModel, ProcessContainer } from "./fpb.interface";
import { createProcessContainers, setupDocument } from "./mapping-util";

const defaultNamespace = "http://www.hsu-hh.de/aut/ontologies/fpb-mapping";
const fpbVersion = "v3.0.0";

/**
 * Formalized Process Description (FPB) is a lightweight modelling technique for processes which is defined in VDI guideline 3682
 * This function maps an FPB JSON model that was created with fpb.js to the FPB ontology.
 * @param fpbJson The JSON model created with fpb.js
 * @param individualsNamespace The namespace that all individuals will be generated into
 * @param ontologyIri The IRI of the ontology that will be created
 * @returns An ontology with individuals according to FPB in Turtle syntax.
 */
export function map(fpbJson: FpbJsModel, individualsNamespace = defaultNamespace, ontologyIri = defaultNamespace): string {
    // Add document headers (prefix, imports)
    let fpbOntology = setupDocument(individualsNamespace, ontologyIri, fpbVersion);
    
    // get all process containers and add them to the document
    const processContainers = fpbJson.filter(elem => Object.prototype.hasOwnProperty.call(elem,"process")) as ProcessContainer[];
    fpbOntology += createProcessContainers(processContainers);
    
    return fpbOntology;
}