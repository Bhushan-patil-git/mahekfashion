const STORAGE_KEYS = {
  products: "admin_products",
  offers: "admin_offers",
  visits: "visit_count",
  touches: "product_touches",
};

// Default seed data (mirrors the storefront)
const defaultProducts = [
  {
    id: 1,
    name: "Signature Hoodie",
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
    oldPrice: 899,
    category: "unisex",
    vibe: "street",
    emoji: "🧶",
    image: "cloths/Korean Sweatshirt.png",
    tags: ["Korean", "Cozy"],
  },
  {
    id: 8,
    name: "Streetwear Essentials",
    price: 500,
    oldPrice: 899,
    category: "unisex",
    vibe: "street",
    emoji: "🛹",
    image: "cloths/Streetwear Essentials.png",
    tags: ["Oversized tee", "Cargos", "Hoodie"],
  },
  {
    id: 9,
    name: "Woolen T-shirt",
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
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
    price: 500,
    oldPrice: 999,
    category: "women",
    vibe: "fusion",
    emoji: "🧕",
    image: "cloths/Chunni Style Shirt.png",
    tags: ["Chunni", "Fusion"],
  },
];

const defaultOffers = [
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

let uploadedImageData = null;

// Storage helpers
function readFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
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

// Data getters/setters
function getProducts() {
  return readFromStorage(STORAGE_KEYS.products, defaultProducts);
}

function setProducts(list) {
  writeToStorage(STORAGE_KEYS.products, list);
  renderProductsTable();
}

function getOffers() {
  return readFromStorage(STORAGE_KEYS.offers, defaultOffers);
}

function setOffers(list) {
  writeToStorage(STORAGE_KEYS.offers, list);
  renderOffersTable();
}

function resetAnalytics() {
  localStorage.removeItem(STORAGE_KEYS.visits);
  localStorage.removeItem(STORAGE_KEYS.touches);
  renderAnalytics();
}

// Rendering
function renderAnalytics() {
  const visits = Number(localStorage.getItem(STORAGE_KEYS.visits) || 0);
  const touches = readFromStorage(STORAGE_KEYS.touches, {});
  const products = getProducts();

  const visitEl = document.getElementById("visit-count");
  const touchEl = document.getElementById("touch-count");
  const tableBody = document.getElementById("touches-table");

  if (visitEl) visitEl.textContent = visits.toLocaleString();

  const totalTouches = Object.values(touches).reduce((sum, n) => sum + Number(n || 0), 0);
  if (touchEl) touchEl.textContent = totalTouches.toLocaleString();

  if (tableBody) {
    const entries = Object.entries(touches)
      .map(([id, count]) => {
        const product = products.find((p) => String(p.id) === id);
        return { name: product?.name || `Product #${id}`, count: Number(count || 0) };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    tableBody.innerHTML = entries
      .map(
        (row) => `
        <tr>
          <td>${row.name}</td>
          <td>${row.count.toLocaleString()}</td>
        </tr>
      `
      )
      .join("");
  }
}

function renderProductsTable() {
  const tbody = document.getElementById("products-table");
  if (!tbody) return;
  const products = getProducts();

  tbody.innerHTML = products
    .map(
      (p) => `
      <tr>
        <td>${p.name}</td>
        <td>₹${p.price}</td>
        <td>₹${p.oldPrice}</td>
        <td>${p.category}</td>
        <td>${p.vibe}</td>
        <td>${p.image ? `<span class="pill">${p.image}</span>` : "—"}</td>
        <td>${(p.tags || []).join(", ")}</td>
        <td>
          <div style="display:flex;gap:0.3rem;">
            <button class="ghost-btn small-btn" data-edit="${p.id}">Edit</button>
            <button class="ghost-btn small-btn danger" data-delete="${p.id}">Delete</button>
          </div>
        </td>
      </tr>
    `
    )
    .join("");
}

function renderOffersTable() {
  const tbody = document.getElementById("offers-table");
  if (!tbody) return;
  const offers = getOffers();

  tbody.innerHTML = offers
    .map(
      (o, index) => `
      <tr>
        <td>${o.title}</td>
        <td>${o.description}</td>
        <td>₹${o.price}</td>
        <td>₹${o.oldPrice}</td>
        <td>${o.code}</td>
        <td>${o.extra || "—"}</td>
        <td>
          <div style="display:flex;gap:0.3rem;">
            <button class="ghost-btn small-btn" data-edit-offer="${index}">Edit</button>
            <button class="ghost-btn small-btn danger" data-delete-offer="${index}">Delete</button>
          </div>
        </td>
      </tr>
    `
    )
    .join("");
}

// Forms
function resetProductForm() {
  document.getElementById("product-id").value = "";
  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-old-price").value = "";
  document.getElementById("product-category").value = "unisex";
  document.getElementById("product-vibe").value = "casual";
  document.getElementById("product-tags").value = "";
  document.getElementById("product-image").value = "";
  const fileInput = document.getElementById("product-image-file");
  if (fileInput) fileInput.value = "";
  uploadedImageData = null;
  document.getElementById("product-submit").textContent = "Save product";
}

function resetOfferForm() {
  document.getElementById("offer-index").value = "";
  document.getElementById("offer-title").value = "";
  document.getElementById("offer-desc").value = "";
  document.getElementById("offer-price").value = "";
  document.getElementById("offer-old-price").value = "";
  document.getElementById("offer-code").value = "";
  document.getElementById("offer-extra").value = "";
  document.getElementById("offer-submit").textContent = "Save offer";
}

// Event wiring
function setupProductForm() {
  const form = document.getElementById("product-form");
  if (!form) return;

  const fileInput = document.getElementById("product-image-file");

  fileInput?.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (!file) {
      uploadedImageData = null;
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      uploadedImageData = reader.result;
      document.getElementById("product-image").value = file.name;
    };
    reader.readAsDataURL(file);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const idInput = document.getElementById("product-id");
    const name = document.getElementById("product-name").value.trim();
    const price = Number(document.getElementById("product-price").value);
    const oldPrice = Number(document.getElementById("product-old-price").value);
    const category = document.getElementById("product-category").value;
    const vibe = document.getElementById("product-vibe").value;
    const tags = document
      .getElementById("product-tags")
      .value.split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const image =
      uploadedImageData ||
      document.getElementById("product-image").value.trim();

    const products = getProducts();
    const existingId = idInput.value;
    if (existingId) {
      const idx = products.findIndex((p) => String(p.id) === existingId);
      if (idx >= 0) {
        products[idx] = {
          ...products[idx],
          name,
          price,
          oldPrice,
          category,
          vibe,
          tags,
          image,
        };
      }
    } else {
      const nextId = Math.max(0, ...products.map((p) => Number(p.id))) + 1;
      products.push({
        id: nextId,
        name,
        price,
        oldPrice,
        category,
        vibe,
        tags,
        image,
      });
    }

    setProducts(products);
    resetProductForm();
  });

  document.getElementById("product-cancel")?.addEventListener("click", resetProductForm);
}

function setupOfferForm() {
  const form = document.getElementById("offer-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const offers = getOffers();
    const indexStr = document.getElementById("offer-index").value;
    const title = document.getElementById("offer-title").value.trim();
    const description = document.getElementById("offer-desc").value.trim();
    const price = Number(document.getElementById("offer-price").value);
    const oldPrice = Number(document.getElementById("offer-old-price").value);
    const code = document.getElementById("offer-code").value.trim();
    const extra = document.getElementById("offer-extra").value.trim();

    const payload = { title, description, price, oldPrice, code, extra };

    if (indexStr !== "") {
      offers[Number(indexStr)] = payload;
    } else {
      offers.push(payload);
    }

    setOffers(offers);
    resetOfferForm();
  });

  document.getElementById("offer-cancel")?.addEventListener("click", resetOfferForm);
}

function setupTableActions() {
  const productsTable = document.getElementById("products-table");
  const offersTable = document.getElementById("offers-table");

  productsTable?.addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-edit]");
    const deleteBtn = e.target.closest("[data-delete]");
    const products = getProducts();

    if (editBtn) {
      const id = editBtn.getAttribute("data-edit");
      const product = products.find((p) => String(p.id) === id);
      if (product) {
        document.getElementById("product-id").value = product.id;
        document.getElementById("product-name").value = product.name;
        document.getElementById("product-price").value = product.price;
        document.getElementById("product-old-price").value = product.oldPrice;
        document.getElementById("product-category").value = product.category;
        document.getElementById("product-vibe").value = product.vibe;
        document.getElementById("product-tags").value = (product.tags || []).join(", ");
        document.getElementById("product-image").value = product.image || "";
        const fileInput = document.getElementById("product-image-file");
        if (fileInput) fileInput.value = "";
        uploadedImageData = null;
        document.getElementById("product-submit").textContent = "Update product";
      }
    }

    if (deleteBtn) {
      const id = deleteBtn.getAttribute("data-delete");
      const filtered = products.filter((p) => String(p.id) !== id);
      setProducts(filtered);
      resetProductForm();
    }
  });

  offersTable?.addEventListener("click", (e) => {
    const editBtn = e.target.closest("[data-edit-offer]");
    const deleteBtn = e.target.closest("[data-delete-offer]");
    const offers = getOffers();

    if (editBtn) {
      const index = Number(editBtn.getAttribute("data-edit-offer"));
      const offer = offers[index];
      if (offer) {
        document.getElementById("offer-index").value = index;
        document.getElementById("offer-title").value = offer.title;
        document.getElementById("offer-desc").value = offer.description;
        document.getElementById("offer-price").value = offer.price;
        document.getElementById("offer-old-price").value = offer.oldPrice;
        document.getElementById("offer-code").value = offer.code;
        document.getElementById("offer-extra").value = offer.extra || "";
        document.getElementById("offer-submit").textContent = "Update offer";
      }
    }

    if (deleteBtn) {
      const index = Number(deleteBtn.getAttribute("data-delete-offer"));
      offers.splice(index, 1);
      setOffers(offers);
      resetOfferForm();
    }
  });
}

function setupResetButtons() {
  document.getElementById("reset-products")?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.products);
    renderProductsTable();
    resetProductForm();
  });

  document.getElementById("clear-products")?.addEventListener("click", () => {
    setProducts([]);
    resetProductForm();
  });

  document.getElementById("reset-offers")?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.offers);
    renderOffersTable();
  });

  document.getElementById("clear-offers")?.addEventListener("click", () => {
    setOffers([]);
    resetOfferForm();
  });

  document.getElementById("reset-analytics")?.addEventListener("click", resetAnalytics);
}

function init() {
  renderAnalytics();
  renderProductsTable();
  renderOffersTable();
  setupProductForm();
  setupOfferForm();
  setupTableActions();
  setupResetButtons();
}

document.addEventListener("DOMContentLoaded", init);

