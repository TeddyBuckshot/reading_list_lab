document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newListButton = document.createElement("button");
  newListButton.textContent= 'Delete';
  const body = document.querySelector("body");
  body.appendChild(newListButton);
  
  newListButton.addEventListener('click', handleClick);

  const form = document.querySelector("#new-item-form")
  form.addEventListener('submit', handleNewForm);

});

const handleNewForm = function(event){
  event.preventDefault();

  const list = document.querySelector("#reading-list");
 
  const listItem = document.createElement("li");
  list.appendChild(listItem);

  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container")
  listItem.appendChild(listContainer);

  const newListTitle = document.createElement("h3");
  const title = event.target.title.value;
  newListTitle.textContent = `${title}`;
  listContainer.appendChild(newListTitle);

  const newListAuthor = document.createElement("h5");
  const author = event.target.author.value;
  newListAuthor.textContent = `${author}`;
  listContainer.appendChild(newListAuthor);

  const newListCategory = document.createElement("p");
  const category = event.target.category.value;
  newListCategory.textContent = `${category}`
  listContainer.appendChild(newListCategory);

  document.getElementById("new-item-form").reset();
  console.log(event.target);
};

const handleClick = function (event){
  document.getElementById("reading-list").innerHTML = "";
};
