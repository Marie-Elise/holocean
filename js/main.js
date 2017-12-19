var socket = io();

//function showPoisson
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

//function showPoissonDeux
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

//function showPoissontrois
function showPoissonTrois() {
    socket.emit('showPoissonTrois')
    console.log('emitted')
}

socket.on('showPoissonTrois', function() {
    console.log('received emitted event')
    FunctionPoissonTrois()
})

function FunctionPoissonTrois() {
    var x = document.getElementById("poissonTrois");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//function showPoissonQuatre
function showPoissonQuatre() {
    socket.emit('showPoissonQuatre')
    console.log('emitted')
}

socket.on('showPoissonQuatre', function() {
    console.log('received emitted event')
    FunctionPoissonQuatre()
})

function FunctionPoissonQuatre() {
    var x = document.getElementById("poissonQuatre");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}