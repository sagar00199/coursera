// Array of names
var names = ["Yaash", "Jayanth", "Mohan", "Jyoti", "Kiran", "jack"];

// Loop over each name
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  // Get the first letter of the name
  var firstLetter = name.charAt(0).toLowerCase();

  // Check if it starts with 'j'
  if (firstLetter === 'j') {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}
