export default (data) => data.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
