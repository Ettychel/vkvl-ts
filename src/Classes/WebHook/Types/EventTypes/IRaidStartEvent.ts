import type { IRaid } from "../EntityTypes/IRaid";
import type { IBaseEvent } from "./IBaseEvent";

export interface IRaidStartEvent extends IBaseEvent {
  readonly raid: IRaid;
}
