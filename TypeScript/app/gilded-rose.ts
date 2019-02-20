import { ItemUnion } from "./types";

export class GildedRose {
    items: Array<ItemUnion>;

    constructor(items = [] as Array<ItemUnion>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            item.updateItem() 
            if (item.quality < 0) {
                item.quality = 0
            }
        });
        return this.items;
    }
}
