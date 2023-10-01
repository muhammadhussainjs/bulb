
const div = document.querySelector('div');



div.addEventListener('mouseover', function(){
      div.innerHTML = '<img src="./asset/bulb on.webp" alt="bulb on">';

})
div.addEventListener('mouseout' , function(){
      div.innerHTML = '<img src="./asset/bulb off.jpg" alt="">'
})
