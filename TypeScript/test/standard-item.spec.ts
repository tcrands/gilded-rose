import { expect } from 'chai';
import { StandardItem } from '../app/items/standard-item';

describe('StandardItem', function () {
    it('should correctly update a StandardItem', function() {
        const standardItem = new StandardItem("+5 Dexterity Vest", 10, 20);
        standardItem.updateItem();
        expect(standardItem.name).to.equal('+5 Dexterity Vest');
        expect(standardItem.sellIn).to.equal(9);
        expect(standardItem.quality).to.equal(19);
    });

    it('should correctly update a StandardItem past its sellIn value', function() {
        const standardItem = new StandardItem("+5 Dexterity Vest", 0, 20);
        standardItem.updateItem();
        expect(standardItem.name).to.equal('+5 Dexterity Vest');
        expect(standardItem.sellIn).to.equal(-1);
        expect(standardItem.quality).to.equal(18);
    });
});