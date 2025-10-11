const herodescription = document.querySelector('.hero-description');
const scrollToExplore = document.querySelector('.scroll-to-explore');
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const navdiv = document.querySelector('.navdiv');

// Blokujemy scrollowanie na początku
document.body.style.overflow = "hidden";


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

}

// Funkcja, która uruchamia migotanie napisu scroll-to-explore
function startBlinking() {
    // Dodanie klasy blink do napisu po zakończeniu animacji
    scrollToExplore.classList.add('blink');
    // Usunięcie klasy hidden, aby napis był widoczny
    scrollToExplore.classList.remove('hidden');
}

// Funkcja, która obsługuje scrollowanie
handleScroll(); 

// Nasłuchiwanie zdarzenia scroll
window.addEventListener('scroll', handleScroll);

// Uruchomienie migotania od razu po załadowaniu strony
window.onload = function() {    
    document.body.style.visibility = "visible";

    //Odblokowuje scrollowanie
    setTimeout(() => {
        // document.body.style.overflow = "auto";
        // Scrolling po 2 sekundach mozliwy
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

    }, 2000);

    // Przywracanie scrolla na górę strony
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual"; // Wyłącza zapamiętywanie scrolla
    }
    window.scrollTo(0, 0);

    // Usunięcie migania napisu "SCROLL TO EXPLORE"
    scrollToExplore.classList.remove('blink');

    // Animacja dla firstname i lastname
    gsap.fromTo(navdiv, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(firstname, 
        { opacity: 0, x: -200 }, // Początkowy stan: ukryty po lewej stronie
        { opacity: 1, x: 0, duration: 1, delay: 1, ease: "power3.out" } // Końcowy stan: widoczny w normalnej pozycji
    );
    
    gsap.fromTo(lastname, 
        { opacity: 0, x: 200 }, // Początkowy stan: ukryty po prawej stronie
        { opacity: 1, x: 0, duration: 1, delay: 1, ease: "power3.out" }
    );

    // Animacja dla scroll-down
    gsap.fromTo(".scroll-down", 
        { opacity: 0, y: 20 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            delay: 1.5, 
            ease: "power3.out", 
            onComplete: startBlinking // Funkcja, która zostanie wywołana po zakończeniu animacji
        } 
    ); 

    gsap.fromTo("#about h2",
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.1, // Każda litera pojawia się z opóźnieniem
            scrollTrigger: {
                trigger: "#about h2", 
                // scrub: true,                
                start: "top 85%",   
                end: "top 20%",     
                toggleActions: "play none none none", 
                // markers: true,
            }
        }
    );

    gsap.fromTo(".about-text-wrapper span", 
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#about-text1", 
                // pin: true,
                // scrub: true,       // Synchronizuje animację z przewijaniem
                start: "top 85%",   
                end: "top 60%",     
                toggleActions: "play none none none", // Animacja odwrotna, gdy przewijasz w górę i w dół
                // markers: true, // Umożliwia wyświetlenie markerów, by łatwiej śledzić początek i koniec animacji
            }
        }
    );

    gsap.fromTo("#about-text3 span", 
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#about-text3", 
                // pin: true,
                // scrub: true,       // Synchronizuje animację z przewijaniem
                start: "top 85%",   
                end: "top 60%",     
                toggleActions: "play none none none", // Animacja odwrotna, gdy przewijasz w górę i w dół
                // markers: true, // Umożliwia wyświetlenie markerów, by łatwiej śledzić początek i koniec animacji
            }
        }
    );

    gsap.fromTo(".letter", 
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            ease: "power3.out", 
            stagger: 0.1, // Każda litera pojawia się z opóźnieniem
            scrollTrigger: {
                trigger: "#experience", 
                // scrub: true,                
                start: "top 65%",   
                end: "top 20%",     
                toggleActions: "play none none none", 
                // markers: true,
            }
        }
    );

    gsap.fromTo(".technology", 
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.1, // Każda litera pojawia się z opóźnieniem
            scrollTrigger: {
                trigger: ".technology", 
                // scrub: true,                
                start: "top 65%",   
                end: "top 20%",     
                toggleActions: "play none none none", 
                // markers: true,
            }
        }
    );

    gsap.fromTo("#services h2",
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.1, // Każda litera pojawia się z opóźnieniem
            scrollTrigger: {
                trigger: "#services h2", 
                // scrub: true,                
                start: "top 85%",   
                end: "top 20%",     
                toggleActions: "play none none none", 
                // markers: true,
            }
        }
    );

    gsap.fromTo("#service1", 
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#service1", 
                // pin: true,
                // scrub: true,       // Synchronizuje animację z przewijaniem
                start: "top 85%",   
                end: "top 60%",     
                toggleActions: "play none none none", // Animacja odwrotna, gdy przewijasz w górę i w dół
                // markers: true, // Umożliwia wyświetlenie markerów, by łatwiej śledzić początek i koniec animacji
            }
        }
    );

    gsap.fromTo("#service2", 
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#service2", 
                // pin: true,
                // scrub: true,       // Synchronizuje animację z przewijaniem
                start: "top 85%",   
                end: "top 60%",     
                toggleActions: "play none none none", // Animacja odwrotna, gdy przewijasz w górę i w dół
                // markers: true, // Umożliwia wyświetlenie markerów, by łatwiej śledzić początek i koniec animacji
            }
        }
    );

    gsap.fromTo("#service3", 
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#service3", 
                // pin: true,
                // scrub: true,       // Synchronizuje animację z przewijaniem
                start: "top 85%",   
                end: "top 60%",     
                toggleActions: "play none none none", // Animacja odwrotna, gdy przewijasz w górę i w dół
                // markers: true, // Umożliwia wyświetlenie markerów, by łatwiej śledzić początek i koniec animacji
            }
        }
    );

    gsap.fromTo("#service4", 
        { opacity: 0, y: 30 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#service4", 
                // pin: true,
                // scrub: true,       // Synchronizuje animację z przewijaniem
                start: "top 85%",   
                end: "top 60%",     
                toggleActions: "play none none none", // Animacja odwrotna, gdy przewijasz w górę i w dół
                // markers: true, // Umożliwia wyświetlenie markerów, by łatwiej śledzić początek i koniec animacji
            }
        }
    );

    // gsap.fromTo("#contact",
    //     { marginLeft: "0vw", width: "80vw"}, 
    //     { 
    //         marginLeft: "-10vw", 
    //         width: "100vw", 
    //         // duration: 1, 
    //         ease: "power3.out",
    //         stagger: 0.1,
    //         scrollTrigger: {
    //             trigger: "#contact",
    //             start: "top 70%", 
    //             end: "top 10%",   
    //             scrub: 1,      // Płynna animacja zależna od scrolla
    //             // markers: true, // Oznaczenia pomocnicze
    //         }
    //     }
    // );

    gsap.fromTo("#div1", 
        { width: '0' }, 
        { 
            width: '100%', 
            duration: 0.5, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#div1",
                start: "top 90%", // Animacja zaczyna się, gdy kreska jest w 90% widoczna
                end: "top 80%",   // Animacja kończy się, gdy kreska jest w 80% widoczna
                toggleActions: "play none none none",
                // markers: true,
            }
        }
    );

    gsap.fromTo("#div2", 
        { width: '0' }, 
        { 
            width: '100%', 
            duration: 0.5, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#div2",
                start: "top 90%", // Animacja zaczyna się, gdy kreska jest w 90% widoczna
                end: "top 80%",   // Animacja kończy się, gdy kreska jest w 80% widoczna
                toggleActions: "play none none none",
                // markers: true,
            }
        }
    );

    gsap.fromTo("#div3", 
        { width: '0' }, 
        { 
            width: '100%', 
            duration: 0.5, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#div3",
                start: "top 90%", // Animacja zaczyna się, gdy kreska jest w 90% widoczna
                end: "top 80%",   // Animacja kończy się, gdy kreska jest w 80% widoczna
                toggleActions: "play none none none",
                // markers: true,
            }
        }
    );

    gsap.fromTo("#collab span", 
        { scale: 3, opacity: 0 }, // Początkowy stan: mały i przezroczysty
        { 
          scale: 1.7, // Powiększenie podczas scrolla
          opacity: 1, // Stopniowe pojawienie się
          scrollTrigger: {
            trigger: "#collab",
            start: "top bottom", // Animacja zaczyna się, gdy sekcja wchodzi w widok
            end: "top 30", // Kończy się, gdy sekcja osiąga środek ekranu
            scrub: true // Płynna synchronizacja ze scrollowaniem
          }
        }
      );

    gsap.utils.toArray("#profiles svg").forEach(icon => {
        gsap.set(icon, { cursor: "pointer" }); // Ustawienie kursora na pointer
    
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, { scale: 1.3, duration: 0.3, ease: "power2.out" });
        });
    
        icon.addEventListener("mouseleave", () => {
            gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
        });

        icon.addEventListener("click", () => {
            const links = {
              "bi-linkedin": "https://www.linkedin.com/in/przemek-mysliwiec/", // Podmień na swój link
              "bi-github": "https://github.com", // Podmień na swój link
              "bi-envelope-paper-fill": "mailto:pmysliwiec99@gmail.com" // Podmień na swój email
            };
            
            const className = icon.classList[1]; // Pobieranie drugiej klasy (np. bi-linkedin)
            if (links[className]) {
              window.open(links[className], "_blank");
            }
        });
    });


        // === HAMBURGER MENU ===
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle("active");
    });

    document.querySelectorAll(".navdiv ul li").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
    }
}
