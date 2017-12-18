var socket = io();

function showPoisson() {
    socket.emit('showPoisson')
    console.log('emitted')
}

socket.on('showPoisson', function() {
    console.log('received emitted event')
    FunctionPoisson()
})

function FunctionPoisson() {
    var x = document.getElementById("poissonUn");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function showPoissonDeux() {
    socket.emit('showPoissonDeux')
    console.log('emitted')
}

socket.on('showPoissonDeux', function() {
    console.log('received emitted event')
    FunctionPoissonDeux()
})

function FunctionPoissonDeux() {
    var x = document.getElementById("poissonDeux");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
