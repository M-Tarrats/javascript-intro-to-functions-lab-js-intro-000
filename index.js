function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO');
}

function logWhisper(string) {
  console.log('hello');
}

function sayHiToGrandma(string){
  switch (string) {
    case "hello":
      return "I can't hear you!"
      break;
    case "HELLO":
      return "YES INDEED!"
      break;
    case "I love you, Grandma.":
      return "I love you, too."
      break;
    default:
  }
}
