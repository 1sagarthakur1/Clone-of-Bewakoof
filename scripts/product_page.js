


var cartItems = JSON.parse(localStorage.getItem("cart")) || [];


  obj = [
  {
      mainImg:
        "https://images.bewakoof.com/t320/metal-gear-blue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359423-1620679508.jpg",
      name: `Metal Gear Blue Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` ,
    },
      {
      mainImg:
        "https://images.bewakoof.com/t320/naru-xiaomi-redmi-9-power-mobile-cover-471235-1643961747-1.jpg",
      name: `Naru Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` },
    
      {
      mainImg:
        "https://images.bewakoof.com/t320/quirky-camou-xiaomi-redmi-9-power-mobile-cover-472315-1643643842-1.jpg",
      name: `Quirky Camou Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mickey-dl-hyperprint-camou-xiaomi-redmi-9-power-mobile-cover-472170-1643643806-1.jpg",
      name: `Mickey(DL) Hyperprint Camou Xiaomi Redmi 9 Power M.. `,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/venom-xiaomi-redmi-9-power-mobile-cover-spl-xiaomi-redmi-9-power-mobile-covers-345494-1620679431.jpg",
      name: `Venom Xiaomi Redmi 9 Power Mobile Covers(SPL)`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/comic-page-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-345496-1620679434.jpg",
      name: 'Comic Page Xiaomi Redmi 9 Power Mobile Covers (AVL)',
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/discover-new-places-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-345497-1620679435.jpg",
      name: `Discover New Places Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/whatever-it-takes-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347137-1617878828.jpg",
      name: `Whatever It Takes Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mask-man-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347145-1617878839.jpg",
      name: `Mask Man Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/they-know-the-way-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347139-1617878831.jpg",
      name: `They Know The Way Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/risky-ishq-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347140-1620679406.jpg",
      name: `Risky Ishq Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/bong-connection-doodle-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346570-1620679443.jpg",
      name: `Bong Connection Doodle Xiaomi Redmi 9 Power Mobile..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/batman-rogue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346577-1620679451.jpg",
      name: `Batman Rogue Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/joint-family-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347087-1620679343.jpg",
      name: `Joint Family Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/cool-sporty-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346580-1620679453.jpg",
      name: `Cool Sporty Xiaomi Redmi 9 Power Mobile Covers`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/wasnt-me-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359425-1620679515.jpg",
      name: `Wasnt Me Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/no-excuses-stripe-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359415-1620679491.jpg",
      name: `No Excuses Stripe Xiaome Redmi 9 Power Mobile`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/spiderman-red-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-347154-1617878851.jpg",
      name: `Spiderman Red Xiaomi Redmi 9 Power Mobile Cover(A..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` },
      {
      mainImg:
        "https://images.bewakoof.com/t320/metal-gear-blue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359423-1620679508.jpg",
      name: `Metal Gear Blue Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` },
      {
      mainImg:
        "https://images.bewakoof.com/t320/naru-xiaomi-redmi-9-power-mobile-cover-471235-1643961747-1.jpg",
      name: `Naru Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` },
    
      {
      mainImg:
        "https://images.bewakoof.com/t320/quirky-camou-xiaomi-redmi-9-power-mobile-cover-472315-1643643842-1.jpg",
      name: `Quirky Camou Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mickey-dl-hyperprint-camou-xiaomi-redmi-9-power-mobile-cover-472170-1643643806-1.jpg",
      name: `Mickey(DL) Hyperprint Camou Xiaomi Redmi 9 Power M.. `,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/venom-xiaomi-redmi-9-power-mobile-cover-spl-xiaomi-redmi-9-power-mobile-covers-345494-1620679431.jpg",
      name: `Venom Xiaomi Redmi 9 Power Mobile Covers(SPL)`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/comic-page-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-345496-1620679434.jpg",
      name: 'Comic Page Xiaomi Redmi 9 Power Mobile Covers (AVL)',
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/discover-new-places-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-345497-1620679435.jpg",
      name: `Discover New Places Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/whatever-it-takes-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347137-1617878828.jpg",
      name: `Whatever It Takes Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mask-man-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347145-1617878839.jpg",
      name: `Mask Man Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/they-know-the-way-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347139-1617878831.jpg",
      name: `They Know The Way Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/risky-ishq-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347140-1620679406.jpg",
      name: `Risky Ishq Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/bong-connection-doodle-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346570-1620679443.jpg",
      name: `Bong Connection Doodle Xiaomi Redmi 9 Power Mobile..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/batman-rogue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346577-1620679451.jpg",
      name: `Batman Rogue Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/joint-family-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347087-1620679343.jpg",
      name: `Joint Family Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/cool-sporty-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346580-1620679453.jpg",
      name: `Cool Sporty Xiaomi Redmi 9 Power Mobile Covers`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/wasnt-me-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359425-1620679515.jpg",
      name: `Wasnt Me Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/no-excuses-stripe-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359415-1620679491.jpg",
      name: `No Excuses Stripe Xiaome Redmi 9 Power Mobile`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/spiderman-red-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-347154-1617878851.jpg",
      name: `Spiderman Red Xiaomi Redmi 9 Power Mobile Cover(A..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` },
      {
      mainImg:
        "https://images.bewakoof.com/t320/metal-gear-blue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359423-1620679508.jpg",
      name: `Metal Gear Blue Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` },
      {
      mainImg:
        "https://images.bewakoof.com/t320/naru-xiaomi-redmi-9-power-mobile-cover-471235-1643961747-1.jpg",
      name: `Naru Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` },
    
      {
      mainImg:
        "https://images.bewakoof.com/t320/quirky-camou-xiaomi-redmi-9-power-mobile-cover-472315-1643643842-1.jpg",
      name: `Quirky Camou Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mickey-dl-hyperprint-camou-xiaomi-redmi-9-power-mobile-cover-472170-1643643806-1.jpg",
      name: `Mickey(DL) Hyperprint Camou Xiaomi Redmi 9 Power M.. `,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/venom-xiaomi-redmi-9-power-mobile-cover-spl-xiaomi-redmi-9-power-mobile-covers-345494-1620679431.jpg",
      name: `Venom Xiaomi Redmi 9 Power Mobile Covers(SPL)`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/comic-page-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-345496-1620679434.jpg",
      name: 'Comic Page Xiaomi Redmi 9 Power Mobile Covers (AVL)',
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/discover-new-places-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-345497-1620679435.jpg",
      name: `Discover New Places Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/whatever-it-takes-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347137-1617878828.jpg",
      name: `Whatever It Takes Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mask-man-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347145-1617878839.jpg",
      name: `Mask Man Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/they-know-the-way-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347139-1617878831.jpg",
      name: `They Know The Way Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/risky-ishq-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347140-1620679406.jpg",
      name: `Risky Ishq Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/bong-connection-doodle-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346570-1620679443.jpg",
      name: `Bong Connection Doodle Xiaomi Redmi 9 Power Mobile..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/batman-rogue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346577-1620679451.jpg",
      name: `Batman Rogue Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/joint-family-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347087-1620679343.jpg",
      name: `Joint Family Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/cool-sporty-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346580-1620679453.jpg",
      name: `Cool Sporty Xiaomi Redmi 9 Power Mobile Covers`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/wasnt-me-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359425-1620679515.jpg",
      name: `Wasnt Me Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/no-excuses-stripe-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359415-1620679491.jpg",
      name: `No Excuses Stripe Xiaome Redmi 9 Power Mobile`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/spiderman-red-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-347154-1617878851.jpg",
      name: `Spiderman Red Xiaomi Redmi 9 Power Mobile Cover(A..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` },
      {
      mainImg:
        "https://images.bewakoof.com/t320/metal-gear-blue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359423-1620679508.jpg",
      name: `Metal Gear Blue Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` },
      {
      mainImg:
        "https://images.bewakoof.com/t320/naru-xiaomi-redmi-9-power-mobile-cover-471235-1643961747-1.jpg",
      name: `Naru Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` },
    
      {
      mainImg:
        "https://images.bewakoof.com/t320/quirky-camou-xiaomi-redmi-9-power-mobile-cover-472315-1643643842-1.jpg",
      name: `Quirky Camou Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mickey-dl-hyperprint-camou-xiaomi-redmi-9-power-mobile-cover-472170-1643643806-1.jpg",
      name: `Mickey(DL) Hyperprint Camou Xiaomi Redmi 9 Power M.. `,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/venom-xiaomi-redmi-9-power-mobile-cover-spl-xiaomi-redmi-9-power-mobile-covers-345494-1620679431.jpg",
      name: `Venom Xiaomi Redmi 9 Power Mobile Covers(SPL)`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/comic-page-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-345496-1620679434.jpg",
      name: 'Comic Page Xiaomi Redmi 9 Power Mobile Covers (AVL)',
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/discover-new-places-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-345497-1620679435.jpg",
      name: `Discover New Places Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/whatever-it-takes-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347137-1617878828.jpg",
      name: `Whatever It Takes Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mask-man-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347145-1617878839.jpg",
      name: `Mask Man Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/they-know-the-way-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347139-1617878831.jpg",
      name: `They Know The Way Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/risky-ishq-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347140-1620679406.jpg",
      name: `Risky Ishq Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/bong-connection-doodle-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346570-1620679443.jpg",
      name: `Bong Connection Doodle Xiaomi Redmi 9 Power Mobile..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/batman-rogue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346577-1620679451.jpg",
      name: `Batman Rogue Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/joint-family-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347087-1620679343.jpg",
      name: `Joint Family Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/cool-sporty-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346580-1620679453.jpg",
      name: `Cool Sporty Xiaomi Redmi 9 Power Mobile Covers`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/wasnt-me-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359425-1620679515.jpg",
      name: `Wasnt Me Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/no-excuses-stripe-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359415-1620679491.jpg",
      name: `No Excuses Stripe Xiaome Redmi 9 Power Mobile`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/spiderman-red-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-347154-1617878851.jpg",
      name: `Spiderman Red Xiaomi Redmi 9 Power Mobile Cover(A..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` },
      {
      mainImg:
        "https://images.bewakoof.com/t320/metal-gear-blue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359423-1620679508.jpg",
      name: `Metal Gear Blue Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` },
      {
      mainImg:
        "https://images.bewakoof.com/t320/naru-xiaomi-redmi-9-power-mobile-cover-471235-1643961747-1.jpg",
      name: `Naru Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` },
    
      {
      mainImg:
        "https://images.bewakoof.com/t320/quirky-camou-xiaomi-redmi-9-power-mobile-cover-472315-1643643842-1.jpg",
      name: `Quirky Camou Xiaomi Redmi 9 Power Mobile Cover`,
      price: "299",
      strikeOffPrice: "499",
      stock: "",
      offer: `279 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mickey-dl-hyperprint-camou-xiaomi-redmi-9-power-mobile-cover-472170-1643643806-1.jpg",
      name: `Mickey(DL) Hyperprint Camou Xiaomi Redmi 9 Power M.. `,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/venom-xiaomi-redmi-9-power-mobile-cover-spl-xiaomi-redmi-9-power-mobile-covers-345494-1620679431.jpg",
      name: `Venom Xiaomi Redmi 9 Power Mobile Covers(SPL)`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/comic-page-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-345496-1620679434.jpg",
      name: 'Comic Page Xiaomi Redmi 9 Power Mobile Covers (AVL)',
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/discover-new-places-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-345497-1620679435.jpg",
      name: `Discover New Places Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/whatever-it-takes-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347137-1617878828.jpg",
      name: `Whatever It Takes Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/mask-man-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347145-1617878839.jpg",
      name: `Mask Man Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/they-know-the-way-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347139-1617878831.jpg",
      name: `They Know The Way Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/risky-ishq-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347140-1620679406.jpg",
      name: `Risky Ishq Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/bong-connection-doodle-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346570-1620679443.jpg",
      name: `Bong Connection Doodle Xiaomi Redmi 9 Power Mobile..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/batman-rogue-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346577-1620679451.jpg",
      name: `Batman Rogue Xiaomi Redmi 9 Power Mobile Cover`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/joint-family-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-347087-1620679343.jpg",
      name: `Joint Family Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/cool-sporty-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-346580-1620679453.jpg",
      name: `Cool Sporty Xiaomi Redmi 9 Power Mobile Covers`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/wasnt-me-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359425-1620679515.jpg",
      name: `Wasnt Me Xiaomi Redmi 9 Power Mobile Covers`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/no-excuses-stripe-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-359415-1620679491.jpg",
      name: `No Excuses Stripe Xiaome Redmi 9 Power Mobile`,
      price: "199",
      strikeOffPrice: "499",
      stock: "",
      offer: `179 For TriBe Members` }
      ,
      {
      mainImg:
        "https://images.bewakoof.com/t320/spiderman-red-xiaomi-redmi-9-power-mobile-cover-avl-xiaomi-redmi-9-power-mobile-covers-347154-1617878851.jpg",
      name: `Spiderman Red Xiaomi Redmi 9 Power Mobile Cover(A..`,
      price: "249",
      strikeOffPrice: "499",
      stock: "",
      offer: `229 For TriBe Members` },
    ]
    
    var L = obj.length 
   count  = document.querySelector("#count") ;
   count.innerText = L ;
   
   
    
       obj.map(function(item){
        productDiv = document.createElement("div") ;
        productDiv.setAttribute("id","productMat");
       productDiv.addEventListener("click",function(){
         bookingPage(item)
       })




        img = document.createElement("img");
        img.src = item.mainImg
        h3 = document.createElement("h3") ;
        h3.innerText = item.name ;
        h3.style.fontSize = "16px"
        span = document.createElement("span");
        span.innerText = "₹"
        // span.setAttribute("id","strikeOf") ;
        b =  document.createElement("b") ;
        b.innerText = item.price ;
        span.append(b) ;

        span2 = document.createElement("span") ;
        span2.setAttribute("class" ,"priceOf") ;
        span2.innerText = item.strikeOffPrice
        
        offerDiv = document.createElement("div") ;
        offerDiv.setAttribute("id","offerDiv")
        offerDiv.innerText = item.offer ;
        offerDiv.style.backgroundColor = "#f4f4f4" ;

        // button = document.createElement("button")
        // button.innerText = "Add To Cart" ;
        // button.addEventListener("click",function(){
        //   localStoreItem(item)
        // })



        productDiv.append(img,h3,span,span2,offerDiv)
        document.querySelector("#product_container").append(productDiv)
       })

       function localStoreItem(item){
         cartItems.push(item)
        //  console.log(cartItems)
         event.target.innerText = "Item Added" ;
         localStorage.setItem("cart",JSON.stringify(cartItems))
       }

       function bookingPage(ele){
    var bookingItem=[];
    bookingItem.push(ele)
    localStorage.setItem('bookItem',JSON.stringify(bookingItem))
    window.location.href = "mobileproductPage.html";
  }
        
       

