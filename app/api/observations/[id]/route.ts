import { NextResponse } from "next/server";
import ObservationService from "@/services/observation.service";

// Observation controller
export async function GET(request: Request, { params }: { params: { id: string }}) {
  const service = new ObservationService();
  return NextResponse.json(await service.getById( parseInt( params.id ) ));
}
