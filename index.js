function distanceFromHqInBlocks(blocks) {
  const hqBlock = 42; // Headquarters at block 42
  return Math.abs(blocks - hqBlock);
}
function distanceFromHqInFeet(blocks) {
  const feetPerBlock = 264; // 1 block = 264 feet
  return Math.abs(blocks - 42) * feetPerBlock; // Calculate distance from HQ at block 42
}


function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(start - destination) * feetPerBlock;
}


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance > 2500) {
      return "cannot travel that far";
  } else if (distance > 2000) {
      return 25; // Flat fee
  } else if (distance > 400) {
      return (distance - 400) * 0.02; // $0.02 per foot after the first 400 feet
  } else {
      return 0; // Free for the first 400 feet
  }
}
