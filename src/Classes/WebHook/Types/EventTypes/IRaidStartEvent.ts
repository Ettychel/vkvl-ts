import type { IChannel } from "../EntityTypes/IChannel";
import type { IOwner } from "../EntityTypes/IOwner";
import type { IRaid } from "../EntityTypes/IRaid";

export interface IRaidStartEvent {
  channel: IChannel;
  owner: IOwner;
  raid: IRaid;
}
