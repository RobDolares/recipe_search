let resultSection = document.querySelector(".resultSection");
let search = document.querySelector("#qBar");


function query() {
document.querySelector("#currentQuery").innerHTML = `${search.value}`;
//Need to clear result field before re-populating with search results:


fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${search.value}`)

    .then(function(response) {
      if (response.status === 200) {
        return response.json();
      }
    })

//Populating with template literals per search query results

    .then(function(data) {
      let results = data.results;
      for (var i = 0; i < results.length; i++) {
        resultSection.innerHTML += `
          <div class="singleResult">
            <div class="imgContainer">
              <a href="${results[i].href}"><img src="${results[i].thumbnail}"></a>
            </div>
            <p>${results[i].title}</p>
          </div>
        `
      }
    });
}
