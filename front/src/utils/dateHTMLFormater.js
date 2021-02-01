export default (date) => {
  let d = new Date(date);
  if (Number.isNaN(d.getTime())) { // TEST IF IS INVALID DATE -> Date au format dd/mm/yyyy
    const dateTbl = date.split('/');
    d = new Date(dateTbl[2], dateTbl[1] - 1, dateTbl[0], 0, 0, 0, 0);
  }
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};
