var $formValue = document.querySelector('form');
var $name = document.querySelector('[data-classification="name"]');
var $genus = document.querySelector('[data-classification="genus"]');
var $family = document.querySelector('[data-classification="family"]');
var $order = document.querySelector('[data-classification="order"]');
var $carbohydrates = document.querySelector('[data-nutrition="carbohydrates"]');
var $protein = document.querySelector('[data-nutrition="protein"]');
var $fat = document.querySelector('[data-nutrition="fat"]');
var $calories = document.querySelector('[data-nutrition="calories"]');
var $sugar = document.querySelector('[data-nutrition="sugar"]');

// Event listener and function for when the user enters a fruit
$formValue.addEventListener('submit', getFruit);

function getFruit(event) {
  var $fruitEntered = document.querySelector('#search-bar').value;
  event.preventDefault();
  $formValue.reset();

  var targetUrl = encodeURIComponent('https://www.fruityvice.com/api/fruit/');

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl + $fruitEntered);
  xhr.setRequestHeader('token', 'abc123');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      // console.log(xhr.response);
      // console.log(xhr.status);
      $name.textContent = xhr.response.name;
      $genus.textContent = 'Genus:  ' + xhr.response.genus;
      $family.textContent = 'Family:  ' + xhr.response.family;
      $order.textContent = 'Order:  ' + xhr.response.order;
      $carbohydrates.textContent = 'Carbohydrates:  ' + xhr.response.nutritions.carbohydrates;
      $protein.textContent = 'Protein:  ' + xhr.response.nutritions.protein;
      $fat.textContent = 'Fat:  ' + xhr.response.nutritions.fat;
      $calories.textContent = 'Calories:  ' + xhr.response.nutritions.calories;
      $sugar.textContent = 'Sugar:  ' + xhr.response.nutritions.sugar;
      fruitInfoView();
    }
  });
  xhr.send();
}

// function to switch views from hoome page to info of fruit entered
var $homeView = document.querySelector('[data-view="home"]');
var $fruitInfoView = document.querySelector('[data-view="fruit-info"]');

function fruitInfoView() {
  if (data.view === 'home') {
    $homeView.className = ' container hidden';
    $fruitInfoView.className = 'container';
    data.view = 'fruit-info';
  }
}

// switches view to home when "Home" is clicked
var $home = document.querySelector('.home');

$home.addEventListener('click', clickHome);

function clickHome(event) {
  if (data.view === 'fruit-info') {
    $fruitInfoView.className = 'container hidden';
    $homeView.className = 'container';
    data.view = 'home';
  }
}
