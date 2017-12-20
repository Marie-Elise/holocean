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
    socket.emit('showPoissonSept')
    console.log('emitted')
}
socket.on('showPoissonSept', function() {
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

//function showPoissonHuit
function showPoissonHuit() {
    socket.emit('showPoissonHuit')
    console.log('emitted')
}
socket.on('showPoissonHuit', function() {
    console.log('received emitted event')
    FunctionPoissonHuit()
})
function FunctionPoissonHuit() {
    var x = document.getElementById("poissonHuit");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//function showPoissonNeuf
function showPoissonNeuf() {
    socket.emit('showPoissonNeuf')
    console.log('emitted')
}
socket.on('showPoissonNeuf', function() {
    console.log('received emitted event')
    FunctionPoissonNeuf()
})
function FunctionPoissonNeuf() {
    var x = document.getElementById("poissonNeuf");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//function showPoissonOnze
function showPoissonOnze() {
    socket.emit('showPoissonOnze')
    console.log('emitted')
}
socket.on('showPoissonOnze', function() {
    console.log('received emitted event')
    FunctionPoissonOnze()
})
function FunctionPoissonOnze() {
    var x = document.getElementById("poissonOnze");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//function showPoissonDouze
function showPoissonDouze() {
    socket.emit('showPoissonDouze')
    console.log('emitted')
}
socket.on('showPoissonDouze', function() {
    console.log('received emitted event')
    FunctionPoissonDouze()
})
function FunctionPoissonDouze() {
    var x = document.getElementById("poissonDouze");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//function showPoissonTreize
function showPoissonTreize() {
    socket.emit('showPoissonTreize')
    console.log('emitted')
}
socket.on('showPoissonTreize', function() {
    console.log('received emitted event')
    FunctionPoissonTreize()
})
function FunctionPoissonTreize() {
    var x = document.getElementById("poissonTreize");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//function showPoissonQuatorze
function showPoissonQuatorze() {
    socket.emit('showPoissonQuatorze')
    console.log('emitted')
}
socket.on('showPoissonQuatorze', function() {
    console.log('received emitted event')
    FunctionPoissonQuatorze()
})
function FunctionPoissonQuatorze() {
    var x = document.getElementById("poissonQuatorze");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}