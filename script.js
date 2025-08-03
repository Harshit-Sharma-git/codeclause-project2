let totalDistance = 0;
let totalDuration = 0;
let totalCalories = 0;

document.getElementById('activityForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const type = document.getElementById('activityType').value;
    const duration = Number(document.getElementById('duration').value);
    const distance = Number(document.getElementById('distance').value);

    // Update totals
    totalDistance += distance;
    totalDuration += duration;
    totalCalories += calculateCalories(type, duration);

    // Update UI
    document.getElementById('totalDistance').textContent = totalDistance;
    document.getElementById('totalDuration').textContent = totalDuration;
    document.getElementById('totalCalories').textContent = totalCalories;

    // Show Recommendation
    updateRecommendation();

    // Reset form
    this.reset();
});

function calculateCalories(type, duration) {
    const rates = {
        'Running': 10,
        'Cycling': 8,
        'Walking': 4
    };
    return duration * rates[type];
}

function updateRecommendation() {
    let rec = '';
    if (totalDuration < 60) {
        rec = "Try to aim for at least 60 minutes of activity per day.";
    } else if (totalDistance > 10) {
        rec = "Great job! Add strength training to your routine.";
    } else {
        rec = "You're doing good. Keep the consistency!";
    }
    document.getElementById('recommendationText').textContent = rec;
}