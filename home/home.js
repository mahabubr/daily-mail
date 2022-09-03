const loadInternationalNews = () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/03'
    fetch(url)
        .then(res => res.json())
        .then(data => displayInternationalNews(data.data))
        .catch(err => alert(err))
}

const displayInternationalNews = news => {
    const sideCardNews = document.getElementById('side-card-news');
    news.forEach(displayNews => {

        const { image_url, title, rating, total_view, details } = displayNews;
        const { number } = rating;

        const sideCardDiv = document.createElement('div')
        sideCardDiv.classList.add('card', 'w-64', 'mt-10', 'bg-base-100', 'shadow-xl')
        sideCardDiv.innerHTML = `
        <figure><img src="${image_url}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title text-lg"> ${title}</h2>
            <p>${details.slice(0, 90)}</p>
            <div class="card-actions justify-end mt-2">
                <div class="badge badge-outline">${number}</div>
                <div class="badge badge-outline">${total_view}</div>
            </div>
        </div>
        `
        sideCardNews.appendChild(sideCardDiv)
    })
}

const loadLatestNews = () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/02'
    fetch(url)
        .then(res => res.json())
        .then(data => displayLatestNews(data.data))
        .catch(err => alert(err))
}

const displayLatestNews = news => {
    const latestNewsField = document.getElementById('latest-news-field');
    news.forEach(latestNews => {

        const { image_url, title, rating, total_view } = latestNews
        const { number } = rating;

        const latestNewsDiv = document.createElement('div');
        latestNewsDiv.classList.add('card', 'bg-base-100', 'shadow-xl');
        latestNewsDiv.innerHTML = `
                            <figure><img src="${image_url}" alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">
                                        ${title}
                                        <div class="badge badge-secondary">NEW</div>
                                    </h2>
                                    <div class="card-actions mt-3 justify-end">
                                        <div class="badge badge-outline">${number}</div>
                                        <div class="badge badge-outline">${total_view ? total_view : 'N/A'}</div>
                                    </div>
                                </div>
        `
        latestNewsField.appendChild(latestNewsDiv)
    })
}

const loadWorldNews = () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/01'
    fetch(url)
        .then(res => res.json())
        .then(data => displayWorldNews(data.data))
        .catch(err => alert(err))
}

const displayWorldNews = news => {
    const worldNewsField = document.getElementById('world-news-field');
    news.forEach(latestNews => {
        const worldNewsDiv = document.createElement('world-news-field');
        worldNewsDiv.classList.add('card', 'bg-base-100', 'shadow-xl', 'image-full')
        worldNewsDiv.innerHTML = `
        <figure><img src="${latestNews.image_url}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${latestNews.title}</h2>
        </div>
        `
        worldNewsField.appendChild(worldNewsDiv)
    })
}

const loadTechEdication = () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/04'
    fetch(url)
        .then(res => res.json())
        .then(data => displayTechEdication(data.data))
        .catch(err => alert(err))
}

const displayTechEdication = tech => {
    const techEducationField = document.getElementById('tech-education-field');
    tech.forEach(latestNews => {

        const { thumbnail_url, title, details, author } = latestNews;
        const { img, name, published_date } = author

        const techEducationDiv = document.createElement('div')
        techEducationDiv.classList.add('card', 'mt-6', 'card-side', 'bg-base-100', 'shadow-xl')
        techEducationDiv.innerHTML = `
                <div>
                    <div class="flex mt-4 ml-10 justify-start items-center">
                            <div class="avatar mr-6">
                                <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="${img}" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-medium">${name}</h3>
                                <span>${published_date}</span>
                            </div>
                        </div>
                    <div class="card-body">
                            <h2 class="card-title">${title.slice(0, 60)}...</h2>
                            <p>${details.slice(0, 90)}...</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                            </div>
                    </div>
                </div>
                <figure><img src="${thumbnail_url}" alt="Movie"></figure>
        `
        techEducationField.appendChild(techEducationDiv)
    })
}


loadTechEdication()
loadWorldNews()
loadLatestNews()
loadInternationalNews()