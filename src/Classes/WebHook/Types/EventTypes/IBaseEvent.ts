import type { IChannel } from "../EntityTypes/IChannel";
import type { IOwner } from "../EntityTypes/IOwner";

export interface IBaseEvent {
  readonly channel: IChannel;
  readonly owner: IOwner;
}
