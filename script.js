window.addEventListener('DOMContenLoaded', () => {
    const blocks = Array.from(document.querySelectorAll(".block"));
    const displayPlayer = document.querySelector(".player-display");
    const resetButton = document.querySelector("#reset-game");
    const viewer = document.querySelector(".viewer");

    let currentPlayer = "O";
    let isGameActive = true;
    let panel = ["", "", "", "", "", "", "", "", ""];


    const TIE_GAME = "TIE_GAME";
    const PLAYERO_WON = "PLAYERO_WON";
    const PLAYERX_WON = "PLAYERX_WON";

    /* The given numbers below are the 9 index numbers that are used within the panel 
         [0,1,2],
         [3,4,5],
         [6,7,8],
    */

    // The indexes below are the 9 numbers within the game panel
    const winningTerms = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [0, 3, 6],
        [0, 4, 8],
        [2, 5, 8],
        [2, 4, 6],


    ]

    const userAction = (block, index) => {
        if (isVlidAction(block, index) && isGameActive) {
            block.innerText = currentPlayer;
            block.classlist.add(`player${currentPlayer}`);
            updatePanel(index);
            handleResultValidation();
            ChangePlayer();

        }
    }
    const anounce = (type) => {
        switch (type) {
            case PLAYERX_WON:
                announce.innerHTML = "Player <span class="
                playerX ">X</span> Won";
                break;
            case PLAYERO_WON:
                announce.innerHTML = "Player <span class="
                playerO ">O</span> Won";
                break;
            case TIE_GAME:
                announce.innerText = "Tie Game";
        }
        anounce.classlist.remove("hide");
    };

    blocks.forEach((game - tile, index) => {
        gameTiles.addEventListener("click", () => userAction(game - tile, index));
    });

    resetButton.addEventListener("click", resetPanel)

});