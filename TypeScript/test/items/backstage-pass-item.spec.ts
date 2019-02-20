import { expect } from 'chai';
import { BackstagePassItem } from '../../app/items/backstage-pass-item';

describe('BackstagePassItem', function () {
    it('should correctly update BackstagePass item', function() {
        const backstagePassItem = new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 15, 20);
        backstagePassItem.updateItem();
        expect(backstagePassItem.name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(backstagePassItem.sellIn).to.equal(14);
        expect(backstagePassItem.quality).to.equal(21);
    });

    it('should correctly update BackstagePass item with 10 days left', function() {
        const backstagePassItem = new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 10, 20);
        backstagePassItem.updateItem();
        expect(backstagePassItem.name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(backstagePassItem.sellIn).to.equal(9);
        expect(backstagePassItem.quality).to.equal(22);
    });

    it('should correctly update BackstagePass item with 5 days left', function() {
        const backstagePassItem = new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 5, 20);
        backstagePassItem.updateItem();
        expect(backstagePassItem.name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(backstagePassItem.sellIn).to.equal(4);
        expect(backstagePassItem.quality).to.equal(23);
    });

    it('should correctly update BackstagePass item with 0 days left', function() {
        const backstagePassItem = new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 0, 20);
        backstagePassItem.updateItem();
        expect(backstagePassItem.name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(backstagePassItem.sellIn).to.equal(-1);
        expect(backstagePassItem.quality).to.equal(0);
    });
});