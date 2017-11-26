var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.",
    dinosaur = "triceratops";

dinosaur = dinosaur.toUpperCase();

var newText = text.replace("Velociraptor", dinosaur);

console.log("Stary tekst (błędny): \n" + text);
console.log("Poprawiony tekst (cały): \n" + newText);
console.log("Poprawiony tekst (połowa) \n" + newText.substr(0, newText.length/2));