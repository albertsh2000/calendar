const monthName = document.querySelector(".month-name")
const currentYear = document.querySelector(".current-year")
const allDays = document.querySelectorAll(".days > li")
const allMonthsNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const now = new Date()

monthName.textContent = allMonthsNames[now.getMonth()]

currentYear.textContent = now.getFullYear()

function changeActiveDate() {
  allDays.forEach(day => {
      const today = now.getDate()
      if (day.textContent == today) {
          day.classList.add('today');
      }
      day.addEventListener('click', function() {
          allDays.forEach(elem => elem.classList.remove('active'));
          day.classList.add('active');
      });

  });
}

changeActiveDate()