//gets the height and width information
/*app.get("/getMembers", (req, res) => {
    let id = req.session.lock;
    mod.getLockMembers(id, function(members) {res.send({members: members});});
  })*/
var height;
var width;
var canvas;
var ctx;

function getDimensions() {
    height = document.getElementsByName("height")[0].value * 100;
    width = document.getElementsByName("width")[0].value * 100;
    console.log(height);
    console.log(width);
    displayBorders();
}

function displayBorders() {
    canvas = document.getElementById("myCanvas");
    canvas.height = height;
    canvas.width = width;
    displayLines();
}

function displayLines() {
    ctx = canvas.getContext("2d");
    for (var i = 0; i < height; i++) { 
        ctx.moveTo((i+1)*100, 0);
        ctx.lineTo((i+1)*100, height);
        ctx.stroke();
    }
    for (var i = 0; i < width; i++) {
        ctx.moveTo(0, (i+1)*100);
        ctx.lineTo(width, (i+1)*100);
        ctx.stroke();
    }
}

