import {PrismaClient} from "@prisma/client";

export default class ObservationService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getAll() {
    return this.prisma.observation.findMany();
  }

  getById( id: number ){
    return this.prisma.observation.findFirst({
      where: {
        id
      },
      include: {
        activity: true,
        coordinates: true,
        moonPhase: true,
      }
    });
  }
}

