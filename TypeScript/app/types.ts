import { Item } from "./items/item";
import { StandardItem } from "./items/standard-item";
import { AgedItem } from "./items/aged-item";

export type ItemUnion = Item | StandardItem | AgedItem