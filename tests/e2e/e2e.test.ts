import { readFileSync } from "fs";
import { join } from "path";
import assignShipments from "../../helpers/assignShipments";
import { expect, test } from "bun:test";

const readJsonFile = (filePath: string) => {
  const rawContent = readFileSync(filePath, "utf-8");
  return JSON.parse(rawContent);
};

  test("Should correctly assign shipments and drivers", () => {
    // Arrange: Prepare the test data files
    const dir = import.meta.dir;

    const shipmentsFile = join(dir, "testData", "shipments.txt");
    const driversFile = join(dir, "testData", "drivers.txt");
    const expectedResultsFile = join(
      dir,
      "testData",
      "expectedResults.json"
    );

    const res = assignShipments(shipmentsFile, driversFile);

    const expectedResults = readJsonFile(expectedResultsFile);

    expect(res).toEqual(expectedResults);
  });
