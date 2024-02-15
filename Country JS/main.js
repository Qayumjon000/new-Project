const API = "https://restcountries.com/v3.1/all"
const searchInput = document.querySelector("#search")
const select = document.querySelector("#select")
const moon = document.querySelector(".fa-moon") 
const sun  = document.querySelector(".fa-sun")
const cardsContainer = document.querySelector(".cards-container") 
const loader = document.querySelector(".loader")
const modal = document.querySelector(".modal")
loader.classList.add("hide")
const getData = async ()=>{
  const link = "https://restcountries.com/v3.1/all"
  loader.classList.remove("hide")
  let req = await fetch(API)
  let data = await req.json()
  loader.classList.add("hide")
  console.log(data);
cards(data)
selectFunction(data)
inputSearch(data)
clicked(data)
}
getData()


function clicked(data){
  const Img = document.querySelectorAll(".card img")
  Img.forEach(e => {
    e.addEventListener("click", ()=>{
      cardsContainer.classList.add('hide')
      modal.classList.add("modalOpen")
      data.filter(item =>{
        if(e.src == item.flags.png){
          let language = Object.keys(item.languages).toString()
          modal.innerHTML = ""
          modal.innerHTML += `
          <span id="delModal">
          <h2 class="common">${item.name.common}</h2>
          <i id="modalIcon" class="fa-solid fa-arrow-right"></i>
        </span>
        <div class="modalInfo">
          <div class="name">
            <div class="box">
              <p>Flag</p>
              <img src="${item.flags.png}" alt="">
            </div>
            <div class="box">
              <p>Coat of Arms</p>
              <img src="${item.coatOfArms.png}" alt="">
            </div>
          </div>
          <div class="name-2">
            <span>
              <p>${item.name.official}</p>
            </span>
            <span>
              <p>Capital</p>
              <p>${item.capital}</p>
            </span>
            <span>
              <p>Population</p>
              <p>${item.population}</p>
            </span>
            <span>
              <p>Region</p>
              <p>${item.region}</p>
            </span>
            <span>
              <p>Language</p>
              <p>${language}</p>
            </span>
            <span>
              <p>cca2</p>
              <p>${item.cca2}</p>
            </span>
            <span>
              <p>cca3</p>
              <p>${item.cca3}</p>
            </span>
            <span>
              <p>Subregion</p>
              <p>${item.subregion}</p>
            </span>
            <span>
              <p>Independent</p>
              <p>${item.independent}</p>
            </span>
          </div>
        </div>` 
        }
      })
    })
  })
  window.addEventListener("click", (e)=>{
const modalIcon = document.querySelector("#modalIcon")
    if(e.target.id == "modalIcon"){
      e.target.parentElement.parentElement.classList.remove("modalOpen")
      cardsContainer.classList.remove("hide")
    }
  })
}


function cards(data){
  cardsContainer.innerHTML = ""
  const filtered = data.filter(item =>{
    cardsContainer.innerHTML += `
    <div class="card">
    <img class="cardImg" src="${item.flags.png}" alt="">
    <div> 
    <h1>Name: ${item.name.common}</h1>
    <p>Capital: ${item.capital}</p>
    <p>Population: ${item.population}</p>
    <p style="color: blue; font-weight: bolder;">Region: ${item.region}</p>
    </div>
    </div>`
  })
}
function selectFunction(data){
  select.addEventListener('change', ()=>{
    let filtered = data.filter(item =>{
      console.log(item.region);
      if(select.value == item.region){
        return select.value == item.region
      }else if(select.value == "all"){
        return item
      }
    })
    cards(filtered)
  })
}
function  inputSearch (data) {
  searchInput.addEventListener("input", ()=>{
  const filtered = data.filter(item =>{
    return item.name.common.toLowerCase().includes(searchInput.value.toLowerCase())
  })
  cards(filtered)
  })
}

// Nightmode
  sun.classList.add("hide")
moon.addEventListener("click", ()=>{
  sun.classList.remove('hide')
  cardsContainer.classList.add("darkMode")
  moon.classList.add("hide")
  modal.classList.add("darkMode")
})
sun.addEventListener("click", ()=>{
  moon.classList.remove("hide")
  cardsContainer.classList.remove("darkMode")
  sun.classList.add("hide")
  modal.classList.remove("darkMode")
})
const right = document.querySelector(".fa-arrow-right")
const mode = document.querySelector("#mode")
const icon = document.querySelector("#icon")
right.classList.add("hide")
icon.addEventListener("click", ()=>{
  searchInput.classList.add("open")
  select.classList.add("hide")
  mode.classList.add("hide")
  icon.classList.add("hide")
  right.classList.remove("hide")
})
right.addEventListener("click", ()=>{
  searchInput.classList.remove("open")
  select.classList.remove("hide")
  mode.classList.remove("hide")
  icon.classList.remove("hide")
  right.classList.add("hide")
})

const logo  = document.querySelector(".logo")
logo.addEventListener("click", ()=>{
  location.reload()
})

