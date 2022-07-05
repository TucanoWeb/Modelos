import testSum from "./Testsum";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature('./src/components/testesum/Testsum.feature');

describe('Test function sum', () => {
    it('The sum its 3', () => {
        const resultSum = testSum(1,2);
        expect(resultSum).toBe(3);
    })
})

defineFeature(feature, test => {
    test('Test function sum with cucumber', ({given, when, then}) => {
        let x;
        let z;

        given('1', () => {
            x = 1;
        });

        when('more 2', () => {
            z = testSum(x,2);
        });

        then('result 3', () => {
            expect(z).toBe(3);
        });
    });
});