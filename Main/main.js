// Section API games
const keyAPI = "5eb04b1b776f44fa9ca33247b9893e0f";
const urlAPI = "https://api.rawg.io/api/games?key=" + keyAPI;

let games = [];

function getGames() {
	fetch(urlAPI)
		.then((response) => response.json())
		.then((result) => {
			games = result.results;
			console.log(games);

			games.forEach((game, index) => {
				let card = document.createElement("div");
				game.index = ++index;

				card.innerHTML = getCard(game);
				document.getElementById("cards").appendChild(card);
			});
		})

		.catch((error) => {
			console.log("Error", error);
		});
}

getGames();

function getCard(game) {
	let section = `
        <section>
            <div class="box-game relative">
                <img class="fav-logo absolute" src="/assets/assets-main/icons/heart.svg" alt="">
                <img class="game-img" src="${game.background_image}" alt="">
                
            <div class="game-info">
                <div class="game-name" style=";">
                    <p> ${game.name} </p>
                    <p style="font-size: 18px; color: #36B972;"> #${
											game.index
										} </p>
                </div>
                <div class="game-date">
                    <div class="game-release-date">
                        <p class="exo_font game_color-description"> Release date: </p>
                        <p style="margin-left:15px;"> ${moment(
													game.released
												).format("MMM, D, YYYY")} </p>
                    </div>
                    <div class="game-options"> `;

	game.parent_platforms.forEach((platform) => {
		if (platform.platform.slug == "playstation")
			section += `<img class="icon" src="/assets/assets-main/icons/play-station.svg" alt="">`;
		if (platform.platform.slug == "xbox")
			section += `<img class="icon" src="/assets/assets-main/icons/x-box.svg" alt="">`;
		if (platform.platform.slug == "pc")
			section += `<img class="icon" src="/assets/assets-main/icons/computer.svg" alt="">`;
		if (platform.platform.slug == "mac")
			section += `<img class="icon" src="/assets/assets-main/icons/mac.svg" alt="">`;
	});

	section += `</div> 
               
                </div>
                <div class="game-generes">
                    <p class="generes exo_font game_color-description"> Generes: </p>
                    <p style="margin-left:43px;"> `;

	game.genres.forEach((genre, index) => {
		// Si es la ultima iteracion de genero va sin coma
		if (index === game.genres.length - 1) {
			section += genre.name;
		} else {
			section += genre.name + ", ";
		}
	});

	section += `</p>
                </div>
            </div>

        </section>
    `;

	return section;
}

// Light mode
const lightMode = document.querySelector(".on-btn");
lightMode.addEventListener("click", () => {
	lightMode.innerHTML = "OFF";
	lightMode.style.fontSize = "9px";
	lightMode.style.color = "#939393";
	lightMode.style.backgroundColor = "#E1E1E4";
});

// Single Card or Multi Card
const single = document.getElementById("single-card");
const multi = document.getElementById("multi");

single.addEventListener("click", () => {
	single.classList.add("change-btn");
	single.classList.remove("disable");

	multi.classList.add("disable");
});

multi.addEventListener("click", () => {
	multi.classList.add("change-btn");
	multi.classList.remove("disable");

	single.classList.add("disable");
});
