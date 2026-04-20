// ============================================
// Shared Header / Footer Partials
// ============================================

const SITE_NAV = `
<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="logo.png" alt="Trip Tunes Tour and Travels Logo" onerror="this.style.display='none'">
        <div class="logo-text">
          <span class="logo-name">Trip Tunes</span>
          <span class="logo-tagline">Your Trusted Travel Partner</span>
        </div>
      </a>
      <nav class="main-nav" role="navigation" aria-label="Main Navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="tours.html">Tour Packages</a>
        <a href="cabs.html">Cab Rental</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="header-cta">
        <a href="tel:8082227879" class="header-phone">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          8082227879
        </a>
        <a href="contact.html" class="btn btn-primary btn-sm">Book Now</a>
      </div>
      <div class="nav-toggle" role="button" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</header>
`;

const SITE_FOOTER = `
<footer class="site-footer" itemscope itemtype="https://schema.org/TravelAgency">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo">
          <img src="logo.png" alt="Trip Tunes Logo" style="height:40px;width:auto;" onerror="this.style.display='none'">
          <div class="logo-text">
            <span class="logo-name" itemprop="name">Trip Tunes Tour and Travels</span>
            <span class="logo-tagline">Your Trusted Travel Partner</span>
          </div>
        </div>
        <p itemprop="description">A locally trusted travel agency in Budgam, near Srinagar, offering Kashmir tour packages, houseboat bookings, hotel reservations, and cab rentals for families, couples, and groups.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="tours.html">Tour Packages</a></li>
          <li><a href="cabs.html">Cab Rental</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li><a href="services.html#hotel">Hotel Reservation</a></li>
          <li><a href="services.html#houseboat">Houseboat Bookings</a></li>
          <li><a href="cabs.html">Cab Rental</a></li>
          <li><a href="services.html#honeymoon">Honeymoon Packages</a></li>
          <li><a href="services.html#family">Family Trips</a></li>
          <li><a href="services.html#group">Group Bookings</a></li>
        </ul>
      </div>
      <div class="footer-col footer-contact">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <span class="icon">📍</span>
            <span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
              <strong>Address</strong>
              <span itemprop="streetAddress">Safvi Galleria, New Bus Stand Budgam</span>,
              <span itemprop="addressLocality">near Srinagar</span>,
              <span itemprop="addressRegion">Jammu & Kashmir</span>,
              <span itemprop="addressCountry">India</span>
            </span>
          </li>
          <li>
            <span class="icon">📞</span>
            <span>
              <strong>Phone</strong>
              <a href="tel:8082227879" itemprop="telephone">8082227879</a> /
              <a href="tel:7889847522">7889847522</a>
            </span>
          </li>
          <li>
            <span class="icon">✉️</span>
            <span>
              <strong>Email</strong>
              <a href="mailto:triptunes5@gmail.com" itemprop="email">triptunes5@gmail.com</a>
            </span>
          </li>
          <li>
            <span class="icon">🌐</span>
            <span><strong>Website</strong> triptunes.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Trip Tunes Tour and Travels. All rights reserved.</p>
      <p><a href="privacy.html">Privacy Policy</a> &nbsp;|&nbsp; <a href="sitemap.xml">Sitemap</a></p>
    </div>
  </div>
</footer>

<!-- WhatsApp Float Button -->
<a href="https://wa.me/918082227879?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20Kashmir%20tour%20packages."
   class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
</a>
`;

// Inject header and footer
document.addEventListener('DOMContentLoaded', function () {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = SITE_NAV;
  if (footerEl) footerEl.outerHTML = SITE_FOOTER;
});
