function showLoadingPage() {
    const loadingPage = document.querySelector(".loading-page");
    loadingPage.style.display = "flex";

    const progress = document.getElementById('progress');
    const percentage = document.getElementById('percentage');
    const mainContent = document.querySelectorAll('.main-content');

    let progressValue = 0;
    const loadingDuration = 3000;
    const intervalDuration = loadingDuration / 100;

    let loadingInterval = setInterval(() => {
        if (progressValue < 100) {
            progressValue += 1;
            progress.style.width = progressValue + '%';
            percentage.innerText = progressValue + '%';
        } else {
            clearInterval(loadingInterval);

            loadingPage.style.animation = 'slideUp 1s forwards';

            
            setTimeout(() => {
                loadingPage.style.display = 'none';
                mainContent.forEach(section => {
                    section.style.display = 'block';
                    section.style.animation = 'slideUp 1s forwards';
                });

                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 100);

            }, 1000);
        }
    }, intervalDuration);
}

window.addEventListener("load", function () {
    showLoadingPage();
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            break;
        case '2':
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
            break;
        case '3':
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
            break;
        case '4':
            document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
            break;
        case '5':
            document.getElementById('skill').scrollIntoView({ behavior: 'smooth' });
            break;
        case '6':
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
            break;
        case '7':
            document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
            break;
    }
});

function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle') && !event.target.matches('.fa-chevron-down')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

function changeLanguage(lang) {
    var availableText = document.querySelector('.available-text');
    availableText.classList.add('reanimate'); 
    
    setTimeout(() => {
        if (lang === 'ID') {
            document.getElementById('job-position').innerText = "UI/UX DESIGNER & FRONTEND DEVELOPER";
            document.getElementById('name').innerText = "Halo, \nSaya Jimmy Efendi";
            document.getElementById('about-me').innerText = "Saya dari Indonesia, saya memiliki lebih dari 2 tahun pengalaman kerja di bidang IT seperti Web developer, UI/UX Design dan IT Tecnical Support. Mari bekerjasama untuk menciptakan aplikasi Android, iOS, dan Web yang memiliki standart tertinggi dalam industri dan bisnis. Selain itu saya juga seorang pekerja lepas. Mari bekerja sama dengan saya.";
            document.getElementById('whatsapp-button').innerHTML = 'Senang mengobrol di Whatsapp <i class="fab fa-whatsapp"></i>';
            availableText.innerHTML = '<span>Tersedia untuk bekerja</span>'.repeat(4);
            document.getElementById('language-toggle').innerHTML = 'ID <i class="fas fa-chevron-down"></i>';
            document.getElementById('dropdown-content').innerHTML = '<a href="#" onclick="changeLanguage(\'EN\')">EN</a>';
        } else {
            document.getElementById('job-position').innerText = 'UI/UX DESIGNER & FRONTEND DEVELOPER';
            document.getElementById('name').innerText = "Hello, \nI am Jimmy Efendi";
            document.getElementById('about-me').innerText = "I'am from Indonesia, I have more than 2 years of working experience in IT such as Web developer, UI/UX Design and IT Technical Support. Let's work together to create Android, iOS, and Web applications that have the highest standards in the industry and business. In addition, I'am also a freelancer. Let's work with me.";
            document.getElementById('whatsapp-button').innerHTML = 'Happy to Chat on Whatsapp <i class="fab fa-whatsapp"></i>';
            availableText.innerHTML = '<span>Available for work</span>'.repeat(4);
            document.getElementById('language-toggle').innerHTML = 'EN <i class="fas fa-chevron-down"></i>';
            document.getElementById('dropdown-content').innerHTML = '<a href="#" onclick="changeLanguage(\'ID\')">ID</a>';
        }
        
        availableText.classList.remove('reanimate'); 
    }, 0);
}

const heroImage = document.getElementById('hero-image');
const heroImageHover = document.getElementById('hero-image-hover');

function showHoverImage() {
    heroImage.style.opacity = '0';
    heroImageHover.style.opacity = '1';
}

function showNormalImage() {
    heroImage.style.opacity = '1';
    heroImageHover.style.opacity = '0';
}


heroImage.addEventListener('mouseenter', showHoverImage);
heroImage.addEventListener('mouseleave', showNormalImage);


// Owlcarousel
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        center: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    var iframes = $('iframe');
    
    function stopAutoplay() {
        owl.trigger('stop.owl.autoplay');
    }

    function startAutoplay() {
        owl.trigger('play.owl.autoplay');
    }

    $('#video1').on('load', function() {
        const iframe = this;
        const player = new YT.Player(iframe, {
            events: {
                'onStateChange': function(event) {
                    if (event.data === YT.PlayerState.PLAYING) {
                        stopAutoplay();
                    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                        startAutoplay();
                    }
                }
            }
        });
    });
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function goToWhatsApp() {
    window.location.href = "https://wa.me/6285271654890";
}

document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function () {
        const videoDiv = this.parentElement;
        const videoId = videoDiv.getAttribute('data-id');
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
        iframe.setAttribute('width', '300');
        iframe.setAttribute('height', '169');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '1');
        videoDiv.innerHTML = '';
        videoDiv.appendChild(iframe);
    });
});


const skillLogos = document.querySelectorAll('.skill-logo');

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            entry.target.classList.add('show');
        } else {
        
            entry.target.classList.remove('show');
        }
    });
};

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

skillLogos.forEach(skillLogo => {
    observer.observe(skillLogo);
});

document.querySelectorAll('.slider-card img').forEach(card => {
    card.addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        const overlayImage = document.getElementById('overlayImage');
        overlayImage.src = this.src;
        overlay.classList.add('active');
    });
});


function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
}
