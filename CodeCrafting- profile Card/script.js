document.addEventListener('DOMContentLoaded', function() {
    const profileCard = document.querySelector('.profile-card');
    const profileImg = document.querySelector('.profile-img');
    
    profileCard.addEventListener('mousemove', function(e) {
        const rect = profileCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        profileImg.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px)`;
        
        const gradientX = (x / rect.width) * 100;
        const gradientY = (y / rect.height) * 100;
        this.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%), linear-gradient(45deg, #3498db, #8e44ad)`;
    });
    
    profileCard.addEventListener('mouseleave', function() {
        profileImg.style.transform = 'translate(0, 0)';
        this.style.background = 'linear-gradient(45deg, #3498db, #8e44ad)';
    });

    // Animate skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
        tag.style.opacity = '0';
    });
});