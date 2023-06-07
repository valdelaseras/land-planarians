import { ACTIVITY, FLUORESCENCE, STATUS } from "@/model/enums";

export interface Individual {
  id: number;
  status: STATUS;
  fluorescence: FLUORESCENCE;
  activity: ACTIVITY;  // if status = deceased, activity = also deceased automatically
}
