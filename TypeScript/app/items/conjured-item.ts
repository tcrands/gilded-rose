import { StandardItem } from "./standard-item";

export class ConjuredItem extends StandardItem {
    updateItem() {
        this.sellIn--
        this._updateQuality(2)
    }
}