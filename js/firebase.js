// ============================================
// Firebase Configuration - Trip Tunes
// ============================================

// Replace with your actual Firebase project config
const firebaseConfig = {
   apiKey: "AIzaSyCM2wosAREF5gwtt3tXc-FhO9oA9Jv6Zy0",
  authDomain: "entrty-data.firebaseapp.com",
  projectId: "entrty-data",
  storageBucket: "entrty-data.firebasestorage.app",
  messagingSenderId: "431553735363",
  appId: "1:431553735363:web:f89cbce9b606e8db40d076"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// ============================================
// Shared Utilities
// ============================================

// WhatsApp auto-message
function whatsappInquiry(packageName) {
  const phone = "918082227879";
  const msg = packageName
    ? `Hi, I am interested in the *${packageName}* package. Please share details and pricing.`
    : "Hi, I would like to inquire about your tour packages and services.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Format date
function formatDate(ts) {
  if (!ts) return '—';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Active nav link
  const links = document.querySelectorAll('.main-nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (q) {
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });
});

// Submit inquiry to Firestore
async function submitInquiry(name, phone, message, packageName) {
  try {
    await db.collection('inquiries').add({
      name,
      phone,
      message,
      packageName: packageName || '',
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
    return true;
  } catch (e) {
    console.error('Inquiry error:', e);
    return false;
  }
}

// Render loading spinner
function renderSpinner(container) {
  container.innerHTML = `<div class="spinner-wrap"><div class="spinner"></div></div>`;
}

// Render empty state
function renderEmpty(container, msg) {
  container.innerHTML = `<div class="empty-state"><p>${msg || 'No items found.'}</p></div>`;
}
