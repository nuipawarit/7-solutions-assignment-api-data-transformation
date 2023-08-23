export const findMode = (numbers: number[]): number | 0 => {
  const frequencyMap: { [key: number]: number } = {};

  for (const num of numbers) {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  }

  let maxFrequency = 0;
  let mode: number[] = [];

  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mode = [parseInt(num)];
    } else if (frequencyMap[num] === maxFrequency) {
      mode.push(parseInt(num));
    }
  }

  return mode[0] || 0;
};
