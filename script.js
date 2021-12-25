 "use strict";
document.addEventListener("DOMContentLoaded", function(){
    let wrapperTetris = document.querySelector(".wrapperTetris");
    wrapperTetris.innerHTML = `
        <div class="main">        
        </div>
        <div class="infoTetris">
            <p class="score">здесь будет рекорд,  </p>
            <p class="current">0</p>
            <div class="nextFigure">
                и следующая фигура
                <div class="tetro">
                </div>
            </div>
        </div>
        <div class="tetroControl">
            <div class>
                <button>&#8635;</button>
            </div>
            <div>
                <button>&larr;</button>
                <button>&rarr;</button>
            </div>
            <div>
                <button style="position: relative; top: -54px; left: 72px">&darr;</button> 
                <button>start/ pause</button>
            </div>
        </div>
    `


    let main = document.querySelector('.main');
    let nextFigure = document.querySelector('.nextFigure');
    let score = document.querySelector('.score');
    let current = document.querySelector('.current');
    let currentNum = 0;
    let scoreNum = ((localStorage.getItem('score')) ? localStorage.getItem('score') : 50);
    console.log(localStorage.getItem('score'));
    let speed = 400;
    let centerOfTetro = []; // 3-какая фигура в массива, 1,2 -y,x
    let nextTetro = Math.floor(Math.random() * 7);// сначала создается случайная фигура, потом заменяется
    score.textContent = scoreNum;
    let state = "newGame";//play pause loose stop
    let listenerContinueButton;
    let listenerNewGameButton;

    let tetroField = [
        [0,0,0,0],
        [0,0,0,0]
    ];

    let playField = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    let arrayOfTetro = [
        [
            [-1, 0, -1, 1, 0, -1, 0, 0],
            [-1, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, -1, 1, 0],
            [-1, -1, 0, -1, 0, 0, 1, 0]
        ], // _|-
        [
            [-1, -1, -1, 0, 0, 0, 0, 1],
            [-1, 1, 0, 0, 0, 1, 1, 0],
            [0, -1, 0, 0, 1, 0, 1, 1],
            [-1, 0, 0, -1, 0, 0, 1, -1]
        ], // -|_
        [
            [-1, 1, 0, -1, 0, 0, 0, 1],
            [-1, 0, 0, 0, 1, 0, 1, 1],
            [0, -1, 0, 0, 0, 1, 1, -1],
            [-1, -1, -1, 0, 0, 0, 1, 0]
        ], // __|
        [
            [-1, -1, 0, -1, 0, 0, 0, 1],
            [-1, 0, -1, 1, 0, 0, 1, 0],
            [0, -1, 0, 0, 0, 1, 1, 1],
            [-1, 0, 0, 0, 1, -1, 1, 0]
        ], // |__
        [
            [-1, 0, 0, -1, 0, 0, 0, 1],
            [-1, 0, 0, 0, 0, 1, 1, 0],
            [0, -1, 0, 0, 0, 1, 1, 0],
            [-1, 0, 0, -1, 0, 0, 1, 0]
        ], // _|_
        [
            [0, -1, 0, 0, 0, 1, 0, 2],
            [-1, 0, 0, 0, 1, 0, 2, 0],
            [0, -1, 0, 0, 0, 1, 0, 2],
            [-1, 0, 0, 0, 1, 0, 2, 0]
        ], // ___
        [
            [-1, -1, -1, 0, 0, -1, 0, 0, ],
            [-1, -1, -1, 0, 0, -1, 0, 0, ],
            [-1, -1, -1, 0, 0, -1, 0, 0, ],
            [-1, -1, -1, 0, 0, -1, 0, 0, ]
        ] // [_]
    ];

    let mainInnerHTML = '';
    let nextFigureHTML = '';

    function addNextTetroInfo(nextTetro) {
        clearField(tetroField);
        let tetro = transformTetroToAdd([1, 1, nextTetro, 0]);
        drowNewTetro(tetro, tetroField);
    }

    function clearField(field) {
        field.forEach((_, y) => {
            field[y].forEach((_, x) => {
                field[y][x] = 0;
            });
        }); // clear array of array   
    }

    function addCurrent(cur){
        current.textContent = `${currentNum+=cur}`;
    }

    function addScore(cur) {
        if(cur > scoreNum){
            localStorage.setItem('score', cur);
            scoreNum = cur;
            score.textContent = scoreNum;
        }
    }

    function getRandomTetro(max = 7) {
        let oldTetro = nextTetro;
        nextTetro = Math.floor(Math.random() * max);
        return centerOfTetro = [1, 4, oldTetro, 0]; //некрасиво
    }

    function drowNewTetro(newTetro, field) { //clear function
        let tetro = newTetro;   
        for (let y = 0; y < tetro.length; y += 2) {
            if (field[tetro[y]][tetro[y + 1]] == 2) {// gпроверяем полное окончание игры
                whenGameLost();               
            } else {
                field[tetro[y]][tetro[y + 1]] = 1;
            }
        }
    }

    function transformTetroToAdd(positionAndTetroZeroPosition) {
        let [tetroY, tetroX, tetroNum, tetroRotateNum] = positionAndTetroZeroPosition;
        let tetro = arrayOfTetro[tetroNum][tetroRotateNum];
        return tetro.map((value, index) => {
            return (index % 2 == 1) ? (value + tetroX) : (value + tetroY);
        });
    }

    function canTetroMoving(direction) {// можно проверять по центру тетро преобразовывать в координаты и их сравнивать
        for (let y = 19; y >= 0; y--) {
            for (let x = 0; x < 10; x++) {
                let bol;
                switch(direction){
                    case "down": 
                        bol = (playField[y][x] == 1 && (y == 19 || playField[y + 1][x] == 2));
                        break;
                    case "left": 
                        bol = (playField[y][x] == 1 && (x == 0 || playField[y][x - 1] == 2));
                        break;
                    case "right": 
                        bol = (playField[y][x] == 1 && (x == 9 || playField[y][x + 1] == 2));
                        break;
                }
                if (state !== "play" || bol) {
                    return false
                }
            }
        }
        return true;
    }
    
    function movingTetro() {
        if (canTetroMoving("down")) {
            centerOfTetro[0]++;
            deleteTetro();
            drowNewTetro(transformTetroToAdd(centerOfTetro), playField);
            drawField();// где находится центр фигуры
            addCurrent(1); // добавляет к репорду при движении на 1 вниз
        } else if (!canTetroMoving("down") && state !== "loose") {
            let lineStopTetro = [];
            for (let y = 19; y >= 0; y--) {
                for (let x = 0; x < 10; x++) {
                    if (playField[y][x] == 1) {
                        playField[y][x] = 2;
                        lineStopTetro.push(y);
                    }
                }
            }
            clearFullLines(Array.from(new Set(lineStopTetro))); //передает массив из значений у не повторяющихся их проверяет на заполнение
            drowNewTetro(transformTetroToAdd(getRandomTetro()), playField);
            addNextTetroInfo(nextTetro);
            drawInfoNextTetro();
        }
    }
    // Удаление линии при ее полном заполнении
    function clearFullLines(lines) {
        for (let i = lines.length - 1; i >= 0; i--) {console.log(1);
            if (playField[lines[i]].every((value) => value == 2)) {
                playField.splice(lines[i], 1);
                playField.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                addCurrent(100);
            }
        }
    }

    function drawInfoNextTetro() {
        nextFigureHTML = '';
        for (let y = 0; y < 2; y++) {
            for (let x = 0; x < 5; x++) {
                switch (tetroField[y][x]) {
                    case 0:
                        nextFigureHTML += '<div class="cellinfo"></div>';
                        break;
                    case 1:
                        nextFigureHTML += '<div class="cellinfo movingCell"></div>';
                }
            }
        }
        nextFigure.innerHTML = nextFigureHTML;
    }

    function drawField() {
        mainInnerHTML = '';
        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                switch (playField[y][x]) {
                    case 0:
                        mainInnerHTML += '<div class="cell"></div>';
                        break;
                    case 2:
                        mainInnerHTML += '<div class="cell fixedCell"></div>';
                        break;
                    case 1:
                        mainInnerHTML += '<div class="cell movingCell"></div>';
                }
            }
        }
        main.innerHTML = mainInnerHTML;
    }


    // Работа с выводом меню привествия и проигрыша
    let parent = document.querySelector(".wrapperTetris")
    let theFirstChild = parent.firstChild;
    let menueWrapper = parent.insertBefore(document.createElement('div'), theFirstChild ); //where drow

    function addListenerContinue (state){ //start after pause
        if(state ==="newGame"){
            startNewGame();
            //что делать при новой игре
        }else {
            state = "play";
            continueGame();
        }
        if(listenerContinueButton) {
            listenerContinueButton.removeEventListener("click", () => addListenerContinue("continue") );
        }
        listenerNewGameButton.removeEventListener("click", () => addListenerContinue("newGame") );
        menueWrapper.innerHTML = '';
    }

    function drawMenueWhenPause(state) { //
        console.log("drowmenuwhenpause");
        menueWrapper.innerHTML = 
            `
                <div class="menue" >
                    <p>Здравствуйте, игра на паузе</p>
                    <button class="continue">Продолжить</button>
                    <button class="newGame">Начать новую игру</button>
                </div>
            `
            listenerContinueButton = document.querySelector(".continue");
            listenerContinueButton.addEventListener("click", () => addListenerContinue("continue") );

            listenerNewGameButton = document.querySelector(".newGame");
            listenerNewGameButton.addEventListener("click", () => addListenerContinue("newGame") );
    }

    function drawMenueWhenLoose() {  //or new game
        clearField(playField);
        drawField();
        console.log(state);
        let message = (state === "loose") ? "вы проиграли" : "здравствуйте";
        menueWrapper.innerHTML = 
            `
                <div class="menue">
                    <p>${message}</p>
                    <button class="newGame">Начать новую игру</button>
                </div>
            `
            listenerNewGameButton = document.querySelector(".newGame");
            listenerNewGameButton.addEventListener("click", () => addListenerContinue("newGame") );
    }



    let temerStart;

    function startGame() {
        state = "play";
        
        temerStart = setTimeout(startGame, speed);
        movingTetro();
        drawField();
    }

    function stopGame() {        
        if(state === ("loose"||"newGame")){
            // drawMenueWhenLoose(state)
            drawField();
            clearInterval(temerStart);
            console.log("и это правда тут добавим что будет если конец");
            addScore(currentNum);
            currentNum = 0;            
        } else {           
            console.log("pausa");
            state = "pause";
            savePlayState(centerOfTetro, playField, nextTetro, currentNum);
            clearInterval(temerStart);
            drawMenueWhenPause();
        }
    }

    function moveLeft(check) {
        if(check){
            centerOfTetro[1]--;
            deleteTetro();
            drowNewTetro(transformTetroToAdd(centerOfTetro), playField);
            drawField();
        }
    }

    function moveRight(check) {
        if(check) {
            centerOfTetro[1]++;
            deleteTetro();
            drowNewTetro(transformTetroToAdd(centerOfTetro), playField);
            drawField();
        }
    }
    //Move faster
    function moveFaster(faster) {
        speed = faster;
    }

    function canTetroRotate(nweTetroToAdd) {
        let tetro = nweTetroToAdd;    
            for (let y = 0; y < tetro.length; y += 2) {
                if (state !=="play" || tetro[y] > 19 || playField[tetro[y]][tetro[y + 1]] == 2 || tetro[y + 1] < 0 || tetro[y + 1] > 9) {
                    return false;
                } 
            } return true;
    }

    function deleteTetro(){
        for (let y = 19; y >= 0; y--) {
            for (let x = 9; x >= 0; x--) {
                if (playField[y][x] == 1) { //delete tetro
                    playField[y][x] = 0;
                }
            }
        }
    }

    function rotateTetro(centerOfTetro) {
        let OldcenterOfTetro = centerOfTetro[3];
    //    centerOfTetro[3]++; //next type of tetro to drow
        if ((centerOfTetro[3] + 1) == 4) {//next type of tetro to drow
            centerOfTetro[3] = 0;
        } else centerOfTetro[3]++//каждого элемента по 4 штуки

        if (canTetroRotate(transformTetroToAdd(centerOfTetro))) {        
            deleteTetro();
            drowNewTetro(transformTetroToAdd(centerOfTetro), playField);

            drawField(); // для быстрой реакции
            return centerOfTetro;
        } else {
            centerOfTetro[3] = OldcenterOfTetro;
            console.log(OldcenterOfTetro);
            console.log(centerOfTetro);
            return --centerOfTetro;
        }
    }

    function savePlayState(centerOfTetro, playField, nextTetro, currentNum) {
        if(centerOfTetro.length === 0){return};// если просто открыл и закрыл тетрис
        let stateOfPlay = {
            "centerOfTetro": centerOfTetro,
            "playField": playField,
            "nextTetro": nextTetro,
            "currentNum": currentNum
        };
        localStorage.setItem('stateOfPlay', JSON.stringify(stateOfPlay));
    }

    function putPlayBack() {
        // {centerOfTetro, playField, nextTetro, currentNum} 
        let stateOfPlay = JSON.parse(localStorage.getItem('stateOfPlay'));
        centerOfTetro = stateOfPlay.centerOfTetro;
        playField = stateOfPlay.playField;
        nextTetro = stateOfPlay.nextTetro;
        currentNum = stateOfPlay.currentNum;
        localStorage.removeItem('stateOfPlay');
    }

    // Create button to control
    let tetroControl = document.querySelector(".tetroControl")
    let buttons = tetroControl.querySelectorAll("button");


    tetroControl.addEventListener("mousemove", e => {//hide controll button
        tetroControl.style.display="none";
    });

    tetroControl.addEventListener("touchstart", e => {
        e.preventDefault();
    });

    buttons[0].addEventListener("touchstart", event => {// up
        if(state === "play") rotateTetro(centerOfTetro); 
        event.preventDefault();
    });

    buttons[1].addEventListener("touchstart", event => {// left
        if(state === "play") {
            if (state === "play") {
                moveLeft(canTetroMoving("left"));
            }
        }
        event.preventDefault();
    });

    buttons[2].addEventListener("touchstart", event => {//right   
        if(state === "play") {
            if (state === "play") {
                moveRight(canTetroMoving("right"));
            }
        }
        event.preventDefault(); 
    });

    buttons[3].addEventListener("touchstart", event => {//down
        if(state === "play") {moveFaster(50);}
        event.preventDefault();
    });

    buttons[3].addEventListener("touchend", event => {//down
        if(state === "play") {moveFaster(500);}
        event.preventDefault();
    });

    buttons[4].addEventListener("touchstart", event => {//pause 
        event.preventDefault();   
        if(state === "play") {
            stopGame();
            // state = "pause";
            savePlayState(centerOfTetro, playField, nextTetro, currentNum);  
        } else if(state === "pause") {addListenerContinue ("continue")}
    });
    ///////////////////////////////////////
    document.addEventListener("keydown", event => {
        if (event.key == "ArrowUp" && state === "play" && !wrapperTetris.classList.contains("hide")) {
            rotateTetro(centerOfTetro);
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key == "ArrowDown" && state === "play" && !wrapperTetris.classList.contains("hide")) {
            moveFaster(50);
        }
    });

    document.addEventListener("keyup", event => {
        if (event.key == "ArrowDown" && state === "play" && !wrapperTetris.classList.contains("hide")) {
            
            moveFaster(500);// потому что не срабатывает вверх во время паузы
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key == "ArrowLeft" && state === "play" && !wrapperTetris.classList.contains("hide")) {
            moveLeft(canTetroMoving("left"));
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key == "ArrowRight" && state === "play" && !wrapperTetris.classList.contains("hide")) {
            moveRight(canTetroMoving("right"));
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key == " " && state !== "loose" && !wrapperTetris.classList.contains("hide")) {
            if(state === "play") {
                stopGame();
                //state = "pause";
                savePlayState(centerOfTetro, playField, nextTetro, currentNum);  
            } else if(state === "pause") {addListenerContinue ("continue")}
        } 
    });

    // function startNewGame() {
    //     console.log("new game"); 
    //     speed = 500;
    //     if(!localStorage.getItem('stateOfPlay')){
    //         clearField(playField);
    //         drowNewTetro(transformTetroToAdd(getRandomTetro()), playField);
    //         addNextTetroInfo(nextTetro);
    //         drawInfoNextTetro();
    //     } else {
    //         putPlayBack();
    //         addNextTetroInfo(nextTetro);
    //         drawInfoNextTetro();
    //     }
    //     startGame();
    // }


    function startNewGame(){
        console.log("new game");
        speed = 500;
        currentNum = 0; 
        clearField(playField);
        // drawField();
        drowNewTetro(transformTetroToAdd(getRandomTetro()), playField);
        addNextTetroInfo(nextTetro);
        drawInfoNextTetro();
        startGame();
    }
    // Обработка кнопки чтобы открывался тетрис по нажатию 
    function whenGameLost(){
        state = "loose";            
        console.log("вы проиграли");
        stopGame();
        // alert("вы проиграли, начать новую игру");
        drawMenueWhenLoose();
        // return startNewGame();
    }
    function continueGame(){
        putPlayBack();
        speed = 500;
        addNextTetroInfo(nextTetro);
        drawInfoNextTetro();
        drawField();
        startGame();
    }

    function changeStateButtonStart() {
        if (wrapperTetris.classList.contains("hide")){
            wrapperTetris.classList.toggle("hide");
            if(!localStorage.getItem('stateOfPlay')){
                console.log("ghjdthrf");
                drawMenueWhenLoose();
            } else {
                drawMenueWhenPause();
            }
            
        } else {
            console.log("ghjdthrf");
            stopGame();
            wrapperTetris.classList.toggle("hide");
        }
        // state = "pause";        
    }

    let startTetrisButton = document.querySelector(".startTetris");
    startTetrisButton.addEventListener("click", () => {
        changeStateButtonStart();
        console.log(state);
        
    })

    
    
});