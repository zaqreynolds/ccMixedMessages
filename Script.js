const locations = [
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

const randLocate = locations[Math.floor(Math.random() * locations.length)];

const today = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

const randHighs = Math.floor(Math.random() * 70);

const randLows = Math.floor(Math.random() * -220);

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

const weather = allWeather[Math.floor(Math.random()) * allWeather.length];

const greeting = () => {
  console.log(
    `Good-day fellow Martians. It is now ${today} and we are expecting ${weather} highs of ${randHighs} degrees Fahrenheit, with evening lows dropping down to ${randLows} degrees Fahrenheit in ${randLocate}.`
  );
};

greeting();
