export async function createUrl(text: string, url: string) {
  return await fetch('/api/createUrl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, url }),
  });
}
