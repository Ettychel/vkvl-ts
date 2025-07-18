import { IChannelStreamPauseEvent, IStream } from "../Types";
import { BaseEvent } from "./BaseEvent";

export class ChannelStreamPauseEvent
  extends BaseEvent
  implements IChannelStreamPauseEvent
{
  constructor(event: IChannelStreamPauseEvent) {
    super(event);
    this.stream = event.stream;
  }

  readonly stream: IStream;
}
