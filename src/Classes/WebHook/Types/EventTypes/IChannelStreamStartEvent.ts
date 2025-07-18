import type { IStream } from "../EntityTypes/IStream";
import type { IBaseEvent } from "./IBaseEvent";

export interface IChannelStreamStartEvent extends IBaseEvent {
  readonly stream: IStream;
}
