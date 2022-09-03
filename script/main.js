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
        <div>  
    <a class="hover:bg-slate-400 hover:p-2 hover:text-slate-800 hover:rounded-xl" onclick="displayAllNewsById('${category_id}')" href="#">${category_name}</a>
        </div>
        `
        displayCatagory.appendChild(catagoryDiv);

    })
}


// Loded All News In a Category
const displayAllNewsById = async category_id => {
    setLoader(true)
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
    const itemsFounds = document.getElementById('items-found-details');
    itemsFounds.innerText = `${catagoryNews.length}`

    catagoryNews.sort((a, b) => (a.total_view - b.total_view));

    const displayCatagoryCard = document.getElementById('display-catagory-card');
    displayCatagoryCard.textContent = '';

    catagoryNews.forEach(news => {

        const { thumbnail_url, title, details, author, total_view, _id } = news;
        const { name, published_date, img } = author

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'lg:card-side', 'bg-base-100', 'shadow-xl', 'mt-12')
        cardDiv.innerHTML = `
                <div>
                    <figure><img src="${thumbnail_url}" alt="Album"></figure>
                </div>
                <div class="card-body">
                    <h2 class="card-title font-bold">${title ? title : 'N/A'}</h2>
                    <p>${details.slice(0, 400)}...<p>
                    <!-- Card Footer Section Start -->
                <div class="card-actions justify-between items-center">
                        <div class="flex justify-center items-center">
                            <div class="avatar mr-6">
                                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="${img}" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-medium">${name ? name : "N/A"}</h3>
                                <span>${published_date ? published_date : 'N/A'}</span>
                            </div>
                        </div>
                        <div class="flex justify-center items-center">
                            <a href=""><i class="fa-solid fa-eye"></i></a>
                            <h3 class="ml-2 font-medium">${total_view ? total_view : '0'}</h3>
                        </div>
                        <div>
                            <div class="rating">
                                <input type="radio" name="rating-1" class="mask mask-star bg-amber-400" />
                                <input type="radio" name="rating-1" class="mask mask-star bg-amber-400" />
                                <input type="radio" name="rating-1" class="mask mask-star bg-amber-400" />
                                <input type="radio" name="rating-1" class="mask mask-star bg-amber-400" checked />
                                <input type="radio" name="rating-1" class="mask mask-star bg-amber-400" />
                            </div>
                        </div>
                        <div>
                            <label onclick="modalDataLoaded('${_id}')" for="my-modal-6" class="text-5xl text-blue-600 hover:text-blue-700" ><i class="fa-solid fa-arrow-right"></i></label>
                        </div>
                    </div>
                    <!-- Card Footer Section End -->
                </div>
        `
        displayCatagoryCard.appendChild(cardDiv);
        setLoader(false)
    })
}

// Loaded Modal 
const modalDataLoaded = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    const response = await fetch(url);
    const data = await response.json();
    displayModalDataLoaded(data.data[0])
}
// Show Modal 
const displayModalDataLoaded = data => {

    const { image_url, title, details, others_info } = data

    const modalArea = document.getElementById('modal-area')
    modalArea.innerHTML = `
    <h3 class="font-bold text-xl text-red-600 mb-2">${others_info.is_trending ? 'is Tranding' : 'N/A'}
                    </h3>
                    <figure><img class="w-full" src="${image_url}" alt="Shoes" /></figure>
                    <h3 class="font-bold text-lg mt-2">${title}</h3>
                    <p class="py-4">${details}</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Enjoy More News</label>
                    </div>
    `
}

// Set Loader
const setLoader = isLoading => {
    const loader = document.getElementById('loader')
    if (isLoading === true) {
        loader.classList.remove('hidden')
    }
    else {
        loader.classList.add('hidden')
    }
}


loadCatagoryData()
displayAllNewsById('08')