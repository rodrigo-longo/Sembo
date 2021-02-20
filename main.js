const url = 'http://localhost:3000/'; //URL FOR FETCH


// QUERRY SELECTORS 
const form$$ = document.querySelector('#form') 
const button$$ = document.querySelector('#button')
const input$$ = document.querySelector('#input')
const result$$ = document.querySelector('.results')

// FUNCTION SUBMIT FOR SEARCH EACH COUNTRY WITH THE FORM
form$$.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(input$$.value.toUpperCase() == 'ES'){
        var country$$ = 'Spain';
    }
    if(input$$.value.toUpperCase() == 'FR'){
        var country$$ = 'France';
    }
    if(input$$.value.toUpperCase() == 'IT'){
        var country$$ = 'Italy';
    }

    fetch(url+input$$.value).then(res => res.json()).then(res => {
        const sortByScore = res.sort((a,b) => {return b.score - a.score;});
        const totalScore = sortByScore.reduce((sum , scores) => scores.score ?  sum + scores.score: sum , 0);
        const averageScore = totalScore / res.length;
        const topScore = sortByScore.slice(0,3);
        console.log(topScore)

        const pTop3$$ = document.createElement('p');
        
        
        pTop3$$.innerHTML = `
        <h3>Top 3 Hotels From ${country$$}:</h3> 
        · ${topScore[0].name}: score:${topScore[0].score}, <br>
        · ${topScore[1].name}: score:${topScore[1].score}, <br>
        · ${topScore[2].name}: score:${topScore[2].score}. <br>
        <br>
        Average Score of ${country$$}: ${averageScore} `
        
        const removeP$$ = document.createElement('button');
            removeP$$.classList.add('btn')
            removeP$$.innerHTML = 'X'
            removeP$$.addEventListener('click', () => {pTop3$$.remove()})
        
        pTop3$$.appendChild(removeP$$);
        result$$.appendChild(pTop3$$);

    })
})

// FUNCTION FOR SEARCH ALL THE COUNTRIES AT THE SAME TIME
button$$.addEventListener('click', () => {
    //SPAIN
    fetch(url+'ES').then(res => res.json()).then(res => {
        const sortByScore = res.sort((a,b) => {return b.score - a.score;});
        const totalScore = sortByScore.reduce((sum , scores) => scores.score ?  sum + scores.score: sum , 0);
        const averageScore = totalScore / res.length;
        const topScore = sortByScore.slice(0,3);
        console.log(topScore)

        const pTop3$$ = document.createElement('p');
        
        
        pTop3$$.innerHTML = `
        <h3>Top 3 Hotels From Spain (es):</h3> 
        · ${topScore[0].name}: score:${topScore[0].score}, <br>
        · ${topScore[1].name}: score:${topScore[1].score}, <br>
        · ${topScore[2].name}: score:${topScore[2].score}. <br>
        <br>
        Average Score of Spain (es): ${averageScore} `
        
        const removeP$$ = document.createElement('button');
            removeP$$.classList.add('btn')
            removeP$$.innerHTML = 'X'
            removeP$$.addEventListener('click', () => {pTop3$$.remove()})
        
        pTop3$$.appendChild(removeP$$);
        result$$.appendChild(pTop3$$);
    })
    //SPAIN
    
    //ITALY
    fetch(url+'IT').then(res => res.json()).then(res => {
        const sortByScore = res.sort((a,b) => {return b.score - a.score;});
        const totalScore = sortByScore.reduce((sum , scores) => scores.score ?  sum + scores.score: sum , 0);
        const averageScore = totalScore / res.length;
        const topScore = sortByScore.slice(0,3);
        console.log(topScore)

        const pTop3$$ = document.createElement('p');
        
        
        pTop3$$.innerHTML = `
        <h3>Top 3 Hotels From Italy (it):</h3> 
        · ${topScore[0].name}: score:${topScore[0].score}, <br>
        · ${topScore[1].name}: score:${topScore[1].score}, <br>
        · ${topScore[2].name}: score:${topScore[2].score}. <br>
        <br>
        Average Score of Italy (it): ${averageScore} `
        
        const removeP$$ = document.createElement('button');
            removeP$$.classList.add('btn')
            removeP$$.innerHTML = 'X'
            removeP$$.addEventListener('click', () => {pTop3$$.remove()})
        
        pTop3$$.appendChild(removeP$$);
        result$$.appendChild(pTop3$$);
    })
    //ITALY
    