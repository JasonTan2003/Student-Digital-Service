const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".quiz-slider i");

let isDragStart = false, prevPageX, prevScrollLeft;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    })
}); 

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);

document.getElementById('image-container').addEventListener('click', function() {

})

function getQuestions(subjectName, difficulty) {
  return fetch('quiz.json')
    .then(response => response.json())
    .then(data => {
      const subject = data.subjects.find(s => s.name === subjectName);
      if (subject) {
        const questions = subject.difficulties[difficulty];
        if (questions) {
          return questions;
        }
      }
      return [];
    })
    .catch(error => console.error(error));
}

function displayQuestions(subjectName, difficulty) {
  getQuestions(subjectName, difficulty)
    .then(questions => {
      questions.forEach((question, index) => {
        console.log(`Question ${index + 1}: ${question.text}`);
        console.log(`Answers: ${question.answers.join(', ')}`);
        console.log(`Correct Answer: ${question.correctAnswer}`);
      });
    });
}

// Attach event listeners to the HTML elements representing the subjects and difficulties
const subjects = document.querySelectorAll('.subject');
subjects.forEach(subject => {
  const difficulties = subject.querySelectorAll('.difficulty');
  difficulties.forEach(difficulty => {
    difficulty.addEventListener('click', () => {
      const subjectName = subject.textContent;
      const difficultyName = difficulty.textContent;
      displayQuestions(subjectName, difficultyName);    
    });
  });
});
