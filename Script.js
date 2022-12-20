const location = [
  "Olympus Mons",
  "Tharsis",
  "Valles Marineris",
  "North Pole",
  "South Pole",
  "Gale Crater",
  "Mount Sharp",
  "Springfield",
  "Medusae Fossae",
  "Hale Crater",
  "Ghost Dunes",
  "Columbia Hills",
  "Eberswalde",
  "Holden Crater",
  "Jezero Crater",
  "Mawrth Vallis",
  "Syrtis",
  "Melas",
];

const locate = location[Math.floor(Math.random() * location.length)];

const today =  new Date().toISOString().slice(0, 10);

const highs = Math.floor(Math.random() * 70);

const lows = Math.floor(Math.random() * -220);

const allWeather = [
  "clear skies",
  "overcast skies",
  "turbulent weather",
  "moderate sandstorms",
  "biblical winds",
  "mild gusts of wind",
  "scattered clouds",
  "localized clouds",
];

const weather = allWeather[Math.floor(Math.random()) * location.length];

const runMe = () => {
  console.log(`Good-day fellow Martians. As of ${today} we are expecting ${weather} highs of ${highs} degrees Fahrenheit, 
    with evening lows dropping down to ${lows} in ${locate}.`);
};

runMe();
