import { expect } from 'chai';
import { ConjuredItem } from '../app/items/conjured-item';

describe('ConjuredItem', function () {
    it('should correctly update a ConjuredItem', function() {
        const conjuredItem = new ConjuredItem('Conjured Mana Cake', 3, 6);
        conjuredItem.updateItem();
        expect(conjuredItem.name).to.equal('Conjured Mana Cake');
        expect(conjuredItem.sellIn).to.equal(2);
        expect(conjuredItem.quality).to.equal(4);
    });

    it('should correctly update a ConjuredItem when quality is 1', function() {
        const conjuredItem = new ConjuredItem('Conjured Mana Cake', 5, 1);
        conjuredItem.updateItem();
        expect(conjuredItem.name).to.equal('Conjured Mana Cake');
        expect(conjuredItem.sellIn).to.equal(4);
        expect(conjuredItem.quality).to.equal(0);
    });
});