import { Item } from "./item";

export class BackstagePassItem extends Item {
    updateItem() {
        this.sellIn--
        this._updateQuality()
        this._sanitizeData()
    }

    _updateQuality() {
        if (this.quality < 50) {
            this.quality++
        } 
        if (this.sellIn < 11) {
            this.quality++
        }
        if (this.sellIn < 6) {
            this.quality++
        }
        if (this.sellIn <= 0) {
            this.quality = 0
        }
    }

    _sanitizeData() {
        if (this.quality > 50) {
            this.quality = 50
        }
    }
}