# VOCAB VOYAGE - E-Learning Website 🎓

[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://html.spec.whatwg.org/)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://www.javascript.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0-purple)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 📌 Overview

**VOCAB VOYAGE** is a modern, responsive e-learning platform designed to provide high-quality online education. Built with HTML5, CSS3, JavaScript, and Bootstrap 5, this platform offers a user-friendly interface for students to explore and enroll in various technology and programming courses.

### 🌟 Key Features

- **📚 Comprehensive Course Catalog** - Wide range of programming and technology courses
- **🎨 Modern UI/UX Design** - Clean, intuitive interface with responsive design
- **👤 User Authentication** - Login and signup functionality (UI ready for backend integration)
- **🌐 Multi-language Support** - Google Translate integration for global accessibility
- **📱 Mobile Responsive** - Fully optimized for all devices and screen sizes
- **💳 Course Pricing** - Support for both free and paid courses
- **⭐ Course Ratings** - Student ratings and enrollment numbers
- **🎯 Course Categories** - Organized learning paths by technology
- **📝 Contact System** - Easy communication through contact forms
- **👥 Team Showcase** - Meet the instructors and team members
- **💬 Student Testimonials** - Real success stories from learners

## 🚀 Quick Start

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor or IDE (VS Code recommended)
- Local web server (optional, for better development experience)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/VOCAB-VOYAGE----E-learning-website.git
```

2. **Navigate to the project directory:**
```bash
cd VOCAB-VOYAGE----E-learning-website
```

3. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local web server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

4. **Access the website:**
   - Open your browser and go to `http://localhost:8000`

## 📁 Project Structure

```
VOCAB-VOYAGE----E-learning-website/
│
├── index.html              # Homepage
├── about.html              # About us page
├── courses.html            # Course catalog
├── contact.html            # Contact page
├── login.html              # User login
├── signup.html             # User registration
├── team.html               # Team members
├── testimonial.html        # Student reviews
├── single.html             # Course detail page
│
├── css/
│   ├── bootstrap.min.css   # Bootstrap framework
│   └── style.css           # Custom styles
│
├── js/
│   └── main.js             # Main JavaScript file
│
├── lib/                    # External libraries
│   ├── animate/            # Animation library
│   ├── owlcarousel/        # Carousel functionality
│   ├── easing/             # Smooth scrolling
│   ├── waypoints/          # Scroll triggers
│   └── wow/                # Reveal animations
│
└── img/                    # Images and assets
    ├── course-*.jpg        # Course thumbnails
    ├── icon*.png           # Feature icons
    ├── banner-*.jpg        # Banner images
    └── ...                 # Other images
```

## 🎯 Available Courses

Our platform offers courses in:

- **Web Development** - HTML, CSS, JavaScript
- **Programming Languages** - Python, Java, C
- **Cloud Computing** - AWS, Microsoft Azure
- **Database** - SQL, MySQL
- **Data Science** - Statistics, Machine Learning
- **Productivity** - Microsoft Excel
- **AI Tools** - ChatGPT for Beginners
- **UI/UX Design** - Design fundamentals

## 💻 Technologies Used

- **Frontend:**
  - HTML5 - Semantic markup
  - CSS3 - Modern styling and animations
  - JavaScript (ES6) - Interactive functionality
  - Bootstrap 5 - Responsive framework
  
- **Libraries & Plugins:**
  - jQuery - DOM manipulation
  - Owl Carousel - Image sliders
  - WOW.js - Scroll animations
  - Font Awesome - Icons
  - Google Fonts - Typography
  - Google Translate - Multi-language support

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary: #f69050;
    --light: #f0e4de;
    --dark: #181d38;
}
```

### Adding New Courses
Add course cards in `courses.html` following this template:
```html
<div class="col-lg-3 col-md-6 wow fadeInUp">
    <div class="course-item shadow">
        <!-- Course content -->
    </div>
</div>
```

### Updating Contact Information
Modify contact details in the footer section of each HTML file.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- **Code Style:** Follow existing code formatting
- **Comments:** Add meaningful comments for complex logic
- **Testing:** Test on multiple browsers before submitting
- **Documentation:** Update README for significant changes
- **Issues:** Check existing issues before creating new ones

## 🐛 Known Issues

- Forms are currently frontend-only (no backend integration)
- Payment processing not implemented
- User authentication needs backend API
- Course content delivery system not included

## 📈 Future Enhancements

- [ ] Backend API integration
- [ ] User dashboard
- [ ] Course progress tracking
- [ ] Video streaming capabilities
- [ ] Quiz and assignment system
- [ ] Certificate generation
- [ ] Payment gateway integration
- [ ] Admin panel
- [ ] Search functionality
- [ ] Dark mode toggle

## 📞 Contact

**Project Maintainer:** Chahat  
**Email:** chahat1016.becse24@chitkara.edu.in  
**Institution:** Chitkara University  
**Phone:** +91 7027848342  

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Bootstrap team for the amazing framework
- Font Awesome for the icon library
- All contributors who help improve this project
- Chitkara University for support

## 📸 Screenshots

### Homepage
The landing page features a modern carousel showcasing platform highlights and course categories.

### Course Catalog
Browse through our extensive collection of free and paid courses with ratings and enrollment stats.

### Responsive Design
Fully optimized for desktop, tablet, and mobile devices.

---

⭐ **Star this repo if you find it helpful!**  
🔄 **Fork it to start your own e-learning platform!**  
🐛 **Report issues to help us improve!**

**Happy Learning with VOCAB VOYAGE! 🚀**
