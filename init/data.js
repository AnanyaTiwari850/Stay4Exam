const sampleListings = [
{
  title: "Affordable Stay Near TCS iON Digital Zone",
  description:
    "Comfortable shared accommodation for exam aspirants with clean washroom, drinking water, and peaceful surroundings. Just 10 minutes from the exam centre.",
  image:  "https://images.unsplash.com/photo-1753219882224-6ecc83deef92?q=80&w=764&auto=format&fit=crop",
  price: 500,
  location: "Delhi",
  country: "India",
},
{
  title: "Shared Hall for Competitive Exam Students",
  description:
    "Budget-friendly hall stay for up to 5 students. Common washroom, fans, and safe environment for a peaceful night before exams.",
  image:  "https://images.unsplash.com/photo-1771918521584-92009971f0d3?q=80&w=774&auto=format&fit=crop",
  price: 700,
  location: "Kota",
  country: "India",
},
{
  title: "Quiet Private Room Near Exam Centre",
  description:
    "Private room with attached bathroom, ideal for students looking for comfort and a distraction-free stay before examination.",
  image:  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&auto=format&fit=crop",
  price: 1200,
  location: "Bhopal",
  country: "India",
},
{
  title: "Girls Only Student Accommodation",
  description:
    "Safe stay for girl students with female host, clean rooms, CCTV security, drinking water, and nearby transport facilities.",
  image:  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=870&auto=format&fit=crop",
  price: 800,
  location: "Indore",
  country: "India",
},
{
  title: "Budget Floor Stay for Exam Aspirants",
  description:
    "Simple floor accommodation with common washroom and fan. Best option for students looking for an economical overnight stay.",
  image:  "https://images.unsplash.com/photo-1630699144919-681cf308ae82?q=80&w=870&auto=format&fit=crop",
  price: 600,
  location: "Varanasi",
  country: "India",
},
{
  title: "Family Stay Near CBT Exam Centre",
  description:
    "Spacious family room with attached washroom for students travelling with parents. Peaceful location near the exam centre.",
  image:  "https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?q=80&w=687&auto=format&fit=crop",
  price: 1500,
  location: "Ranchi",
  country: "India",
},
{
  title: "Shared Room Near Government Exam Centre",
  description:
    "Neat and clean shared room with comfortable Bed, drinking water, and common bathroom for exam candidates.",
  image:  "https://images.unsplash.com/photo-1638580380493-021e2a3533c2?q=80&w=687&auto=format&fit=crop",
  price: 800,
  location: "Nagpur",
  country: "India",
},
{
  title: "Peaceful Student Stay",
  description:
    "Affordable accommodation with quiet surroundings, common washroom, Wi-Fi, and walking distance from the exam centre.",
  image:  "https://images.unsplash.com/photo-1655990279200-33f044677fb8?q=80&w=435&auto=format&fit=crop",
  price: 2000,
  location: "Pune",
  country: "India",
},
{
  title: "Comfort Hall Stay for Exam Day",
  description:
    "Large shared hall with fans, clean drinking water, charging points, and common washroom for students attending competitive exams.",
  image:  "https://images.unsplash.com/photo-1764726331220-b323be2b57b5?q=80&w=387&auto=format&fit=crop",
  price: 700,
  location: "Hyderabad",
  country: "India",
},
{
  title: "Shared Room Near NTA Test Centre",
  description:
    "Spacious Room for exam candidates with fans, clean common washroom, drinking water, and charging points. Perfect for an overnight stay before exams.",
  image:  "https://images.unsplash.com/photo-1780777699813-c1dbd30471ff?q=80&w=868&auto=format&fit=crop",
  price: 1800,
  location: "Chandigarh",
  country: "India",
},
{
  title: "Student Hostel Style Stay",
  description:
    "Hostel-style shared room with basic facilities including mattress, fan, common bathroom, and a calm environment before exams.",
  image:  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700&auto=format&fit=crop",
  price: 400,
  location: "Ahmedabad",
  country: "India",
},
{
  title: "Peaceful Stay Near CBT Centre",
  description:
    "Private accommodation with attached washroom, drinking water, fan, and study-friendly environment for exam aspirants.",
  image:  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=774&auto=format&fit=crop",
  price: 2000,
  location: "Raipur",
  country: "India",
},
{
  title: "Budget Student Room",
  description:
    "Affordable room for students with comfortable mattresses, common bathroom, peaceful surroundings, and easy access to nearby exam centres.",
  image:  "https://images.unsplash.com/photo-1619810230359-b2c2f61c49cd?q=80&w=870&auto=format&fit=crop",
  price: 1400,
  location: "Surat",
  country: "India",
},
{
  title: "Comfort Hall for Exam Aspirants",
  description:
    "Large hall accommodation for groups of students with common washroom, drinking water, and secure overnight stay near the examination venue.",
  image:  "https://images.unsplash.com/photo-1777728715585-94a58eabdad9?q=80&w=774&auto=format&fit=crop",
  price: 600,
  location: "Kolkata",
  country: "India",
},
{
  title: "Affordable Family Accommodation",
  description:
    "Comfortable room for students travelling with parents. Includes attached bathroom, clean beds, and peaceful surroundings.",
  image:  "https://images.unsplash.com/photo-1680210851458-b7dc5685e06e?q=80&w=870&auto=format&fit=crop",
  price: 1800,
  location: "Dehradun",
  country: "India",
},
{
  title: "Low Budget Floor Stay",
  description:
    "Simple overnight floor accommodation with common washroom, drinking water, and peaceful environment near the exam centre.",
  image:  "https://images.unsplash.com/photo-1721739225862-fc20cdc7201f?q=80&w=870&auto=format&fit=crop",
  price: 700,
  location: "Mysuru",
  country: "India",
},
{
  title: "Girls Hostel Style Stay",
  description:
    "Safe and secure accommodation for girl students with CCTV, female host, clean washroom, and free drinking water.",
  image:  "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?q=80&w=871&auto=format&fit=crop",
  price: 800,
  location: "Bhubaneswar",
  country: "India",
},
{
  title: "Shared Room Near Digital Exam Hub",
  description:
    "Well-maintained shared room with fan, Wi-Fi, charging sockets, and common bathroom. Suitable for up to four students.",
  image:  "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=870&auto=format&fit=crop",
  price: 500,
  location: "Guwahati",
  country: "India",
},
{
  title: "Private Student Room",
  description:
    "Quiet private room with attached bathroom, comfortable bed, and study table. Ideal for candidates appearing in competitive exams.",
  image:  "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=857&auto=format&fit=crop",
  price: 1500,
  location: "Bengaluru",
  country: "India",
},
{
  title: "Shared Stay Near Railway Station",
  description:
    "Budget-friendly stay for students arriving from different cities. Clean washroom, fan, and only a few minutes from the exam centre.",
  image:  "https://images.unsplash.com/photo-1597665863042-47e00964d899?q=80&w=435&auto=format&fit=crop",
  price: 600,
  location: "Chennai",
  country: "India",
},
{
  title: "Affordable Shared Stay Near Exam Centre",
  description:
    "Budget-friendly shared accommodation for students with clean common washroom, drinking water, fans, and a peaceful environment. Only 5 minutes from the exam centre.",
  image:  "https://images.unsplash.com/photo-1661205581050-5f433903720a?q=80&w=387&auto=format&fit=crop",
  price:  1000,
  location: "Agra",
  country: "India",
},
{
  title: "Private Stay for Competitive Exam Candidates",
  description:
    "Well-maintained private room with attached bathroom, comfortable bed, study table, and free Wi-Fi. Ideal for a stress-free stay before your exam.",
  image:  "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=870&auto=format&fit=crop",
  price: 1400,
  location: "Meerut",
  country: "India",
},
{
  title: "Student Hall Stay Near Digital Test Centre",
  description:
    "Large shared hall for up to 6 students with common washroom, drinking water, charging points, and a safe overnight stay near the exam venue.",
  image:  "https://images.unsplash.com/photo-1757742690834-aa581b9f53b2?q=80&w=870&auto=format&fit=crop",
  price: 700,
  location: "Gwalior",
  country: "India",
},
{
  title: "Comfort Room Near TCS iON Centre",
  description:
    "Clean and affordable shared room with mattresses, common bathroom, free drinking water, and easy access to nearby TCS iON Digital Zone.",
  image:  "https://images.unsplash.com/photo-1709805619372-40de3f158e83?w=700&auto=format&fit=crop ",
  price: 800,
  location: "Bareilly",
  country: "India",
},
];

module.exports = { data: sampleListings };