getRandomMeal();

async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const randomMeal = await resp.json();
  console.log(randomMeal);
}

async function getMealByID(id) {
  const meal = await fetch(
    "http://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
}

async function getMealBySerch(term) {
  const meals = await fetch(
    "http://www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
}
