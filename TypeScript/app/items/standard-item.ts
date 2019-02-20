import { Item } from "./item";

export class StandardItem extends Item {
    updateItem() {
        this.sellIn--
        if (this.sellIn <= 0) {
            this._updateQuality(2)
        } else {
            this._updateQuality(1)
        }
    }

    _updateQuality(counter: number) {
        const newQuality = this.quality - counter
        if (newQuality > 0) {
            this.quality = newQuality
        } else {
            this.quality = 0
        }
    }
}