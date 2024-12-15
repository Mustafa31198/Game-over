
export class Ui{

    displayGames(arr){
      let box = "";
      for(let i = 0 ; i < arr.length; i++){
          box += `
  
          <div class="col-lg-3 col-md-6">
                          <div data-id="${arr[i].id}" class="game-card card bg-transparent h-100 ">
                              <div class="card-body">
                                  <figure>
                                      <img class="game-card-image object-fit-cover card-img-top h-100" src="${arr[i].thumbnail}" alt="">
                                  </figure>
                                  <figcaption>
                                      <div class="hstack justify-content-between mb-1">
                                          <h3 class="small text-white">${arr[i].title}</h3>
                                          <span class="badge game-card-image  p-2">Free</span>
                                       </div>
                                       <p class="text-white small text-center opacity-50 mb-0">${arr[i].short_description.split(" ",10).join(" ")}...</p>
                                  </figcaption>
                              </div>
                              
                              <footer class="game-card-footer small hstack justify-content-between px-3 py-2">
  
                                  <span class="game-footer badge">${arr[i].genre}</span>
                                  <span class="game-footer badge">${arr[i].platform}</span>
                      
                               </footer>
                          </div>
                          
                      </div>
          
  
          `
      }
      document.getElementById("data").innerHTML = box;
  
    }


    displayDetails(arr){
      document.querySelector("#data").classList.add("d-none");
      document.querySelector(".details").classList.remove("d-none");
      
      let box = `
      <div class="cardDetails col-md-4">
          <img src="${arr.thumbnail}" class="w-100" alt="image-details">
      </div>
      <div class="col-md-8">
          <h3>Title: ${arr.title}</h3>
          <p>Category: <span class="badge text-bg-info"> ${arr.genre}</span> </p>
          <p>Platform: <span class="badge text-bg-info"> ${arr.platform}</span> </p>
          <p>Status: <span class="badge text-bg-info"> ${arr.status}</span> </p>
          <p class="small">${arr.description}</p>
          <a class="btn btn-outline-warning" target="_blank" href="${arr.game_url}">Show Game</a>
      </div>
  
          `
      document.getElementById("detailsBox").innerHTML = box;
      document.querySelector('.loading').classList.add('d-none')
      document.getElementById('CloseButton').addEventListener('click' , function(){
          document.querySelector("#data").classList.remove("d-none");
          document.querySelector(".details").classList.add("d-none");
          

      });
      
 
  
    }
  
  
  }
