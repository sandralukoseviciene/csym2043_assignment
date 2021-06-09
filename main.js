

/* 
  random text generator
            code example taked from last year exersisess*/
function genQuote() {
    let randNum = Math.floor(Math.random() * 7) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
    let tweetQuote = quotes[randNum].split(' ').join('%20');
    tweetQuote = tweetQuote.split('<br>').join('');
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
    $('.twitter-share-button').attr('href', tweetQuote);
  }
  
  //quote array
  let quotes = ["Blank", "\"My classes are designed to inspire confidence, promote positivity and enhance wellbeing through yoga practice. There is an emphasis on developing simple and effective techniques that will replenish the mind, body and soul.\" ", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"- Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"- C.S Lewis", "\"If you can dream it, you can do it.\"- Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"- Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"- Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"- Bruce Lee",];



/*prace list page text
code taked from class activity*/

function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  
  }
  
  print5();
  print5(); 
  function myClickFunction() {
     var element = document.getElementById('pageheading');
  element.firstChild.nodeValue = 'Price list';
  
  var element = document.getElementById('paragraph');
  element.firstChild.nodeValue = '6 weeks programme - 50£; 1 week programme - 10£; individual programms 20-80£';
  }
  
  
  function myLoadFunction() {
     var element = document.getElementById('pageheading');
     element.addEventListener('click' , myClickFunction);
  }
  
  document.addEventListener('DOMContentLoaded' , myLoadFunction);
  
  


