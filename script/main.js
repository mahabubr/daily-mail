// Catagory Data Loadded
const loadCatagoryData = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    const response = await fetch(url);
    const data = await response.json();
    displayCatagoryData(data.data.news_category)
}

// Show Catagory Data Loadded
const displayCatagoryData = catagoryList => {
    catagoryList.forEach(list => {
        console.log(list)
    })
}

loadCatagoryData()