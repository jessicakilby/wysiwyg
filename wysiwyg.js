var people = [
{
  title: "Chemist",
  name: "Rosalind Franklin",
  bio: "English chemist and X-ray crystallographer who made contributions to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite.",
  image: "Rosalind_Franklin.jpg",
  lifespan: {
    birth: 1920,
    death: 1958
  }
},
{
  title: "Geneticist",
  name: "James Watson",
  bio: " American molecular biologist, geneticist and zoologist, best known as one of the co-discoverers of the structure of DNA in 1953 with Francis Crick",
  image: "James_Watson.jpg",
  lifespan: {
    birth: 1928,
    death: null
  }
},
{
  title: "Naturalist",
  name: "John Muir",
  bio: "Scottish-American naturalist, author, environmental philosopher and early advocate of preservation of wilderness in the United States.",
  image: "John_Muir.jpg",
  lifespan: {
    birth: 1838,
    death: 1914
  }
},
{
  title: "Queen of Hawaii",
  name: "Liliuokalani",
  bio: "Hawaii's first queen and final sovereign ruler before the islands were annexed by the United States in 1898.",
  image: "Liliuokalani.jpg",
  lifespan: {
    birth: 1838,
    death: 1917
  }
},
{
  title: "Entrepreneur",
  name: "Larry Ellison",
  bio: "American businessman, entrepreneur, and philanthropist who is co-founder of Oracle Corporation and was CEO from its founding until September 2014",
  image: "Larry_Ellison.jpg",
  lifespan: {
    birth: 1944,
    death: null
  }
},
{
  title: "Mathematician",
  name: "Ada Lovelace",
  bio: "English mathematician and writer chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. Her notes on the engine include what is recognised as the first algorithm intended to be carried out by a machine.",
  image: "ada-lovelace.jpg",
  lifespan: {
    birth: 1815,
    death: 1852
  }
}
]

var counter = 0;
var outputEl = document.getElementById("output");

for (; counter < 6; counter++) {
  outputEl.innerHTML += `<div class="people__container" id="people--${counter}"><header>${people[counter].name}: ${people[counter].title}</header><section>${people[counter].bio}<img src="${people[counter].image}"></section><footer>${people[counter].lifespan.birth} to ${people[counter].lifespan.death}</footer></div>`;
}

var containerEl = document.getElementsByClassName("people__container");

for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    
  });
};