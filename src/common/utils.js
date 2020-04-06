export const getDayAndTime = (date) =>
  date?.toDate().toLocaleString().split(', ') || [];
