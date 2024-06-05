async function Search(){
    const Query = document.getElementById('search-input').value;
    
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(Query)}`;

    const respone = await fetch(apiUrl);
    const data = await respone.json();
    display(data);
}

function handleKeyPress(event){
    if(event.key == 'Enter'){
        document.getElementById('search-button').click();
    }
}

function display(data){
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if(data.meals)
    {
        data.meals.forEach(meal => {
            const card = document.createElement('div');
            card.classList.add('meal-card');
            card.innerHTML = `
            <div id="card"  class="card mb-3"  style="widht:20rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <h5 class="card-title">${meal.strMeal}</h5>
            </div>`;
            resultsDiv.appendChild(card);
        });
    }
    else{
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
}
