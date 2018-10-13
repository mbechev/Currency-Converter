const lastUpdate = function() {
  const today = new Date().toJSON().slice(0, 19).split('T').join(' ');
  return today;
};

export {
  lastUpdate,
};
