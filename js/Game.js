function Game() {
    this.idCanvas = null;
    this.canvas   = null;
    this.contexto = null;
    this.width    = null;
    this.height   = null;
}

Game.prototype.init = function(idCanvas = 'game', width = 600, height = 480) {
    canvas = document.getElementById(idCanvas);
    if (canvas !== null) {
        this.idCanvas = idCanvas;
        this.canvas   = canvas;
        this.width    = width;
        this.height   = height;
        this.contexto = canvas.getContext('2d'); 
        this.desenha();
    } else {
        console.log("Nenhum elemento canvas foi encontrado no documento.");
    }
}

Game.prototype.desenhaInfo = function() {
    this.contexto.clearRect(0,0,this.width, this.height);
    this.contexto.fillStyle = "#fff";
    this.contexto.font = "14px Georgia";

    this.contexto.fillRect(0,10,this.width,2);
    
    /** Base onde a nave inicia */
    this.contexto.fillRect(50,this.height - 52, 100, 48);
    this.contexto.fillStyle = "red";
    this.contexto.fillRect(50,this.height - 52, 100, 3);

}

Game.prototype.desenha = function() {
    this.desenhaInfo();
}

