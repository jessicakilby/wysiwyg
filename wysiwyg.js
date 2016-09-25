var people = [
{
  title: "Chemist",
  name: "Rosalind Franklin",
  bio: "Chemist and X-ray crystallographer, contributed to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite.",
  image: "img/Rosalind_Franklin.jpg",
  lifespan: {
    birth: 1920,
    death: 1958
  }
},
{
  title: "Geneticist",
  name: "James Watson",
  bio: " American molecular biologist, geneticist and zoologist, best known as one of the co-discoverers of the structure of DNA in 1953 with Francis Crick",
  image: "img/James_Watson.jpg",
  lifespan: {
    birth: 1928,
    death: null
  }
},
{
  title: "Naturalist",
  name: "John Muir",
  bio: "Scottish-American naturalist, author, environmental philosopher and early advocate of preservation of wilderness in the United States.",
  image: "img/John_Muir.jpg",
  lifespan: {
    birth: 1838,
    death: 1914
  }
},
{
  title: "Queen of Hawaii",
  name: "Liliuokalani",
  bio: "Hawaii's first queen and final sovereign ruler before the islands were annexed by the United States in 1898.",
  image: "img/Liliuokalani.jpg",
  lifespan: {
    birth: 1838,
    death: 1917
  }
},
{
  title: "Entrepreneur",
  name: "Larry Ellison",
  bio: "American businessman, entrepreneur, and philanthropist who is co-founder of Oracle Corporation and was CEO from its founding until September 2014",
  image: "img/LE.jpg",
  lifespan: {
    birth: 1944,
    death: null
  }
},
{
  title: "Mathematician",
  name: "Ada Lovelace",
  bio: "English mathematician and writer chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. Her notes on the engine include what is recognised as the first algorithm intended to be carried out by a machine.",
  image: "img/ada-lovelace.jpg",
  lifespan: {
    birth: 1815,
    death: 1852
  }
}
];
var userInput = document.getElementById("input");
var outputEl = document.getElementById("output");
var pC = document.getElementsByClassName("people__container");
var outputText = document.getElementById("userOutput");
var cnt = 0;

for (; cnt < 6; cnt++) {
  var peopleObjects = `<header>${people[cnt].name}: `;
  peopleObjects += `${people[cnt].title}</header>`;
  peopleObjects += `<section class="bio">Bio: ${people[cnt].bio}</section>`;
  peopleObjects += `<img src="${people[cnt].image}">`;
  peopleObjects += `<footer>lifespan: ${people[cnt].lifespan.birth} to `;
  peopleObjects += `${people[cnt].lifespan.death}</footer>`;
  outputEl.innerHTML += `<div class="people__container col-xs-6 col-sm-4">${peopleObjects}</div>`;
  userInputListener();
}

var bioSection;
function userInputListener(){
  for (var i = 0; i < pC.length; i++) {
    pC[i].addEventListener("click", function (event) {
      var bioSection = this.childNodes[1];
      bioSection.parentElement.classList.toggle("border");
      userInput.style.background = "lightgreen";
      if(userInput.value === "Add to selected bio"){
        userInput.value = "";
      } 
      else if (userInput.value === ""){
        userInput.style.background = "white";
        userInput.value = "Add to selected bio";
      }; 
      userInput.addEventListener("keyup", function(){
        for (var j = 0; j < 6; j++) {
        bioSection.innerHTML = userInput.value;
        }
      });
    });
  }
}  

function enterKeyPressed(keypress){
  if (keypress.which === 13) {
    userInput.value = "";
  }
}
document.addEventListener("keypress", enterKeyPressed);
