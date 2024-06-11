// Get references to the necessary elements
const datePicker = document.getElementById('datePicker');
const tripLength = document.getElementById('tripLength');
const calendar = document.getElementById('calendar');

// Generate the calendar based on the current month
function generateCalendar(month, year) {
  // Clear the existing calendar
  calendar.innerHTML = '';

  // Get the first and last dates of the month
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Add the days of the month to the calendar
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const day = document.createElement('div');
    day.className = 'day';
    day.textContent = i;
    day.addEventListener('click', selectDate);
    calendar.appendChild(day);
  }
}

// Select the date and update the date picker input
function selectDate(event) {
  const selectedDate = event.target.textContent;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const formattedDate = `${currentMonth + 1}/${selectedDate}`;
  datePicker.value = formattedDate;
}

// Initialize the calendar with the current month
generateCalendar(new Date().getMonth(), new Date().getFullYear());
// Get references to the necessary elements
const preferenceBtns = document.querySelectorAll('.preference-btn');
const otherInput = document.getElementById('other-input');
const characterCount = document.querySelector('.character-count');

// Add click event listeners to the preference buttons
preferenceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

// Update the character count as the user types in the "Other" input field
otherInput.addEventListener('input', () => {
  const count = otherInput.value.length;
  characterCount.textContent = `${count}/50 max characters`;
});