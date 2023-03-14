const actorListContainer = document.getElementById("actor-list");

/*fetch("./actors.json")
  .then((response) => response.json())
  .then((actors) => {
    console.log(actors);
    actors.forEach((actor) => {
      const actorElement = document.createElement("div");
      actorElement.classList.add("actor");
      actorElement.innerHTML = `<h2>${actor.fullname}</h2><p>${actor.movie}</p>`;
      actorElement.addEventListener("click", () => {
        // TODO: show pop-up with actor details
      });
      actorListContainer.appendChild(actorElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching actor data:", error);
  });*/

// Fetch the actors data

fetch("actors.json")
  .then((response) => response.json())
  .then((actors) => {
    actors.forEach((actor) => {
      const actorElement = document.createElement("div");
      actorElement.classList.add("actor");
      actorElement.innerHTML = `<h2>${actor.fullname}</h2><p>${actor.movie}</p>`;
      actorElement.addEventListener("click", () => {
        alert(`${actor.fullname} was in the movie ${actor.movie}`);
      });
      actorListContainer.appendChild(actorElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching actor data:", error);
  });

//my first project for MMD Third semester and it was hard
//
