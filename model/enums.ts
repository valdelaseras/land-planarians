export enum ACTIVITY {
  UNKNOWN = "UNKNOWN",
  PASSIVE = "PASSIVE", // The activity "passive" suggests a state of inactivity or minimal movement. It indicates that the land planarian is not actively engaged in any specific behavior or action. This could be when the planarian is motionless, stationary, or exhibiting a low level of activity.
  RESTING = "RESTING", // The activity "resting" implies a deliberate period of rest or relaxation. It suggests that the land planarian has voluntarily ceased its normal activities and is taking a break, potentially for the purpose of conserving energy or recovering from previous activity. Resting often involves finding a suitable location and assuming a relatively stable posture.
  MOVING = "MOVING", // The activity "moving" indicates that the land planarian is actively in motion, either exploring its environment or transitioning between different locations.
  SEARCHING = "SEARCHING", // The activity "searching" represents a behavior where the land planarian is actively looking for something, such as food, a suitable habitat, or a mate.
  HUNTING = "HUNTING", // The activity "hunting" signifies that the land planarian is actively pursuing and capturing prey as part of its feeding behavior.
  AGGRESSIVE = "AGGRESSIVE", // The activity "aggressive" indicates instances where the land planarian displays aggressive behavior, such as territorial disputes or interactions involving aggression towards other individuals.
  DEFENSIVE = "DEFENSIVE", // The activity "defensive" represents situations where the land planarian exhibits defensive behaviors, such as defensive posturing, fleeing, or protective responses to threats.
  EATING = "EATING", // The activity "eating" denotes the behavior of the land planarian actively consuming food.
  MATING = "MATING", // The activity "mating" represents specific behaviors related to reproduction, such as courtship, copulation, or other activities associated with mating.
  REPRODUCING = "REPRODUCING", // The activity "reproducing" can represent specific reproductive behaviors or stages, such as egg-laying, brooding, or other reproductive activities.
  DECEASED = "DECEASED", // The activity "deceased" indicates that the land planarian has been found dead or lifeless.
  OTHER = "OTHER", // The activity "other" can be used to represent any additional or miscellaneous activities that do not fit into the predefined categories.
}

export enum MOON_PHASE {
  NEW_MOON = "NEW_MOON",
  WANING_CRESCENT = "WANING_CRESCENT",
  THIRD_QUARTER = "THIRD_QUARTER",
  WANING_GIBBOUS = "WANING_GIBBOUS",
  FULL_MOON = "FULL_MOON",
  WAXING_GIBBOUS = "WAXING_GIBBOUS",
  FIRST_QUARTER = "FIRST_QUARTER",
  WAXING_CRESCENT = "WAXING_CRESCENT"
}

export enum FLUORESCENCE {
  DETECTED = "DETECTED",
  NOT_DETECTED = "NOT_DETECTED",
  NOT_DETERMINED = "NOT_DETERMINED"
}

export enum ENVIRONMENT {
  FOREST = "FOREST",
  GRASSLAND = "GRASSLAND",
  WETLAND = "WETLAND",
  SHRUBLAND = "SHRUBLAND",
  ALPINE = "ALPINE",
  URBAN = "URBAN",
  CAVES = "CAVES",
  DUNES = "DUNES",
  RIVERBEDS = "RIVERBEDS",
  MOUNTAINS = "MOUNTAINS",
  FARMLAND = "FARMLAND",
  PARKS = "PARKS",
  GARDENS = "GARDENS",
  OTHER = "OTHER"
}

export enum WEATHER {
  CLEAR = "CLEAR",
  MOSTLY_CLEAR = "MOSTLY CLEAR",
  PARTLY_CLOUDY = "PARTLY CLOUDY",
  MOSTLY_CLOUDY = "MOSTLY CLOUDY",
  CLOUDY = "CLOUDY",
  OVERCAST = "OVERCAST",
  LIGHT_RAIN = "LIGHT RAIN",
  MODERATE_RAIN = "MODERATE RAIN",
  HEAVY_RAIN = "HEAVY RAIN",
  SHOWERS = "SHOWERS",
  SCATTERED_SHOWERS = "SCATTERED SHOWERS",
  LIGHT_SNOW = "LIGHT SNOW",
  MODERATE_SNOW = "MODERATE SNOW",
  HEAVY_SNOW = "HEAVY SNOW",
  THUNDERSTORMS = "THUNDERSTORMS",
  FOG = "FOG",
  MIST = "MIST",
  HAZE = "HAZE",
  WINDY = "WINDY",
  HAIL = "HAIL",
  OTHER = "OTHER"
}


export enum STATUS {
  ALIVE = "ALIVE",
  DECEASED = "DECEASED",
  UNKNOWN = "UNKNOWN"
  // perhaps also add wounded, sickly or something like that
}
