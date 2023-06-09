-- AlterTable
ALTER TABLE `Observation` MODIFY `weather` ENUM('CLEAR', 'MOSTLY_CLEAR', 'PARTLY_CLOUDY', 'MOSTLY_CLOUDY', 'CLOUDY', 'OVERCAST', 'LIGHT_RAIN', 'MODERATE_RAIN', 'HEAVY_RAIN', 'SHOWERS', 'SCATTERED_SHOWERS', 'LIGHT_SNOW', 'MODERATE_SNOW', 'HEAVY_SNOW', 'THUNDERSTORMS', 'FOG', 'MIST', 'HAZE', 'WINDY', 'HAIL', 'OTHER') NOT NULL;
