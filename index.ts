#!/usr/bin/env bun

import { readFileSync, writeFileSync } from "fs";
import isShipmentFile from "./helpers/isShipmentFile";
import assignShipments from "./helpers/assignShipments";

const argv = process.argv.slice(2);

if ( argv.length < 2) {
  console.log("Usage: bun index.ts <file1> <file2>");
} else {
  const file1 = argv[0];
  const file2 = argv[1];

  const file1Content = readFileSync(file1, "utf-8");
  const file2Content = readFileSync(file2, "utf-8");

  let shipmentsFile, driversFile;

  if (isShipmentFile(file1Content)) {
    shipmentsFile = file1;
    driversFile = file2;
  } else if (isShipmentFile(file2Content)) {
    shipmentsFile = file2;
    driversFile = file1;
  } else {
    console.error("Neither file appears to be a shipment addresses file.");
  }

  const outputData = assignShipments(shipmentsFile!, driversFile!);

  console.log("Total SS:", outputData.totalSS);
  console.log("Assignments:", outputData.assignments);
  
  const outputDataFileName = new Date().toISOString().replace(/:/g, "-");
  const outputDataFilePath = `${import.meta.dir}/results/${outputDataFileName}.json`;
  writeFileSync(outputDataFilePath, JSON.stringify(outputData, null, 2), "utf8");
  console.log(`Results have been written to ${outputDataFilePath}`);
}
