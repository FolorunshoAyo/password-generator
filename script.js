(function(){
    const formEl = document.querySelector("#formEl"); 
    const inputEl = document.querySelector("#genPassword");
    const radio1El = document.getElementById("four-characters");
    const radio2El = document.getElementById("six-characters");
    const radio3El = document.getElementById("pin");

    radio1El.addEventListener("click", function(){
        this.setAttribute("checked", "checked");
        radio2El.removeAttribute("checked", "checked");
        radio3El.removeAttribute("checked", "checked");
    }, false);

    radio2El.addEventListener("click", function(){
        this.setAttribute("checked", "checked");
        radio1El.removeAttribute("checked", "checked");
        radio3El.removeAttribute("checked", "checked");
    }, false);

    radio3El.addEventListener("click", function(){
        this.setAttribute("checked", "checked");
        radio1El.removeAttribute("checked", "checked");
        radio2El.removeAttribute("checked", "checked");
    }, false);

    formEl.addEventListener("submit", genPassword, false);

    function genPassword(event){
        event.preventDefault();

        let selectedOption = checkRadios();

        let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
         "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
          "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

         if(!selectedOption){
             alert("please select an option");
         }
         else if(selectedOption === 4){
             let fourRandomCharacters = generate4RandomIndex();

             let character1 = fourRandomCharacters[0];
             let character2 = fourRandomCharacters[1];
             let character3 = fourRandomCharacters[2];
             let character4 = fourRandomCharacters[3];

             let passwordGenerted = characters[character1] + characters[character2] + characters[character3] + characters[character4];

             inputEl.value = passwordGenerted;
         }else if(selectedOption == 6){
             let sixRandomIndexes = generate6RandomIndex();

             let character1 = sixRandomIndexes[0];
             let character2 = sixRandomIndexes[1];
             let character3 = sixRandomIndexes[2];
             let character4 = sixRandomIndexes[3];
             let character5 = sixRandomIndexes[4];
             let character6 = sixRandomIndexes[5];

             let passwordGenerted = characters[character1] + characters[character2] + characters[character3] + characters[character4] + characters[character5] + characters[character6];

             inputEl.value = passwordGenerted;
         }else{
             generatePin();
         }
    }

    function checkRadios(){
        let isRadio1ElChecked = radio1El.hasAttribute("checked");
        let isRadio2ElChecked = radio2El.hasAttribute("checked");
        let isRadio3ElChecked = radio3El.hasAttribute("checked");

        if(isRadio1ElChecked){
            return 4;
        }else if(isRadio2ElChecked){
            return 6;
        }else if(isRadio3ElChecked){
            return "pin";
        }else{
            return 0;
        }
    }

    function generate4RandomIndex(){
        let randomIndex1 = Math.floor(Math.random() * 62);
        let randomIndex2 = Math.floor(Math.random() * 62);
        let randomIndex3 = Math.floor(Math.random() * 62);
        let randomIndex4 = Math.floor(Math.random() * 62);

        return [randomIndex1, randomIndex2, randomIndex3, randomIndex4];
    }

    function generate6RandomIndex(){
        let randomIndex1 = Math.floor(Math.random() * 62);
        let randomIndex2 = Math.floor(Math.random() * 62);
        let randomIndex3 = Math.floor(Math.random() * 62);
        let randomIndex4 = Math.floor(Math.random() * 62);
        let randomIndex5 = Math.floor(Math.random() * 62);
        let randomIndex6 = Math.floor(Math.random() * 62);

        return [randomIndex1, randomIndex2, randomIndex3, randomIndex4, randomIndex5, randomIndex6];
    }

    function generatePin(){
        let randomIndexes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        let randomIndex1 = Math.floor(Math.random() * 9);
        let randomIndex2 = Math.floor(Math.random() * 9);
        let randomIndex3 = Math.floor(Math.random() * 9);
        let randomIndex4 = Math.floor(Math.random() * 9);

        let number1 = randomIndexes[randomIndex1];
        let number2 = randomIndexes[randomIndex2];
        let number3 = randomIndexes[randomIndex3];
        let number4 = randomIndexes[randomIndex4];

        let generatedPin = number1 + number2 + number3 + number4;

        inputEl.value = generatedPin;
    }
}());