type Cat = {
  id: string;
  url: string;
};

function isCat(data: unknown): data is Cat {
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  return 'id' in data && 'url' in data;
}

export function isCats(data: unknown): data is Cat[] {
  if (!Array.isArray(data)) {
    return false;
  }
  return data.every(isCat);
}
