import {PrismaClient} from "@prisma/client";
import { Observation } from "@/model/observation.interface";
import { prisma } from "@/prisma/prisma.client";

const observationSelect = {
  id: true,
  datetime: true,
  individuals: {
    select: {
      id: true,
      fluorescence: true,
      status: true,
      activity: true,
    }
  },
  coordinates: {
    select: {
      longitude: true,
      latitude: true
    }
  },
  temperature: true,
  weather: true,
  humidity: true,
  moonPhase: true,
  environment: true,
  note: true,
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
      individuals: observation.individuals,
      location: observation.coordinates,
    };

    delete result.coordinates;

    return result;
  }
}

