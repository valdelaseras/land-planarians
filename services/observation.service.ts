import {PrismaClient} from "@prisma/client";
import { Observation } from "@/model/observation.interface";
import { ACTIVITY, MOON_PHASE } from "@/model/enums";
import { prisma } from "@/prisma/prisma.client";

/**
 * Properties to select from an observation
 *
 * - including non-primitive types
 * - excluding relational ids
 */
const observationSelect = {
  id: true,
  isAlive: true,
  quantity: true,
  datetime: true,
  temperature: true,
  weather: true,
  humidity: true,
  fluorescence: true,
  note: true,
  activity: {
    select: {
      name: true
    }
  },
  moonPhase: {
    select: {
      name: true
    }
  },
  coordinates: {
    select: {
      longitude: true,
      latitude: true
    }
  },
};

export default class ObservationService {
  prisma: PrismaClient;

  constructor(){
    this.prisma = prisma
  }

  getAll(): Promise<Observation[]> {
    return this.prisma.observation.findMany({
      select: observationSelect,
    })
      .then(( observations: any[] ) => {
        return observations.map(this.mapToObservation);
      });
  }

  getById( id: number ): Promise<Observation>{
    return this.prisma.observation.findFirst({
      select: observationSelect,
      where: {
        id
      },
    }).then(this.mapToObservation);
  }

  /**
   * Map to Observation interface
   *
   * @param { any } observation
   * @returns Observation
   */
  mapToObservation( observation: any ): Observation {
    const result = {
      ...observation,
      location: observation.coordinates,
      activity: observation.activity?.name as ACTIVITY || null,
      moonPhase: observation.moonPhase.name as MOON_PHASE
    };

    delete result.coordinates;

    return result;
  }
}

