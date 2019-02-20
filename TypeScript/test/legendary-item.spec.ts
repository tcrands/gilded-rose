import { expect } from 'chai';
import { LegendaryItem } from '../app/items/legendary-item';

describe('LegendaryItem', function () {
    it('should correctly update Legendary item', function() {
        const legendaryItem = new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80);
        legendaryItem.updateItem();
        expect(legendaryItem.name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(legendaryItem.sellIn).to.equal(0);
        expect(legendaryItem.quality).to.equal(80);
    });

    it('should not decrease the sellIn value of a Legendary item', function() {
        const legendaryItem = new LegendaryItem("Sulfuras, Hand of Ragnaros", 20, 80);
        legendaryItem.updateItem();
        expect(legendaryItem.name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(legendaryItem.sellIn).to.equal(20);
        expect(legendaryItem.quality).to.equal(80);
    });

    it('should always set the quality to 80 of a Legendary item', function() {
        const legendaryItem = new LegendaryItem("Sulfuras, Hand of Ragnaros", 10, 10);
        legendaryItem.updateItem();
        expect(legendaryItem.name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(legendaryItem.sellIn).to.equal(10);
        expect(legendaryItem.quality).to.equal(80);
    });
});