isBlank = (string) => {
  if (string.length === 0) {
    return true;
  }
  return false;
};

console.log(isBlank("fashkjdasfhd"));
console.log(isBlank(""));
