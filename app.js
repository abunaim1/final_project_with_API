const loadData = () => {
  const searchText = document.getElementById("serach-tex").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayData(data.meals));
};

const displayData = (data) => {
  document.getElementById("total-item").innerText = data.length;
  const itemsContainer = document.getElementById("items-container");
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("box");
    card.innerHTML = `
        <img class="box-img" src=${item.strMealThumb} alt="">
        <h1>${item?.strMeal}</h1>
        <p>${item.strInstructions.slice(0, 80)}</p>
        <button 
            type="button" 
            class="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"
            onclick = "displayModal('${item.idMeal}')"
        >
            Item Details
        </button> 
        `;
    itemsContainer.appendChild(card);
  });
};

const displayModal = (id) => {
    try{
        const response = async 
    }
    catch{

    }
  
};
fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=${id}')
