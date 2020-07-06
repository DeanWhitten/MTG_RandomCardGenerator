fetch("https://api.scryfall.com/cards/random")
  .then(response => response.json()) // Translate JSON into JavaScript
  .then(card => {
    
    // Detrime card section's background color & stylings
    let color = card.color_identity[0];
    switch(color){
      case "G":
        document.getElementById("articles").style.backgroundColor = "rgb(196,211,202)";
        break;
      case "W":
        document.getElementById("articles").style.backgroundColor = "rgb(248, 231, 185";
        break;
      case "B":
        document.getElementById("articles").style.backgroundColor = "rgb(166, 159, 157)";
        document.getElementById("articles").style.color = "rgb(248, 231, 185";
        break;
      case "R":
        document.getElementById("articles").style.backgroundColor = "rgb(235,159,130)";
        break;
      case "U":
        document.getElementById("articles").style.backgroundColor = "rgb(179, 206, 234)";
        break;
      default:
        document.getElementById("articles").style.backgroundColor = "lavenderblush";
        break;
    };
 
    // Card image
    const articlesElement = document.getElementById("articles");
    const img = document.createElement("img");
    img.src = card.image_uris.border_crop;
    img.style.borderRadius = "10px";
    img.style.boxShadow = "8px 8px 15px black";
    articlesElement.appendChild(img);

    // Card Title
    const titleElement = document.createElement("h1");
    titleElement.innerHTML = card.name;
    cardName.appendChild(titleElement);

    // Set Name
    set.innerHTML = card.set_name;

    // Release date
    release.innerHTML =  card.released_at;

    // Checks if it is a reprinted edition
    if(card.reprint == true){  
      let reprint = document.getElementById("reprint"); 
      const print = document.createElement("p")
      document.getElementById("reprint").style.color = "gold";
      reprint.innerHTML = "REPRINT";
      reprint.appendChild(print);
    };

    // Legal formats
      let formatList = document.getElementById("formats");
      let formatItem1 = document.createElement("p");
      let formatItem2 = document.createElement("p");
      let formatItem3 = document.createElement("p");
      let formatItem4 = document.createElement("p");
      let formatItem5 = document.createElement("p");
      let formatItem6 = document.createElement("p");
      let formatItem7 = document.createElement("p");
      let formatItem8 = document.createElement("p");
      let formatItem9 = document.createElement("p");
      let formatItem10 = document.createElement("p");
      let formatItem11 = document.createElement("p");
      let formatItem12 = document.createElement("p");
      let formatItem13 = document.createElement("p");

     

      formatItem1.innerHTML = "<h5> Brawl:</h5> " + card.legalities.brawl;
      formatItem2.innerHTML = "<h5>Commander: </h5>" + card.legalities.commader ;
      formatItem3.innerHTML = "<h5>Duel: </h5>" + card.legalities.duel;
      formatItem4.innerHTML = "<h5>Future: </h5>" + card.legalities.future;
      formatItem5.innerHTML = "<h5>Historic: </h5>" + card.legalities.historic;
      formatItem6.innerHTML = "<h5>Legacy: </h5>" + card.legalities.legacy;
      formatItem7.innerHTML = "<h5>Modern: </h5>" + card.legalities.modern;
      formatItem8.innerHTML = "<h5>OldSchool: </h5>" + card.legalities.oldschool;
      formatItem9.innerHTML = "<h5>Pauper: </h5>" + card.legalities.pauper;
      formatItem10.innerHTML = "<h5>Penny: </h5>" + card.legalities.penny;
      formatItem11.innerHTML = "<h5>Pioneer: </h5>" + card.legalities.pioneer;
      formatItem12.innerHTML = "<h5>Standard: </h5>" + card.legalities.standard;
      formatItem13.innerHTML = "<h5>Vintage: </h5>" + card.legalities.vintage;
      
      

      formatList.appendChild(formatItem1);
      formatList.appendChild(formatItem2);
      formatList.appendChild(formatItem3);
      formatList.appendChild(formatItem4);
      formatList.appendChild(formatItem5);
      formatList.appendChild(formatItem6);
      formatList.appendChild(formatItem7);
      formatList.appendChild(formatItem8);
      formatList.appendChild(formatItem9);
      formatList.appendChild(formatItem10);
      formatList.appendChild(formatItem11);
      formatList.appendChild(formatItem12);
      formatList.appendChild(formatItem13);
      
      

    console.table(card.legalities);
    console.log(card.legalities.length);
  

    // Prices
    const cardValue = document.getElementById("prices");
    const price = document.createElement("p");
    const foilPrice = document.createElement("p");
    cardValue.appendChild(price);
    cardValue.appendChild(foilPrice);
    
    // Checks if card price is unavaliable 
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
      };
    };
  });


// New card button's function
document.getElementById("newCard").onclick = function random(){
  location.reload();
};

