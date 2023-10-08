import { readFile, writeFile } from 'fs/promises';

export async function getUrlFromShort(short: string): Promise<string> {
  const json = JSON.parse(
    (await readFile(`${__dirname}/saved.json`)).toString()
  );
  if (json[short]) {
    return json[short];
  }
  return null;
}

export async function createUrl(short: string, url: string): Promise<void> {
  const json = JSON.parse(
    (await readFile(`${__dirname}/saved.json`)).toString()
  );
  json[short] = url;

  writeFile(`${__dirname}/saved.json`, JSON.stringify(json));
}
