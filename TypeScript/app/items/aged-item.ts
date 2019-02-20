import { Item } from "./item";

export class AgedItem extends Item {
    updateItem() {
        this.sellIn--
        this._updateQuality()
    }

    _updateQuality() {
        if (this.quality < 50) {
            this.quality++
        } 
    }
}