const combo = (() => {

    let sequence = [];
    let backspaceCount = 0;
    const resetSequence = () => {
        sequence = [];
    };
    return function (ev) {
        if (ev.code === 'Backspace') {
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
        
        sequence.push(ev.code)
        let comboSuccess = ["ShiftLeft", "KeyS", "KeyT", "KeyF"];
        let actualCombo = sequence.slice(sequence.lenght - 4, sequence.lenght);

        if (comboSuccess.toString() === actualCombo.toString()) {
            changePage();
        }
    }
})()

const changePage = () => {
    let locationGithub = {
        origin: window.location.origin,
        itCV: '/cv/',
        staffCV: '/cv/staff.html'
    }

    let actualPage = window.location.pathname;

    if (actualPage === locationGithub.itCV) {
        window.location.href = locationGithub.origin + locationGithub.staffCV;
    } else {
        window.location.href = locationGithub.origin + locationGithub.itCV;
    }
}

document
    .querySelector('html')
    .addEventListener('keydown', combo)