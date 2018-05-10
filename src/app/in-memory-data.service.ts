import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mrs. Full Metal Jacket', detail:'All who look on despair, for Mrs. FullMetal Jacket is here!' },
      { id: 12, name: 'Pablo Escobars Mustache', detail:'Dangerous Anti-Hero with a deeply concerning attaachment to a drug dealers mustache' },
      { id: 13, name: 'Ziggy Big Guns the Wiggler', detail:'With his big guns, and ability to wiggle out of any situation, Ziggy is the man to call when you are not sure what actually needs to be done.' },
      { id: 14, name: 'El Capitan TeleMundo', detail:'DONDE ESTA EL BANO! POOORQQQQQUUUUUUEEEEE!!!???' },
      { id: 15, name: 'The Arm Chair General', detail:'Noob, ur doing it WRONG... seriously you suck' },
      { id: 16, name: 'Samuel L. Jackson', detail:'@#$%%#@!' },
      { id: 17, name: 'Razor w/ sidekick Emo Boy', detail:'The deadly combo will drone on and on about their Dad... putting the bad guy into the dark depression' },
      { id: 18, name: 'Killer Mullet Dood', detail:'Insert "Cherry Pie" and clear the path for the I-ROK' },
      { id: 19, name: 'Mr Adderall the Thinker', detail:'hey what are you doing man that is really wrong whats that in your hand no the other thing you dont seriously think im afraid of that i have dinner in 45 minutes what times the game on what are you still doing here' },
      { id: 20, name: '404 Error', detail:'... ' }
    ];
    return {heroes};
  }
}