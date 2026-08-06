const container = document.getElementById("novels-container");
const search = document.getElementById("search");

function displayNovels(list) {

    container.innerHTML = "";

    list.forEach(function(novel) {

        container.innerHTML += `
            <div class="card">
                <img src="${novel.image}">
                <div class="card-content">
                    <h3>${novel.title}</h3>
                    <p>${novel.genre}</p>
                     <a href="novel.html?id=${novel.id}" class="read-btn">Read Now</a>               
                     </div>
                     </div>
        `;

    });

}

displayNovels(novels);
search.addEventListener("input", function () {

    const keyword = search.value.toLowerCase();

    const filtered = novels.filter(function (novel) {

        return novel.title.toLowerCase().includes(keyword);

    });

    displayNovels(filtered);

});
