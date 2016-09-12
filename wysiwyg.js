var people = [
{
  title: "Chemist",
  name: "Rosalind Franklin",
  bio: "English chemist and X-ray crystallographer who made contributions to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite.",
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
]
var userInput = document.getElementById("input");
var outputEl = document.getElementById("output");
var pC = document.getElementsByClassName("people__container");
var userInputOutput = document.getElementById("userOutput");
var cnt = 0;

for (; cnt < 6; cnt++) {
  var peopleObjects = `<header>${people[cnt].name}: `;
  peopleObjects += `${people[cnt].title}</header>`;
  peopleObjects += `<section>Bio: ${people[cnt].bio}</section>`;
  peopleObjects += `<img src="${people[cnt].image}">`;
  peopleObjects += `<footer>lifespan: ${people[cnt].lifespan.birth} to `;
  peopleObjects += `${people[cnt].lifespan.death}</footer>`;
  peopleObjects += `<input id="input" type="text" value="Add to bio">`;
  outputEl.innerHTML += `<div class="people__container" id="people--${cnt}">${peopleObjects}</div>`;

}
// When you click on one of the person elements, a dotted border should appear around it.
for (var i = 0; i < pC.length; i++) {
  var pC = document.getElementsByClassName("people__container");
  for (var i = 0; i < pC.length; i++) {
    pC[i].addEventListener("click", function (event) {
      event.target.parentElement.style.border = "5px dotted black"; 
    });
  }
};
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
var userInput = document.getElementById("input");
userInput.addEventListener("focus", function (event) {
        if(userInput.value === "Add to bio"){
          userInput.value = "";
          event.target.style.background = "lightgreen";
        };
      }); 
userInput.addEventListener("blur", function (event) {
        if(userInput.value === ""){
          userInput.value = "Add to bio";
          event.target.style.background = "white";
        };
      });       
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
var uI = userInput.value;
userInputOutput.innerHTML += `<div>inside</div>`; 


// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
function enterKeyPressed(keypress){
  if (keypress.which === 13) {
    userInput.value = "";
  }
}
document.addEventListener("keypress", enterKeyPressed);
