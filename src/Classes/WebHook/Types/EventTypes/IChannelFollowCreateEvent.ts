import type { IFollow } from "../EntityTypes/IFollow";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelFollowCreateEvent extends IBaseEvent {
  readonly follow: IFollow;
}
