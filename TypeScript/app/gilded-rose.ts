import { StandardItem } from "./items/standard-item";
import { ItemUnion } from "./types";
import { AgedItem } from "./items/aged-item";

export class GildedRose {
    items: Array<ItemUnion>;

    constructor(items = [] as Array<ItemUnion>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof StandardItem || this.items[i] instanceof AgedItem) {
                this.items[i]['updateItem']() //Tempory hack to get round typing error while in dev
            }
            else {
                const itemName = this.items[i].name
                if (itemName === 'Backstage passes to a TAFKAL80ETC concert') {
                    this.items[i].sellIn--
                    if (this.items[i].quality < 50 && this.items[i].sellIn > 0) {
                        if (this.items[i].quality < 50) {
                            this.items[i].quality++
                            if (this.items[i].sellIn < 11) {
                                this.items[i].quality++
                            }
                            if (this.items[i].sellIn < 6) {
                                this.items[i].quality++
                            }
                        } else {
                            this.items[i].quality = 0
                        }
                        if (this.items[i].quality > 50) {
                            this.items[i].quality = 50
                        }
                    }
                }
                if (this.items[i].quality < 0) {
                    this.items[i].quality = 0
                }
            }

        }

        return this.items;
    }
}
