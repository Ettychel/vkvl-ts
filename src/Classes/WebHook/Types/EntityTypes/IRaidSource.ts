import type { IChannel } from "./IChannel";
import type { IOwner } from "./IOwner";
import type { IUser } from "./IUser";

export interface IRaidSource {
  channel: IChannel;
  owner: IOwner & IUser;
}
