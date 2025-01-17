document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cardiologyForm');
    const sections = document.querySelectorAll('.form-section');
    const progressBar = document.querySelector('.progress');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    let currentSection = 0;

    function updateButtons() {
        prevBtn.style.display = currentSection === 0 ? 'none' : 'block';
        if (currentSection === sections.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }
    }

    function updateProgress() {
        const progress = ((currentSection + 1) / sections.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showSection(sectionIndex) {
        sections.forEach((section, index) => {
            section.classList.toggle('active', index === sectionIndex);
        });
        updateButtons();
        updateProgress();
    }

    prevBtn.addEventListener('click', () => {
        if (currentSection > 0) {
            currentSection--;
            showSection(currentSection);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted successfully!');
    });

    // Initialize
    updateButtons();
    updateProgress();
});


document.querySelector('.btn-community').addEventListener('click', () => {
    alert('Community Hackathon selected!');
});

document.querySelector('.btn-corporate').addEventListener('click', () => {
    alert('Corporate Hackathon selected!');
});


const numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
  const incrementCounter = () => {
    const target_number = +num.getAttribute("data-target-number");
    const current_number = parseInt(num.innerText);

    if (current_number < target_number) {
      num.innerText = Math.floor(current_number + target_number / 100);
      setTimeout(incrementCounter, 10);
    } else {
      num.innerText = target_number.toLocaleString();
    }
  };
  incrementCounter();
});