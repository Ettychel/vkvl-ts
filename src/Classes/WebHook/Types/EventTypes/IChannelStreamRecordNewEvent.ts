import type { IStreamRecord } from "../EntityTypes/IStreamRecord";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelStreamRecordNewEvent extends IBaseEvent {
  readonly stream_record: IStreamRecord;
}
