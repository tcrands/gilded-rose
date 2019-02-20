import { AgedItem } from "./aged-item";

export class BackstagePassItem extends AgedItem {
    updateItem() {
        this.sellIn--
        if (this.sellIn <= 0) {
            this.quality = 0
        } else {
            this._caluculateQuality()
        }
    }

    _caluculateQuality() {
        if (this.sellIn < 6) {
            this._updateQuality(3)
        } else if (this.sellIn < 11) {
            this._updateQuality(2)
        } else {
            this._updateQuality(1)
        }
    }
}