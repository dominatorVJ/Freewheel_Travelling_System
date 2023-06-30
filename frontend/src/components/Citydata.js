const Citydata = [
  {
    "name": "Delhi",
    "description": "Capital city showcasing a blend of history, culture, and vibrant street markets.",
    "image_url": "https://images.unsplash.com/photo-1667849521361-48f5798734f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVsaGklMjB0b3VyaXNtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "explore_link": "https://example.com/delhi"
  },
  {
    "name": "Mumbai",
    "description": "Cosmopolitan metropolis known for its bustling streets and iconic landmarks.",
    "image_url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/mumbai"
  },
  {
    "name": "Agra",
    "description": "Home to the magnificent Taj Mahal, a UNESCO World Heritage site.",
    "image_url": "https://images.unsplash.com/photo-1524613032530-449a5d94c285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/agra"
  },
  {
    "name": "Jaipur",
    "description": '"Pink City" with majestic palaces, forts, and a rich Rajasthani heritage',
    "image_url": "https://images.unsplash.com/photo-1557690756-62754e561982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/jaipur"
  },
  {
    "name": "Udaipur",
    "description": "City of lakes, featuring stunning palaces, romantic boat rides, and a serene atmosphere.",
    "image_url": "https://images.unsplash.com/photo-1591264247469-d072a1018915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/udaipur"
  },
  {
    "name": "Varanasi",
    "description": "Oldest living city in the world, known for its spiritual significance and the sacred Ganges River.",
    "image_url": "https://images.unsplash.com/photo-1634920540678-df0e179c5243?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZhcmFuYXNpfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/varanasi"
  },
  {
    "name": "Goa",
    "description": "Tropical paradise with beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture.",
    "image_url": "https://images.unsplash.com/photo-1590393275627-0c48482c60e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/goa"
  },
  {
    "name": "Kerala",
    "description": "Beautiful coastal state known for its backwaters, lush greenery, and Ayurvedic treatments.",
    "image_url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/kerala"
  },
  {
    "name": "Kolkata",
    "description": "Cultural hub of India, famous for its art, literature, and delicious street food.",
    "image_url": "https://images.unsplash.com/photo-1630494378404-097499a0fea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtvbGthdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/kolkata"
  },
  {
    "name": "Chennai",
    "description": "Coastal city with a thriving film industry, temples, and delicious South Indian cuisine.",
    "image_url": "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/chennai"
  },
  {
    "name": "Amritsar",
    "description": "Spiritual center of Sikhism, home to the Golden Temple and vibrant bazaars.",
    "image_url": "https://images.unsplash.com/photo-1587899765642-3f8e3ea67852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/amritsar"
  },
  {
    "name": "Jaisalmer",
    "description": "Majestic desert city with stunning sandstone architecture and camel safaris.",
    "image_url": "https://images.unsplash.com/photo-1627301517152-11505d049286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amFpc2FsbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/jaisalmer"
  },
  {
    "name": "Shimla",
    "description": " Hill station in the Himalayas, offering picturesque landscapes and a cool climate.",
    "image_url": "https://images.unsplash.com/photo-1562649846-ab413ca01712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/shimla"
  },
  {
    "name": "Mysore",
    "description": "Royal city in Karnataka with grand palaces, vibrant markets, and the famous Mysore Dasara festival.",
    "image_url": "https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXlzb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/mysore"
  },
  {
    "name": "Darjeeling",
    "description": "Picturesque hill station in the Himalayas, renowned for tea gardens and stunning views of Kanchenjunga.",
    "image_url": "https://images.unsplash.com/photo-1544634076-a90160ddf44c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/darjeeling"
  },
  {
    "name": "Pondicherry",
    "description": "Former French colony with a blend of Indian and French culture, known for its beaches and spiritual retreats.",
    "image_url": "https://images.unsplash.com/photo-1549959846-65be1b8d0c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvbmRpY2hlcnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/pondicherry"
  },
  {
    "name": "Rishikesh",
    "description": "Spiritual hub in India, famous for yoga, meditation, and the holy Ganges River.",
    "image_url": "https://images.unsplash.com/photo-1616824421012-296bb3580556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJpc2hpa2VzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/rishikesh"
  },
  {
    "name": "Hyderabad",
    "description": "Historic city with enchanting palaces, flavorful cuisine, and the iconic Charminar.",
    "image_url": "https://images.unsplash.com/photo-1621909321963-2276c9660298?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh5ZGVyYWJhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/hyderabad"
  },
  {
    "name": "Pushkar",
    "description": " Sacred town known for its annual camel fair and the Brahma Temple.",
    "image_url": "https://images.unsplash.com/photo-1584804932859-3ffe33f0982f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVzaGthcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/pushkar"
  },
  {
    "name": "Kochi",
    "description": "Coastal city in Kerala, offering a blend of colonial history, backwaters, and spice markets.",
    "image_url": "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29jaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
    "explore_link": "https://example.com/kochi"
  }
]
export default Citydata