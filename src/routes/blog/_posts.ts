import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';
import { base, assets } from '$app/paths';

let cities = null;

const init = async () => {
	if (cities) return;
	var FILE = path.join(base, 'data', 'CPdescarga.txt');

	const stream = fs.createReadStream(FILE).pipe(csv({ separator: '|' }));

	var end = new Promise(function (resolve, reject) {
		let rows = {};
		stream.on('data', (row) => {
			rows[row.d_codigo] = { ...row, slug: row.d_codigo, id: row.d_codigo };
		});
		stream.on('end', () => {
			resolve(rows);
		});
	});

	// This example uses Elder.js source code to show how to dynamically create slugs for a route.
	// There's no special relation to hookInterface. The hookInterface is just a plain array of JS objects and
	// hook.hook represents their name in this usecase.
	// The hook interface is the "contract" that Elder.js enforces to execute functions on various hooks.
	// You can view the source code here: https://github.com/Elderjs/elderjs/blob/master/src/hookInterface/hookInterface.ts
	const rows = await end;

	cities = rows;
};

export { cities, init };
