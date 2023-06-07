import { ACTIVITY, FLUORESCENCE, STATUS } from "@/model/enums";

export interface INDIVIDUAL {
  status: STATUS;
  fluorescence: FLUORESCENCE;
  activity: ACTIVITY;  // if status = deceased, activity = also deceased automatically
}
