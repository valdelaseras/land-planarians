import { ACTIVITY, MOON_PHASE } from "@/model/enums";
import { Coordinates } from "@/model/coordinates.interface";

export interface Observation {
  id: number;
  isAlive: boolean;       // todo: if quantity > 1, this can't work
  quantity: number;
  location: Coordinates;
  datetime: Date;
  moonPhase: MOON_PHASE;  // should be autofilled based on location and datetime weather API
  temperature: number;    // should be autofilled based on location and datetime weather API
  weather: string;        // should be autofilled based on location and datetime weather API
  humidity: number;       // should be autofilled based on location and datetime weather API
  fluorescence: boolean;
  note?: string;
  activity?: ACTIVITY;    // todo: if dead, no activity ( can be null but still )
}



