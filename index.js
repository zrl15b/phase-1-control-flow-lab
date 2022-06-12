function scuberGreetingForFeet(x){
  if(x<= 400) {
    return "This one is on me!"
  } else if (x<= 2000) {
    return "That will be twenty bucks."
  }else if (x<2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
  }

function ternaryCheckCity(y){ 
  const isAdult = (y === "NYC") ? "Ok, sounds good." :  "No go.";
  return isAdult
}

function switchOnCharmFromTip(tip){
  let y="asd"
  switch (tip) {
    case 'generous': y='Thank you so much.';
        break;
    case 'not as generous': y='Thank you.';
        break;
    default: y="Bye.";
        break;
}
return y}