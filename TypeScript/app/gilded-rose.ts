import { ItemUnion } from "./types";

export class GildedRose {
    items: Array<ItemUnion>;

    constructor(items = [] as Array<ItemUnion>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            item.updateItem() 
        });
        return this.items;
    }
}
