import { readFile } from 'fs/promises';

export async function getUrlFromShort(short: string): Promise<string> {
  const json = JSON.parse(
    (await readFile(`${__dirname}/saved.json`)).toString()
  );
  if (json[short]) {
    return json[short];
  }
  return null;
}
