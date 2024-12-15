import {Ui} from "./UI.module.js";


export class Games {

    constructor (){

        this.getGames("mmorpg");

        document.querySelectorAll(".navbar-nav a").forEach((link)=>{
            link.addEventListener("click",(e)=>{
                document.querySelector(".navbar-nav .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
               
            });
        });
        this.ui = new Ui();

    }

    async getGames(category){

        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");



        let options = {
    	method: 'GET',
    	headers: {
    		'x-rapidapi-key': 'af5520d940mshcf8c65b8e24d638p1358a9jsn5226ca27ca49',
    		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    	}
            };

        try {
    	let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    	let result = await response.json();

        this.ui.displayGames(result);
        this.getGameId();
        loading.classList.add("d-none");


        } catch (error) {
    	console.error(error);
        }
    }

    async getDetails (gameId){

        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");


        const options = {
    	method: 'GET',
    	headers: {
    		'x-rapidapi-key': 'af5520d940mshcf8c65b8e24d638p1358a9jsn5226ca27ca49',
    		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    	}
        };

        try {
    	const response = await fetch( `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
    	const result = await response.json();
        this.ui.displayDetails(result);
        
        loading.classList.add("d-none");

        } catch (error) {
    	console.error(error);
    }

    }

    getGameId(){

    document.querySelectorAll(".game-card").forEach((game)=>{

        game.addEventListener("click" ,()=>{

        const gameId = game.dataset.id;
        this.getDetails(gameId);
        

        });
    });
    
}

}