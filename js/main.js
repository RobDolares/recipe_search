let resultSection = document.querySelector(".resultSection");
let search = document.querySelector("#qBar");


function query() {
  document.querySelector("#currentQuery").innerHTML = `${search.value} dishes`; // Show on page current search query

  //Need to clear result field before re-populating with search results:
  resultSection.innerHTML = "";


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
        if (results[i].thumbnail !== "") {
          resultSection.innerHTML += `
            <div class="singleResult">
              <a href="${results[i].href}">
                <div class="imgContainer">
                  <img src="${results[i].thumbnail}">
                </div>
                <p>${results[i].title}</p>
              </a>
            </div>
          `
        } else {
          resultSection.innerHTML += `
            <div class="singleResult">
              <a href="${results[i].href}">
                <div class="imgContainer">
                  <p class="noImgMsg" >Sorry, No Image</p>
                </div>
                <p>${results[i].title}</p>
              </a>
            </div>
          `
        }
      }
    });
}
