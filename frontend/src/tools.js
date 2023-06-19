export const normalize = (data) => data.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
export const test = () => {};
