// Basic data for products, trending items, and daily offers
const branchTagline = "Quality Clothing at Prices You’ll Love";

const branches = [
  {
    id: "main",
    name: "Main Branch",
    phone: "+91-79903-91274",
    rawPhone: "7990391274",
    address:
      "Shop No. 1, Madina Masjid Rd, near Madina Masjid, Railway Colony, Udhana, Surat, Gujarat 395012",
    mapQuery:
      "Shop No 1 Madina, Masjid Rd, near Madina masjid, Udhana, Railway Colony, Udhana, Surat, Gujarat 395012",
    highlight: "Udhana Main Studio",
  },
  {
    id: "nanavat",
    name: "Nanavat Branch",
    phone: "+91-96649-60714",
    rawPhone: "9664960714",
    address:
      "Shop No. 5, Nanavat Main Rd, near Lakhpati Hospital, Chowk Bazar, Surat, Gujarat 395003",
    mapQuery:
      "Shop No 5, Nanavat Main Rd, near Lakhpati Hospital, Chowk Bazar, Surat, Gujarat 395003",
    highlight: "Chowk Bazar – Near Lakhpati Hospital",
  },
  {
    id: "unpatiya",
    name: "Unpatiya Branch",
    phone: "+91-87994-00958",
    rawPhone: "8799400958",
    address:
      "Shop No. 34, Main Road, near Salami Inn, Asha Nagar, Hindi Bazar, Patiya, Surat, Gujarat 394210",
    mapQuery:
      "Shop No 34, Main Road, near Salami Inn, Asha Nagar, Hindi Bazar, Patiya, Surat, Gujarat 394210",
    highlight: "Asha Nagar – Near Salami Inn",
  },
];

const COMMON_PRICE = 500;
const BULK_DEAL_TEXT = "Buy any 3 styles for ₹1,200";

const STORAGE_KEYS = {
  products: "admin_products",
  offers: "admin_offers",
  visits: "visit_count",
  touches: "product_touches",
};

let searchTerm = "";
let lastSearchResultCount = 0;

function readFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (Array.isArray(fallback)) {
      return Array.isArray(parsed) ? parsed : fallback;
    }
    if (typeof fallback === "object") {
      return parsed && typeof parsed === "object" ? parsed : fallback;
    }
    return parsed ?? fallback;
  } catch (err) {
    console.warn("Storage read failed for", key, err);
    return fallback;
  }
}

function writeToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn("Storage write failed for", key, err);
  }
}

const products = [
  {
    id: 1,
    name: "Signature Hoodie",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "unisex",
    vibe: "casual",
    emoji: "🧥",
    image: "cloths/Signature Hoodie.png",
    tags: ["Hoodie", "Layer"],
  },
  {
    id: 2,
    name: "Pure Linen Shirt",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "men",
    vibe: "formal",
    emoji: "👔",
    image: "cloths/Pure Linen Shirt.png",
    tags: ["Linen", "Breathable"],
  },
  {
    id: 3,
    name: "Linen Comfort Pant",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "men",
    vibe: "formal",
    emoji: "🩳",
    image: "cloths/Linen Comfort Pant.png",
    tags: ["Linen", "Lightweight"],
  },
  {
    id: 4,
    name: "Tactical Cargo Pants",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "unisex",
    vibe: "street",
    emoji: "🎒",
    image: "cloths/Tactical Cargo Pants.png",
    tags: ["Cargos", "Utility"],
  },
  {
    id: 5,
    name: "Baggy Fit Jeans",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "unisex",
    vibe: "street",
    emoji: "👖",
    image: "cloths/Baggy Fit Jeans.png",
    tags: ["Denim", "Baggy"],
  },
  {
    id: 6,
    name: "Straight Fit Denim",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "unisex",
    vibe: "casual",
    emoji: "🧍",
    image: "cloths/Straight Fit Denim.png",
    tags: ["Denim", "Straight"],
  },
  {
    id: 7,
    name: "Korean Sweatshirt",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "unisex",
    vibe: "street",
    emoji: "🧶",
    image: "cloths/Korean Sweatshirt.png",
    tags: ["Korean", "Cozy"],
  },
  
  {
    id: 9,
    name: "Woolen T-shirt",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "unisex",
    vibe: "casual",
    emoji: "❄️",
    image: "cloths/Woolen T-shirt.jpg",
    tags: ["Woolen", "Soft"],
  },
  {
    id: 10,
    name: "Classic Polo Tee",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "men",
    vibe: "smart",
    emoji: "🏌️",
    image: "cloths/Classic Polo Tee.png",
    tags: ["Polo", "Smart casual"],
  },
  {
    id: 11,
    name: "Korean Fit Pants",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "men",
    vibe: "street",
    emoji: "🪡",
    image: "cloths/Korean Fit Pants.png",
    tags: ["Korean", "Tailored"],
  },
  {
    id: 12,
    name: "Relaxed Fit Tee",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "unisex",
    vibe: "casual",
    emoji: "🌿",
    image: "cloths/Relaxed Fit Tee.png",
    tags: ["Relaxed", "Daily"],
  },
  {
    id: 13,
    name: "Oversized Tee",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "unisex",
    vibe: "street",
    emoji: "🆒",
    image: "cloths/Oversized Tee.png",
    tags: ["Oversized", "Street"],
  },
  {
    id: 14,
    name: "Velvet Kurta Set",
    price: COMMON_PRICE,
    oldPrice: 999,
    category: "women",
    vibe: "party",
    emoji: "👗",
    image: "cloths/Velvet Kurta Set.png",
    tags: ["Velvet", "Occasion"],
  },
  {
    id: 15,
    name: "Formal Combo Pack",
    price: COMMON_PRICE,
    oldPrice: 1099,
    category: "men",
    vibe: "formal",
    emoji: "💼",
    image: "cloths/Formal Combo Pack.png",
    tags: ["Formal", "Combo"],
  },
  {
    id: 16,
    name: "Long Sleeve Tee",
    price: COMMON_PRICE,
    oldPrice: 899,
    category: "unisex",
    vibe: "casual",
    emoji: "🧵",
    image: "cloths/Long Sleeve Tee.png",
    tags: ["Long sleeve", "Layer"],
  },
  {
    id: 17,
    name: "Chunni Style Shirt",
    price: COMMON_PRICE,
    oldPrice: 999,
    category: "women",
    vibe: "fusion",
    emoji: "🧕",
    image: "cloths/Chunni Style Shirt.png",
    tags: ["Chunni", "Fusion"],
  },
];

const trendingItems = [
  {
    label: "Most Tried On",
    name: "Signature Hoodie",
    stat: "Loved for winter-ready warmth",
  },
  {
    label: "Daily Bestseller",
    name: "Pure Linen Shirt",
    stat: "Perfect for Surat heat waves",
  },
  {
    label: "Street Style Pick",
    name: "Baggy Fit Jeans",
    stat: "Pairs with every oversized tee",
  },
  {
    label: "Festive Favourite",
    name: "Velvet Kurta Set",
    stat: "Fresh stock every weekend",
  },
];

const defaultDailyOffers = [
  {
    title: "Mix & Match Trio",
    description: "Pick any 3 tops or bottoms across the studio.",
    price: 1200,
    oldPrice: 1500,
    extra: "Stacks with the ₹500 pricing",
    code: "MAHEK3",
  },
  {
    title: "Formal Combo Boost",
    description: "Linen shirt, linen pant, and formal accessory.",
    price: 1200,
    oldPrice: 1800,
    extra: "Ideal for office drop-ins",
    code: "SUITED",
  },
  {
    title: "Winter Warmth Pack",
    description: "Hoodie + woolen tee + long sleeve tee.",
    price: 1200,
    oldPrice: 1650,
    extra: "Stay warm without overspending",
    code: "COZY3",
  },
  {
    title: "Festive Velvet Set",
    description: "Velvet kurta + chunni shirt + relaxed pant.",
    price: 1200,
    oldPrice: 1850,
    extra: "Limited festive drops daily",
    code: "VELVET",
  },
];

// Utility functions
const formatINR = (value) =>
  "₹" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const daysBetween = (date) => Math.floor(date.getTime() / (1000 * 60 * 60 * 24));

const encodeQuery = (value) => encodeURIComponent(value.trim());

const normalizeText = (value) =>
  (value || "")
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function levenshtein(a, b) {
  if (a === b) return 0;
  const alen = a.length;
  const blen = b.length;
  if (alen === 0) return blen;
  if (blen === 0) return alen;
  const dp = Array.from({ length: alen + 1 }, () => new Array(blen + 1).fill(0));
  for (let i = 0; i <= alen; i++) dp[i][0] = i;
  for (let j = 0; j <= blen; j++) dp[0][j] = j;
  for (let i = 1; i <= alen; i++) {
    for (let j = 1; j <= blen; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[alen][blen];
}

function getProductSearchScore(product, query) {
  if (!query) return 1;
  const q = normalizeText(query);
  if (!q) return 1;

  const haystack = normalizeText(
    [product.name, product.vibe, product.category, ...(product.tags || [])].join(" ")
  );

  if (haystack.includes(q)) return 5;

  const words = haystack.split(" ");
  const distances = words.map((w) => levenshtein(w, q));
  const best = Math.min(...distances);

  if (best === 0) return 4;
  if (best <= 1) return 3;
  if (best <= 2) return 2;
  return 0;
}

// Data loaders (allow admin overrides)
function loadProducts() {
  return readFromStorage(STORAGE_KEYS.products, products);
}

function loadOffers() {
  return readFromStorage(STORAGE_KEYS.offers, defaultDailyOffers);
}

// Tracking helpers
function recordVisit() {
  const current = Number(localStorage.getItem(STORAGE_KEYS.visits) || 0);
  localStorage.setItem(STORAGE_KEYS.visits, String(current + 1));
}

function recordTouch(productId) {
  const map = readFromStorage(STORAGE_KEYS.touches, {});
  const key = String(productId);
  map[key] = Number(map[key] || 0) + 1;
  writeToStorage(STORAGE_KEYS.touches, map);
}

// Render products grid based on filters
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const productList = loadProducts();
  const query = searchTerm.trim();
  const maxBudget = Number(
    document.getElementById("budget-range")?.value || 2999
  );
  const category = document.getElementById("category-select")?.value || "all";
  const vibe = document.getElementById("vibe-select")?.value || "all";

  const filtered = productList
    .map((p) => ({
      data: p,
      score: getProductSearchScore(p, query),
    }))
    .filter(({ data, score }) => {
      if (data.price > maxBudget) return false;
      if (category !== "all" && data.category !== category) return false;
      if (vibe !== "all" && data.vibe !== vibe) return false;
      if (query && score <= 0) return false;
      return true;
    })
    .sort((a, b) => b.score - a.score)
    .map((item) => item.data);

  lastSearchResultCount = filtered.length;

  if (!filtered.length) {
    grid.innerHTML =
      '<p style="color:#9ca3af;font-size:0.86rem;">No outfits match this search right now. Stay tuned — it’ll be available soon!</p>';
    return 0;
  }

  grid.innerHTML = filtered
    .map(
      (p) => `
      <article class="product-card" data-id="${p.id}">
        <div class="product-thumb">
          ${
            p.image
              ? `<img src="${p.image}" alt="${p.name}" loading="lazy" />`
              : `<span class="product-emoji">${p.emoji || "🛍️"}</span>`
          }
        </div>
        <div class="product-body">
          <h3 class="product-title">${p.name}</h3>
          <div class="product-meta">
            <span>${p.category === "unisex" ? "Unisex" : p.category}</span>
            <span>${p.vibe.charAt(0).toUpperCase() + p.vibe.slice(1)}</span>
          </div>
          <div class="product-tags">
            ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <div class="product-footer">
            <div>
              <span class="product-price">${formatINR(p.price)}</span>
              <span class="product-price-old">${formatINR(p.oldPrice)}</span>
            </div>
            <span class="product-note">${BULK_DEAL_TEXT}</span>
          </div>
        </div>
      </article>
    `
    )
    .join("");
  return filtered.length;
}

// Render trending strip
function renderTrending() {
  const strip = document.getElementById("trending-strip");
  if (!strip) return;

  strip.innerHTML = trendingItems
    .map(
      (item) => `
      <article class="trending-card">
        <p class="trending-label">${item.label}</p>
        <p class="trending-name">${item.name}</p>
        <p class="trending-stat">${item.stat}</p>
      </article>
    `
    )
    .join("");
}

// Determine today's offer in a stable way (changes daily)
function getTodayOfferIndex(offers) {
  const today = new Date();
  const days = daysBetween(today);
  return offers.length ? days % offers.length : 0;
}

function renderOffers() {
  const main = document.getElementById("main-offer");
  const upcoming = document.getElementById("upcoming-offers");
  if (!main || !upcoming) return;

  const offers = loadOffers();
  if (!offers.length) return;

  const todayIndex = getTodayOfferIndex(offers);
  const todayOffer = offers[todayIndex];
  const upcomingOffers = [
    offers[(todayIndex + 1) % offers.length],
    offers[(todayIndex + 2) % offers.length],
  ];

  const now = new Date();
  const endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59
  );
  const remainingMs = Math.max(0, endOfDay.getTime() - now.getTime());
  const hrs = Math.floor(remainingMs / (1000 * 60 * 60));
  const mins = Math.floor((remainingMs / (1000 * 60)) % 60);

  main.innerHTML = `
    <div class="offer-main-top">
      <div class="offer-main-info">
        <span class="offer-badge">Today only</span>
        <h3>${todayOffer.title}</h3>
        <p>${todayOffer.description}</p>
        <p class="offer-timer">Auto-refresh in ${hrs}h ${mins}m</p>
      </div>
      <div class="offer-main-visual">
        <div class="gradient-bg" style="height:120px;margin-top:0;"></div>
      </div>
    </div>
    <div class="offer-main-bottom">
      <div class="offer-price-line">
        <span class="price">${formatINR(todayOffer.price)}</span>
        <span class="price-old">${formatINR(todayOffer.oldPrice)}</span>
        <span class="discount">
          Save ${formatINR(todayOffer.oldPrice - todayOffer.price)}
        </span>
      </div>
      <div class="offer-extra">
        <span>${todayOffer.extra}</span><br/>
        <span>Use code <strong>${todayOffer.code}</strong> at checkout</span>
      </div>
    </div>
  `;

  upcoming.innerHTML = upcomingOffers
    .map(
      (o) => `
      <li>
        <span>${o.title}</span>
        <span>From ${formatINR(o.price)}</span>
      </li>
    `
    )
    .join("");
}

function renderBranches() {
  const grid = document.getElementById("branches-grid");
  if (!grid) return;

  grid.innerHTML = branches
    .map(
      (b) => `
        <article class="branch-card">
          <h3>${b.name}</h3>
          <p class="branch-phone">Call ${b.rawPhone}</p>
          <div class="branch-meta">
            <p><strong>Highlight:</strong> ${b.highlight}</p>
            <p><strong>Address:</strong> ${b.address}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function populateBranchSelect() {
  const select = document.getElementById("branch-select");
  const tagline = document.getElementById("branch-tagline");
  if (tagline) {
    tagline.textContent = branchTagline;
  }

  if (!select) return;

  select.innerHTML = branches
    .map((b, index) => `<option value="${b.id}" ${index === 0 ? "selected" : ""}>${b.name}</option>`)
    .join("");

  select.addEventListener("change", () => {
    updateBranchDetails(select.value);
  });

  updateBranchDetails(select.value || branches[0].id);
}

function updateBranchDetails(branchId) {
  const branch = branches.find((b) => b.id === branchId) || branches[0];
  if (!branch) return;

  const nameEl = document.getElementById("branch-name");
  const addressEl = document.getElementById("branch-address");
  const phoneEl = document.getElementById("branch-phone");
  const mapFrame = document.getElementById("branch-map");
  const mapOverlay = document.getElementById("map-overlay-link");

  if (nameEl) nameEl.textContent = branch.name;
  if (addressEl) addressEl.textContent = branch.address;
  if (phoneEl) phoneEl.textContent = branch.phone;

  const destination = encodeQuery(branch.mapQuery || branch.address);
  const mapSrc = `https://www.google.com/maps?q=${destination}&output=embed`;
  if (mapFrame) {
    mapFrame.src = mapSrc;
  }
  if (mapOverlay) {
    mapOverlay.href = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    mapOverlay.setAttribute("aria-label", `Open directions to ${branch.name} in Google Maps`);
  }
}

// Newsletter subscription (frontend only demo)
function setupNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("newsletter-email");
  const status = document.getElementById("newsletter-status");
  if (!form || !emailInput || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = emailInput.value.trim();
    if (!value || !value.includes("@")) {
      status.textContent = "Please enter a valid email to get daily drops.";
      status.style.color = "#fecaca";
      return;
    }
    status.textContent =
      "You’re in! We’ll send you curated under‑budget looks every day.";
    status.style.color = "#bbf7d0";
    form.reset();
  });
}

// "Remind me" button for offers
function setupRemindMe() {
  const btn = document.getElementById("remind-me-btn");
  const status = document.getElementById("remind-status");
  if (!btn || !status) return;

  btn.addEventListener("click", () => {
    status.textContent =
      "We’ll remind you here when tomorrow’s offers are live. (Demo only – no real notifications are sent.)";
    status.style.color = "#bbf7d0";
  });
}

// Hero buttons scroll
function setupHeroButtons() {
  const shopNow = document.getElementById("shop-now-btn");
  const todayOffer = document.getElementById("today-offer-btn");

  if (shopNow) {
    shopNow.addEventListener("click", () => {
      document.getElementById("new-arrivals")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  if (todayOffer) {
    todayOffer.addEventListener("click", () => {
      document.getElementById("offers")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}

// Mobile menu toggle (simple show/hide)
function setupMenuToggle() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isShown = nav.style.display === "flex";
    nav.style.display = isShown ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "3.1rem";
    nav.style.right = "1.5rem";
    nav.style.padding = "0.7rem 1rem";
    nav.style.borderRadius = "0.9rem";
    nav.style.background = "rgba(15,23,42,0.98)";
    nav.style.border = "1px solid rgba(148,163,184,0.7)";
  });
}

// Budget range label update
function setupBudgetRange() {
  const range = document.getElementById("budget-range");
  const label = document.getElementById("budget-value");
  if (!range || !label) return;

  const update = () => {
    label.textContent = formatINR(Number(range.value));
    renderProducts();
  };

  range.addEventListener("input", update);
  update();
}

// Filters change
function setupFilters() {
  const category = document.getElementById("category-select");
  const vibe = document.getElementById("vibe-select");

  [category, vibe].forEach((el) => {
    if (!el) return;
    el.addEventListener("change", () => {
      renderProducts();
    });
  });
}

// Track which products users interact with
function setupProductTouchTracking() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card");
    if (!card) return;
    const productId = Number(card.dataset.id);
    if (!productId) return;
    recordTouch(productId);
  });
}

// Search bar toggle + fuzzy search
function setupSearchBar() {
  const toggle = document.getElementById("search-toggle");
  const bar = document.getElementById("search-bar");
  const input = document.getElementById("search-input");
  const clear = document.getElementById("search-clear");

  if (!toggle || !bar || !input) return;

  const applySearch = () => {
    searchTerm = input.value;
    const count = renderProducts();
    if (searchTerm.trim() && count > 0) {
      document.getElementById("new-arrivals")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  toggle.addEventListener("click", () => {
    const willShow = !bar.classList.contains("show");
    bar.classList.toggle("show");
    if (willShow) {
      input.focus();
    } else {
      input.blur();
    }
  });

  input.addEventListener("input", () => {
    applySearch();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applySearch();
    }
  });

  clear?.addEventListener("click", () => {
    input.value = "";
    searchTerm = "";
    renderProducts();
    input.focus();
  });
}

// Footer year
function setYear() {
  const span = document.getElementById("year");
  if (!span) return;
  span.textContent = new Date().getFullYear();
}

// Initialize everything once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  recordVisit();
  renderProducts();
  renderTrending();
  renderOffers();
  renderBranches();
  populateBranchSelect();
  setupNewsletterForm();
  setupRemindMe();
  setupHeroButtons();
  setupMenuToggle();
  setupSearchBar();
  setupBudgetRange();
  setupFilters();
  setupProductTouchTracking();
  setYear();
});


