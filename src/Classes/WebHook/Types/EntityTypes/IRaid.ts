import type { IRaidSource } from "./IRaidSource";

export interface IRaid {
  source: IRaidSource;
  raiders_count: number;
  started_at: number;
}
