import { IChannelStreamRecordNewEvent, IStreamRecord } from "../Types";
import { BaseEvent } from "./BaseEvent";

export class ChannelStreamRecordNewEvent
  extends BaseEvent
  implements IChannelStreamRecordNewEvent
{
  constructor(event: IChannelStreamRecordNewEvent) {
    super(event);
    this.stream_record = event.stream_record;
  }

  readonly stream_record: IStreamRecord;
}
