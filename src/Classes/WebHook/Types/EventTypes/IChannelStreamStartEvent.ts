import type { IChannel } from "../EntityTypes/IChannel";
import type { IOwner } from "../EntityTypes/IOwner";
import type { IStream } from "../EntityTypes/IStream";

export interface IChannelStreamStartEvent {
  channel: IChannel;
  owner: IOwner;
  stream: IStream;
}
