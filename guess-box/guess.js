/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//random value generated
var y = Math.floor(Math.random()*10+1);

//counting the number of guesses
//made for correct guess
var guess = 1;
document.getElementById('submitguess').onclick = function(){ 
    //number guessed by user
    var x = document.getElementById('guessfield').value;
    if(x==y)
    {
        alert('CONGRATULATIONS!! YOU GUESSED RIGHT IN '   +  guess  +   ' GUESSES');
    }
    else if(x != y ) //if guessed number is greater than actual number
    {
        guess++;
    alert('OOPS SORRY!! TRY AGAIN');
    }
    else
    {
        guess++;
        alert('OOPS SORRY!! TRY AGAIN');
      }
  } 
 
