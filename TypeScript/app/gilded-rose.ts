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
        for (let i = 0; i < this.items.length; i++) {
            const itemName = this.items[i].name
            if (itemName === 'Aged Brie') {
                if (this.items[i].quality < 50) {
                    this.items[i].quality++
                }
                this.items[i].sellIn--
            } else if (itemName === 'Backstage passes to a TAFKAL80ETC concert') {
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
            } else if (itemName === 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = 80
            } else {
                if (this.items[i].sellIn > 0) {
                    this.items[i].quality--
                    this.items[i].sellIn--
                } else {
                    this.items[i].quality--
                    this.items[i].quality--
                    this.items[i].sellIn--
                }
            }
            if (this.items[i].quality < 0) {
                this.items[i].quality = 0
            }
        }

        return this.items;
    }
}
