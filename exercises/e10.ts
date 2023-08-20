// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// make sure that you destructure your parameters
import { AllData, Asteroid } from '../data/data';

export function getAsteroidDataByName({
  allData,
  asteroidName
}: {
  allData: AllData;
  asteroidName: string;
}): Asteroid | undefined {
  const lowerCaseAsteroidName = asteroidName.toLowerCase();

  return allData.asteroids.find(asteroid => asteroid.name.toLowerCase() === lowerCaseAsteroidName);
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
