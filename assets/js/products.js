const PRODUCTS = [
    {
        id: 1,
        name: "Premium Dog Food",
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800",
        price: 1200,
        rating: 4.5,
        category: "Food",
        description: "Premium quality dog food specially formulated for balanced nutrition and healthy growth.\nRich in essential proteins, vitamins, and minerals to support strong immunity.\nHelps improve digestion and maintains a healthy weight for active dogs.\nMade with high-quality natural ingredients ensuring safe daily consumption.\nPerfect choice for long-term health, energy, and overall well-being."
    },
    {
        id: 2,
        name: "Cat Dry Food",
        image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80",
        price: 900,
        rating: 4.2,
        category: "Food",
        description: "Advanced dry food designed to meet complete nutritional needs of cats.\nEnriched with essential nutrients for strong bones and healthy muscles.\nSupports shiny coat, better digestion, and improved immunity system.\nCarefully balanced recipe for daily feeding and long-term health.\nTrusted formula ensuring your cat stays active and happy every day."
    },
    {
        id: 3,
        name: "Cat Toy Ball",
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800",
        price: 700,
        rating: 4.2,
        category: "Food",
        description: "Nutritious rabbit food blend formulated for healthy growth and digestion.\nRich in fiber to support digestive system balance.\nProvides essential vitamins for strong immunity and energy.\nMade from high-quality natural ingredients.\nIdeal daily diet for active and healthy rabbits."
    },
    {
        id: 4,
        name: "Cat Scratching Post",
        image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?auto=format&fit=crop&w=800&q=80",
        price: 1500,
        rating: 4.7,
        category: "Accessories",
        description: "Premium scratching post designed for natural feline scratching instincts.\nProtects furniture by redirecting scratching behavior effectively.\nBuilt with strong materials for long-lasting durability and stability.\nProvides exercise, stretching, and stress relief for indoor cats.\nStylish design that blends perfectly with modern home interiors."
    },
    {
        id: 5,
        name: "Bird Cage Deluxe",
        image: "https://images.unsplash.com/photo-1612531386530-97286d97c2a6?auto=format&fit=crop&w=800&q=80",
        price: 3200,
        rating: 4.3,
        category: "Accessories",
        description: "Spacious deluxe bird cage offering comfort and free movement space.\nStrong metal construction ensures safety and long-term durability.\nExcellent ventilation system maintains healthy living environment.\nEasy-to-clean design with removable trays and secure locking system.\nIdeal habitat for small to medium birds with maximum comfort."
    },
    {
        id: 6,
        name: "Fish Aquarium Kit",
        image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
        price: 4500,
        rating: 4.6,
        category: "Accessories",
        description: "Complete aquarium kit designed for a healthy aquatic environment setup.\nIncludes filtration system for clean and clear water quality.\nEnergy-efficient lighting enhances aquarium beauty and fish activity.\nEasy installation suitable for beginners and professionals alike.\nPerfect ecosystem solution for ornamental fish keeping at home."
    },
    {
        id: 7,
        name: "Dog Collar",
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800",
        price: 300,
        rating: 4.1,
        category: "Accessories",
        description: "Comfortable and adjustable dog collar designed for daily use safety.\nMade with durable, skin-friendly materials for long-term comfort.\nStrong buckle system ensures secure fitting during walks.\nLightweight design reduces strain on your pet’s neck.\nIdeal for training, walking, and everyday outdoor activities."
    },
    {
        id: 8,
        name: "Cat Bed Soft",
        image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80",
        price: 1800,
        rating: 4.8,
        category: "Accessories",
        description: "Ultra-soft and cozy cat bed designed for deep and restful sleep.\nPremium fabric ensures maximum comfort and warmth for pets.\nAnti-slip base keeps the bed stable on all surfaces.\nEasy to wash and maintain for long-term hygiene.\nPerfect resting space to reduce stress and improve relaxation."
    },
    {
        id: 9,
        name: "Dog Shampoo",
        image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0c0f?auto=format&fit=crop&w=800&q=80",
        price: 600,
        rating: 4.0,
        category: "Care",
        description: "Gentle cleansing shampoo specially formulated for dog skin and coat care.\nRemoves dirt, odor, and bacteria effectively without irritation.\nEnriched with natural ingredients for soft and shiny fur.\nMaintains skin moisture balance and prevents dryness.\nSafe for regular use on all dog breeds."
    },
    {
        id: 10,
        name: "Cat Litter Box",
        image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=800&q=80",
        price: 1100,
        rating: 4.4,
        category: "Care",
        description: "Hygienic litter box designed for easy cleaning and odor control.\nSpacious interior ensures comfort for cats of all sizes.\nDurable build material for long-lasting daily use.\nHelps maintain cleanliness in your home environment.\nSimple design suitable for modern pet care routines."
    },
    {
        id: 11,
        name: "Cat Toy Ball",
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800",
        price: 700,
        rating: 4.2,
        category: "Food",
        description: "Nutritious rabbit food blend formulated for healthy growth and digestion.\nRich in fiber to support digestive system balance.\nProvides essential vitamins for strong immunity and energy.\nMade from high-quality natural ingredients.\nIdeal daily diet for active and healthy rabbits."
    },
    {
        id: 12,
        name: "Dog Chew Bone",
        image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&q=80",
        price: 200,
        rating: 4.3,
        category: "Toy",
        description: "Durable chew bone designed to satisfy natural chewing instincts.\nHelps maintain dental health by reducing plaque and tartar.\nKeeps dogs engaged and reduces destructive behavior.\nMade with safe, non-toxic materials.\nPerfect for daily chewing and training rewards."
    },
    {
        id: 13,
        name: "Cat Toy Mouse",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
        price: 150,
        rating: 4.1,
        category: "Toy",
        description: "Interactive toy mouse designed to stimulate hunting instincts in cats.\nEncourages active play and physical exercise.\nLightweight and easy for cats to chase and grab.\nMade from safe and durable materials.\nHelps reduce boredom and improve mental stimulation."
    },
    {
        id: 14,
        name: "Dog Leash Strong",
        image: "https://images.unsplash.com/photo-1601758124528-1f8f3c4c3a62?auto=format&fit=crop&w=800&q=80",
        price: 450,
        rating: 4.5,
        category: "Accessories",
        description: "Heavy-duty dog leash designed for maximum control and safety.\nStrong material ensures durability during long walks.\nComfortable handle for better grip and control.\nSuitable for all dog breeds and sizes.\nIdeal for training, walking, and outdoor activities."
    },
    {
        id: 15,
        name: "Cat Vitamins",
        image: "https://images.unsplash.com/photo-1628009368458-4b5d4a1f6d2a?auto=format&fit=crop&w=800&q=80",
        price: 850,
        rating: 4.6,
        category: "Care",
        description: "Essential vitamin supplement for improving cat health and immunity.\nSupports energy levels and overall body strength.\nHelps maintain shiny coat and healthy skin.\nRecommended for daily nutritional support.\nSafe and effective formula for long-term wellness."
    },
    {
        id: 16,
        name: "Dog Bed Large",
        image: "https://images.unsplash.com/photo-1583511655826-05700d52f4a8?auto=format&fit=crop&w=800&q=80",
        price: 2500,
        rating: 4.7,
        category: "Accessories",
        description: "Large comfortable dog bed designed for deep and restful sleep.\nSoft cushioning provides excellent body support.\nDurable fabric ensures long-lasting usage.\nEasy to clean and maintain for hygiene.\nPerfect resting place for medium to large dogs."
    },
    {
        id: 17,
        name: "Bird Food Mix",
        image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&w=800&q=80",
        price: 400,
        rating: 4.2,
        category: "Food",
        description: "Balanced bird food mix designed for daily nutritional needs.\nContains essential seeds and nutrients for energy.\nSupports feather health and growth.\nSuitable for multiple bird species.\nIdeal for maintaining active and healthy birds."
    },
    {
        id: 18,
        name: "Fish Food Flakes",
        image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
        price: 350,
        rating: 4.3,
        category: "Food",
        description: "High-quality fish flakes designed for balanced aquatic nutrition.\nEnhances fish color and growth naturally.\nEasy to digest and suitable for all aquarium fish.\nMaintains water cleanliness with minimal waste.\nIdeal daily diet for healthy aquarium life."
    },
    {
        id: 19,
        name: "Dog Grooming Kit",
        image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=800&q=80",
        price: 1600,
        rating: 4.6,
        category: "Care",
        description: "Complete grooming kit for maintaining pet hygiene and appearance.\nIncludes essential tools for brushing and trimming.\nHelps reduce shedding and keeps coat clean.\nSafe and easy to use for all dog breeds.\nPerfect for professional and home grooming."
    },
    {
        id: 20,
        name: "Cat Shampoo",
        image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0c0f?auto=format&fit=crop&w=800&q=80",
        price: 550,
        rating: 4.0,
        category: "Care",
        description: "Mild and safe cat shampoo designed for gentle cleaning.\nRemoves dirt while maintaining natural skin oils.\nKeeps fur soft, shiny, and healthy.\nSuitable for regular bathing without irritation.\nIdeal for maintaining overall cat hygiene."
    }
];
function getAllProducts() {
    return PRODUCTS;
}

function getProductById(id) {
    return PRODUCTS.find(p => p.id == id);
}