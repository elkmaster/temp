/* eslint-disable-next-line */
export const generateList = (item, count = 4) => {
  if (!item) throw new Error('item is required');

  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push(item);
  }
  return list;
};
