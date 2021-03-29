import csv from "csv-parser";
import fs from "fs";
import path from "path";
import { base, assets } from "$app/paths";

let cities = null;

const init = async () => {
  if (cities) return;
  var FILE = path.join(base, "data", "CPdescarga.txt");

  const stream = fs.createReadStream(FILE).pipe(csv({ separator: "|" }));

  var end = new Promise(function (resolve, reject) {
    let rows = {};
    stream.on("data", (row) => {
      if (rows[row.d_codigo]) {
        rows[row.d_codigo] = {
          zipcode: row.d_codigo,
          settlements: [...rows[row.d_codigo].settlements, mapFields(row)],
        };
      } else {
        rows[row.d_codigo] = {
          zipcode: row.d_codigo,
          settlements: [mapFields(row)],
        };
      }
    });
    stream.on("end", () => {
      resolve(rows);
    });
  });

  const rows = await end;

  cities = rows;
};

const mapFields = (row) => ({
  zipcode: row.d_codigo,
  settlement: row.d_asenta,
});

export { cities, init };
