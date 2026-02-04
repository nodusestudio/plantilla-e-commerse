# 🛍️ Plantilla E-commerce EliteStore

Una plantilla de e-commerce moderna, responsive y completamente funcional construida con HTML5, CSS3 y JavaScript vanilla. Diseñada con enfoque Mobile First y optimizada para conversiones a través de WhatsApp.

## ✨ Características

### 🎨 Diseño
- **Mobile First**: Responsive design que funciona en todos los dispositivos
- **Diseño limpio y moderno**: Esquema de colores azul y dorado profesional
- **Animaciones suaves**: Efectos hover, transiciones y lazy loading
- **Variables CSS**: Personalización fácil de colores y tipografías

### 🛍️ Funcionalidades de E-commerce
- **Hero Section**: Banner impactante con CTAs
- **Grid de Productos**: 4 productos con imágenes reales de Unsplash
- **Integración WhatsApp**: Botones de compra que redirigen a WhatsApp
- **Formulario de Contacto**: Envío directo a WhatsApp con validación
- **Contador de Carrito**: Con animaciones y feedback visual

### 📱 Secciones Incluidas
- **Hero Banner**: Imagen premium con llamadas a la acción
- **Productos Destacados**: Grid responsive con tarjetas interactivas
- **Sección Nosotros**: Diseño de dos columnas con características
- **Sección de Confianza**: Iconos de garantías y servicios
- **Contacto**: Formulario funcional + información de contacto
- **Footer**: Enlaces y redes sociales

## 🚀 Demo

[Ver Demo en Vivo](https://nodusestudio.github.io/plantilla-e-commerse/)

## 📁 Estructura de Archivos

```
├── template-ecommerce.html    # HTML principal
├── ecommerce.css              # Estilos CSS con variables
├── ecommerce.js               # JavaScript funcional
└── README.md                  # Este archivo
```

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/nodusestudio/plantilla-e-commerse.git
   cd plantilla-e-commerse
   ```

2. **Abre el archivo HTML:**
   - Abre `template-ecommerce.html` en tu navegador
   - O usa un servidor local como Live Server en VS Code

## ⚙️ Configuración

### 📱 Configurar WhatsApp

En el archivo `ecommerce.js`, cambia el número de WhatsApp:

```javascript
const WHATSAPP_NUMBER = '573136636523'; // Cambia por tu número
```

### 🎨 Personalizar Colores

En el archivo `ecommerce.css`, modifica las variables CSS:

```css
:root {
  --primary-color: #2563eb;      /* Azul principal */
  --secondary-color: #f59e0b;    /* Dorado */
  --accent-color: #10b981;       /* Verde */
}
```

### 🏪 Personalizar Información

Actualiza la información de tu tienda en el archivo JavaScript:

```javascript
const STORE_CONFIG = {
    storeName: 'Tu Tienda',
    whatsappNumber: 'tu-numero',
    email: 'tu-email@dominio.com',
    address: 'Tu Dirección'
};
```

## 📋 Funcionalidades JavaScript

- ✅ **Integración WhatsApp**: Productos y formulario de contacto
- ✅ **Validación de formularios**: Campos obligatorios y longitud mínima
- ✅ **Sistema de notificaciones**: Mensajes elegantes de éxito/error
- ✅ **Navegación suave**: Scroll suave entre secciones
- ✅ **Lazy loading**: Carga optimizada de imágenes
- ✅ **Animaciones en scroll**: Elementos aparecen al hacer scroll
- ✅ **Header dinámico**: Se oculta/muestra según la dirección del scroll

## 🎨 Personalización de Estilos

### Cambiar Tema de Colores

**Para Tienda de Ropa:**
```css
:root {
  --primary-color: #ec4899;  /* Rosa */
  --secondary-color: #8b5cf6; /* Púrpura */
}
```

**Para Tienda de Tecnología:**
```css
:root {
  --primary-color: #0ea5e9;  /* Azul tech */
  --secondary-color: #06b6d4; /* Cyan */
}
```

**Para Tienda de Hogar:**
```css
:root {
  --primary-color: #059669;  /* Verde */
  --secondary-color: #d97706; /* Naranja */
}
```

## 📱 Responsive Design

La plantilla está optimizada para:
- 📱 **Móviles**: 320px - 768px
- 📊 **Tablets**: 768px - 1024px
- 💻 **Desktop**: 1024px+

## 🌟 Optimizaciones

- **SEO Friendly**: Estructura semántica HTML5
- **Performance**: Lazy loading y optimización de imágenes
- **Accesibilidad**: Etiquetas ARIA y navegación por teclado
- **Conversión**: CTAs estratégicamente ubicados

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Nodus Estudio**
- GitHub: [@nodusestudio](https://github.com/nodusestudio)
- Website: [nodusestudio.com](https://nodusestudio.com)

## 🙏 Créditos

- **Fuentes**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Iconos**: [Font Awesome](https://fontawesome.com/)
- **Imágenes**: [Unsplash](https://unsplash.com/)

---

⭐ **¡Si te gustó este proyecto, danos una estrella!** ⭐