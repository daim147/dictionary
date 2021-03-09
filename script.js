const worde = document.getElementById("word");
const meaning = document.getElementById("meaning");
const btnDiv = document.querySelector(".buttons");

getData();

async function getData() {
  let dict = await fetch("./data.json");
  let data = await dict.json();
  return data;
}

worde.addEventListener("input", async function () {
  let requiredData = await getData();
  let keysOfObject = Object.keys(requiredData);

  let arrayofValue = [];
  let typedValueWord = worde.value;
  keysOfObject.forEach((key) => {
    if (key.slice(0, typedValueWord.length) === typedValueWord) {
      arrayofValue.push(key);
    }
  });

  createMeaning(arrayofValue);
});
async function createMeaning(arrayOfValue) {
  btnDiv.innerHTML = "";
  if (worde.value === "") {
    arrayOfValue = "";
    meaning.innerHTML = ''
  } else {
    arrayOfValue.slice(0, 10).forEach((value) => {
      let btn = document.createElement("button");
      btn.innerText = value;

      btn.addEventListener("click", async () => {
        meaning.innerHTML = ""
        worde.value = value;
        let mkLi = document.createElement("ul");
    meaning.innerHTML = "";

    let requiredData = await getData();
    requiredData[worde.value].forEach((value) => {
      const makingul = document.createElement("li");
      makingul.innerText = value;
      mkLi.appendChild(makingul);
      meaning.appendChild(mkLi);
    });
      });
      btnDiv.appendChild(btn);
    });
  }
}
// window.addEventListener("keydown", async function (e) {
//   if (e.key === "Enter") {
//     let mkLi = document.createElement("ul");
//     meaning.innerHTML = "";

//     let requiredData = await getData();
//     requiredData[worde.value].forEach((value) => {
//       const makingul = document.createElement("li");
//       makingul.innerText = value;
//       mkLi.appendChild(makingul);
//       meaning.appendChild(mkLi);
//     });
//   }
// });

// .addEventListener("keydown", async function (e) {
//   if (e.key === "Enter") {
    
//   }
// });

// worde.addEventListener("input",(e)=>{
//  let letter = e.target.value
//  active = true
//  getData(letter)
// })

// console.log(word)

// const abc = Object.keys(hello)
// // console.log(abc)
// let a = []

// let active = true
// let btnclick = true
// // let length = wor
// abc.forEach(item =>{
//   if(item.slice(0,word.length) == word){
//   //  console.log(word.length)
//    if(word.length === 0){
//     a = []

//   }
//     a.push(item)

//   }
// })
//   a = a.slice(0,10)
// a.forEach(item =>{
//   const btn  = document.createElement("button")
//   btn.innerText = `${item}`
//   meaning.appendChild(btn)
//   btn.addEventListener("click", ()=>{
//     worde.value = ''

//     btnclick = false
//     worde.value = btn.innerText
//     // btn.remove()
//     // mak()
//   })

// })

// // console.log(a)

// function mak(hello, word){
//   const mkOl = document.createElement("ul")
//   meaning.appendChild(mkOl)
//   if(!btnclick){
//     console.log(worde.value, "hy")

//     word = worde.value

//     btnclick = true
//   }
//   console.log(word.value)

//   setTimeout(()=>{
//     document.querySelectorAll("button").forEach(btn => btn.remove())
//   },1000)
//   if(!hello[word]){
//     meaning.innerHTML = `Meaning of word not found!`
//     worde.value = ''
//     console.log("hy")

//   }else{
//     hello[word].forEach(words => {
//       const makingul = document.createElement("li")
//       makingul.innerText = words
//       mkOl.appendChild(makingul)
//       setTimeout(()=>{
//         worde.value = ''

//       },1000)
//       console.log("by", words)

//     });
//   }
// }

// worde.addEventListener("change", (e)=>{
//   let words = e.target.value;
//   active = false
//   getData(words)
//   // if(!btnclick){
//   //   words = ''
//   //   getData(words)
//   // }else{
//   //   getData(words)

//   // }
// })

// worde.addEventListener("input",(e)=>{
//  let letter = e.target.value
//  active = true
//  getData(letter)
// })

// // console.log(word)

// async function getData(word){
//     dict = await fetch('./data.json')
//      hello = await dict.json()
//     // console.log(hello)
//     meaning.innerText = ''
//     if(!active){
//       active = true
//       mak(hello , word)

//     }

//     const abc = Object.keys(hello)
//     // console.log(abc)
//     let a = []

//     // let length = wor
//     abc.forEach(item =>{
//       if(item.slice(0,word.length) == word){
//       //  console.log(word.length)
//        if(word.length === 0){
//         a = []

//       }
//         a.push(item)

//       }
//     })
//       a = a.slice(0,10)
//     a.forEach(item =>{
//       const btn  = document.createElement("button")
//       btn.innerText = `${item}`
//       meaning.appendChild(btn)
//       btn.addEventListener("click", ()=>{
//         worde.value = ''

//         btnclick = false
//         worde.value = btn.innerText
//         // btn.remove()
//         // mak()
//       })

//     })

//     // console.log(a)

// }

// function mak(hello, word){
//   const mkOl = document.createElement("ul")
//   meaning.appendChild(mkOl)
//   if(!btnclick){
//     console.log(worde.value, "hy")

//     word = worde.value

//     btnclick = true
//   }
//   console.log(word.value)

//   setTimeout(()=>{
//     document.querySelectorAll("button").forEach(btn => btn.remove())
//   },1000)
//   if(!hello[word]){
//     meaning.innerHTML = `Meaning of word not found!`
//     worde.value = ''
//     console.log("hy")

//   }else{
//     hello[word].forEach(words => {
//       const makingul = document.createElement("li")
//       makingul.innerText = words
//       mkOl.appendChild(makingul)
//       setTimeout(()=>{
//         worde.value = ''

//       },1000)
//       console.log("by", words)

//     });
//   }
// }
