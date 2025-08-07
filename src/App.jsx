import { useState } from 'react'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    category: ''
  })

  const ageCategories = [
    { id: 'U6', name: 'U6 (4-5 years)', description: 'Introduction to soccer with fun games and basic skills' },
    { id: 'U8', name: 'U8 (6-7 years)', description: 'Learning fundamental techniques and team play' },
    { id: 'U10', name: 'U10 (8-9 years)', description: 'Developing tactical understanding and advanced skills' },
    { id: 'U12', name: 'U12 (10-11 years)', description: 'Competitive play with strategic training' },
    { id: 'U15', name: 'U15 (12-14 years)', description: 'Advanced training for serious players' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your registration! We will contact you soon.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: '',
      category: ''
    })
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>⚽ Soccer Club</h1>
            <p>Established September 2024</p>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#categories">Age Categories</a>
            <a href="#signup">Sign Up</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Join Our Soccer Family!</h1>
            <p>Welcome to our newly established soccer club! We're excited to offer training programs for players from U6 to U15. Join us and develop your skills in a fun, supportive environment.</p>
            <div className="hero-stats">
              <div className="stat">
                <h3>5</h3>
                <p>Age Categories</p>
              </div>
              <div className="stat">
                <h3>2024</h3>
                <p>Established</p>
              </div>
              <div className="stat">
                <h3>Fun</h3>
                <p>Guaranteed</p>
              </div>
            </div>
            <a href="#signup" className="cta-button">Sign Up Now</a>
          </div>
        </div>
      </section>

      {/* Age Categories */}
      <section id="categories" className="categories">
        <div className="container">
          <h2>Age Categories</h2>
          <p className="section-subtitle">Find the perfect program for your child</p>
          
          <div className="categories-grid">
            {ageCategories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-header">
                  <h3>{category.name}</h3>
                  <span className="category-badge">{category.id}</span>
                </div>
                <p>{category.description}</p>
                <button 
                  className="category-button"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  Select This Category
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section id="signup" className="signup">
        <div className="container">
          <h2>Sign Up for Training</h2>
          <p className="section-subtitle">Join our soccer club today!</p>
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="4"
                  max="14"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Preferred Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  {ageCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <button type="submit" className="submit-button">
              Submit Registration
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>info@soccerclub.com</p>
            </div>
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>+32 123 456 789</p>
            </div>
            <div className="contact-item">
              <h3>📍 Location</h3>
              <p>Soccer Field Complex<br />Training Grounds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Soccer Club. Established September 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
