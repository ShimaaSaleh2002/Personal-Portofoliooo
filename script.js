// 1. Project Image Reveal Logic
const projectItems = document.querySelectorAll('.project-item');
const preview = document.createElement('div');
preview.classList.add('project-preview');
const previewImg = document.createElement('img');
preview.appendChild(previewImg);
document.body.appendChild(preview);

// ماب لصور المشاريع (حطي لينكات صورك هنا)
const projectImages = {
    "Skin Care Dashboard": "skin-care.jpg",
    "Mobile App Landing Page": "mobile-app.jpg",
    "AI Recipe Generator": "ai-recipe.jpg",
    "Burger Stacking Game": "burger-game.jpg"
};

projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const projectName = item.querySelector('span').innerText;
        previewImg.src = projectImages[projectName];
        preview.style.opacity = '1';
        preview.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    item.addEventListener('mouseleave', () => {
        preview.style.opacity = '0';
        preview.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });

    item.addEventListener('mousemove', (e) => {
        preview.style.left = e.clientX + 'px';
        preview.style.top = e.clientY + 'px';
    });
});

// 2. Simple Parallax Effect for Hero Image
document.addEventListener('mousemove', (e) => {
    const imgContainer = document.querySelector('.profile-img-container');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
    imgContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// 3. Smooth Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease-out";
    observer.observe(section);
});

// إضافة الـ Class اللي بيشغل الانيميشن
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});