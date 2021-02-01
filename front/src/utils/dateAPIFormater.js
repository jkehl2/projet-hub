export default (date) => {
  let d = new Date(date);
  if (Number.isNaN(d.getTime())) { // TEST IF IS INVALID DATE -> Date au format dd/mm/yyyy
    const dateTbl = date.split('/');
    d = new Date(dateTbl[2], dateTbl[1] - 1, dateTbl[0], 0, 0, 0, 0);
  }
  return d.toISOString;
};
