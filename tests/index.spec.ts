import { expect } from 'chai';
import { mergingCollections } from '../src/function';

describe('mergingCollections', () => {
    it('merge 3 collections', () => {
        const collection1: number[] = [1, 3, 5];
        const collection2: number[] = [6, 4, 2];
        const collection3: number[] = [7, 8, 9];
        const mergedCollection: number[] = mergingCollections(collection1, collection2, collection3);
        console.log(mergedCollection)
        expect(mergedCollection).to.deep.equal([1, 3, 5, 6, 4, 2, 7, 8, 9]);
    });
});

describe('mergingCollections', () => {
    it('merge 3 collections in ascending order', () => {
        const collection1: number[] = [1, 3, 5];
        const collection2: number[] = [6, 4, 2];
        const collection3: number[] = [7, 8, 9];
        const mergedCollection: number[] = mergingCollections(collection1, collection2, collection3, 'asc');
        console.log(mergedCollection)
        expect(mergedCollection).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe('mergingCollections', () => {
    it('merge 3 collections in descending order', () => {
        const collection1: number[] = [1, 3, 5];
        const collection2: number[] = [6, 4, 2];
        const collection3: number[] = [7, 8, 9];
        const mergedCollection: number[] = mergingCollections(collection1, collection2, collection3, 'desc');
        console.log(mergedCollection)
        expect(mergedCollection).to.deep.equal([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});

describe('mergingCollections', () => {
    it('do not merge collections', () => {
        const collection1: number[] = [1, 3, 5];
        const collection2: number[] = [6, 4, 2];
        const collection3: number[] = [7, 8, 9];
        const mergedCollection: number[] = mergingCollections(collection1, collection2, collection3, 'test');
        console.log(mergedCollection)
        expect(mergedCollection).to.deep.equal([-1]);
    });
});
