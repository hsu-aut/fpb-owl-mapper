import { BaseElement, Flow, NodeVisualElement, 
    ProcessContainer, ProcessOperator, State, 
    SystemLimit, TechnicalResource, } from "./fpb.interface";

/**
 * Setup all namespaces / prefixes
 * @param individualsNamespace Namespace that will be used for all individuals
 * @returns 
 */
export function setupDocument(individualsNamespace: string, ontologyIri: string, fpbVersion: string): string {
    if (!(individualsNamespace.endsWith("/") || individualsNamespace.endsWith("#"))) {
        individualsNamespace += "#";
    }
    let prefixes = "@prefix VDI3682: <http://www.hsu-ifa.de/ontologies/VDI3682#> .\n";
    prefixes += `@prefix in: <${individualsNamespace}> .\n\n`;

    let ontoDef = `<${ontologyIri}> rdf:type owl:Ontology ;\n`;
    ontoDef += `owl:imports <https://raw.githubusercontent.com/hsu-aut/IndustrialStandard-ODP-VDI3682/${fpbVersion}/VDI3682.owl> .\n\n`;
    
    const documentHead = prefixes + ontoDef;
    return documentHead;
}


/**
 * Creates an IRI from the name if name property is set. Takes the ID if name is not set
 * @param id ID of an element (every element in fpb.js should have one)
 * @param name Name of an element (needs to be set by the user)
 * @returns An IRI for an element with a given ID and name
 */
export function createIri(elem: BaseElement): string {
    // default case: iri made of id
    let iri = `<urn:uuid:${elem.id}>`;
    // but if name is set, we will take the readable name
    if (elem.name != null) {
        iri = `in:${elem.name}`;
    }
    return iri;
}

/**
 * Create state individuals (i.e., Product, Energy, Information) for given FPB state elements
 * @param elements State elements in fpb.js model
 * @param elementType State subtype of these elements (one of product, energy, information)
 * @returns A string representing all individual definitions for the given elements
 */
export function createStateIndividuals(elements: State[], elementType: FpbStateType): string {
    let stateElementString = "";
    elements.forEach(elem => {
        const elemIri = createIri(elem);
        stateElementString += `${elemIri} a ${elementType}.\n`;
    });
    return stateElementString;
}

function isStateSubtype(elem: BaseElement): boolean {
    return ((elem.$type == `fpb:Product`) || (elem.$type == `fpb:Energy`) || (elem.$type == `fpb:Information`));
}

export function getProcessInOuts(pC: ProcessContainer): InOuts {
    // get all states and filter out the intermediate ones
    const states = pC.elementDataInformation.filter(elem => isStateSubtype(elem)) as State[];
    const systemLimitGraphic = pC.elementVisualInformation.find(visuElem => visuElem.type == "fpb:SystemLimit") as NodeVisualElement;

    const margin = 5;	// Margin to help decide between on and off system limit
    const inoutsOnLimit: InOuts = {
        inputs : new Array<State>(),
        outputs : new Array<State>(),
    };
    states.forEach(inout => {
        const inoutGraphic = pC.elementVisualInformation.find(visuElem => visuElem.id == inout.id) as NodeVisualElement;
        const rightOfLeftBorder = (inoutGraphic.x >= systemLimitGraphic.x + margin);
        const leftOfRightBorder = (inoutGraphic.x + inoutGraphic.width <= (systemLimitGraphic.x + systemLimitGraphic.width) - margin);
        const belowTopBorder = (inoutGraphic.y >= systemLimitGraphic.y + margin);
        const aboveBottomBorder = (inoutGraphic.y + inoutGraphic.height <= (systemLimitGraphic.y + systemLimitGraphic.height) - margin);
        const onSystemLimit = !(rightOfLeftBorder && leftOfRightBorder && belowTopBorder && aboveBottomBorder);

        if (onSystemLimit && inout.incoming.length == 0) {
            inoutsOnLimit.inputs.push(inout);
        }
        if (onSystemLimit && inout.outgoing.length == 0) {
            inoutsOnLimit.outputs.push(inout);
        }
    });

    return inoutsOnLimit;
}

export interface InOuts {
	inputs: State[];
	outputs: State[];
}

/**
 * Finds inputs of a process operator from all incoming flow IDs (only state elements, not technical resources)
 * @param elements List of elements to search within
 * @param incomingFlowId IDs of the incoming flows
 * @returns All input state elements (i.e., products, energy, information)
 */
export function findInputs(elements: Array<BaseElement>, incomingIds: Array<string>): Array<State> {
    const inputs = new Array<State>();
    incomingIds.forEach(incomingId => {
        const flow = elements.find(elem => elem.id == incomingId) as Flow;
        const input = elements.find(elem => elem.id === flow.sourceRef) as BaseElement;
        if (isStateSubtype(input)) {
            inputs.push(input as State);
        }
    });
    return inputs;
}


/**
 * Finds outputs of a process operator from all outgoing flow IDs (only state elements, not technical resources)
 * @param elements List of elements to search within
 * @param outgoingFlowId IDs of the outgoing flows
 * @returns All output state elements (i.e., products, energy, information)
 */
export function findOutputs(elements: Array<BaseElement>, outgoingIds: Array<string>): Array<State> {
    const outputs = new Array<State>();
    outgoingIds.forEach(outgoingId => {
        const flow = elements.find(elem => elem.id == outgoingId) as Flow;
        const output = elements.find(elem => elem.id === flow.targetRef) as BaseElement;
        if (isStateSubtype(output)) {
            outputs.push(output as State);
        }
    });
    return outputs;
}


/**
 * Finds an element with a given ID inside an Array of elements
 * @param elements List of elements to search within
 * @param id ID of element to find
 * @returns Element with the given ID, undefined if ID doesn't exist
 */
export function findElement(elements: Array<BaseElement>, id: string): BaseElement {
    return elements.find(elem => elem.id == id) as BaseElement;
}

export enum FpbStateType {
	Product = "VDI3682:Product",
	Information = "VDI3682:Information",
	Energy = "VDI3682:Energy",
}


export function createProcessContainers(processContainers: Array<ProcessContainer>): string {
    let mappedFpbOntology = "";
    processContainers.forEach(pC => {
        // Create process
        const process = pC.process;
        const processIri = createIri(process);
        mappedFpbOntology += `${processIri} a VDI3682:Process.\n`;

        // Create process operators of this process
        const processOperators = pC.elementDataInformation.filter(elem => elem.$type == "fpb:ProcessOperator") as ProcessOperator[];
        processOperators.forEach(pO => {
            const processOperatorIri = createIri(pO);
            mappedFpbOntology += `${processOperatorIri} a VDI3682:ProcessOperator.\n`;
            mappedFpbOntology += `${processIri} VDI3682:consistsOf ${processOperatorIri}.\n`;

            // Add all inputs (Note that process operator only has a list of references that need to be dereferenced first)
            const inputs = findInputs(pC.elementDataInformation, pO.incoming);
            inputs.forEach(input => {
                const inputIri = createIri(input);
                mappedFpbOntology += `${processOperatorIri} VDI3682:hasInput ${inputIri}.\n`;
            });

            // Add all outputs (Note that process operator only has a list of references that need to be dereferenced first)
            const outputs = findOutputs(pC.elementDataInformation, pO.outgoing);
            outputs.forEach(output => {
                const outputIri = createIri(output);
                mappedFpbOntology += `${processOperatorIri} VDI3682:hasOutput ${outputIri}.\n`;
            });

        });
        // Add an empty lines after each process operator
        mappedFpbOntology += "\n";

        // Add technical resources and their connection to a processOperator
        const technicalResources = pC.elementDataInformation.filter(elem => elem.$type == `fpb:TechnicalResource`) as TechnicalResource[];
        technicalResources.forEach(tR => {
            const resourceIri = createIri(tR);
            mappedFpbOntology += `${resourceIri} a VDI3682:TechnicalResource.\n`;
            tR.isAssignedTo.forEach(assignedOperatorId => {
                const assignedProcessOperator = findElement(processOperators, assignedOperatorId);
                const assignedProcessOperatorIri = createIri(assignedProcessOperator);
                mappedFpbOntology += `${resourceIri} VDI3682:isAssignedTo ${assignedProcessOperatorIri}.\n`;
            });
			
        });

        // Create all state elements (i.e., product, energy, information) of this process
        for (const fpbStateType in FpbStateType) {
            const states = pC.elementDataInformation.filter(elem => elem.$type == `fpb:${fpbStateType}`) as State[];
            mappedFpbOntology += createStateIndividuals(states, FpbStateType[fpbStateType as keyof typeof FpbStateType]);
        }
		
        // If inputs are on system limit, they need to be set as inputs / outputs of the process
        const processInOuts = getProcessInOuts(pC);
        processInOuts.inputs.forEach(processInput => {
            const processInputIri = createIri(processInput);
            mappedFpbOntology += `${processIri} VDI3682:hasInput ${processInputIri}.\n`;
        });

        processInOuts.outputs.forEach(processOutput => {
            const processOutputIri = createIri(processOutput);
            mappedFpbOntology += `${processIri} VDI3682:hasOutput ${processOutputIri}.\n`;
        });

        // Create system limit
        const systemLimit = pC.elementDataInformation.find(elem => elem.$type == `fpb:SystemLimit`) as SystemLimit;
        const systemLimitIri = createIri(systemLimit);
        mappedFpbOntology += `${systemLimitIri} a VDI3682:SystemLimit.\n`;
        mappedFpbOntology += `${processIri} VDI3682:consistsOf ${systemLimitIri}.\n`;


        // If process is a decomposed operator, create connection between upper process operator and all this process' operators
        const otherProcessContainers = processContainers.filter(pC => pC.process.id != process.id);		// get all other processes
        if (process.isDecomposedProcessOperator != null) {
            const otherProcessElements = otherProcessContainers.flatMap(otherPCs => otherPCs.elementDataInformation);
            const upperOperator = findElement(otherProcessElements, process.isDecomposedProcessOperator);
            const upperOperatorIri = createIri(upperOperator);

            const operatorsOfThisProcess = pC.elementDataInformation.filter(elem => elem.$type == "fpb:ProcessOperator"); 
			
            operatorsOfThisProcess.forEach(subOperator => {
                const subOperatorIri = createIri(subOperator);
                mappedFpbOntology += `${upperOperatorIri} VDI3682:isComposedOf ${subOperatorIri}.\n`;
            });
			
        }

        // Add empty line after each process
        mappedFpbOntology += "\n";
    });
    return mappedFpbOntology;
}