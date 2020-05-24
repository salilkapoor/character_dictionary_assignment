function _getFilteredData(data, type, typeVal) {
  return data.filter((item) => item[type] === typeVal);
}

export function applyFilters(data, appliedFilters) {
  let filteredData = [...data];
  appliedFilters.forEach((({ type, typeVal }) => {
    const dItem = _getFilteredData(filteredData, type, typeVal);
    filteredData = [];
    filteredData.push(...dItem);
  }));

  return filteredData;
}

export function updateFilters(filteredList, filters) {
  if (filters[2]) {
    const tempObj = { type: filters[0], typeVal: filters[1] };
    filteredList.push(tempObj);
    return filteredList;
  }
  const indexOfFilter = filteredList.findIndex(
    ({ type, typeVal }) => (type === filters[0] && typeVal === filters[1])
  );
  filteredList.splice(indexOfFilter, 1);

  return filteredList;
}

export function searchByName(data, keyword) {
  return data.filter((item) => (
    item.name.includes(keyword)
  ));
}
