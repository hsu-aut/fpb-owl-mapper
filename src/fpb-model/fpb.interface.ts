export type FpbJsModel = Array<FpbProject | ProcessContainer>;

/**
 * Type that combines all process information into one combined type
 */
export interface ProcessContainer {
	process: Process;
	elementDataInformation: Array<Usage | SystemLimit | TechnicalResource | Flow | AlternativeFlow | 
									ParallelFlow | Product | Energy | Information | ProcessOperator>;
	elementVisualInformation: any;		// Note: visual information not considered
}

export interface FpbProject {
	$type: "fpb:Project";
	name: string;
	targetNamespace: string ;
	entryPoint: string;
}

export interface BaseElement {
	id: string;
	name?: string;									// This is not corresponding to the schema, but examples show that every base may have a name
	ProjectAssignment?: string; 					// This is a reference to a Project id,
}

export interface Process extends BaseElement{
	$type: "fpb:Process";
	elementsContainer: Array<string>;			// Shall be ids of BaseElements
	isDecomposedProcessOperator: null | string;	// Shall be a reference to a process operator that this process is a decomposition of
	consistsOfStates: Array<string>;			// Shall be ids of States
	consistsOfSystemLimit: string;				// Shall be a reference to a System Limit
	consistsOfProcessOperator: Array<string>;	// Shall be ids of Process Operators
	consistsOfProcesses: Array<string>;			// Shall be ids of Processes
	parent?: string;								// Shall be id of Process //TODO: This is an assumption. It's not in the schema
}

export interface SystemLimit extends BaseElement {
	$type: "fpb:SystemLimit";
	elementsContainer: Array<string>;			// Shall be ids of Objects within that SystemLimit
	decomposedViewOf?: string;					// Shall be an id of a Process Operator
}

export interface Object extends BaseElement {
	identification: Identification;						// Shall be an id of an Identification
	characteristics?: Array<Characteristic>;
	incoming: Array<string>;					// Shall be ids of incoming flows
	outgoing: Array<string>;					// Shall be ids of outgoing flows
}

export interface State extends Object {
	isAssignedTo: Array<string>;				// Shall be ids of Process Operators
}

export interface Product extends State {
	$type: "fpb:Product";
}

export interface Energy extends State {
	$type: "fpb:Energy";
}


export interface Information extends State {
	$type: "fpb:Information";
}

export interface ProcessOperator extends Object {
	$type: "fpb:ProcessOperator";
	isAssignedTo: Array<string>;				// Shall be ids of Technical Resources
	decomposedView?: string;						// Shall be an id of a Process
}

export interface TechnicalResource extends Object {
	$type: "fpb:TechnicalResource";
	isAssignedTo: Array<string>;				// Shall be ids of Process Operators
}

export interface Flow extends BaseElement {
	$type: "fpb:Flow";
	sourceRef: string;							// Shall be ids of Objects
	targetRef: string;							// Shall be ids of Objects
}

// Note: This interface could extend flow but this is not allowed because another $type is required
export interface Usage extends BaseElement {
	$type: "fpb:Usage";
	sourceRef: string;							// Shall be ids of Objects
	targetRef: string;							// Shall be ids of Objects
}


// Note: This interface could extend flow but this is not allowed because another $type is required
export interface AlternativeFlow extends BaseElement {
	$type: "fpb:AlternativeFlow";
	sourceRef: string;							// Shall be ids of Objects
	targetRef: string;							// Shall be ids of Objects
	inTandemWith: Array<string>;				// Shall be ids of AlternativeFlows
}

// Note: This interface could extend flow but this is not allowed because another $type is required
export interface ParallelFlow extends BaseElement {
	$type: "fpb:ParallelFlow";
	sourceRef: string;							// Shall be ids of Objects
	targetRef: string;							// Shall be ids of Objects
	inTandemWith: Array<string>;				// Shall be ids of ParallelFlows
}

export interface Identification {
	$type: "fpb:Identification";
	uniqueIdent: string;
	longName: string;
	shortName: string;
	referenceTo?: Array<string>;					// Shall be ids of BaseElements
	versionNumber: string;
	revisionNumber: string;
}




// TODO: Not implemented yet
export interface Characteristic {
	$type: "fpbch:Characteristics";
	category: any;
	descriptiveElement: any;
	relationalElement: any;
}