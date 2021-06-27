import { words } from "./words.js";
const typeWord = document.getElementById("word");
const form = document.getElementById("form");
const meaning = document.getElementById("meaning");
const btnDiv = document.querySelector(".buttons");
const table = document.querySelector(".table");
const wordsArray = words[0].split(`\n`).filter((word) => word.trim() !== "");
let dictionary = [];

(async () => {
  const dict = await fetch("./data.json");
  dictionary = await dict.json();
  dictionaryWorld();
})();

function dictionaryWorld() {
  // ! Get search Word
  const searchWordFromDictionary = (word) => {
    //! if empty than return
    if (word === "") {
      displayButtonToSelect("");
      return;
    }

    let matchedWords = [];
    for (let dictWord in dictionary) {
      if (dictWord.startsWith(word)) {
        matchedWords.push(dictWord);
      }
    }

    //! Display Search btn
    displayButtonToSelect(matchedWords);
  };
  // ! passs type word to search Function
  typeWord.addEventListener("input", (e) => {
    btnDiv.innerHTML = "";
    meaning.innerHTML = "";

    searchWordFromDictionary(e.target.value);
  });

  // ! get Meaning of searchWords
  const getMeaning = (wordsArray) => {
    const MeaningArray = wordsArray.map((word) => dictionary[word]);
    return MeaningArray;
  };

  // ! display Button
  const displayButtonToSelect = (searchBtn) => {
    //!  first remove every thing than ADD
    // btnDiv.innerHTML = "";
    // ! if search is empty
    if (searchBtn === "") return;

    searchBtn.slice(0, 15).forEach((word) => {
      // ? making button
      let btn = document.createElement("button");
      btn.textContent = word;

      // ! adding event so that it can get meaning for click button
      btn.addEventListener("click", () => {
        displayMeaning(word);
        typeWord.value = word;
      });

      // ? appending to btn to its container
      btnDiv.appendChild(btn);
    });
  };

  //! Display Meaning
  const displayMeaning = (word) => {
    //! First Empty meaning div
    meaning.innerHTML = "";

    const [meaningArray] = getMeaning([word]);

    // ! if wrong word or not in dicionary
    if (!meaningArray) {
      alert("There is no such word in dictionary");
      return;
    }
    const ulEl = document.createElement("ul"); // ! making UL

    // ! Making list of meaning
    meaningArray.forEach((mean) => {
      const liEl = document.createElement("li"); //! making li
      liEl.innerText = mean; //! setting li text to meaning
      ulEl.appendChild(liEl); //! appending li to ul
    });
    meaning.appendChild(ulEl); //! appeending ul to meanig div
  };

  // ! adding EventListener on form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayMeaning(typeWord.value);
    btnDiv.innerHTML = "";
  });

  //! Displaying specific words
  const wordTable = () => {
    const array = getMeaning(wordsArray);
    wordsArray.forEach((word, i) => {
      const markup = `
      
      <div class = "head">
          <span class = "number">${i + 1}</span>
          <span class="wordof" >${word}</span>
          </div>
          <span>${array[i]}</span>
     
      `;
      const meaning = document.createElement("div");
      meaning.className = "meaning";
      meaning.insertAdjacentHTML("beforeend", markup);
      meaning.addEventListener("click", () => {
        typeWord.value = word;
        displayMeaning(word);
        window.scrollTo({
          top: "0",
        });
      });
      table.appendChild(meaning);
    });
  };
  wordTable();
}

window.onload = function () {
  Particles.init({
    selector: ".background",
    connectParticles: true,
    sizeVariations: 2,
    maxParticles: 100,
    color: "#892A36",
  });
};
