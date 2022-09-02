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
        <a onclick="displayAllNewsById(${category_id})" href="#">${category_name}</a>
        `
        displayCatagory.appendChild(catagoryDiv);
    })
}

// Shpw All News In a Category
const displayAllNewsById = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data)
}

loadCatagoryData()