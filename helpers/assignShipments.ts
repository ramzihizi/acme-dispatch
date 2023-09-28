import { readFileSync } from "fs";
import calculateSS from "./calculateSS";

const assignShipments = (shipmentsFile: string, driversFile: string) => {
  const shipments = readFileSync(shipmentsFile, "utf-8").split("\n");
  const drivers = readFileSync(driversFile, "utf-8").split("\n");
  let totalSS = 0;
  const assignments = [];

  for (const shipment of shipments) {
    let maxSS = -1;
    let bestDriver = null;

    for (const driver of drivers) {
      const currentSS = calculateSS(shipment, driver);

      if (currentSS > maxSS) {
        maxSS = currentSS;
        bestDriver = driver;
      }
    }

    if (bestDriver) {
      totalSS += maxSS;
      assignments.push({ shipment, bestDriver });
      const driverIndex = drivers.indexOf(bestDriver);
      if (driverIndex > -1) {
        drivers.splice(driverIndex, 1);
      }
    }
  }

  const outputData = {
    totalSS,
    assignments,
  };

  return outputData;
};

export default assignShipments;
