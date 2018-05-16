function startGame() {
    myGameArea.start();
}

function pauseGame() {
    myGameArea.pause();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    pause : function() {
        console.log("pause");
    }
}
