import { assert } from 'chai';
import { readFileSync, writeFileSync } from 'fs';
import { FpbJsModel } from '../src/fpb.interface';
import { map } from "../src/mapper";


describe('Mapper test', () => {
    it('Should map a given fpb.js model to the correct ontological representation', async () => {
        const input = JSON.parse(readFileSync("tests/fpbjs-models/simpleTwoStageProcess.json").toString()) as FpbJsModel;
        const expectedResult = readFileSync("tests/mappedOntologies/simpleTwoStageProcess.ttl").toString();

        const result = map(input);	// No namespace and ontologyIri given -> should use default
        assert.deepEqual(result, expectedResult, 'Expected result should have all values extracted...');
    });

    it('Should map a given fpb.js model with a specific namespace and ontologyIri', async () => {
        const input = JSON.parse(readFileSync("tests/fpbjs-models/simpleTwoStageProcess.json").toString()) as FpbJsModel;
        const expectedResult = readFileSync("tests/mappedOntologies/simpleTwoStageProcessWithNamespace.ttl").toString();

        const namespace ="http://www.just-a-test.com/ontologies#";
        const ontologyIri ="http://www.just-a-test.com/ontologies/test-onto";

        const result = map(input,namespace, ontologyIri);	// No namespace and ontologyIri given -> should use default
        assert.deepEqual(result, expectedResult, 'Expected result should have all values extracted...');
    });


    it('Should map a very simple process with one operator without graphics information', async () => {
        const input = JSON.parse(readFileSync("tests/fpbjs-models/simpleProcessWithoutGraphics.json").toString()) as FpbJsModel;
        const expectedResult = readFileSync("tests/mappedOntologies/simpleProcessWithoutGraphics.ttl").toString();
		
        const result = map(input);
        assert.deepEqual(result, expectedResult, "Should map process without graphics");
    });
});