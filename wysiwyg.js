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
var peopleContainer = document.getElementsByClassName("people__container");
var counter = 0;

for (; counter < 6; counter++) {
  outputEl.innerHTML += `<div class="people__container" id="people--${counter}"><header>${people[counter].name}: ${people[counter].title}</header><section>Bio: ${people[counter].bio}</section><img src="${people[counter].image}"><footer>lifespan: ${people[counter].lifespan.birth} to ${people[counter].lifespan.death}</footer><input id="input" type="text" value="Add to bio"></div>`;
}
for (var i = 0; i < peopleContainer.length; i++) {
  var pC = document.getElementsByClassName("people__container");
    for (var i = 0; i < pC.length; i++) {
      pC[i].addEventListener("click", function (event) {
        console.log(event.target);
        event.target.parentElement.style.border = "5px dotted black";  
      });
    }
};

function enterKeyPressed(keypress){
  if (keypress.which === 13) {
    //();
    //.value = "";
  }
}
document.addEventListener("keypress", enterKeyPressed);

// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.