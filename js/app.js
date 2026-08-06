const container = document.getElementById("novels-container");

novels.forEach(function(novel) {

    container.innerHTML += `
        <div class="card">
            <img src="${novel.image}">
            <div class="card-content">
                <h3>${novel.title}</h3>
                <p>${novel.genre}</p>
                <a href="novel.html" class="read-btn">Read Now</a>
            </div>
            </div>
                     });
