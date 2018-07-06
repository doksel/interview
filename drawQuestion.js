function start(){
    const doc = document;
    let myMain = doc.querySelector('main');
    let i=0;
    drawQuestion(i);

    function drawQuestion(i){
        
        const myForm = doc.createElement('form');
        myForm.className = 'myForm';
        
        const myFieldset = doc.createElement('fieldset');
        if(forms[i].id == 9){
            prelastStep(i);
        }else{
            const myTitle = doc.createElement('div');
            myTitle.className = 'title';
            const spanTitle = doc.createElement('span');
            spanTitle.innerText = forms[i].id+'. ';
            myTitle.appendChild(spanTitle);
            myTitle.innerHTML += forms[i].title;
           
            myFieldset.appendChild(myTitle);
            const myInput = doc.createElement('input');
    
            for(let j=0;j<forms[i].input.length;j++){
                const myLablelInput = doc.createElement('p');
                myInput.setAttribute('type', forms[i].type);
                myInput.className = 'input';
                myLablelInput.appendChild(myInput);
                myLablelInput.innerHTML += forms[i].input[j];

                myFieldset.appendChild(myLablelInput);
            }
            const buttons = doc.createElement('div');
            if(forms[i].id == 1){
    
                buttons.className = 'buttons';
                const buttonNext = doc.createElement('button');
                buttonNext.className = 'btn prev';
                buttonNext.innerHTML = 'Следующий вопрос';
                
                buttons.appendChild(buttonNext);
                myFieldset.appendChild(buttons);
    
                buttonNext.addEventListener('click', nextQuestion);
            }else{
                const buttons = doc.createElement('div');
                buttons.className = 'buttons';
                const buttonNext = doc.createElement('button');
                buttonNext.className = 'btn next';
                buttonNext.innerHTML = 'Далее';
                const buttonPrev = doc.createElement('button');
                buttonPrev.className = 'btn prev';
                buttonPrev.innerHTML = 'Назад';

                myFieldset.appendChild(buttons);           
                buttons.appendChild(buttonPrev);
                buttons.appendChild(buttonNext);
                buttonNext.addEventListener('click', nextQuestion);
                buttonPrev.addEventListener('click', prevQuestion);    
            }   

            myForm.appendChild(myFieldset);
            myMain.appendChild(myForm);  
        }

        function nextQuestion(){
            event.preventDefault();

            if(forms[i].type == 'checkbox'){
                let a = !!document.querySelector(".input:checked");
                function check() {    
                    a || alert("Выберите хотя бы один ответ!");
                    return a
                };
                check();
                if(a){
                    i++;
                    $('.myForm').fadeOut(1000, function(){
                        myMain.innerHTML = "";
                        drawQuestion(i);
                    });
                }     
            }else if(forms[i].type == 'number'){
                let a = !!document.querySelector('.input').value;
                function check() {    
                    a || alert("Введите свой возраст!");
                    return a
                };
                check();
                if(a){
                    i++;
                    $('.myForm').fadeOut(1000, function(){
                        myMain.innerHTML = "";
                        drawQuestion(i)
                    });
                }     
            }   
        }

        function prevQuestion(){
            event.preventDefault();
            i--;
            drawQuestion(i);
        }
    
        function prelastStep(i){
            spiner(i);
            setTimeout( lastStep, 3000, i);
        }

        function spiner(i){
            const mySpiner = doc.createElement('div');
            mySpiner.className = 'spiner';
            const text = doc.createElement('p');
            text.className = 'text';
            text.innerText = forms[i].text;
                    
            myFieldset.appendChild(mySpiner);
            myFieldset.appendChild(text);
            myForm.appendChild(myFieldset);
            myMain.appendChild(myForm);
        }
        
        function lastStep(i){
            i++;
            myMain.innerHTML = "";
            const myForm = doc.createElement('form');
            const myFieldset = doc.createElement('fieldset');
            const myTitle = doc.createElement('div');
            myTitle.className = 'title';
            const spanTitle = doc.createElement('span');
            spanTitle.innerText = forms[i].id+'. ';

            myTitle.innerHTML = forms[i].title;
            myTitle.style.textAlign = 'center';

            myFieldset.appendChild(myTitle);           
    
            for(let j=0;j<forms[i].input.length;j++){
                const myLablelInput = doc.createElement('p');
                const myInput = doc.createElement('input');
                myInput.setAttribute('type', forms[i].type);
                myLablelInput.style.textAlign = 'center';
                myLablelInput.innerHTML += forms[i].input[j];

                myLablelInput.appendChild(myInput);
                myFieldset.appendChild(myLablelInput);
            }
            const buttons = doc.createElement('div');
            buttons.className = 'buttons';
            const buttonSubmit = doc.createElement('button');
            buttonSubmit.className = 'btn buttons prev';
            buttonSubmit.innerHTML = 'Отправить';
            buttons.appendChild(buttonSubmit);
            myFieldset.appendChild(buttons);

            myForm.appendChild(myFieldset);
            myMain.appendChild(myForm);
        }
    }
}

window.onload = start;