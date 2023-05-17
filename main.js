import menu from "./db.js"
// console.log(menu)


const menuContainer = document.querySelector('#menu-container');

// console.log(menuContainer)

document.addEventListener("DOMContentLoaded", () => {
    displayMenuItem(menu)
})

function displayMenuItem(menuItems){

    let displayMenu = menuItems.map((item) => `

    <div id='card' class="d-flex gap-3 flex-column flex-md-row shadow rounded m-3 images" style="max-width: 500px;">
            <img src="${item.img}"  class="img-fluid shadow rounded " alt="">
            <div>
            <div class="d-flex justify-content-between my-2 border-bottom">
                <h5>${item.title}</h5>
                <p  class="text-warning fw-bold">$ ${item.price}</p>
            </div>
            <p >${item.desc}</p>
        </div>
        </div>


    `);


    displayMenu = displayMenu.join('')

    menuContainer.innerHTML = displayMenu

    // console.log(displayMenu)


}

//filtreleme

const filterBtn = document.querySelectorAll('.filter-btn');

filterBtn.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener('click', searchCategory) 
});
// console.log(filterBtn)

function searchCategory(e){
    //  alert('tıklandi')
    // console.log(e.target.dataset)
    const category = e.target.dataset.id

  const filteredItems =  menu.filter((menuItem) => {
        if(menuItem.category === category) return menuItem
    })
    if(category === "all"){
        displayMenuItem(menu)
    }else{
        displayMenuItem(filteredItems)
    }
}




