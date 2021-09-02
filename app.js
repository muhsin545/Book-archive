// Significant Id 

const searchInput = document.getElementById('searchField');
const results = document.getElementById('sumOfResults');
const error = document.getElementById('error');


// SPINNER
const toggolespinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}


const searchBook = () => {

    error.textContent = '';
    const searchinputText = searchInput.value;
    toggolespinner('block');
    searchInput.value = '';
    if (searchinputText === '') {
        error.innerHTML = `<h3 class="text-danger text-center">No Results Found :<i>Please Search Anything</i></h3>`
    }

    fetch(`https://openlibrary.org/search.json?q=${searchinputText}`)
        .then(res => res.json())
        .then(data => showData(data.docs))

}

// Show Data 
const showData = detailData => {
    console.log(detailData)

    toggolespinner('none')
    const dataShow = document.getElementById('details');
    dataShow.textContent = '';
    results.textContent = '';
    if (detailData.length === 0) {
        const div = document.createElement('div')
        div.innerHTML = `<h5 class="text-center p-2 m-2">Total Results Found: ${detailData.length}</h5>`;
        results.appendChild(div);
    } else {
        results.innerHTML = `<h5 class="text-center p-2 m-2">Total Results Found: ${detailData.length}</h5>`
        detailData.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('col')
            div.innerHTML = `
<div class="card mb-3 h-100" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="  https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4>Book: ${item.title}</h4>
        <h5>Author: ${item.author_name}</h3>
        <h6>First Published: ${item.publish_date}</h6>
         <h6>Publisher: ${item.publisher}</h6>
       
      </div>
    </div>
  </div>
</div>
          
        
         `;

            dataShow.appendChild(div);

        })
    }


}
