import { AgedItem } from "./aged-item";

export class BackstagePassItem extends AgedItem {
    updateItem() {
        this.sellIn--
        this._caluculateQuality()
    }

    _caluculateQuality() {
        if (this.sellIn <= 0) {
            this.quality = 0
            return;
        }
        this._updateQuality()
        if (this.sellIn < 11) {
            this._updateQuality()
        }
        if (this.sellIn < 6) {
            this._updateQuality()
        }
    }
}