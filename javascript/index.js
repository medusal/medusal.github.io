document.addEventListener('DOMContentLoaded', function() {
  var bubbles = document.getElementsByClassName('bubbles')[0]
  if (bubbles) {
    var randomN = function(start, end){
      return Math.random()*end+start
    }
    var i = 0
    var generateBubble = function(){
      if(i < 20){
        var el = document.createElement('div'),
            size = randomN(5, 10)
        el.setAttribute('style','width: '+size+'px; height: '+size+'px; left:'+randomN(1, bubbles.offsetWidth-(size+4) )+'px;')
        el.classList.add('bubble')
        bubbles.appendChild(el)
        i++;
      } else {
        clearInterval(inter)
      }
    }

    generateBubble()

    var inter = setInterval(generateBubble, 500);
  }
})
