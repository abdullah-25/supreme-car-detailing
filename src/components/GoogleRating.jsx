// components/GoogleRating.jsx
export default function GoogleRating() {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
      <svg
        viewBox="0 0 250 50"
        className="h-12 w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Google "G" Logo */}
        <circle cx="25" cy="25" r="20" fill="#4285F4" />
        <circle cx="25" cy="25" r="18" fill="white" />
        <circle cx="25" cy="25" r="15" fill="#4285F4" />

        {/* Rating Text */}
        <text x="60" y="32" fontSize="24" fontWeight="bold" fill="#333333">
          4.9
        </text>

        {/* Stars */}
        {[0, 1, 2, 3, 4].map((index) => (
          <path
            key={index}
            d="M0 0l2.909 6.546L10 7.454l-5 4.909l1.182 6.891L1.363 15l-4.819 4.254l1.182-6.891l-5-4.909l7.091-0.908L1.363 0z"
            transform={`translate(${120 + index * 25}, 15) scale(1.2)`}
            fill="#FBB03B"
          />
        ))}

        {/* "on Google Reviews" text */}
        <text x="120" y="45" fontSize="14" fill="#666666">
          on Google Reviews
        </text>
      </svg>
    </div>
  );
}
