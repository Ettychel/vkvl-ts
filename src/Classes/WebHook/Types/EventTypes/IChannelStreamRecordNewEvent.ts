import type { IChannel } from "../EntityTypes/IChannel";
import type { IOwner } from "../EntityTypes/IOwner";
import type { IStreamRecord } from "../EntityTypes/IStreamRecord";

export interface IChannelStreamRecordNewEvent {
  channel: IChannel;
  owner: IOwner;
  stream_record: IStreamRecord;
}
