window.SITE_CONFIG = {
  "brand": "The Weekend Bite",
  "city": "Torino",
  "phone": "+39 320 177 5661",
  "wa": "https://wa.me/393201775661?text=",
  "delivery": {
    "minKg": 1,
    "fee": 2,
    "window": "Weekend"
  },
  "items": [
    {
      "key": "tawook",
      "price": 16,
      "img": "assets/img/tawook_wide.webp",
      "name_en": "Red Shish Tawook",
      "name_it": "Shish Tawook Rosso",
      "desc_en": "Marinated chicken with lemon & garlic taste.",
      "desc_it": "Pollo marinato al gusto di limone e aglio."
    },
    {
      "key": "shawarma",
      "price": 18,
      "img": "assets/img/placeholder.svg",
      "name_en": "Lebanese Shawarma",
      "name_it": "Shawarma Libanese",
      "desc_en": "Marinated Chicken with special lebanese spices.",
      "desc_it": "Pollo marinato con spezie libanesi speciali."
    },
    {
      "key": "fajita",
      "price": 20,
      "img": "assets/img/fajita_wide.webp",
      "name_en": "Lebanese Fajita",
      "name_it": "Fajita Libanese",
      "desc_en": "Marinated Chicken with mixed bell-pepper, corn & Lebanese spices.",
      "desc_it": "Pollo marinato con peperoni misti, mais e spezie libanesi."
    },
    {
      "key": "francisco",
      "price": 18,
      "img": "assets/img/placeholder.svg",
      "name_en": "Francisco",
      "name_it": "Francisco",
      "desc_en": "Herbed Marinated Chicken with special lebanese spices.",
      "desc_it": "Pollo marinato alle erbe con speciali spezie libanesi."
    }
  ]
};

window.SITE_STATUS = {
  vacation: false, // change to true to enable vacation mode
  vacationPage: "vacation.html"
};

/* ---------------------------
   Payment config (Revolut/Satispay)
   Used by the payment buttons on Order page
--------------------------- */
window.PAY = {
  currency: 'EUR',

  // TODO: put your real handles here
  revolutUser: 'ibrahip44g',    // e.g. revolut.me/yourrevolut
  satispayTag: 'd1ef756d-148f-4a18-90f5-15d5faa52362',   // e.g. tag.satispay.com/yoursatispay

  // URL templates — keep {amount}, {user}, {tag}, {cur}
  templates: {
    // Most personal Revolut links support the path format below:
    revolut: 'https://revolut.me/ibrahip44g/{amount}?currency={cur}',
    // If your link uses a query format, use this instead:
    // revolut: 'https://revolut.me/{user}?amount={amount}&currency={cur}',

    // Satispay tag link (adjust to satispay.me if your account uses that)
    satispay: 'https://tag.satispay.com/d1ef756d-148f-4a18-90f5-15d5faa52362?amount={amount}'
    // satispay: 'https://satispay.me/{tag}?amount={amount}'
  }
};

