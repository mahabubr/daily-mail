// Catagory Data Loadded
const loadCatagoryData = async () => {
    try {
        const url = 'https://openapi.programming-hero.com/api/news/categories'
        const response = await fetch(url);
        const data = await response.json();
        displayCatagoryData(data.data.news_category)
    }
    catch (err) {
        alert(err)
    }
}

// Show Catagory Data Loadded
const displayCatagoryData = catagoryList => {
    const displayCatagory = document.getElementById('display-catagory')
    catagoryList.forEach(list => {
        const { category_name, category_id } = list;
        const catagoryDiv = document.createElement('div');
        catagoryDiv.classList.add('font-medium', 'text-lg', 'text-slate-600')
        catagoryDiv.innerHTML = `
        <a onclick="displayAllNewsById('${category_id}')" href="#">${category_name}</a>
        `
        displayCatagory.appendChild(catagoryDiv);
    })
}

// Loded All News In a Category
const displayAllNewsById = async category_id => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
        const response = await fetch(url);
        const data = await response.json();
        showAllNewsById(data.data)
    }
    catch (err) {
        alert(err)
    }
}
// Show All News In a Category
const showAllNewsById = catagoryNews => {
    const displayCatagoryCard = document.getElementById('display-catagory-card');
    displayCatagoryCard.textContent = '';
    catagoryNews.forEach(news => {

        const { thumbnail_url, title, details, author } = news;
        console

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'lg:card-side', 'bg-base-100', 'shadow-xl', 'mt-12')
        cardDiv.innerHTML = `
                <div>
                    <figure><img src="${thumbnail_url}" alt="Album"></figure>
                </div>
                <div class="card-body">
                    <h2 class="card-title font-bold">${title}</h2>
                    <p>${details.slice(0, 400)}...<p>
                    <!-- Card Footer Section Start -->
                <div class="card-actions justify-between items-center">
                        <div class="flex justify-center items-center">
                            <div class="avatar mr-6">
                                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-medium">Jane Cooper</h3>
                                <span>Jan 10, 2022</span>
                            </div>
                        </div>
                        <div class="flex justify-center items-center">
                            <a href=""><i class="fa-solid fa-eye"></i></a>
                            <h3 class="ml-2 font-medium">1.5M</h3>
                        </div>
                        <div>
                            <div class="rating">
                                <input type="radio" name="rating-1" class="mask mask-star bg-amber-400" />
                                <input type="radio" name="rating-1" class="mask mask-star bg-amber-400" />
                                <input type="radio" name="rating-1" class="mask mask-star bg-amber-400" />
                                <input type="radio" name="rating-1" class="mask mask-star bg-amber-400" checked />
                                <input type="radio" name="rating-1" class="mask mask-star" />
                            </div>
                        </div>
                        <div>
                            <a class="text-5xl text-blue-600 hover:text-blue-700" href=""><i
                                    class="fa-solid fa-arrow-right-to-bracket"></i></a>
                        </div>
                    </div>
                    <!-- Card Footer Section End -->
                </div>
        `
        displayCatagoryCard.appendChild(cardDiv);
    })
}

loadCatagoryData()
displayAllNewsById('08')