import { ENVIRONMENT, MOON_PHASE } from "@/model/enums";
import { Coordinates } from "@/model/coordinates.interface";
import { Individual } from "@/model/individual.interface";

export interface Observation {
  id: number;
  datetime: Date;
  individuals: Individual[] // # of individuals = quantity
  location: Coordinates;
  temperature: number;    // should be autofilled based on location and datetime weather API
  weather: string;        // should be autofilled based on location and datetime weather API
  humidity: number;       // should be autofilled based on location and datetime weather API
  moonPhase: MOON_PHASE;  // should be autofilled based on location and datetime weather API
  environment: ENVIRONMENT;
  note?: string;
}



