import { Item } from "./item";

export class AgedItem extends Item {
    updateItem() {
        this.sellIn--
        this._updateQuality(1)
    }

    _updateQuality(counter: number) {
        const newQuality = this.quality + counter
        if (newQuality < 50) {
            this.quality = newQuality
        } else {
            this.quality = 50 
        } 
    }
}