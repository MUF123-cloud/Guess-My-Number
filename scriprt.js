'use strict';
 /*console.log  ( document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🎈 Correct Number!';
console.log  ( document.querySelector('.message').textContent);
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=15;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
let secretnumber=Math.trunc( Math.random()*20)+1;
console.log(secretnumber);
let score=20;
let highscore=0;



document.querySelector('.check').addEventListener('click',
    function(){
        const guess =Number( document.querySelector('.guess').value);
        console.log(guess,typeof guess);
/* when there is noinput */
        if(!guess){
            document.querySelector('.message').textContent='No Number!';
        }
        /* when the guess is correct */
        else if(guess===secretnumber){
            document.querySelector('.message').textContent='🎈 Correct Number!';
            document.querySelector('.number').textContent=secretnumber;

            document.querySelector('body').style.backgroundColor=' #FFD662';
            document.querySelector('.guessnm').style.color=' #343148';
            document.querySelector('.message').style.color=' #C62168';
            document.querySelector('.label-score').style.color=' #282D3C';
            document.querySelector('.label-highscore').style.color=' #282D3C';
            document.querySelector('.between').style.color='#c7110e';
            document.querySelector('.guessnm').textContent='You Guess it Right';
            document.querySelector('.number').style.color='#00FF00';
            if(score>highscore){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }


        }
        /* when the guess is too high */
        else if(guess>secretnumber){
            if(score>1){
                document.querySelector('.message').textContent='📈📈Too High!';
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent='🥲You lose it!';
                document.querySelector('.score').textContent = 0;
            }
           

        }
        /* when the guess is too low */
        else if(guess<secretnumber){
         
              if(score>1){
            document.querySelector('.message').textContent='📉📉Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent='🥲You lose it!';
            document.querySelector('.score').textContent = 0;
        }
       
    }
}
    
);
document.querySelector('.again').addEventListener('click', function() {
    // Reset score and secret number
    let score = 20;
    const secretnumber = Math.trunc(Math.random() * 20) + 1;
    
    // Update the UI
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // Change styles for the new game
    document.querySelector('body').style.backgroundColor = '#0d0d0d';
    document.querySelector('.guessnm').style.color = '#FFD700';
    document.querySelector('.message').style.color = ' #00FF00';
    document.querySelector('.label-score').style.color = 'white';
    document.querySelector('.label-highscore').style.color = 'white';
    document.querySelector('.between').style.color = '#FF4500';
    document.querySelector('.guessnm').textContent='Guess My Number!';
});