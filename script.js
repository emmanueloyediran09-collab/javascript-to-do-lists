 function save (){
            let userInput = document.getElementById('input').value
            let displayArea = document.getElementById('display')
            displayArea.innerHTML+= `<p> ${userInput}</p>`
            document.getElementById('input').value = ''
        }