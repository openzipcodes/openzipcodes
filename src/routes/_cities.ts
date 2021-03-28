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
      rows[row.d_codigo] = { ...row, slug: row.d_codigo, id: row.d_codigo };
    });
    stream.on("end", () => {
      resolve(rows);
    });
  });

  const rows = await end;

  cities = rows;
};

export { cities, init };
