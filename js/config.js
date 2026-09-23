/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Gatsby Coffee Company",
    suffix: ".",
    tagline: "Cozy Cafe & Specialty Coffee",
    description: "Gatsby Coffee Company offers specialty coffee, artisanal beverages, hot chocolate, and delicious food in a lush, cozy setting in Civil Lines, Delhi.",
    keywords: "Gatsby Coffee Company, specialty coffee, cafe in Civil Lines, Delhi cafe, hot chocolate, matcha latte, cold foam latte, gourmet food",
    themeColor: "#1b382b",
    domain: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmroWtTvR6mT9avzB43X45Ik-rG_5GQzwtFiDwa9nwnzXab0LAo7FcuOtFzx_hVGnz9jkBf6irowGRFqMS6HPDSkh6T826AVJR12RCIFR3RAO6rSl7NMKoA5caGRmaeTR6bxsz4L6zPigFj=s680-w680-h510-rw",
    faviconEmoji: "☕",
    whatsappNumber: "919811848760"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d1813",
      bgCard: "#14261e",
      bgLight: "#1e382b",
      primary: "#d4af37",
      primaryHover: "#f3e5ab",
      text: "#e8edea",
      textMuted: "#a2b5ab",
      accent: "#224233"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Civil Lines, Delhi",
    title: "A Cozy Sanctuary for Coffee Lovers & Foodies",
    description: "Step into Gatsby Coffee Company—surrounded by lush greenery and timeless charm. Indulge in artisanal brews, viral hot chocolates, and freshly prepared kitchen favorites.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmroWtTvR6mT9avzB43X45Ik-rG_5GQzwtFiDwa9nwnzXab0LAo7FcuOtFzx_hVGnz9jkBf6irowGRFqMS6HPDSkh6T826AVJR12RCIFR3RAO6rSl7NMKoA5caGRmaeTR6bxsz4L6zPigFj=s680-w680-h510-rw",
    stats: [
      { value: "100%", label: "Specialty Arabica" },
      { value: "4.8 ★", label: "Guest Rating" },
      { value: "10 AM - 10:30 PM", label: "Open Daily" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "A Cozy Escape with Great Coffee & Warm Ambience",
    paragraphs: [
      "Nestled in Civil Lines, Gatsby Coffee Company offers a tranquil garden backdrop and an aesthetic interior perfect for catching up with friends, relaxing with a book, or enjoying a delicious meal.",
      "From handcrafted Cold Foam Lattes and ceremonial Matcha to our viral signature Hot Chocolate and gourmet pizzas, every menu item is crafted with passion and precision."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnNE8juftNpXKzVGQG1Z4ZFDh8BtigkFG5cUPDEp-gkNgfpfKm5rjJPcoGhjT82qKz7WofOF187qkwsLxlN5iBa26f8gIMfhWCCTcJVoJODHaJ6kcizVNZuMribigYbHsN8KToT3KHMjpv=s680-w680-h510-rw",
    imageAlt: "Gatsby Coffee Company serene interior and garden backdrop",
    experienceValue: "5★",
    experienceLabel: "Aesthetic Experience"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Gatsby's Favourites",
    title: "Most Loved Specials",
    badge: "Must Try",
    description: "Popular handcrafted coffee creations and rich chocolate beverages loved by our guests.",
    items: [
      {
        badge: "Viral Favourite",
        img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=600",
        alt: "Gatsby Signature Hot Chocolate",
        diet: "veg",
        title: "Signature Hot Chocolate",
        price: "₹270",
        desc: "Rich, velvety, and balanced perfectly between chocolatey richness and subtle sweetness."
      },
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        alt: "Vietnamese Coffee",
        diet: "veg",
        title: "Vietnamese Coffee",
        price: "₹270",
        desc: "Bold dark roast coffee slow-dripped over sweetened condensed milk for a rich, aromatic kick."
      },
      {
        badge: "Trending",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        alt: "Strawberry Matcha Latte",
        diet: "veg",
        title: "Strawberry Matcha Latte",
        price: "₹290",
        desc: "Premium Uji matcha poured over house-made strawberry puree and cold milk layer."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Special Deals",
    title: "Current Offers",
    items: [
      {
        tag: "MORNING BREW",
        tagTitle: "Early Bird Coffee",
        desc: "Enjoy 10% off on all Cold Foam Lattes ordered between 10:00 AM – 12:00 PM.",
        code: "GATSBY10",
        highlight: false
      },
      {
        tag: "GATSBY COMBO",
        tagTitle: "Pizza & Hot Chocolate Combo",
        desc: "Pair any gourmet pizza with our viral Signature Hot Chocolate for a special bundled price.",
        code: "HOTPIZZA",
        highlight: true
      },
      {
        tag: "MATCHA HOURS",
        tagTitle: "Matcha Experience",
        desc: "Get 15% off any Matcha variant when you order a food item.",
        code: "MATCHA15",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Complete Menu",
    title: "Handcrafted Coffee, Coolers & Beverages",
    pdfUrl: "assets/gatsby-menu.pdf",
    pdfFilename: "Gatsby_Coffee_Company_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "classics", label: "Classics", active: false },
      { id: "coldfoam", label: "Cold Foam Latte", active: false },
      { id: "notjustcoffee", label: "Not Just Coffee", active: false },
      { id: "coolers", label: "Summer Coolers", active: false }
    ],
    items: [
      // --- CLASSICS ---
      {
        category: "classics",
        img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600",
        title: "Espresso",
        price: "₹160",
        diet: "veg",
        desc: "Concentrated shot of rich, dark Arabica coffee brewed under intense pressure.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "classics",
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        title: "Americano",
        price: "₹190",
        diet: "veg",
        desc: "Espresso diluted with hot water for a smooth, clean black coffee experience.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "classics",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57Tzwz9yHzclibBce5p8qN5RQS32FBGoQK_60IJMyKA&s=10",
        title: "Cappuccino",
        price: "₹210",
        diet: "veg",
        desc: "Equal parts espresso, steamed milk, and dense silky milk foam.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "classics",
        img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600",
        title: "Latte",
        price: "₹230",
        diet: "veg",
        desc: "Smooth espresso paired with generous steamed milk and a thin layer of microfoam.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "classics",
        img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600",
        title: "Flat White",
        price: "₹240",
        diet: "veg",
        desc: "Double shot espresso poured under velvety micro-foamed hot milk.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "classics",
        img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=600",
        title: "Mocha Latte",
        price: "₹270",
        diet: "veg",
        desc: "Rich espresso combined with decadent chocolate sauce and steamed milk.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "classics",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        title: "Cold Coffee",
        price: "₹260",
        badge: "Gatsby's Favourite",
        diet: "veg",
        desc: "Classic chilled coffee blended with milk and sugar, served cold over ice.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "classics",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600",
        title: "Vietnamese Coffee",
        price: "₹270",
        badge: "Gatsby's Favourite",
        diet: "veg",
        desc: "Traditional dark roast coffee with sweet condensed milk served hot or over ice.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "classics",
        img: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&q=80&w=600",
        title: "Affogato",
        price: "₹280",
        badge: "Gatsby's Favourite",
        diet: "veg",
        desc: "A scoop of rich vanilla ice cream topped with a fresh hot espresso shot.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },

      // --- COLD FOAM LATTE ---
      {
        category: "coldfoam",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600",
        title: "Caramel Sea Salt Latte",
        price: "₹270",
        diet: "veg",
        desc: "Iced espresso latte layered with buttery caramel and topped with salted cold foam.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "coldfoam",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        title: "Brown Sugar Shaken espresso",
        price: "₹270",
        badge: "Gatsby's Favourite",
        diet: "veg",
        desc: "Espresso shaken with brown sugar and ice, crowned with a rich creamy cold foam.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "coldfoam",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_VzOp_DzJKi168uNvMCjBcxfloPwAfuVH4npAQRUEg&s=10",
        title: "Vanilla Sweet Cream",
        price: "₹270",
        diet: "veg",
        desc: "Cold brew coffee mixed with vanilla syrup and topped with house-made sweet cream.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "coldfoam",
        img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600",
        title: "Tiramisu Latte",
        price: "₹290",
        badge: "Gatsby's Favourite",
        diet: "veg",
        desc: "Italian tiramisu flavored iced coffee topped with mascarpone cold foam and cocoa dusting.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },

      // --- NOT JUST COFFEE ---
      {
        category: "notjustcoffee",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        title: "Matcha Latte",
        price: "₹230",
        diet: "veg",
        desc: "Ceremonial Japanese green tea matcha whisked with steamed or cold milk.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "notjustcoffee",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        title: "Mango Matcha Latte",
        price: "₹290",
        badge: "Gatsby's Favourite",
        diet: "veg",
        desc: "Fresh mango puree layered under cold milk and Japanese ceremonial matcha.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "notjustcoffee",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600",
        title: "Strawberry Matcha Latte",
        price: "₹290",
        diet: "veg",
        desc: "House-made strawberry reduction layered under silky milk and whisked matcha.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "notjustcoffee",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
        title: "Coconut Cloud Matcha",
        price: "₹310",
        diet: "veg",
        desc: "Light coconut water and milk base topped with a whipped matcha cloud foam.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "notjustcoffee",
        img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
        title: "Berry Smoothie",
        price: "₹310",
        diet: "veg",
        desc: "Blended mixed wild berries, yogurt, and honey for a fresh antioxidants boost.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "notjustcoffee",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        title: "Oreo Milkshake",
        price: "₹250",
        diet: "veg",
        desc: "Creamy vanilla milk shake blended with crunchy Oreo cookies and chocolate drizzle.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "notjustcoffee",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        title: "Chocolate Milkshake",
        price: "₹210",
        diet: "veg",
        desc: "Classic rich chocolate milkshake topped with whipped cream.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "notjustcoffee",
        img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600",
        title: "Classic Chai",
        price: "₹180",
        diet: "veg",
        desc: "Aromatic Indian milk tea spiced with ginger, cardamom, and herbs.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "notjustcoffee",
        img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=600",
        title: "Hot Chocolate",
        price: "₹270",
        badge: "Gatsby's Favourite",
        diet: "veg",
        desc: "Indulgent house specialty thick hot chocolate topped with cocoa powder.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },

      // --- SUMMER COOLERS ---
      {
        category: "coolers",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        title: "Virgin Mojito",
        price: "₹180",
        diet: "veg",
        desc: "Refreshing cooler with muddled fresh mint leaves, lime juice, and sparkling soda.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "coolers",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        title: "Orange & Kaffir Lime",
        price: "₹180",
        diet: "veg",
        desc: "Zesty orange juice infused with fragrant kaffir lime leaves and crushed ice.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "coolers",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        title: "Mango & Jalapeno",
        price: "₹180",
        diet: "veg",
        desc: "Sweet mango nectar with a subtle fiery twist of fresh jalapeno and soda.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      },
      {
        category: "coolers",
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600",
        title: "Lemon Iced Tea",
        price: "₹180",
        diet: "veg",
        desc: "Chilled brewed black tea infused with fresh lemon squeeze and mint.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
      }
    ],
    addons: [
      { name: "Oat Milk / Almond Milk", price: "₹76/-" },
      { name: "Vanilla, Caramel, Hazelnut Flavour", price: "₹40/-" }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Guest Experiences",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"As of now, for the price I have paid, I never tasted a better pizza. I am in love with their food, and as I read a lot of comments about their portions being small, maybe it is the case for other menu options, but we ordered pan cakes, pizza and 2 hot chocolates for 2 people and we didn't eat anything else for the whole day, it was extremely filling. The pizza tasted so fresh, all the flavours popped so well, the base was aptly baked not too crispy, not too soft and the sauce is to vouch for... Also, I tried hot chocolate from quite a few places and tbvh it always tasted a lot sugary than chocolaty but their hot chocolate was nothing like that, it had apt sugar and chocolate taste to actually taste like a hot chocolate.\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Tiya",
        role: "Local Guide · 7 reviews"
      },
      {
        stars: 4,
        text: "\"Gatsby Coffee Company is a cozy little place with good food. I had the Hot Girl Pasta, a classic Margherita Pizza, Truffle Fries and their viral Hot Chocolate. The food was great, a solid 9/10 however i was disappointed with the service. Granted i went during peak season but there was i wasn't attended to properly and had to ask them again and again if i wanted something. The ambience is great, perfect aesthetics. The experience might be better during non-rush hours.\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Twinkle",
        role: "Local Guide · 46 reviews"
      },
      {
        stars: 5,
        text: "\"The cafe is cosy and warm. Their coffees are actually good. We had their cappuccino and Vietnamese coffee, it was really good. The cafe is surrounded by lush plants and a beautiful backyard garden view which is a private property. Their Matilda cake was average but everything else was totally delicious. Definitely going back again.\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Kanchan Goswami",
        role: "Local Guide · 64 reviews"
      }
    ],
    googleCta: {
      title: "Enjoyed your time at Gatsby Coffee Company?",
      desc: "Help others discover our cozy garden ambience by leaving a review on Google!",
      url: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Journey",
    title: "Life Inside Gatsby Coffee Co.",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmjVrO8SV67EQXXq9fq94QwvNsIhGqkvUcflYJgS1Wk7RH_lCB3QPOqs4UIR1xznQQuhuqjfE3CeI2dkEvM-gDyBDlZAlS3schMFVDfYKZYfu5Abphe3XSTB8E7NBghrbW7Gej_nW0hI0p9=w141-h236-n-k-no-nu", alt: "Gatsby Cafe Green Interior Aesthetics" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnVmsY9IBM7Inm0S_AJLVLj05SUVC-odPrwHlCVyyTr9-SmJktebLpeDEsDCB45ISqBomDZoEUBElxSs22Rs7bjogZQEuIHzzVyV2gtfgoRYAN-zUOQLiDjxEDGRbE1_9D0HO5KXN0jlCFI=w141-h177-n-k-no-nu", alt: "Gatsby Coffee Beverage Presentation" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn8CsrW53K-W9ssdYDXVix-ZLY-DWlUcfhgytQRWwaEZYLU5W4S0EujGNA5aSj8kUqgnFZ-9bBbsGYoWtpoF5EZ8AAxHPA06Dx6ZUpahqkZ9t5yvWMXRdgRotnMf9a5V3ipAzBEzu1fuzQK=w141-h177-n-k-no-nu", alt: "Gatsby Garden View Corner" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlriZh5oEOEDupLHJMT3t1QeJgCZhrldEVBH-bxWFEcJHtQcNUy_McI6Uiqq9XRB_i2g_rzn6uifPUJd6H_h5FdNzCSb4sepK19KGl2lIyKvzFlw6H2LSMvt0RP10kki50TPRafSpzwQa61=w141-h236-n-k-no-nu", alt: "Specialty Cold Drink at Gatsby" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Hours",
    title: "Visit Gatsby Coffee Company",
    description: "Nestled in Civil Lines, Delhi, our cafe offers a peaceful retreat with cozy indoor seating and lush garden views.",
    address: "24, Sham Nath Marg, Civil Lines, Delhi, 110054",
    hours: [
      "Monday: 10:00 AM – 10:30 PM",
      "Tuesday: 10:00 AM – 10:30 PM",
      "Wednesday: 9:00 AM – 10:30 PM",
      "Thursday: 10:00 AM – 10:30 PM",
      "Friday: 10:00 AM – 10:30 PM",
      "Saturday: 10:00 AM – 10:30 PM",
      "Sunday: 10:00 AM – 10:30 PM"
    ],
    email: "info@gatsbycoffee.com",
    phone: "+91 9811848760",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2878482937!2d77.2238051!3d28.6810222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd034ad5a1d9%3A0xb3cf2bc2b55b252b!2sSham%20Nath%20Marg%2C%20Civil%20Lines%2C%20Delhi%2C%20110054!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Gatsby Coffee Company - Delivering exceptional coffee, viral hot chocolate, and delicious food in Civil Lines, Delhi.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/gatsbycoffeecompany?stkn=MWRtb21uc3gyYXdudw==", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/ncr/gatsby-coffee-company-civil-lines-new-delhi?amp=1", iconClass: "ph-fork-knife" }
    ],
    copyright: "© 2026 Gatsby Coffee Company. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Gatsby_Guest_WiFi",
    password: "gatsbycoffee"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
