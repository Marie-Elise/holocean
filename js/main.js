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

//function showPoissonCinq
function showPoissonCinq() {
    socket.emit('showPoissonCinq')
    console.log('emitted')
}
socket.on('showPoissonCinq', function() {
    console.log('received emitted event')
    FunctionPoissonCinq()
})
function FunctionPoissonCinq() {
    var x = document.getElementById("poissonCinq");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//function showPoissonSix
function showPoissonSix() {
    socket.emit('showPoissonSix')
    console.log('emitted')
}
socket.on('showPoissonSix', function() {
    console.log('received emitted event')
    FunctionPoissonSix()
})
function FunctionPoissonSix() {
    var x = document.getElementById("poissonSix");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//function showPoissonSept
function showPoissonSept() {
    socket.emit('showPoissonSept()')
    console.log('emitted')
}
socket.on('showPoissonSept()', function() {
    console.log('received emitted event')
    FunctionPoissonSept()
})
function FunctionPoissonSept() {
    var x = document.getElementById("poissonSept");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}