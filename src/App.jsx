import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [currentPage, setCurrentPage] = useState('home')
  const [cart, setCart] = useState([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    category: ''
  })

  const ageCategories = [
    { id: 'U6', name: 'U6 (4-5 jaar)', description: 'Introductie tot voetbal met leuke spelletjes en basisvaardigheden', maxAge: 5, minAge: 4 },
    { id: 'U8', name: 'U8 (6-7 jaar)', description: 'Leren van fundamentele technieken en teamspel', maxAge: 7, minAge: 6 },
    { id: 'U10', name: 'U10 (8-9 jaar)', description: 'Ontwikkeling van tactisch inzicht en geavanceerde vaardigheden', maxAge: 9, minAge: 8 },
    { id: 'U12', name: 'U12 (10-11 jaar)', description: 'Competitief spel met strategische training', maxAge: 11, minAge: 10 },
    { id: 'U15', name: 'U15 (12-14 jaar)', description: 'Geavanceerde training voor serieuze spelers', maxAge: 14, minAge: 12 }
  ]

  const products = [
    {
      id: 1,
      name: 'Club Shirt',
      description: 'Officieel club shirt met club logo',
      price: 45.00,
      image: '👕',
      category: 'kleding',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Geel', 'Zwart']
    },
    {
      id: 2,
      name: 'Club Shorts',
      description: 'Comfortabele club shorts voor training en wedstrijden',
      price: 25.00,
      image: '🩳',
      category: 'kleding',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Zwart']
    },
    {
      id: 3,
      name: 'Club Socks',
      description: 'Officiële club sokken met club kleuren',
      price: 12.00,
      image: '🧦',
      category: 'kleding',
      sizes: ['S', 'M', 'L'],
      colors: ['Geel', 'Zwart']
    },
    {
      id: 4,
      name: 'Football Boots',
      description: 'Professionele voetbalschoenen voor alle ondergronden',
      price: 89.00,
      image: '👟',
      category: 'schoenen',
      sizes: ['28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
      colors: ['Zwart', 'Wit']
    },
    {
      id: 5,
      name: 'Training Ball',
      description: 'Officiële trainingsbal met club logo',
      price: 35.00,
      image: '⚽',
      category: 'uitrusting',
      sizes: ['Size 3', 'Size 4', 'Size 5'],
      colors: ['Wit/Zwart']
    },
    {
      id: 6,
      name: 'Shin Guards',
      description: 'Beschermende scheenbeschermers',
      price: 18.00,
      image: '🛡️',
      category: 'uitrusting',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Zwart']
    },
    {
      id: 7,
      name: 'Club Jacket',
      description: 'Warme club jas voor koude dagen',
      price: 65.00,
      image: '🧥',
      category: 'kleding',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Zwart', 'Grijs']
    },
    {
      id: 8,
      name: 'Goalkeeper Gloves',
      description: 'Professionele keeper handschoenen',
      price: 42.00,
      image: '🧤',
      category: 'uitrusting',
      sizes: ['6', '7', '8', '9', '10', '11'],
      colors: ['Zwart', 'Geel']
    }
  ]

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.nav')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  // Auto-hide success message
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  const validateForm = () => {
    const errors = {}
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'Voornaam is verplicht'
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Achternaam is verplicht'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'E-mail is verplicht'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Voer een geldig e-mailadres in'
    }
    
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Voer een geldig telefoonnummer in'
    }
    
    if (!formData.age) {
      errors.age = 'Leeftijd is verplicht'
    } else if (formData.age < 4 || formData.age > 14) {
      errors.age = 'Leeftijd moet tussen 4 en 14 jaar zijn'
    }
    
    if (!formData.category) {
      errors.category = 'Selecteer een categorie'
    } else {
      const selectedCat = ageCategories.find(cat => cat.id === formData.category)
      if (selectedCat && (formData.age < selectedCat.minAge || formData.age > selectedCat.maxAge)) {
        errors.category = `Leeftijd ${formData.age} komt niet overeen met de geselecteerde categorie (${selectedCat.minAge}-${selectedCat.maxAge} jaar)`
      }
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Simulate form submission
      setShowSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        category: ''
      })
      setSelectedCategory('')
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId)
    setFormData(prev => ({
      ...prev,
      category: categoryId
    }))
    
    // Scroll to signup form
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const addToCart = (product) => {
    setCart(prev => [...prev, { ...product, quantity: 1 }])
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ))
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Word lid van onze voetbalfamilie!</h1>
            <p>Welkom bij onze nieuw opgerichte voetbalclub! We zijn verheugd om trainingsprogramma's aan te bieden voor spelers van U6 tot U15. Doe mee en ontwikkel je vaardigheden in een leuke, ondersteunende omgeving.</p>
            <div className="hero-stats">
              <div className="stat">
                <h3>5</h3>
                <p>Leeftijdscategorieën</p>
              </div>
              <div className="stat">
                <h3>2024</h3>
                <p>Opgericht</p>
              </div>
              <div className="stat">
                <h3>Plezier</h3>
                <p>Gegarandeerd</p>
              </div>
            </div>
            <a href="#signup" className="cta-button">Nu Inschrijven</a>
          </div>
        </div>
      </section>

      {/* Age Categories */}
      <section id="categories" className="categories">
        <div className="container">
          <h2>Leeftijdscategorieën</h2>
          <p className="section-subtitle">Vind het perfecte programma voor je kind</p>
          
          <div className="categories-grid">
            {ageCategories.map((category) => (
              <div key={category.id} className={`category-card ${selectedCategory === category.id ? 'selected' : ''}`}>
                <div className="category-header">
                  <h3>{category.name}</h3>
                  <span className="category-badge">{category.id}</span>
                </div>
                <p>{category.description}</p>
                <div className="category-details">
                  <span className="age-range">Leeftijd {category.minAge}-{category.maxAge}</span>
                </div>
                <button 
                  className="category-button"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  {selectedCategory === category.id ? 'Geselecteerd ✓' : 'Selecteer deze categorie'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section id="signup" className="signup">
        <div className="container">
          <h2>Inschrijven voor Training</h2>
          <p className="section-subtitle">Word vandaag nog lid van onze voetbalclub!</p>
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Voornaam *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={formErrors.firstName ? 'error' : ''}
                />
                {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Achternaam *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={formErrors.lastName ? 'error' : ''}
                />
                {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefoonnummer</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={formErrors.phone ? 'error' : ''}
                  placeholder="+32 123 456 789"
                />
                {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Leeftijd *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="4"
                  max="14"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={formErrors.age ? 'error' : ''}
                />
                {formErrors.age && <span className="error-message">{formErrors.age}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="category">Gewenste Categorie *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={formErrors.category ? 'error' : ''}
                >
                  <option value="">Selecteer een categorie</option>
                  {ageCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} (Leeftijd {category.minAge}-{category.maxAge})
                    </option>
                  ))}
                </select>
                {formErrors.category && <span className="error-message">{formErrors.category}</span>}
              </div>
            </div>
            
            <button type="submit" className="submit-button">
              Inschrijving Versturen
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3><span className="icon-email"></span> E-mail</h3>
              <p>info@voetbalclub.com</p>
            </div>
            <div className="contact-item">
              <h3><span className="icon-phone"></span> Telefoon</h3>
              <p>+32 123 456 789</p>
            </div>
            <div className="contact-item">
              <h3><span className="icon-location"></span> Locatie</h3>
              <p>Voetbalveld Complex<br />Trainingsvelden</p>
            </div>
            <div className="contact-item">
              <h3><span className="icon-clock"></span> Trainingstijden</h3>
              <p>Weekdagen: 16:00-18:00<br />Weekenden: 09:00-11:00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )

  const renderWebshop = () => (
    <div className="webshop">
      <section className="webshop-hero">
        <div className="container">
          <h1>Club Webshop</h1>
          <p>Officiële club uitrusting en kleding voor alle spelers</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="webshop-header">
            <h2>Club Uitrusting</h2>
            <div className="cart-summary">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cart.length}</span>
              <span className="cart-total">€{getCartTotal().toFixed(2)}</span>
            </div>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-details">
                    <span className="product-price">€{product.price.toFixed(2)}</span>
                    <span className="product-category">{product.category}</span>
                  </div>
                  <div className="product-options">
                    <select className="size-select">
                      <option value="">Maat</option>
                      {product.sizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                    <select className="color-select">
                      <option value="">Kleur</option>
                      {product.colors.map(color => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>
                  <button 
                    className="add-to-cart-button"
                    onClick={() => addToCart(product)}
                  >
                    Toevoegen aan winkelwagen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {cart.length > 0 && (
        <section className="cart-section">
          <div className="container">
            <h2>Winkelwagen</h2>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <span className="product-emoji">{item.image}</span>
                  </div>
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>€{item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="cart-item-total">
                    €{(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button 
                    className="remove-item-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary-total">
              <h3>Totaal: €{getCartTotal().toFixed(2)}</h3>
              <button className="checkout-button">Afrekenen</button>
            </div>
          </div>
        </section>
      )}
    </div>
  )

  return (
    <div className="app">
      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          <div className="container">
            <p><span className="icon-check"></span> Bedankt voor je inschrijving! We nemen binnenkort contact met je op.</p>
            <button onClick={() => setShowSuccess(false)} className="close-button">×</button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1><span className="icon-soccer"></span> Voetbalclub</h1>
            <p>Opgericht september 2024</p>
          </div>
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>Home</a>
            <a href="#" onClick={() => { setCurrentPage('webshop'); setMobileMenuOpen(false); }}>Webshop</a>
            <a href="#categories" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>Leeftijdscategorieën</a>
            <a href="#signup" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>Inschrijven</a>
            <a href="#contact" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>Contact</a>
          </nav>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {currentPage === 'home' ? renderHomePage() : renderWebshop()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Voetbalclub. Opgericht september 2024. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
