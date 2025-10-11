const herodescription = document.querySelector('.hero-description');
const scrollToExplore = document.querySelector('.scroll-to-explore');
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const navdiv = document.querySelector('.navdiv');

startFlag = false;

// Funkcja, która obsługuje pojawianie się i znikanie napisu "SCROLL TO EXPLORE" w zależności od przewijania
function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 1) {
        // Znikanie napisu "SCROLL TO EXPLORE" po przewinięciu w dół
        scrollToExplore.classList.add('hidden');
        scrollToExplore.classList.remove('blink');
    } else {
        // Pojawianie się napisu "SCROLL TO EXPLORE" na górze strony bez migotania
        scrollToExplore.classList.remove('hidden');
        scrollToExplore.classList.add('blink');
    }
    
    if (startFlag){
        // Przesunięcie firstname w lewo zależnie od przewinięcia
        gsap.to(firstname, { x: -scrollPosition * 2, duration: 0.1 });

        // Przesunięcie lastname w prawo zależnie od przewinięcia
        gsap.to(lastname, { x: scrollPosition * 2, duration: 0.1 });

        gsap.to(herodescription, { 
            opacity: 1 - scrollPosition / 100,  // Zmiana przezroczystości zależnie od scrolla
            y: scrollPosition * 0.5,            // Przesunięcie w osi Y w dół (proporcjonalne do scrolla)
            duration: 0.1 
        });

        gsap.to(navdiv, { 
            opacity: 1 - scrollPosition / 100,  // Zmiana przezroczystości zależnie od scrolla
            y: scrollPosition * 0.5,            // Przesunięcie w osi Y w dół (proporcjonalne do scrolla)
            duration: 0.1
        });
    }

    startFlag = true;
}

// Nasłuchiwanie zdarzenia scroll
window.addEventListener('scroll', handleScroll);

// Uruchomienie animacji od razu po załadowaniu strony
window.onload = function() {
    scrollToExplore.classList.remove('blink');
    // Animacja dla firstname i lastname na początku
    gsap.fromTo(".firstname", 
        { opacity: 1, x: -200 }, // Początkowy stan: ukryty po lewej stronie
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" } // Końcowy stan: widoczny w normalnej pozycji
    );
    
    gsap.fromTo(".lastname", 
        { opacity: 1, x: 200 }, // Początkowy stan: ukryty po prawej stronie
        { opacity: 1, x: 0, duration: 1, delay: 0, ease: "power3.out" }
    );

    gsap.fromTo(".navdiv", 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.5, ease: "power3.out" }
    );

    // Animacja dla hero-description na początku (w chwili załadowania strony)
    gsap.fromTo(".hero-description", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.5, ease: "power3.out" } // Delay po lastname
    ); 

    // Animacja dla scroll-down
    gsap.fromTo(".scroll-down", 
        { opacity: 0, y: 20 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.7, 
            delay: 0.5, 
            ease: "power3.out", 
            onComplete: startBlinking // Funkcja, która zostanie wywołana po zakończeniu animacji
        } 
    ); 
}

// Funkcja, która uruchamia migotanie napisu scroll-to-explore
function startBlinking() {
    // Dodanie klasy blink do napisu po zakończeniu animacji
    scrollToExplore.classList.add('blink');
    // Usunięcie klasy hidden, aby napis był widoczny
    scrollToExplore.classList.remove('hidden');
}

// Funkcja, która obsługuje scrollowanie
handleScroll(); // Uruchamiamy animację migotania, aby działała od razu po załadowaniu strony
