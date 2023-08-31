function scuberGreetingForFeet(someValue) {
  let result;
  if (someValue < 400) result = `This one is on me!`;
  if (someValue > 400 && someValue < 2000)
    result = `That will be twenty bucks.`;
  if (someValue > 2000 && someValue < 2500)
    result = "I will gladly take your thirty bucks.";
  if (someValue > 2500) result = "No can do.";
  return result;
}

function ternaryCheckCity(city) {
  let result;
  if (city == "NYC") {
    result = "Ok, sounds good.";
  } else {
    result = "No go.";
  }
  return result;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
