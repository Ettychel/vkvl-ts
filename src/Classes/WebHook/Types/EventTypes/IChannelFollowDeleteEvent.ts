import type { IFollow } from "../EntityTypes/IFollow";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelFollowDeleteEvent extends IBaseEvent {
  readonly follow: IFollow;
}
