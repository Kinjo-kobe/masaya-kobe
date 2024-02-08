let score = 0;
let pointMultiplier = 1;
let autoMode = false;
let autoIncrementInterval;

function incrementScore() {
    if (autoMode) return;

    score += pointMultiplier;
    updateUI();

    if (score > 100000) {
        convertScore();
        startAutoMode();
    }
}

function convertScore() {
    score = 100000;
    updateUI();
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
    document.getElementById('score').innerText = formatScore(score);
}

function formatScore(score) {
    return (score > 100000) ? '10万+' : score;
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

        if (score > 100000) convertScore();
    }, 1000);
}

document.getElementById('clickButton').addEventListener('click', incrementScore);
