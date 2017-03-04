let sequence = [];
let backspaceCount = 0;
let combo = e => {

    if (e.code === 'Backspace') {
        if (backspaceCount === 2) {
            resetSequence()
            backspaceCount = 0;
            console.warn(`Resetado: sequence: ${sequence} and backspaceCount: ${backspaceCount}`)
            return;
        }
        backspaceCount++;
        return;
    }

    if (sequence.length > 4) 
        resetSequence();
    
    sequence.push(e.code)
    let comboSuccess = ["ShiftLeft", "KeyS", "KeyT", "KeyF"];
    let actualCombo = sequence.slice(sequence.lenght - 4, sequence.lenght);

    if (comboSuccess.toString() === actualCombo.toString()) {
        changePage();
    }
}

let changePage = () => {
    let locationGithub = {
        origin: window.location.origin,
        itCV: '/cv/',
        staffCV: '/cv/cv-staff.html'
    }

    let actualPage = window.location.pathname;

    if(actualPage === locationGithub.itCV){
        window.location.href = locationGithub.origin + locationGithub.staffCV;
    }else{
        window.location.href = locationGithub.origin + locationGithub.itCV;
    }
}
let resetSequence = () => {
    sequence = [];
}
document.querySelector('html').addEventListener('keydown', combo)