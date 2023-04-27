const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const submit = document.querySelector('.submbutton1 input');

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

submit.addEventListener('click', () => {
    wrapper.classList.add('active');
});

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

function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
}

function difficultyPopUp() {
  let bkgrdImg = document.getElementById('blur');
  bkgrdImg.classList.difficultyPopUp('active')
}
fetch('CSG.txt')
  .then(response => response.text())
  .then(data => {
    const questions = data.split('\n\n').map(questionData => {
      const [question, ...optionsAndAnswer] = questionData.split('\n');
      const options = optionsAndAnswer.slice(0, -1);
      const answer = optionsAndAnswer[optionsAndAnswer.length - 1].slice(1);
      return {
        question,
        options,
        answer,
      };
    });
    console.log(questions);
});

function accessingJson(chosenSubject, chosenDifficulty) {
  fetch('quiz.json')
    .then(res => res.json())
    .then(data => {
      displayQuestions();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function userChoice(subject, difficulty) {
  // Access the chosen subject and difficulty
  const chosenSubject = data.subjects.find(s => s.name === subject);
  const chosenDifficulty = chosenSubject.difficulties[difficulty];
  accessingJson(chosenSubject, chosenDifficulty);
  displayQuestions(chosenSubject, chosenDifficulty);
}

function displayQuestions(chosenSubject, chosenDifficulty) {
  // Access the questions based on chosenSubject and chosenDifficulty
  const questions = chosenSubject.difficulties[chosenDifficulty].text;

  // Display the questions
  questions.forEach((question, index) => {
    console.log(`Question ${index + 1}: ${question.text}`);
    console.log(`Options: ${question.answers.join(', ')}`);
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
