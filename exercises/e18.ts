// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy
import { Asteroid } from '../data/data';
import { maxBy } from './e17';

export function getGreatestDiscoveryYear(asteroids: Asteroid[]): number | undefined {
  const discoveryCounts = new Map<number, number>();
  for (const asteroid of asteroids) {
      const count = discoveryCounts.get(asteroid.discoveryYear) || 0;
      discoveryCounts.set(asteroid.discoveryYear, count + 1);
  }
  const yearCountPairs = Array.from(discoveryCounts.entries());
  const maxPair = maxBy(yearCountPairs, pair => pair !== undefined ? pair[1] : 0);
  return maxPair ? maxPair[0] : undefined;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
