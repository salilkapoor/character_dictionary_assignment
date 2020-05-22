export function yearsDiff(d1) {
  const date1 = new Date(d1);
  const date2 = new Date();

  return date2.getFullYear() - date1.getFullYear();
}
