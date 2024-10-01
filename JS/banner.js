function moveBanner(page,banner) {
  displayBanner(index[banner]+=page,banner);
}

function displayBanner(page,banner) {
  let img = document.getElementsByClassName(banners[banner]);
  if(page>img.length) {
    index[banner]=1;
  }    
  if(page<1) {
    index[banner]=img.length;
  }
  for(var i=0;i<img.length;i++) {
    img[i].style.display="none";  
  }
  img[index[banner]-1].style.display="block"; 
}

function autoMoveBanner(banner) {
  setInterval(function () {moveBanner(1, banner);},4000);
}

let index=[1,1];
let banners=["banner1","banner2"];
displayBanner(1,0);
displayBanner(1,1);
autoMoveBanner(0);
autoMoveBanner(1);