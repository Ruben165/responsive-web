function moveSet(page,set) {
  displaySet(index[set]+=page,set);
}
  
function displaySet(page,set) {
  let img = document.getElementsByClassName(sets[set]);
  if(page>img.length) {
    index[set]=1;
  }    
  if(page<1) {
    index[set]=img.length;
  }
  for(var i=0;i<img.length;i++) {
    img[i].style.display="none";  
  }
  img[index[set]-1].style.display="flex";  
  img[index[set]-1].style.flexDirection="row";  
  img[index[set]-1].style.gap="1em";  
}
  
let index=[1,1,1,1];
let sets=["set1","set2","set3","set4"];
displaySet(1,0);
displaySet(1,1);
displaySet(1,2);
displaySet(1,3);