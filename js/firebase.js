// ============================================================
// Firebase Configuration — Trip Tunes Tour and Travels
// Replace the values below with YOUR Firebase project config.
// Firebase Console → Project Settings → Your Apps → Web App
// ============================================================
const firebaseConfig = {
 apiKey: "AIzaSyCM2wosAREF5gwtt3tXc-FhO9oA9Jv6Zy0",
  authDomain: "entrty-data.firebaseapp.com",
  projectId: "entrty-data",
  storageBucket: "entrty-data.firebasestorage.app",
  messagingSenderId: "431553735363",
  appId: "1:431553735363:web:f89cbce9b606e8db40d076"
};

firebase.initializeApp(firebaseConfig);
const db   = firebase.firestore();
const auth = firebase.auth();

// ============================================================
// DEFAULT DATA — all hardcoded packages / cabs / gallery
// These get seeded into Firestore automatically the FIRST time
// an admin logs in, so everything is editable from day one.
// ============================================================
const DEFAULT_TOURS = [
  {
    name: "Family Kashmir Package",
    description: "A balanced 6-night itinerary covering Srinagar, Gulmarg, and Pahalgam — paced for families with children and elderly members.",
    duration: "6 Nights / 7 Days",
    price: null,
    image: "https://images.unsplash.com/photo-1591135456609-8a8e855e7e67?w=600&q=75",
    highlights: ["Dal Lake Shikara ride","Gulmarg Gondola","Pahalgam valley","Mughal Gardens","Houseboat stay on Dal Lake"],
    featured: true
  },
  {
    name: "Kashmir Honeymoon Package",
    description: "Romantic Kashmir for newlyweds — private Shikara rides, scenic stays, and carefully selected experiences for couples.",
    duration: "4 Nights / 5 Days",
    price: null,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    highlights: ["Houseboat on Dal Lake","Private Shikara at sunset","Sonamarg day trip","Rose & Tulip Garden visits","Customisable extras"],
    featured: true
  },
  {
    name: "Srinagar Local Tour",
    description: "A focused Srinagar itinerary covering Dal Lake, the Old City, Mughal Gardens, and local market areas at a relaxed pace.",
    duration: "2 Nights / 3 Days",
    price: null,
    image: "https://images.unsplash.com/photo-1614799040700-0a6f1f5d4c0a?w=600&q=75",
    highlights: ["Dal Lake Shikara ride","Nishat & Shalimar Bagh","Hazratbal Shrine","Lal Chowk and Old City","Floating vegetable market"],
    featured: false
  },
  {
    name: "Gulmarg Tour",
    description: "The meadow of flowers — highest gondola in Asia, snow-covered slopes in winter, and lush green meadows in summer.",
    duration: "2 Nights / 3 Days",
    price: null,
    image: "https://images.unsplash.com/photo-1624979413609-9eaf0f94e800?w=600&q=75",
    highlights: ["Gondola Phase 1 & 2","Khilanmarg meadow walk","Snow activities in winter","Golf course visit","St Mary's Church"],
    featured: false
  },
  {
    name: "Pahalgam Tour",
    description: "Valley of Shepherds — Pahalgam is one of Kashmir's most serene destinations, with rivers, forests, and open meadows.",
    duration: "2 Nights / 3 Days",
    price: null,
    image: "https://images.unsplash.com/photo-1585531943718-89dc7bc34d45?w=600&q=75",
    highlights: ["Betaab Valley","Aru Valley walk","Baisaran meadows","Lidder river horseback rides","Chandanwari day trip"],
    featured: false
  },
  {
    name: "Sonamarg Tour",
    description: "Meadow of Gold — gateway to the Himalayas with glacier views, frozen lakes, and breathtaking mountain scenery.",
    duration: "1 Night / 2 Days",
    price: null,
    image: "https://images.unsplash.com/photo-1506461883276-594a12b5bca3?w=600&q=75",
    highlights: ["Thajiwas Glacier visit","Sindh river ponies","Vishansar Lake (optional)","Zoji La Pass view","Mountain wildflowers"],
    featured: false
  },
  {
    name: "Custom Package",
    description: "Cannot find what you need? Tell us your travel dates, group size, and budget — we will design an itinerary specifically for you.",
    duration: "Flexible",
    price: null,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=75",
    highlights: ["Any combination of destinations","Your own schedule and pace","Budget or premium options","Solo, couple, or large group"],
    featured: false
  }
];

const DEFAULT_VEHICLES = [
  {
    name: "Swift Dzire / Sedan",
    subtitle: "Comfortable for 1–4 passengers. Ideal for airport transfers and city sightseeing.",
    specs: ["1–4 Passengers","A/C","Luggage Space"],
    price: null,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=75"
  },
  {
    name: "Toyota Innova Crysta",
    subtitle: "Most popular for families. Spacious, comfortable, and handles mountain roads well.",
    specs: ["5–7 Passengers","A/C","Mountain Ready"],
    price: null,
    image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=75"
  },
  {
    name: "Maruti Ertiga",
    subtitle: "A practical choice for small groups — more space than a sedan, economical for day trips.",
    specs: ["5–7 Passengers","A/C","Economy"],
    price: null,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=75"
  },
  {
    name: "Tempo Traveller",
    subtitle: "For groups of 9 to 14 passengers. Ideal for family gatherings, college trips, and group tours.",
    specs: ["9–14 Passengers","A/C","Group Travel"],
    price: null,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75"
  },
  {
    name: "Mini Coach / Bus",
    subtitle: "For large group tours and corporate trips. We arrange mini coaches and full buses on request.",
    specs: ["15–40 Passengers","A/C","Large Groups"],
    price: null,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=75"
  }
];

const DEFAULT_GALLERY = [
  "https://images.unsplash.com/photo-1614799040700-0a6f1f5d4c0a?w=700&q=80",
  "https://images.unsplash.com/photo-1506461883276-594a12b5bca3?w=700&q=80",
  "https://images.unsplash.com/photo-1624979413609-9eaf0f94e800?w=700&q=80",
  "https://images.unsplash.com/photo-1585531943718-89dc7bc34d45?w=700&q=80",
  "https://images.unsplash.com/photo-1591135456609-8a8e855e7e67?w=700&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=700&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80",
  "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=700&q=80"
];

// ============================================================
// seedDefaultData()
// Called once after admin login. Checks each collection —
// if empty, writes all default items so they appear in admin.
// ============================================================
async function seedDefaultData() {
  try {
    // Seed tours
    const toursSnap = await db.collection('tours').limit(1).get();
    if (toursSnap.empty) {
      const batch = db.batch();
      DEFAULT_TOURS.forEach(t => batch.set(db.collection('tours').doc(), t));
      await batch.commit();
      console.log('✅ Default tours seeded.');
    }

    // Seed vehicles
    const vehSnap = await db.collection('vehicles').limit(1).get();
    if (vehSnap.empty) {
      const batch = db.batch();
      DEFAULT_VEHICLES.forEach(v => batch.set(db.collection('vehicles').doc(), v));
      await batch.commit();
      console.log('✅ Default vehicles seeded.');
    }

    // Seed gallery
    const galSnap = await db.collection('gallery').limit(1).get();
    if (galSnap.empty) {
      const batch = db.batch();
      DEFAULT_GALLERY.forEach(url => batch.set(db.collection('gallery').doc(), { image: url }));
      await batch.commit();
      console.log('✅ Default gallery seeded.');
    }
  } catch (e) {
    console.warn('Seed skipped (Firebase not configured yet):', e.message);
  }
}

// ============================================================
// Shared utilities used across all pages
// ============================================================

// WhatsApp auto-message
function whatsappInquiry(packageName) {
  const phone = "918082227879";
  const msg = packageName
    ? `Hi, I am interested in the *${packageName}* package. Please share details and pricing.`
    : "Hi, I would like to inquire about your tour packages and services.";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

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

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Active nav link highlight
  const links       = document.querySelectorAll('.main-nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
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
