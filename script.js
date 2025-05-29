document.addEventListener('DOMContentLoaded', function () {
    // Плавный скроллинг для всех ссылок с якорями
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.classList.contains('open-modal')) return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Обработка формы
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // event.preventDefault();
            alert('Спасибо! Ваш запрос отправлен.');
            // this.reset();
        });
    }

    // Модальные окна для услуг
    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const modal = document.querySelector(targetId);
            if(modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Закрытие модальных окон
    document.querySelectorAll('.overlay .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.overlay').style.display = 'none';
        });
    });

    // Закрытие при клике вне окна
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if(e.target === this) {
                this.style.display = 'none';
            }
        });
    });

    // Закрытие при нажатии кнопки "Контакты" в модальном окне
    document.querySelectorAll('.modal .button').forEach(button => {
        button.addEventListener('click', function(e) {
            if(this.textContent === 'Контакты') {
                e.preventDefault();
                this.closest('.overlay').style.display = 'none';
                // Плавный скролл к разделу контактов
                const contactsSection = document.querySelector('#contacts');
                if(contactsSection) {
                    window.scrollTo({
                        top: contactsSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
// Добавьте в конец файла
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', function(e) {
        if(this.tagName === 'A') return;
        window.location.href = 'index.html';
    });
});
