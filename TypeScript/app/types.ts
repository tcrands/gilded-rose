import { Item } from "./items/item";
import { StandardItem } from "./items/standard-item";
import { AgedItem } from "./items/aged-item";
import { BackstagePassItem } from "./items/backstage-pass-item";
import { LegendaryItem } from "./items/legendary-item";
import { ConjuredItem } from "./items/conjured-item";

export type ItemUnion = StandardItem | AgedItem | LegendaryItem | BackstagePassItem | ConjuredItem