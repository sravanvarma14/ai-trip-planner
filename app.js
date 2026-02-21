// ===== VOYAGER AI — TRIP PLANNER APP =====

// ===== DESTINATION DATA =====
const DESTINATIONS = [
    // === EUROPE ===
    { name: "Paris, France", emoji: "🗼", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80", tag: "Romantic", price: "From $1,200", temp: "18°C", rating: 4.9, continent: "Europe" },
    { name: "Santorini, Greece", emoji: "🏖️", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80", tag: "Dreamy", price: "From $1,100", temp: "26°C", rating: 4.9, continent: "Europe" },
    { name: "Rome, Italy", emoji: "🏛️", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80", tag: "Historic", price: "From $1,000", temp: "20°C", rating: 4.8, continent: "Europe" },
    { name: "London, UK", emoji: "🎡", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80", tag: "Iconic", price: "From $1,300", temp: "14°C", rating: 4.7, continent: "Europe" },
    { name: "Barcelona, Spain", emoji: "⛪", img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80", tag: "Vibrant", price: "From $950", temp: "23°C", rating: 4.8, continent: "Europe" },
    { name: "Amsterdam, Netherlands", emoji: "🌷", img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80", tag: "Charming", price: "From $1,100", temp: "16°C", rating: 4.7, continent: "Europe" },
    { name: "Prague, Czech Republic", emoji: "🏰", img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&q=80", tag: "Fairy-Tale", price: "From $700", temp: "15°C", rating: 4.7, continent: "Europe" },
    { name: "Reykjavik, Iceland", emoji: "🌌", img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&q=80", tag: "Adventure", price: "From $1,600", temp: "5°C", rating: 4.8, continent: "Europe" },
    { name: "Amalfi Coast, Italy", emoji: "🍋", img: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&q=80", tag: "Scenic", price: "From $1,400", temp: "24°C", rating: 4.9, continent: "Europe" },
    { name: "Swiss Alps, Switzerland", emoji: "🏔️", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&q=80", tag: "Majestic", price: "From $1,800", temp: "8°C", rating: 4.9, continent: "Europe" },
    { name: "Dubrovnik, Croatia", emoji: "🏴", img: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=600&q=80", tag: "Coastal", price: "From $850", temp: "22°C", rating: 4.7, continent: "Europe" },
    { name: "Vienna, Austria", emoji: "🎵", img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&q=80", tag: "Elegant", price: "From $1,050", temp: "17°C", rating: 4.6, continent: "Europe" },
    // === ASIA ===
    { name: "Tokyo, Japan", emoji: "🗾", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", tag: "Cultural", price: "From $1,500", temp: "22°C", rating: 4.8, continent: "Asia" },
    { name: "Bali, Indonesia", emoji: "🌴", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80", tag: "Paradise", price: "From $800", temp: "30°C", rating: 4.7, continent: "Asia" },
    { name: "Dubai, UAE", emoji: "🏙️", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", tag: "Luxury", price: "From $1,400", temp: "35°C", rating: 4.6, continent: "Asia" },
    { name: "Maldives", emoji: "🏝️", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80", tag: "Exclusive", price: "From $2,200", temp: "29°C", rating: 4.9, continent: "Asia" },
    { name: "Bangkok, Thailand", emoji: "🛕", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80", tag: "Exotic", price: "From $600", temp: "33°C", rating: 4.6, continent: "Asia" },
    { name: "Kyoto, Japan", emoji: "⛩️", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80", tag: "Serene", price: "From $1,400", temp: "20°C", rating: 4.9, continent: "Asia" },
    { name: "Singapore", emoji: "🦁", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80", tag: "Futuristic", price: "From $1,200", temp: "31°C", rating: 4.7, continent: "Asia" },
    { name: "Jaipur, India", emoji: "🕌", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", tag: "Royal", price: "From $500", temp: "32°C", rating: 4.5, continent: "Asia" },
    { name: "Seoul, South Korea", emoji: "🇰🇷", img: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&q=80", tag: "Trendy", price: "From $1,100", temp: "19°C", rating: 4.7, continent: "Asia" },
    { name: "Hanoi, Vietnam", emoji: "🍜", img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80", tag: "Authentic", price: "From $450", temp: "28°C", rating: 4.6, continent: "Asia" },
    { name: "Petra, Jordan", emoji: "🏜️", img: "https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600&q=80", tag: "Ancient", price: "From $900", temp: "27°C", rating: 4.8, continent: "Asia" },
    // === AMERICAS ===
    { name: "New York, USA", emoji: "🗽", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80", tag: "Iconic", price: "From $1,800", temp: "15°C", rating: 4.8, continent: "Americas" },
    { name: "Cancún, Mexico", emoji: "🌮", img: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=600&q=80", tag: "Beach Party", price: "From $700", temp: "30°C", rating: 4.6, continent: "Americas" },
    { name: "Rio de Janeiro, Brazil", emoji: "🎭", img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80", tag: "Energetic", price: "From $900", temp: "28°C", rating: 4.7, continent: "Americas" },
    { name: "Machu Picchu, Peru", emoji: "🦙", img: "https://images.unsplash.com/photo-1587595431973-160d0d163571?w=600&q=80", tag: "Wonder", price: "From $1,000", temp: "18°C", rating: 4.9, continent: "Americas" },
    { name: "Havana, Cuba", emoji: "🚗", img: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=600&q=80", tag: "Retro", price: "From $650", temp: "29°C", rating: 4.5, continent: "Americas" },
    { name: "Banff, Canada", emoji: "🏔️", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=80", tag: "Wilderness", price: "From $1,100", temp: "10°C", rating: 4.8, continent: "Americas" },
    { name: "Patagonia, Argentina", emoji: "🧊", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80", tag: "Untamed", price: "From $1,500", temp: "12°C", rating: 4.8, continent: "Americas" },
    { name: "Costa Rica", emoji: "🦜", img: "https://images.unsplash.com/photo-1518259102261-b57b7f804300?w=600&q=80", tag: "Eco-Paradise", price: "From $800", temp: "27°C", rating: 4.7, continent: "Americas" },
    // === AFRICA ===
    { name: "Cape Town, South Africa", emoji: "🌍", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80", tag: "Stunning", price: "From $900", temp: "22°C", rating: 4.7, continent: "Africa" },
    { name: "Marrakech, Morocco", emoji: "🕌", img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80", tag: "Mystical", price: "From $600", temp: "28°C", rating: 4.6, continent: "Africa" },
    { name: "Serengeti, Tanzania", emoji: "🦁", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80", tag: "Safari", price: "From $2,000", temp: "26°C", rating: 4.9, continent: "Africa" },
    { name: "Cairo, Egypt", emoji: "🐫", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80", tag: "Legendary", price: "From $750", temp: "34°C", rating: 4.5, continent: "Africa" },
    { name: "Zanzibar, Tanzania", emoji: "🌊", img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80", tag: "Tropical", price: "From $700", temp: "30°C", rating: 4.6, continent: "Africa" },
    // === OCEANIA ===
    { name: "Sydney, Australia", emoji: "🦘", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80", tag: "Vibrant", price: "From $1,400", temp: "24°C", rating: 4.7, continent: "Oceania" },
    { name: "Queenstown, New Zealand", emoji: "🏔️", img: "https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?w=600&q=80", tag: "Thrill", price: "From $1,300", temp: "15°C", rating: 4.8, continent: "Oceania" },
    { name: "Bora Bora, French Polynesia", emoji: "🏝️", img: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=600&q=80", tag: "Paradise", price: "From $3,000", temp: "28°C", rating: 5.0, continent: "Oceania" },
    { name: "Fiji Islands", emoji: "🌺", img: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80", tag: "Island Life", price: "From $1,600", temp: "27°C", rating: 4.7, continent: "Oceania" },
];

// ===== ITINERARY TEMPLATES =====
const ITINERARY_DATA = {
    "Paris, France": {
        weather: "18°C Partly Cloudy", crowd: "Moderate", crowdPct: 55, events: "3 events nearby", eventDetail: "Louvre late-night opening Friday!", safety: "9.4/10",
        days: [
            {
                title: "Arrival & Parisian Vibes", desc: "Settle in and soak up the city of lights", activities: [
                    { time: "10:00 AM", title: "Check-in at Hôtel Le Marais Boutique", desc: "Charming boutique hotel in the heart of Le Marais district with rooftop views.", type: "hotel", price: 180, duration: "1h", rating: 4.8, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80" },
                    { time: "12:00 PM", title: "Lunch at Café de Flore", desc: "Iconic Parisian café. Try the croque monsieur and café crème.", type: "dining", price: 35, duration: "1.5h", rating: 4.7, img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80" },
                    { time: "2:00 PM", title: "Walk Along the Seine", desc: "Stroll along the riverbank, browse bookstalls, and enjoy street performers.", type: "activity", price: 0, duration: "2h", rating: 4.9, img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&q=80" },
                    { time: "5:00 PM", title: "Eiffel Tower at Sunset", desc: "Skip-the-line tickets to the summit. Watch Paris transform at golden hour.", type: "attraction", price: 45, duration: "2.5h", rating: 5.0, img: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=500&q=80" },
                    { time: "8:30 PM", title: "Dinner Cruise on the Seine", desc: "Fine dining aboard a glass-topped boat gliding past illuminated monuments.", type: "dining", price: 95, duration: "2h", rating: 4.9, img: "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=500&q=80" },
                ]
            },
            {
                title: "Art, History & Culture", desc: "Explore the world's greatest museums and historic landmarks", activities: [
                    { time: "9:00 AM", title: "Louvre Museum — Highlights Tour", desc: "Guided 3-hour tour covering the Mona Lisa, Venus de Milo, and hidden gems.", type: "attraction", price: 55, duration: "3h", rating: 4.9, img: "https://images.unsplash.com/photo-1499426600726-7f1e2cba3ad9?w=500&q=80" },
                    { time: "12:30 PM", title: "Lunch in Tuileries Garden", desc: "Picnic-style lunch with artisan baguettes, cheese, and wine from local shops.", type: "dining", price: 25, duration: "1h", rating: 4.5, img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80" },
                    { time: "2:00 PM", title: "Musée d'Orsay", desc: "Impressionist masterpieces by Monet, Renoir, and Van Gogh in a stunning former railway station.", type: "attraction", price: 18, duration: "2.5h", rating: 4.8, img: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?w=500&q=80" },
                    { time: "5:00 PM", title: "Montmartre & Sacré-Cœur", desc: "Wander cobblestone streets, visit artists' square, and enjoy panoramic city views.", type: "activity", price: 0, duration: "2.5h", rating: 4.7, img: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=500&q=80" },
                    { time: "8:00 PM", title: "Dinner at Le Comptoir", desc: "Award-winning bistro serving seasonal French cuisine. Reservations essential.", type: "dining", price: 65, duration: "2h", rating: 4.8, img: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=500&q=80" },
                ]
            },
            {
                title: "Hidden Paris & Shopping", desc: "Off-the-beaten-path gems and world-class shopping", activities: [
                    { time: "9:30 AM", title: "Le Marais Food Tour", desc: "Taste falafel, pastries, and artisan chocolate with a local guide.", type: "activity", price: 60, duration: "3h", rating: 4.9, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80" },
                    { time: "1:00 PM", title: "Champs-Élysées & Arc de Triomphe", desc: "Stroll the famous avenue and climb the Arc for breathtaking views.", type: "attraction", price: 16, duration: "2h", rating: 4.6, img: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=500&q=80" },
                    { time: "3:30 PM", title: "Shopping at Galeries Lafayette", desc: "Iconic department store with stunning Art Nouveau architecture. Personal styling available.", type: "activity", price: 0, duration: "2h", rating: 4.5, img: "https://images.unsplash.com/photo-1569242840510-9fe6f0112cee?w=500&q=80" },
                    { time: "6:00 PM", title: "Wine Tasting Experience", desc: "Curated tasting of six French wines with expert sommelier in a medieval cellar.", type: "activity", price: 50, duration: "1.5h", rating: 4.8, img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=80" },
                    { time: "8:30 PM", title: "Farewell Dinner at Le Jules Verne", desc: "Michelin-starred dining inside the Eiffel Tower. A once-in-a-lifetime experience.", type: "dining", price: 150, duration: "2.5h", rating: 5.0, img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80" },
                ]
            },
        ]
    },
};

// Generate generic itinerary for any destination
function generateGenericItinerary(dest) {
    const weather = ['24°C Sunny', '28°C Clear Skies', '22°C Partly Cloudy', '26°C Warm'][Math.floor(Math.random() * 4)];
    const crowds = ['Low', 'Moderate', 'Moderate-High'][Math.floor(Math.random() * 3)];
    const crowdPct = [35, 55, 70][Math.floor(Math.random() * 3)];
    const activitySets = [
        [
            { time: "9:00 AM", title: `Check-in at ${dest.split(',')[0]} Grand Hotel`, desc: "Luxury accommodation with stunning views and premium amenities.", type: "hotel", price: 160, duration: "1h", rating: 4.7, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80" },
            { time: "11:00 AM", title: "City Orientation Walking Tour", desc: "Discover the city's highlights with a knowledgeable local guide.", type: "activity", price: 25, duration: "2.5h", rating: 4.8, img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&q=80" },
            { time: "1:30 PM", title: "Authentic Local Lunch", desc: "Savor traditional cuisine at a beloved local restaurant.", type: "dining", price: 30, duration: "1.5h", rating: 4.6, img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80" },
            { time: "3:30 PM", title: "Historic Landmarks Tour", desc: "Visit the most iconic monuments and learn their fascinating stories.", type: "attraction", price: 20, duration: "3h", rating: 4.9, img: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&q=80" },
            { time: "7:00 PM", title: "Sunset Dining Experience", desc: "Enjoy a magnificent dinner with panoramic sunset views.", type: "dining", price: 75, duration: "2h", rating: 4.8, img: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=500&q=80" },
        ],
        [
            { time: "8:30 AM", title: "Local Market & Breakfast", desc: "Explore a vibrant morning market and taste local specialties.", type: "activity", price: 15, duration: "2h", rating: 4.7, img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&q=80" },
            { time: "11:00 AM", title: "Museum & Cultural Center", desc: "Immerse yourself in local art, history, and cultural exhibitions.", type: "attraction", price: 18, duration: "2.5h", rating: 4.8, img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=500&q=80" },
            { time: "1:30 PM", title: "Farm-to-Table Lunch", desc: "A culinary experience featuring fresh, locally-sourced ingredients.", type: "dining", price: 40, duration: "1.5h", rating: 4.6, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80" },
            { time: "3:30 PM", title: "Nature & Scenic Exploration", desc: "Discover natural beauty, gardens, or coastal landscapes.", type: "activity", price: 0, duration: "3h", rating: 4.9, img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80" },
            { time: "7:30 PM", title: "Rooftop Bar & Street Food", desc: "Evening cocktails with a view followed by street food discoveries.", type: "dining", price: 45, duration: "2.5h", rating: 4.7, img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=80" },
        ],
        [
            { time: "9:00 AM", title: "Adventure Activity", desc: "Thrilling outdoor experience — hiking, water sports, or cycling.", type: "activity", price: 55, duration: "3h", rating: 4.8, img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&q=80" },
            { time: "12:30 PM", title: "Beachside / Garden Lunch", desc: "Relaxed lunch in a beautiful natural setting.", type: "dining", price: 35, duration: "1.5h", rating: 4.5, img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80" },
            { time: "2:30 PM", title: "Spa & Wellness Session", desc: "Rejuvenate with a traditional massage or wellness treatment.", type: "activity", price: 70, duration: "2h", rating: 4.9, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80" },
            { time: "5:00 PM", title: "Shopping & Souvenirs", desc: "Browse local boutiques, artisan shops, and markets.", type: "activity", price: 0, duration: "2h", rating: 4.4, img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=500&q=80" },
            { time: "8:00 PM", title: "Farewell Gala Dinner", desc: "An unforgettable farewell meal at the destination's finest restaurant.", type: "dining", price: 120, duration: "2.5h", rating: 5.0, img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80" },
        ]
    ];
    const dayTitles = [
        ["Arrival & Exploration", "Discover the heart of your destination"],
        ["Culture & Cuisine", "Dive deep into local traditions and flavors"],
        ["Adventure & Farewell", "Thrilling experiences before saying goodbye"],
        ["Nature & Relaxation", "Unwind in natural beauty"],
        ["Hidden Gems Day", "Off-the-beaten-path discoveries"],
    ];
    const numDays = Math.min(Math.max(tripData.duration || 3, 2), 5);
    const days = [];
    for (let i = 0; i < numDays; i++) {
        const dt = dayTitles[i % dayTitles.length];
        days.push({ title: dt[0], desc: dt[1], activities: activitySets[i % activitySets.length] });
    }
    return { weather, crowd: crowds, crowdPct, events: `${Math.floor(Math.random() * 5) + 1} events nearby`, eventDetail: "Local festival this weekend!", safety: `${(8.5 + Math.random() * 1.5).toFixed(1)}/10`, days };
}

// ===== APP STATE =====
let tripData = { destination: '', startDate: '', endDate: '', budget: 3000, adults: 2, children: 0, interests: [], pace: 'moderate', accommodation: 'boutique', diet: 'none', duration: 3 };
let currentWizardStep = 1;
let savedTrips = JSON.parse(localStorage.getItem('voyager_saved_trips') || '[]');

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    initHeroSlider();
    initHeroSearch();
    initCounters();
    initDestinations();
    initFeatureAnimations();
    initWizard();
    initSavedTrips();
    setMinDate();
});

// ===== PARTICLES =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 60; i++) {
        particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 2 + 0.5, dx: (Math.random() - 0.5) * 0.4, dy: (Math.random() - 0.5) * 0.4, opacity: Math.random() * 0.4 + 0.1 });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.dx; p.y += p.dy;
            if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99,102,241,${p.opacity})`; ctx.fill();
        });
        // Draw lines between close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`; ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });
    document.getElementById('nav-toggle').addEventListener('click', () => { document.getElementById('nav-links').classList.toggle('open'); });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            document.getElementById('nav-links').classList.remove('open');
        });
    });
    document.getElementById('btn-start-planning').addEventListener('click', () => openWizard());
}

// ===== HERO SLIDER =====
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

// ===== HERO SEARCH =====
function initHeroSearch() {
    const input = document.getElementById('hero-destination');
    const suggestions = document.getElementById('search-suggestions');
    const allDests = DESTINATIONS.map(d => d.name);
    input.addEventListener('input', () => {
        const val = input.value.toLowerCase();
        if (val.length < 1) { suggestions.classList.remove('show'); return; }
        const filtered = allDests.filter(d => d.toLowerCase().includes(val));
        if (filtered.length > 0) {
            suggestions.innerHTML = filtered.map(d => `<div class="suggestion-item">${d}</div>`).join('');
            suggestions.classList.add('show');
            suggestions.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => { input.value = item.textContent; suggestions.classList.remove('show'); });
            });
        } else { suggestions.classList.remove('show'); }
    });
    document.addEventListener('click', (e) => { if (!e.target.closest('.search-field')) suggestions.classList.remove('show'); });
    document.getElementById('hero-search-btn').addEventListener('click', () => {
        const dest = input.value.trim();
        if (dest) { tripData.destination = dest; openWizard(dest); }
        else { openWizard(); }
    });
}

// ===== STAT COUNTERS =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                animateValue(el, 0, target, 2000);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}
function animateValue(el, start, end, dur) {
    let startTime = null;
    function step(ts) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / dur, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * (end - start) + start).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// ===== DESTINATIONS =====
function initDestinations() {
    const grid = document.getElementById('destinations-grid');
    grid.innerHTML = DESTINATIONS.map(d => `
        <div class="dest-card" data-dest="${d.name}">
            <img src="${d.img}" alt="${d.name}" loading="lazy">
            <div class="dest-card-overlay">
                <span class="dest-card-tag">${d.tag}</span>
                <h3>${d.emoji} ${d.name}</h3>
                <div class="dest-card-info">
                    <span><i class="fas fa-thermometer-half"></i> ${d.temp}</span>
                    <span><i class="fas fa-star"></i> ${d.rating}</span>
                </div>
                <div class="dest-card-price">${d.price}</div>
            </div>
        </div>
    `).join('');
    grid.querySelectorAll('.dest-card').forEach(card => {
        card.addEventListener('click', () => { tripData.destination = card.dataset.dest; openWizard(card.dataset.dest); });
    });
}

// ===== FEATURE ANIMATIONS =====
function initFeatureAnimations() {
    const cards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), parseInt(entry.target.dataset.delay || 0));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    cards.forEach(c => observer.observe(c));
}

// ===== SET MIN DATE =====
function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('hero-date').min = today;
    document.getElementById('hero-date').value = today;
    document.getElementById('wizard-start-date').min = today;
    document.getElementById('wizard-end-date').min = today;
}

// ===== WIZARD =====
function initWizard() {
    // Quick picks
    document.querySelectorAll('.quick-pick').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.quick-pick').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('wizard-destination').value = btn.dataset.dest;
            tripData.destination = btn.dataset.dest;
        });
    });
    // Surprise me
    document.getElementById('btn-surprise').addEventListener('click', () => {
        const rand = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
        document.getElementById('wizard-destination').value = rand.name;
        tripData.destination = rand.name;
        showToast(`${rand.emoji} ${rand.name} — great choice!`, 'success');
    });
    // Budget slider
    const slider = document.getElementById('budget-slider');
    const budgetDisplay = document.getElementById('budget-amount');
    slider.addEventListener('input', () => {
        tripData.budget = parseInt(slider.value);
        budgetDisplay.textContent = '$' + parseInt(slider.value).toLocaleString();
    });
    // Counters
    document.querySelectorAll('.counter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            const action = btn.dataset.action;
            const el = document.getElementById(`${target}-count`);
            let val = parseInt(el.textContent);
            if (action === 'increase') val++;
            else if (action === 'decrease' && val > 0) val--;
            if (target === 'adults' && val < 1) val = 1;
            el.textContent = val;
            tripData[target] = val;
        });
    });
    // Interests
    document.querySelectorAll('.interest-tag').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
            const interest = btn.dataset.interest;
            if (tripData.interests.includes(interest)) tripData.interests = tripData.interests.filter(i => i !== interest);
            else tripData.interests.push(interest);
        });
    });
    // Pace
    document.querySelectorAll('.pace-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pace-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            tripData.pace = btn.dataset.pace;
        });
    });
    // Accommodation
    document.querySelectorAll('.accom-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.accom-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            tripData.accommodation = btn.dataset.accom;
        });
    });
    // Diet
    document.querySelectorAll('.diet-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diet-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            tripData.diet = btn.dataset.diet;
        });
    });
    // Nav buttons
    document.getElementById('wizard-next').addEventListener('click', nextWizardStep);
    document.getElementById('wizard-prev').addEventListener('click', prevWizardStep);
    document.getElementById('modal-close').addEventListener('click', closeWizard);
    document.getElementById('planning-modal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeWizard(); });
}

function openWizard(dest) {
    currentWizardStep = 1;
    updateWizardUI();
    if (dest) document.getElementById('wizard-destination').value = dest;
    document.getElementById('planning-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeWizard() {
    document.getElementById('planning-modal').classList.remove('active');
    document.body.style.overflow = '';
}
function nextWizardStep() {
    if (currentWizardStep === 1) {
        const dest = document.getElementById('wizard-destination').value.trim();
        if (!dest) { showToast('Please enter a destination', 'error'); return; }
        tripData.destination = dest;
    }
    if (currentWizardStep === 2) {
        tripData.startDate = document.getElementById('wizard-start-date').value;
        tripData.endDate = document.getElementById('wizard-end-date').value;
        if (tripData.startDate && tripData.endDate) {
            const d1 = new Date(tripData.startDate), d2 = new Date(tripData.endDate);
            tripData.duration = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24)) + 1;
            if (tripData.duration < 1) { showToast('End date must be after start date', 'error'); return; }
        } else { tripData.duration = 3; }
    }
    if (currentWizardStep === 4) { closeWizard(); startAIGeneration(); return; }
    currentWizardStep++;
    updateWizardUI();
}
function prevWizardStep() { if (currentWizardStep > 1) { currentWizardStep--; updateWizardUI(); } }
function updateWizardUI() {
    document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`wizard-step-${currentWizardStep}`).classList.add('active');
    document.querySelectorAll('.progress-step').forEach(s => {
        const step = parseInt(s.dataset.step);
        s.classList.remove('active', 'completed');
        if (step === currentWizardStep) s.classList.add('active');
        else if (step < currentWizardStep) s.classList.add('completed');
    });
    document.getElementById('progress-fill').style.width = (currentWizardStep * 25) + '%';
    document.getElementById('wizard-prev').style.visibility = currentWizardStep === 1 ? 'hidden' : 'visible';
    const nextBtn = document.getElementById('wizard-next');
    if (currentWizardStep === 4) { nextBtn.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Generate Itinerary'; }
    else { nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>'; }
}

// ===== AI GENERATION =====
function startAIGeneration() {
    const modal = document.getElementById('ai-loading-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const steps = ['ls-1', 'ls-2', 'ls-3', 'ls-4', 'ls-5'];
    steps.forEach(s => { const el = document.getElementById(s); el.classList.remove('active', 'done'); el.querySelector('i').className = 'fas fa-circle-notch'; });
    document.getElementById('ls-1').classList.add('active');
    document.getElementById('ls-1').querySelector('i').className = 'fas fa-circle-notch fa-spin';
    let idx = 0;
    const interval = setInterval(() => {
        document.getElementById(steps[idx]).classList.remove('active');
        document.getElementById(steps[idx]).classList.add('done');
        document.getElementById(steps[idx]).querySelector('i').className = 'fas fa-check-circle';
        idx++;
        if (idx < steps.length) {
            document.getElementById(steps[idx]).classList.add('active');
            document.getElementById(steps[idx]).querySelector('i').className = 'fas fa-circle-notch fa-spin';
        } else {
            clearInterval(interval);
            setTimeout(() => { modal.classList.remove('active'); document.body.style.overflow = ''; showItinerary(); }, 600);
        }
    }, 800);
}

// ===== SHOW ITINERARY =====
function showItinerary() {
    const page = document.getElementById('itinerary-page');
    const itin = ITINERARY_DATA[tripData.destination] || generateGenericItinerary(tripData.destination);
    // Hide main page sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('destinations').style.display = 'none';
    document.getElementById('features').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    page.style.display = 'block';
    window.scrollTo(0, 0);
    // Header
    document.getElementById('itinerary-dest-title').textContent = `✈️ ${tripData.destination}`;
    document.getElementById('itinerary-dates').textContent = tripData.startDate && tripData.endDate ? `${formatDate(tripData.startDate)} — ${formatDate(tripData.endDate)}` : `${itin.days.length} days`;
    document.getElementById('itinerary-travelers').textContent = `${tripData.adults} adult${tripData.adults > 1 ? 's' : ''} ${tripData.children > 0 ? ', ' + tripData.children + ' child' + (tripData.children > 1 ? 'ren' : '') : ''}`;
    document.getElementById('itinerary-budget').textContent = `$${tripData.budget.toLocaleString()} per person`;
    // Dashboard
    document.getElementById('dash-weather').textContent = itin.weather;
    document.getElementById('dash-crowd').textContent = itin.crowd;
    document.querySelector('.crowd-fill').style.width = itin.crowdPct + '%';
    document.getElementById('dash-events').textContent = itin.events;
    document.querySelector('.event-card small').textContent = itin.eventDetail;
    document.getElementById('dash-safety').textContent = itin.safety;
    // Day tabs
    const dayList = document.getElementById('day-list');
    dayList.innerHTML = itin.days.map((day, i) => `
        <button class="day-tab ${i === 0 ? 'active' : ''}" data-day="${i}">
            <span class="day-tab-num">${i + 1}</span>
            <span>${day.title}</span>
        </button>
    `).join('');
    dayList.querySelectorAll('.day-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            dayList.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderDayDetail(itin.days[parseInt(tab.dataset.day)], parseInt(tab.dataset.day));
        });
    });
    // Budget breakdown
    renderBudgetBreakdown(itin);
    // Show first day
    renderDayDetail(itin.days[0], 0);
    // Back button
    document.getElementById('back-to-home').addEventListener('click', backToHome);
    // Save trip
    document.getElementById('btn-save-trip').addEventListener('click', () => saveTrip(itin));
    // Book all
    document.getElementById('btn-book-all').addEventListener('click', () => openBooking({ title: 'Complete Trip Package', price: calculateTotalCost(itin), isPackage: true }));
    document.getElementById('btn-share-trip').addEventListener('click', () => { navigator.clipboard?.writeText(window.location.href); showToast('Trip link copied to clipboard!', 'success'); });
}

function renderDayDetail(day, dayIdx) {
    const detail = document.getElementById('day-detail');
    const typeIcons = { hotel: 'fa-hotel', dining: 'fa-utensils', activity: 'fa-hiking', attraction: 'fa-landmark' };
    const typeColors = { hotel: '#6366f1', dining: '#f59e0b', activity: '#10b981', attraction: '#8b5cf6' };
    detail.innerHTML = `
        <div class="day-detail-header">
            <h2>Day ${dayIdx + 1}: ${day.title}</h2>
            <p>${day.desc}</p>
        </div>
        <div class="timeline">
            ${day.activities.map(act => `
                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color:${typeColors[act.type]}">
                        <i class="fas ${typeIcons[act.type]}" style="color:${typeColors[act.type]}"></i>
                    </div>
                    <div class="timeline-card">
                        <img src="${act.img}" alt="${act.title}" class="timeline-card-img" loading="lazy">
                        <div class="timeline-time">${act.time}</div>
                        <h4>${act.title}</h4>
                        <p>${act.desc}</p>
                        <div class="timeline-card-meta">
                            <span><i class="fas fa-clock"></i> ${act.duration}</span>
                            <span><i class="fas fa-star"></i> ${act.rating}</span>
                            <span><i class="fas fa-tag"></i> ${act.price === 0 ? 'Free' : '$' + act.price}</span>
                        </div>
                        <div class="timeline-card-actions">
                            <button class="btn btn-sm btn-book" onclick="openBooking({title:'${act.title.replace(/'/g, "\\'")}',price:${act.price},type:'${act.type}'})">
                                <i class="fas fa-shopping-cart"></i> Book
                            </button>
                            <button class="btn btn-sm btn-map" onclick="showToast('Opening map...','success')">
                                <i class="fas fa-map-marked-alt"></i> Map
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderBudgetBreakdown(itin) {
    let totalHotel = 0, totalDining = 0, totalActivity = 0, totalAttraction = 0;
    itin.days.forEach(day => day.activities.forEach(act => {
        if (act.type === 'hotel') totalHotel += act.price;
        else if (act.type === 'dining') totalDining += act.price;
        else if (act.type === 'activity') totalActivity += act.price;
        else if (act.type === 'attraction') totalAttraction += act.price;
    }));
    const total = totalHotel + totalDining + totalActivity + totalAttraction;
    const bd = document.getElementById('budget-breakdown');
    bd.innerHTML = `
        <div class="budget-item"><span>🏨 Hotels</span><div class="budget-item-bar"><div class="budget-item-fill" style="width:${total ? totalHotel / total * 100 : 0}%;background:#6366f1"></div></div><span>$${totalHotel}</span></div>
        <div class="budget-item"><span>🍽️ Dining</span><div class="budget-item-bar"><div class="budget-item-fill" style="width:${total ? totalDining / total * 100 : 0}%;background:#f59e0b"></div></div><span>$${totalDining}</span></div>
        <div class="budget-item"><span>🎯 Activities</span><div class="budget-item-bar"><div class="budget-item-fill" style="width:${total ? totalActivity / total * 100 : 0}%;background:#10b981"></div></div><span>$${totalActivity}</span></div>
        <div class="budget-item"><span>🏛️ Attractions</span><div class="budget-item-bar"><div class="budget-item-fill" style="width:${total ? totalAttraction / total * 100 : 0}%;background:#8b5cf6"></div></div><span>$${totalAttraction}</span></div>
        <div class="budget-item"><span>💰 Total</span><span>$${total}</span></div>
    `;
}

function calculateTotalCost(itin) {
    let total = 0;
    itin.days.forEach(day => day.activities.forEach(act => total += act.price));
    return total;
}

function backToHome() {
    document.getElementById('itinerary-page').style.display = 'none';
    document.getElementById('home').style.display = '';
    document.getElementById('destinations').style.display = '';
    document.getElementById('features').style.display = '';
    document.getElementById('footer').style.display = '';
    window.scrollTo(0, 0);
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ===== BOOKING =====
function openBooking(item) {
    const modal = document.getElementById('booking-modal');
    const content = document.getElementById('booking-content');
    content.innerHTML = `
        <h2><i class="fas fa-shopping-cart" style="background:var(--gradient-main);-webkit-background-clip:text;-webkit-text-fill-color:transparent"></i> ${item.isPackage ? 'Book Complete Trip' : 'Book: ' + item.title}</h2>
        <p class="booking-subtitle">${item.isPackage ? 'Secure your entire itinerary with one click' : 'Confirm your reservation'}</p>
        <div class="booking-details">
            <div class="booking-row"><span class="label">Item</span><span class="value">${item.title}</span></div>
            <div class="booking-row"><span class="label">Destination</span><span class="value">${tripData.destination}</span></div>
            <div class="booking-row"><span class="label">Travelers</span><span class="value">${tripData.adults + tripData.children}</span></div>
            ${item.type ? `<div class="booking-row"><span class="label">Type</span><span class="value" style="text-transform:capitalize">${item.type}</span></div>` : ''}
        </div>
        <div class="booking-total">
            <span class="label">Total Price</span>
            <span class="value">${item.price === 0 ? 'Free' : '$' + item.price.toLocaleString()}</span>
        </div>
        <button class="btn btn-primary btn-confirm-booking" id="confirm-booking">
            <i class="fas fa-lock"></i> Confirm & Pay
        </button>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('confirm-booking').addEventListener('click', () => {
        content.innerHTML = `
            <div class="booking-success">
                <i class="fas fa-check-circle"></i>
                <h2>Booking Confirmed!</h2>
                <p style="color:var(--text-secondary);margin-top:12px">Your reservation for <strong>${item.title}</strong> has been confirmed. A confirmation email has been sent.</p>
                <p style="color:var(--text-muted);margin-top:8px;font-size:0.85rem">Booking ID: VGR-${Date.now().toString(36).toUpperCase()}</p>
                <button class="btn btn-primary" style="margin-top:24px" onclick="document.getElementById('booking-modal').classList.remove('active');document.body.style.overflow='';">
                    <i class="fas fa-check"></i> Done
                </button>
            </div>
        `;
        showToast('Booking confirmed! 🎉', 'success');
    });
    document.getElementById('booking-modal-close').addEventListener('click', () => { modal.classList.remove('active'); document.body.style.overflow = ''; });
    modal.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.remove('active'); document.body.style.overflow = ''; } });
}

// ===== SAVE TRIPS =====
function saveTrip(itin) {
    const trip = { id: Date.now(), destination: tripData.destination, dates: `${tripData.startDate || 'Flexible'} — ${tripData.endDate || 'Flexible'}`, budget: tripData.budget, img: DESTINATIONS.find(d => d.name === tripData.destination)?.img || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&q=80', savedAt: new Date().toISOString() };
    savedTrips.push(trip);
    localStorage.setItem('voyager_saved_trips', JSON.stringify(savedTrips));
    showToast('Trip saved to your favorites! ❤️', 'success');
    const btn = document.getElementById('btn-save-trip');
    btn.innerHTML = '<i class="fas fa-heart" style="color:#ef4444"></i> Saved';
}

function initSavedTrips() {
    document.getElementById('btn-saved-trips').addEventListener('click', showSavedTrips);
    document.getElementById('saved-modal-close').addEventListener('click', () => { document.getElementById('saved-modal').classList.remove('active'); document.body.style.overflow = ''; });
    document.getElementById('saved-modal').addEventListener('click', (e) => { if (e.target === e.currentTarget) { e.currentTarget.classList.remove('active'); document.body.style.overflow = ''; } });
}
function showSavedTrips() {
    const modal = document.getElementById('saved-modal');
    const list = document.getElementById('saved-trips-list');
    if (savedTrips.length === 0) {
        list.innerHTML = '<div class="empty-state"><i class="fas fa-suitcase-rolling"></i><p>No saved trips yet. Start planning your first adventure!</p></div>';
    } else {
        list.innerHTML = savedTrips.map(t => `
            <div class="saved-trip-card" data-id="${t.id}">
                <img src="${t.img}" alt="${t.destination}" class="saved-trip-img">
                <div class="saved-trip-info">
                    <h4>${t.destination}</h4>
                    <p><i class="fas fa-calendar"></i> ${t.dates}</p>
                    <p><i class="fas fa-wallet"></i> $${t.budget.toLocaleString()} per person</p>
                </div>
            </div>
        `).join('');
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(40px)'; setTimeout(() => toast.remove(), 300); }, 3500);
}
