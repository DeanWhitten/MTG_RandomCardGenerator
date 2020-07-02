function random(){
  location.reload();
};

  fetch("https://api.scryfall.com/cards/random")
  .then(response => response.json()) // Translate JSON into JavaScript
  .then(card => {
    
    

      // Create title element
    const titleElement = document.createElement("h1");
    titleElement.innerHTML = card.name;

     const img = document.createElement("img");
     img.src = card.image_uris.border_crop;

      // Create content element
      const setTitle = document.createElement("h3");
      setTitle.innerHTML = card.set_name;

      const text = document.createElement("p");
      text.innerHTML = "Released : " + card.released_at;



      const price = document.createElement("p");
      const foilPrice = document.createElement("p");

      if(card.prices.usd != null && card.prices.usd_foil != null){
        price.innerHTML = "Price: $" + card.prices.usd;
        foilPrice.innerHTML = "Foil Price: $" + card.prices.usd_foil;
      }else{
        if(card.prices.usd == null && card.prices.usd_foil == null){
          price.innerHTML = "Price: UNAVAILABLE";
          foilPrice.innerHTML = "Foil Price: UNAVAILABLE";
        }else if (card.prices.usd_foil == null){
          price.innerHTML = "Price: $" + card.prices.usd;
          foilPrice.innerHTML = "Foil Price: UNAVAILABLE";
        } else{
          price.innerHTML = "Price: UNAVAILABLE";
          foilPrice.innerHTML = "Foil Price: $" + card.prices.usd_foil;
        }
      }

      let color = card.color_identity[0];
      
      switch(color){
        case "G":
          document.getElementById("articles").style.backgroundColor = "green";
          break;
        case "W":
          document.getElementById("articles").style.backgroundColor = "beige";
          break;
        case "B":
          document.getElementById("articles").style.backgroundColor = "black";
          document.getElementById("articles").style.color = "white";
          break;
        case "R":
          document.getElementById("articles").style.backgroundColor = "red";
          break;
        case "U":
          document.getElementById("articles").style.backgroundColor = "blue";
          break;
        
        default:
          break;
      }
 


      // Add title and content to the page
      const articlesElement = document.getElementById("articles");
      articlesElement.appendChild(titleElement);
      articlesElement.appendChild(img);
      articlesElement.appendChild(setTitle);
      articlesElement.appendChild(text);
      if(card.reprint == true){
        const reprintText = document.createElement("p");
        reprintText.innerHTML = "REPRINT";
        articlesElement.appendChild(reprintText);
      }

    

      const cardValue = document.getElementById("prices");
      cardValue.appendChild(price);
      cardValue.appendChild(foilPrice);

  });








document.getElementById("newCard").addEventListener("click", random);