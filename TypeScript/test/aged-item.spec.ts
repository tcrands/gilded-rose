import { expect } from 'chai';
import { AgedItem } from '../app/items/aged-item';

describe('AgedItem', function () {
    it('should correctly update Aged item', function() {
        const agedItem = new AgedItem("Aged Brie", 2, 0);
        agedItem.updateItem();
        expect(agedItem.name).to.equal('Aged Brie');
        expect(agedItem.sellIn).to.equal(1);
        expect(agedItem.quality).to.equal(1);
    });

    it('should correctly update Aged item if quality is 50', function() {
        const agedItem = new AgedItem("Aged Brie", 2, 50);
        agedItem.updateItem();
        expect(agedItem.name).to.equal('Aged Brie');
        expect(agedItem.sellIn).to.equal(1);
        expect(agedItem.quality).to.equal(50);
    });
});