import { assert } from 'chai';
import { readFileSync } from 'fs';
import { FpbJsModel } from '../src/fpb.interface';
import { map } from "../src/mapper";


describe('Mapper test', () => {
    it('Should map a given fpb.js model to the correct ontological representation', async () => {
        // Object that defines the structure of the result

        const input = JSON.parse(readFileSync("tests/fpbjs-models/simpleTwoStageProcess.json").toString()) as FpbJsModel;
        const expectedResult = readFileSync("tests/mappedOntologies/simpleTwoStageProcess.ttl").toString();

        const result = map(input, "http://www.hsu-hh.de/aut/ontologies/example#");
        assert.deepEqual(result, expectedResult, 'Expected result should have all values extracted...');
    });

});