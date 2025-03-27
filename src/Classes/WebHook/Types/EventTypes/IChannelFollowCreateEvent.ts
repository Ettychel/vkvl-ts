import type { IChannel } from "../EntityTypes/IChannel";
import type { IFollow } from "../EntityTypes/IFollow";
import type { IOwner } from "../EntityTypes/IOwner";

export interface IChannelFollowCreateEvent {
  channel: IChannel;
  owner: IOwner;
  follow: IFollow;
}
