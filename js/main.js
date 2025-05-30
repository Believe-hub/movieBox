const searchElem = document.getElementById('search')
const formElem = document.getElementById('form')
const movieContents = document.querySelector(".movie-content");

//6c0a59c45c5eb25ee38d932d675b49e1
//https://image.tmdb.org/t/p/w500
const moviesAPI =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6c0a59c45c5eb25ee38d932d675b49e1";
const imagePath = "https://image.tmdb.org/t/p/w500";
const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=6c0a59c45c5eb25ee38d932d675b49e1&query="';



getMovies(moviesAPI);

//get movies function (from supplier source)

async function getMovies(url){
    try {
        const result = await fetch(url)
        const data = await result.json();
        showMovies(data.results)
    } catch (error) {}
}

// display movie inside HTML
function showMovies(movies){
    movieContents.innerHTML = "";
    movies.forEach((movie) => {
        const {id, title, poster_path, release_date, vote_average, vote_count, genre_ids, overview } = movie;
        const movieBlock = document.createElement('div');
        movieBlock.classList.add('movie');
        movieBlock.innerHTML = `<div class="movie-preview" data-id="${id}">
                                    <img src="${imagePath+poster_path}" alt="">
                                    <p class="font1">TV SERIES
                                    </p><p class="font2"><i class="fa fa-gratipay" aria-hidden="true"></i></p>
                                    </div>
                                    <div class="movie-details">
                                        <p class="span">USA 2016 Current</p>
                                        <p class="movie-name">${title}</p>
                                    <div class="activity-count">
                                        <div><span>IVob</span>${release_date}</div>
                                        <div><i class="fa fa-apple" aria-hidden="true"></i>
                                            ${vote_average}</div>
                                    </div>
                                    <p class="movie-type">${genre_ids}</p>
                                </div>`;
                                movieContents.appendChild(movieBlock)
                                movieBlock.onclick = () =>{
                                    window.location.href = `movie.html?id=${id}`;
                                };
                            })
}

formElem.onsubmit = (e) => {
    e.preventDefault()
    const searchTerm = searchElem.value;
    if(searchTerm && searchTerm !== ''){
        getMovies(searchUrl + searchTerm)
        searchTerm.value = '';
    }else{
        window.reload();
    }
}