function calculateAge() {
    
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').textContent = 'Please enter a valid date.';
        return;
    }

    
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // Months are 0-based
    const currentYear = today.getFullYear();

    
    let age = currentYear - year;

    
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    
    document.getElementById('result').textContent = `You are ${age} years old.`;
}
