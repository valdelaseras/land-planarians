import { NextResponse } from "next/server";
import ObservationService from "@/services/observation.service";

// Observations controller
export async function GET(request: Request) {
  const service = new ObservationService();
  return NextResponse.json(await service.getAll());
}
