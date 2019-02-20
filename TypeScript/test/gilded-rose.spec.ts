import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { StandardItem } from '../app/items/standard-item';
import { AgedItem } from '../app/items/aged-item';
import { LegendaryItem } from '../app/items/legendary-item';
import { BackstagePassItem } from '../app/items/backstage-pass-item';

describe('Gilded Rose', function () {
    it('should correctly update +5 Dexterity Vest', function() {
        const gildedRose = new GildedRose([ new StandardItem("+5 Dexterity Vest", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('+5 Dexterity Vest');
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(19);
    });

    it('should correctly update Aged Brie', function() {
        const gildedRose = new GildedRose([ new AgedItem("Aged Brie", 2, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(1);
    });

    it('should correctly update Elixir of the Mongoose', function() {
        const gildedRose = new GildedRose([ new StandardItem("Elixir of the Mongoose", 5, 7) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Elixir of the Mongoose');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(6);
    });

    it('should correctly update Sulfuras, Hand of Ragnaros with sellIn of 0', function() {
        const gildedRose = new GildedRose([ new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);
    });

    it('should correctly update Sulfuras, Hand of Ragnaros with sellIn of -1', function() {
        const gildedRose = new GildedRose([ new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(80);
    });

    it('should correctly update Backstage passes to a TAFKAL80ETC concert with sellIn of 15 and quality 20', function() {
        const gildedRose = new GildedRose([ new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(14);
        expect(items[0].quality).to.equal(21);
    });

    it('should correctly update Backstage passes to a TAFKAL80ETC concert with sellIn of 10 and quality 49', function() {
        const gildedRose = new GildedRose([ new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 10, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(50);
    });

    it('should correctly update Backstage passes to a TAFKAL80ETC concert with sellIn of 5 and quality 50', function() {
        const gildedRose = new GildedRose([ new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 12, 55) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(11);
        expect(items[0].quality).to.equal(50);
    });
});
