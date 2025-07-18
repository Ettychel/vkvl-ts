import { ConvertSnakeToCamel } from "../../../Util/SnakeToCamel";
import type { IChannel } from "../Types";
import type { IOwner } from "../Types";
import type { IBaseEvent } from "../Types/EventTypes/IBaseEvent";

export class BaseEvent implements ConvertSnakeToCamel<IBaseEvent> {
  constructor(event: IBaseEvent) {
    this.channel = event.channel;
    this.owner = event.owner;
  }

  readonly channel: ConvertSnakeToCamel<IChannel>;
  readonly owner: ConvertSnakeToCamel<IOwner>;
}
