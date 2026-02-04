// ===== ECOMMERCE JAVASCRIPT =====
// Funcionalidades para EliteStore

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== CONFIGURACIÓN =====
    const WHATSAPP_NUMBER = '573136636523'; // Número de WhatsApp de la tienda
    
    // ===== ELEMENTOS DEL DOM =====
    const cartCountElement = document.querySelector('.cart-count');
    const contactForm = document.getElementById('contactForm');
    const productButtons = document.querySelectorAll('.btn-add-cart');
    
    // ===== CONTADOR DE CARRITO =====
    let cartCount = 0;
    
    function updateCartCount() {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Animación del carrito
        cartCountElement.style.transform = 'scale(1.5)';
        cartCountElement.style.background = 'var(--success-color)';
        
        setTimeout(() => {
            cartCountElement.style.transform = 'scale(1)';
            cartCountElement.style.background = 'var(--error-color)';
        }, 300);
    }
    
    // ===== FUNCIONES DE WHATSAPP =====
    function sendToWhatsApp(message) {
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
    
    function getProductMessage(productName, price) {
        return `¡Hola! Me interesa el producto "${productName}" con precio ${price} de EliteStore. ¿Podrías darme más información?`;
    }
    
    function getContactMessage(nombre, consulta) {
        return `Hola! Soy ${nombre} y me gustaría hacer la siguiente consulta sobre EliteStore:\n\n${consulta}\n\nGracias por su atención.`;
    }
    
    // ===== EVENTOS DE PRODUCTOS =====
    productButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener información del producto
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.price-current').textContent;
            
            // Actualizar contador
            updateCartCount();
            
            // Enviar a WhatsApp
            const message = getProductMessage(productName, productPrice);
            
            // Pequeño delay para mostrar la animación
            setTimeout(() => {
                sendToWhatsApp(message);
            }, 300);
        });
    });
    
    // ===== FORMULARIO DE CONTACTO =====
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const consulta = document.getElementById('consulta').value.trim();
            
            // Validación
            if (!nombre || !consulta) {
                showNotification('Por favor, completa todos los campos del formulario.', 'error');
                return;
            }
            
            if (nombre.length < 2) {
                showNotification('El nombre debe tener al menos 2 caracteres.', 'error');
                return;
            }
            
            if (consulta.length < 10) {
                showNotification('La consulta debe tener al menos 10 caracteres.', 'error');
                return;
            }
            
            // Crear mensaje y enviar
            const message = getContactMessage(nombre, consulta);
            sendToWhatsApp(message);
            
            // Limpiar formulario
            contactForm.reset();
            showNotification('Redirigiendo a WhatsApp...', 'success');
        });
    }
    
    // ===== NOTIFICACIONES =====
    function showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        // Agregar al DOM
        document.body.appendChild(notification);
        
        // Mostrar con animación
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Auto-remover después de 5 segundos
        const autoRemove = setTimeout(() => {
            removeNotification(notification);
        }, 5000);
        
        // Botón de cerrar
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoRemove);
            removeNotification(notification);
        });
    }
    
    function removeNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
    
    // ===== NAVEGACIÓN SUAVE =====
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Altura del header fijo
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== HEADER SCROLL EFFECT =====
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===== LAZY LOADING PARA IMÁGENES =====
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // ===== ANIMACIONES EN SCROLL =====
    const animatedElements = document.querySelectorAll('.product-card, .trust-item, .feature-item');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
});

// ===== CONFIGURACIÓN PARA PERSONALIZACIÓN RÁPIDA =====
const STORE_CONFIG = {
    storeName: 'EliteStore',
    whatsappNumber: '573136636523',
    email: 'hola@elitestore.com',
    address: 'Bogotá, Colombia',
    currency: '$',
    
    // Colores principales (se pueden cambiar desde CSS también)
    colors: {
        primary: '#2563eb',
        secondary: '#f59e0b',
        success: '#10b981',
        error: '#ef4444'
    }
};