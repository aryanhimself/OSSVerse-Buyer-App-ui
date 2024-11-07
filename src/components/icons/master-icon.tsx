const MasterIcon = ({ ...props }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      aria-label="Master Icon"
      {...props}
    >
      <title>Mater</title>
      <rect fill="#252525" height="16" rx="2" width="24" />
      <circle cx="9" cy="8" fill="#eb001b" r="5" />
      <circle cx="15" cy="8" fill="#f79e1b" r="5" />
      <path
        d="M12 4c1.214.912 2 2.364 2 4s-.786 3.088-2 4c-1.214-.912-2-2.364-2-4s.786-3.088 2-4z"
        fill="#ff5f00"
      />
    </svg>
  );
};

export default MasterIcon;