
// Typing Animation
        const texts = ["Full Stack Developer", "MERN Stack Developer", "Software Engineer", "JavaScript Developer"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;

        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    setTimeout(typeText, 500);
                } else {
                    setTimeout(typeText, deletingSpeed);
                }
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(typeText, pauseTime);
                } else {
                    setTimeout(typeText, typingSpeed);
                }
            }
        }

        window.addEventListener('load', () => {
            setTimeout(typeText, 1000);
        });
        
//education
function toggleEducation(clickedElement) {
            const allCards = document.querySelectorAll('.education-item');
            const clickedCard = clickedElement.closest('.education-item');
            allCards.forEach(card => {
                if (card !== clickedCard) {
                    card.classList.remove('expanded');
                }
            });
            
            clickedCard.classList.toggle('expanded');
        }

        document.addEventListener('DOMContentLoaded', function() {
            const arrows = document.querySelectorAll('.expand-arrow');
            arrows.forEach(arrow => {
                arrow.addEventListener('click', function(e) {
                    e.stopPropagation();
                    toggleEducation(this);
                });
            });
        });

//project
const toggleBtn = document.getElementById('toggleBtn');
        const hiddenProjects = document.querySelectorAll('.hidden-projects');
        let isExpanded = false;

        toggleBtn.addEventListener('click', () => {
            if (isExpanded) {
                hiddenProjects.forEach(project => {
                    project.classList.remove('show');
                });
                toggleBtn.textContent = 'Show All Projects';
                isExpanded = false;
            } else {
                hiddenProjects.forEach(project => {
                    project.classList.add('show');
                });
                toggleBtn.textContent = 'Show Featured';
                isExpanded = true;
            }
        });

//contact me
 function scrollToForm() {
            document.getElementById('contact-form').scrollIntoView({
                behavior: 'smooth'
            });
        }
