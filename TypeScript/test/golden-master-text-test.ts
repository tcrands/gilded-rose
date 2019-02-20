import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/items/item';
import { StandardItem } from '../app/items/standard-item';
import { AgedItem } from '../app/items/aged-item';
import { LegendaryItem } from '../app/items/legendary-item';

const items = [
    new StandardItem("+5 Dexterity Vest", 10, 20), //
    new AgedItem("Aged Brie", 2, 0), //
    new StandardItem("Elixir of the Mongoose", 5, 7), //
    new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80), //
    new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    new Item("Conjured Mana Cake", 3, 6)];


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