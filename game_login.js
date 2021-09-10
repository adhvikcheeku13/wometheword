function addUser(){
    playerA_name=document.getElementById("playera").value;
    playerB_name=document.getElementById("playerb").value;

    localStorage.setItem("player1_name",playerA_name);
    localStorage.setItem("player2_name",playerB_name);
    window.location="game_page.html";
}