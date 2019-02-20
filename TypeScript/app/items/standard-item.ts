import { Item } from "../gilded-rose";

export class StandardItem extends Item {
    updateItem() {
        this.sellIn--
        this.quality--
        this._updateQuality()

    }

    _updateQuality() {
        if (this.sellIn <= 0) {
            this.quality--
        } 
    }
}