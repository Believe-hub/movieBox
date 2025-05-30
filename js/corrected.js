const getParam = new URLSearchParams(window.location.search);
const movieId = getParam.get("id");
const apiKey = '6c0a59c45c5eb25ee38d932d675b49e1';

async function getMovieDetails(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`);
    const data = await response.json();

    // document.querySelector('.title').innerHTML = data.title;

    const trailer = data.videos.results.find(video => video.type === "Trailer" && video.site === "YouTube");

    if (trailer) {
        const movieBox = document.querySelector('.movie-pane');
        movieBox.innerHTML = `
            <div><h2 class="title">${data.title}</h2></div>
            <iframe width="1050px" height="300px"
                src="https://www.youtube.com/embed/${trailer.key}"
                frameborder="0" allowfullscreen></iframe>
            <div class="container1">
                <div class="movie-report">
                    <ul><span class="mv-detail">${data.title}</span>
                        <li>${data.release_date?.split('-')[0]}</li>
                        <li>PG-13</li>
                        <li>2h 10m</li>
                        <span class="action">Action</span>
                        <span class="drama">Drama</span>
                    </ul>
                    <div class="rate"> <span class="ratings">${data.vote_average}</span> | 350k</div>
                </div>
                <div class="movie-article">
                    <div class="article">
                        <div class="article-writeups"></div>
                        <p>${data.overview}</p>
                        <p>Director: <span class="crews">Sologwugwu Afoma</span></p>
                        <p>Writers: <span class="crews">Ojiugo Onuaso, Akuabata Mgbedike, Odo Okwudili</span></p>
                        <p>Stars: <span class="crews">Okonkwo Chidi, Ojadili Nwibe, Aguba Okadigbo</span></p>
                        <div class="more">
                            <div>
                                <span class="btns">Top rated movie #65</span>
                                <span class="indic-menu">Awards 9 nominations</span>
                            </div>
                            <div class="drop"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                        </div>
                    </div>
                    <div class="notice">
                        <div class="showtime">See Showtime</div>
                        <div class="morewatch">More Watch Options</div>
                        <div class="img">
                            <div>
                                <img src="resource/webpic7.jpg" alt="">
                                <img src="resource/webpic2.jpg" alt="">
                                <img src="resource/webpic3.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    } else {
        console.log("Trailer not found");
    }
}

getMovieDetails(movieId);
