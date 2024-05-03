var count = 0;
document.getElementById("myButton").onclick = function(){
    count++;
    if(count % 2 == 0){
            document.getElementById("demo").innerHTML = "";
    } else {
            var img = document.createElement("img");
            img.src = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/93/932df552b2b1dc67ee82eb2c2c3b5eb1a90ff4be_full.jpg";
            document.getElementById("demo").appendChild(img);
    }
}