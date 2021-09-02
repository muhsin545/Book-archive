const searchInput = document.getElementById('searchField');
const results = document.getElementById('sumOfResults');
const error = document.getElementById('error');


const searchBook = () => {
    error.textContent = '';
    const searchinputText = searchInput.value;
    // console.log(searchinputText);
    searchInput.value = '';
    if (searchinputText === '') {
        error.innerHTML = `<h3 class="text-danger text-center">No Results Found :<i>Please Search Anything</i></h3>`
    }

    fetch(`https://openlibrary.org/search.json?q=${searchinputText}`)
        .then(res => res.json())
        .then(data => showData(data.docs))

}
// searchBook()

const showData = detailData => {
    const dataShow = document.getElementById('details');
    dataShow.textContent = '';
    results.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `<h5 class="text-center p-2 m-2">Total Results Found: ${detailData.length}</h5>`;
    results.appendChild(div);

    detailData.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="  https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg" class="card-img-top img-fluid" alt="Sorry!Image not found">
                <div class="card-body">
                    <h4>Book: ${item.title}</h4>
                    <h5>Author: ${item.author_name}</h3>
                    <h6>First Published: ${item.publish_date}</h6>
                    <h6>Publisher: ${item.publisher}</h6>
                </div>
        </div>
        
         `;

        dataShow.appendChild(div);

        console.log(item)

    })
}