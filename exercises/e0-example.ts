import { Planet } from "../data/data"; // Assuming you have a Planet interface or type defined

// SPACE DATA SAMPLE EXERCISE 0
// Return the name of the first Planet in the array
// Return example: 'Planet Name'

export function getFirstPlanetName(data: { planets: Planet[] }): string | undefined {
  const planets = data.planets;
  if (planets[0]) {
    return planets[0].name;
  }
  return undefined;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-0"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
