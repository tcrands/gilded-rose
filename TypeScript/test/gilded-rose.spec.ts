import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { StandardItem } from '../app/items/standard-item';
import { AgedItem } from '../app/items/aged-item';
import { LegendaryItem } from '../app/items/legendary-item';
import { BackstagePassItem } from '../app/items/backstage-pass-item';
import { ConjuredItem } from '../app/items/conjured-item';

describe('Gilded Rose', function () {
    it('should calculate all item correctly', function() {
        const items = [
            new StandardItem("+5 Dexterity Vest", 10, 20), //
            new AgedItem("Aged Brie", 2, 0), //
            new StandardItem("Elixir of the Mongoose", 5, 7), //
            new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80), //
            new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80),
            new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
            new ConjuredItem("Conjured Mana Cake", 3, 6)
        ];

        const expectedItems = [
            { name: "+5 Dexterity Vest", quality: 19, sellIn: 9 },
            { name: "Aged Brie", quality: 1, sellIn: 1 },
            { name: "Elixir of the Mongoose", quality: 6, sellIn: 4 },
            { name: "Sulfuras, Hand of Ragnaros", quality: 80, sellIn: 0 },
            { name: "Sulfuras, Hand of Ragnaros", quality: 80, sellIn: -1 },
            { name: "Backstage passes to a TAFKAL80ETC concert", quality: 21, sellIn: 14 },
            { name: "Backstage passes to a TAFKAL80ETC concert", quality: 50, sellIn: 9 },
            { name: "Backstage passes to a TAFKAL80ETC concert", quality: 50, sellIn: 4 },
            { name: "Conjured Mana Cake", quality: 4, sellIn: 2 },
        ]

        const gildedRose = new GildedRose(items);
        const result = gildedRose.updateQuality();
        for (let i = 0; i < result.length; i++) {
            const item = result[i];
            const expectedItem = expectedItems[i];
            expect(item.name).to.equal(expectedItem.name);
            expect(item.quality).to.equal(expectedItem.quality);
            expect(item.sellIn).to.equal(expectedItem.sellIn);  
        }
    });
});
