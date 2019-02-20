export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        //Loop over all items
        for (let i = 0; i < this.items.length; i++) {
            // Item is not aged brie or BSP
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                // Item has a quantity
                if (this.items[i].quality > 0) {
                    // Item is not Sulfara
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        // Decrease quantity
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                // Items quality if more than 50 and if either aged brie or BSP
                if (this.items[i].quality < 50) {
                    // Increase quality
                    this.items[i].quality = this.items[i].quality + 1
                    // Item id BSP
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        // sellIn more than 11
                        if (this.items[i].sellIn < 11) {
                            //quality more than 50
                            if (this.items[i].quality < 50) {
                                // Increase quality
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        // Sellin less than 11 but more than 6
                        if (this.items[i].sellIn < 6) {
                            //Quality more than 50
                            if (this.items[i].quality < 50) {
                                // Increase quality
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            // Name is not Sulfaras
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                // Decrease sellIn
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            // SellIn more than 0
            if (this.items[i].sellIn < 0) {
                // Item not aged brie
                if (this.items[i].name != 'Aged Brie') {
                    //Imte not BSP
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        //Item quality not 0
                        if (this.items[i].quality > 0) {
                            // Item not sulfara
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                //Decrease quality
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    // Item is BSP
                    } else {
                        // Decrease quality
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                // Item is aged brie
                } else {
                    //Item quality more than 50
                    if (this.items[i].quality < 50) {
                        // Increase quality
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
