export function applyFilters(data, filters) {
  return data.filter((item) => item[filters[0]] === filters[1]);
}

export function updateFilters(filteredList, filters) {
  if (filters[2]) { filteredList.push(filters[1]); return filteredList; }
  filteredList.splice(filteredList.indexOf(filters[1]), 1);
  return filteredList;
}
