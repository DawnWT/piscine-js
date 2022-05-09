const forEach = (arr, callback) => {
  for (const [i, item] of arr.entries()) callback(item, i, arr)
}