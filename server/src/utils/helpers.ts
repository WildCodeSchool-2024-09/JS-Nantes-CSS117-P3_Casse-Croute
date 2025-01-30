// Function for season filter

export function getSeason() {
  const today = new Date();
  const season = today.getMonth();
  if (season >= 2 && season <= 4) {
    return "printemps";
  }
  if (season >= 5 && season <= 7) {
    return "été";
  }
  if (season >= 8 && season < 10) {
    return "authomne";
  }
  return "hiver";
}
