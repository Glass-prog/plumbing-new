export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Shield */}
      <path 
        d="M50 5 L90 20 V45 C90 70 50 95 50 95 C50 95 10 70 10 45 V20 L50 5Z" 
        fill="url(#shieldGradient)" 
        stroke="url(#strokeGradient)" 
        strokeWidth="2"
      />
      
      {/* Inner Alpha Symbol */}
      <path 
        d="M50 25 L65 65 H55 L52 55 H48 L45 65 H35 L50 25Z" 
        fill="white"
        fillOpacity="0.95"
      />
      <path 
        d="M46 48 H54 L50 35 L46 48Z" 
        fill="url(#shieldGradient)"
      />
      
      {/* Lightning Bolt Accent */}
      <path 
        d="M68 35 L75 30 L72 38 L80 33 L65 50 L68 40 L60 45 L68 35Z" 
        fill="#fbbf24"
        fillOpacity="0.9"
      />
      
      <defs>
        <linearGradient id="shieldGradient" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="strokeGradient" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
