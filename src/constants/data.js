export const SEATTLE_ZIPS = [
  '98101', '98102', '98103', '98104', '98105', '98106', '98107', '98108', '98109',
  '98112', '98115', '98116', '98117', '98118', '98119', '98121', '98122', '98125',
  '98126', '98133', '98134', '98136', '98144', '98146', '98148', '98154', '98155',
  '98158', '98160', '98161', '98164', '98166', '98168', '98174', '98177', '98178',
  '98188', '98195', '98199'
];

export const NEIGHBORHOOD_ESTIMATES = [
  { name: 'Capitol Hill', time: 12, zip: '98122', note: 'Historic homes, cast-iron drains' },
  { name: 'Queen Anne', time: 15, zip: '98109', note: 'Steep grades, lateral issues' },
  { name: 'Green Lake / Wallingford', time: 18, zip: '98103', note: 'Mature trees, root intrusion' },
  { name: 'Ballard', time: 20, zip: '98107', note: 'Aging clay tile sewers' },
  { name: 'Fremont', time: 20, zip: '98103', note: 'Older galvanized lines' },
  { name: 'University District', time: 22, zip: '98105', note: 'High-density drain load' },
  { name: 'Northgate', time: 25, zip: '98115', note: 'Post-war sewer infrastructure' },
  { name: 'West Seattle', time: 28, zip: '98116', note: 'Hillside drainage, long laterals' },
  { name: 'Beacon Hill', time: 22, zip: '98144', note: 'Mid-century cast iron' },
  { name: 'Columbia City', time: 24, zip: '98118', note: 'Tree-root dominant zone' },
  { name: 'Magnolia', time: 25, zip: '98199', note: 'Seaside corrosion factors' },
  { name: 'Georgetown', time: 20, zip: '98108', note: 'Industrial to residential retrofits' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Drain Cleaning',
    description: 'Hydro-jetting and mechanical snaking to obliterate grease, hair, soap buildup, and tree roots. We clear what others can\'t.',
    icon: 'Droplets',
    features: ['Hydro-jetting up to 4000 PSI', 'Video inspection included', 'Grease & root removal'],
    price: 'Starting at $149',
  },
  {
    id: 2,
    title: 'Sewer Services',
    description: 'Trenchless sewer repair, camera diagnostics, and full line replacement. We locate breaks without destroying your yard.',
    icon: 'ArrowDownToLine',
    features: ['Trenchless pipe bursting', 'Sewer camera inspection', 'Spot repair & replacement'],
    price: 'Inspection $199',
  },
  {
    id: 3,
    title: 'General Plumbing',
    description: 'Leak detection, pipe repair, fixture installation, repiping, and pressure regulation. Full-service for Seattle\'s aging homes.',
    icon: 'Wrench',
    features: ['Electronic leak detection', 'Fixture installation', 'Repiping & repairs'],
    price: 'Service Call $89',
  },
  {
    id: 4,
    title: '24/7 Emergency',
    description: 'Burst pipes, sewage backups, and flooding don\'t wait. Our trucks are stocked and ready to roll across Seattle day or night.',
    icon: 'AlertTriangle',
    features: ['Average response 25 min', 'Fully stocked trucks', 'No overtime charges'],
    price: 'Call Anytime',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jennifer M.',
    location: 'Queen Anne',
    text: 'Our 1920s Queen Anne craftsman had a completely clogged main line at 11 PM. Puget Seattle arrived in 18 minutes, camera-inspected the line, and hydro-jetted it clear. Professional, clean, and knew exactly how to handle old cast iron.',
    rating: 5,
    service: 'Emergency Drain Cleaning',
  },
  {
    id: 2,
    name: 'David K.',
    title: 'Ballard',
    text: 'Tree roots had destroyed our clay sewer lateral. They used trenchless pipe bursting and replaced the entire line in one day without tearing up our garden. Upfront pricing, zero surprises.',
    rating: 5,
    service: 'Sewer Line Replacement',
  },
  {
    id: 3,
    name: 'Sarah L.',
    location: 'Capitol Hill',
    text: 'We have a 1905 Capitol Hill condo with original galvanized plumbing. They repiped our kitchen and bathroom in two days, protected our floors, and the water pressure is finally normal. True old-home specialists.',
    rating: 5,
    service: 'General Plumbing / Repipe',
  },
  {
    id: 4,
    name: 'Michael R.',
    location: 'West Seattle',
    text: 'Found a hidden slab leak that two other plumbers missed using thermal imaging. Fixed it with a minimal access point. Saved us thousands and preserved our foundation. Best plumber in West Seattle.',
    rating: 5,
    service: 'Leak Detection',
  },
  {
    id: 5,
    name: 'Amanda T.',
    location: 'Fremont',
    text: 'Called for emergency drain cleaning before a dinner party. They were in and out in 45 minutes, wore shoe covers, and left the kitchen spotless. Our Fremont troll would approve of this service!',
    rating: 5,
    service: 'Drain Cleaning',
  },
  {
    id: 6,
    name: 'Robert C.',
    location: 'Green Lake',
    text: 'Winter freeze caused our outdoor spigot to burst. They winterized the entire system and replaced the frost-proof valve. Great preventive advice and fast work near Green Lake.',
    rating: 5,
    service: 'Emergency / Winterization',
  },
];

export const TRUST_SIGNALS = [
  { label: 'Licensed & Insured', icon: 'ShieldCheck' },
  { label: '20+ Years Experience', icon: 'Award' },
  { label: 'Same-Day Service', icon: 'Clock' },
  { label: 'Upfront Pricing', icon: 'BadgeDollarSign' },
  { label: '5-Star Rated', icon: 'Star' },
];
