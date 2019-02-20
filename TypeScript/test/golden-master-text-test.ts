import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/items/item';
import { StandardItem } from '../app/items/standard-item';
import { AgedItem } from '../app/items/aged-item';
import { LegendaryItem } from '../app/items/legendary-item';
import { BackstagePassItem } from '../app/items/backstage-pass-item';
import { ConjuredItem } from '../app/items/conjured-item';

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


const gildedRose = new GildedRose(items);
var days: number = 2;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

    });
    console.log();
    gildedRose.updateQuality();
}