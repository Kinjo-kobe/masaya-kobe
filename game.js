let score = 0;
let pointMultiplier = 1;
let autoMode = false;
let autoIncrementInterval;

function incrementScore() {
    if (autoMode) return;

    score += pointMultiplier;
    updateUI();

    if (score > 100000) startAutoMode();
}

function buySkill() {
    const selectedPoints = +document.getElementById('pointSelector').value;
    const multiplierIncrease = selectedPoints / 100;

    if (score >= selectedPoints) {
        score -= selectedPoints;
        pointMultiplier += multiplierIncrease;
        updateUI();
    } else {
        alert('ポイントが足りません！');
    }
}

function updateUI() {
    document.getElementById('score').innerText = score;
}

function toggleAutoMode() {
    autoMode = !autoMode;

    if (autoMode) startAutoMode();
    else clearInterval(autoIncrementInterval);
}

function startAutoMode() {
    autoIncrementInterval = setInterval(() => {
        score += pointMultiplier;
        updateUI();
    }, 1000);
}

document.getElementById('clickButton').addEventListener('click', incrementScore);
