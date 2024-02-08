let score = 0;
let pointMultiplier = 1; // ポイントの倍率

function incrementScore() {
    score += pointMultiplier;
    updateUI();
}

function buySkill(skillType) {
    let cost = 0;
    let multiplierIncrease = 0;

    switch (skillType) {
        case 'speed':
            cost = 100;
            multiplierIncrease = 1;
            break;
        case 'gacha':
            cost = 100;
            multiplierIncrease = 1;
            break;
        case 'x4':
            cost = 200;
            multiplierIncrease = 3;
            break;
        case 'x6':
            cost = 300;
            multiplierIncrease = 5;
            break;
        case 'x8':
            cost = 400;
            multiplierIncrease = 7;
            break;
    }

    if (score >= cost) {
        score -= cost;
        pointMultiplier += multiplierIncrease;
        updateUI();
    } else {
        alert('ポイントが足りません！');
    }
}

function updateUI() {
    document.getElementById('score').innerText = score;
}

document.getElementById('clickButton').addEventListener('click', incrementScore);
