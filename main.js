const url = 'http://localhost:3000/'; //URL FOR FETCH


// QUERRY SELECTORS 
const form$$ = document.querySelector('#form') 
const button$$ = document.querySelector('#button')
const input$$ = document.querySelector('#input')
const result$$ = document.querySelector('.results')

//Function to paint results on html
function intoHTML(country , res ){
    const sortByScore = res.sort((a,b) => {return b.score - a.score;});
    const totalScore = sortByScore.reduce((sum , scores) => scores.score ?  sum + scores.score: sum , 0);
    const averageScore = totalScore / res.length;
    const topScore = sortByScore.slice(0,3);
    console.log(topScore)

    const pTop3$$ = document.createElement('p');
    
    
    pTop3$$.innerHTML = `
    <h3>Top 3 Hotels From ${country}:</h3> 
    · ${topScore[0].name}: score:${topScore[0].score}, <br>
    · ${topScore[1].name}: score:${topScore[1].score}, <br>
    · ${topScore[2].name}: score:${topScore[2].score}. <br>
    <br>
    Average Score of ${country}: ${averageScore} `
    
    const removeP$$ = document.createElement('button');
        removeP$$.classList.add('btn')
        removeP$$.innerHTML = 'X'
        removeP$$.addEventListener('click', () => {pTop3$$.remove()})
    
    pTop3$$.appendChild(removeP$$);
    result$$.appendChild(pTop3$$);
}



// FUNCTION SUBMIT FOR SEARCH EACH COUNTRY WITH THE FORM
form$$.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputUpper = input$$.value.toUpperCase();

    if(inputUpper.includes('ES') || inputUpper.includes('SP') ){
        var country$$ = 'Spain';
        var inputValue = 'ES';
    }else if(inputUpper.includes('FR')){
        var country$$ = 'France';
        var inputValue = 'FR';
    }else if(inputUpper.includes('IT')){
        var country$$ = 'Italy';
        var inputValue = 'IT';
    } else{
        alert("We don't have hotel stats of that Country.")
        return;
    }
    console.log(inputValue);
    fetch(url+inputValue).then(res => res.json()).then(res => {
        
        intoHTML(country$$ , res)

    })
})

// FUNCTION FOR SEARCH ALL THE COUNTRIES AT THE SAME TIME
const countryID = ['ES','IT','FR'];
const countryName = ['Spain (es)','Italy (it)','France (fr)']

button$$.addEventListener('click', () => {
    for(let i = 0;i < countryID.length; i++){
        const idC = countryID[i];
        const nameC = countryName[i]
        fetch(url+idC).then(res => res.json()).then(res => {
               intoHTML(nameC , res)
        })    
    }
})    


