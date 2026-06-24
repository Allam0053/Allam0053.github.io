// 1. One-off check function
function isLandscape() {
  if (screen && screen.orientation) {
    return screen.orientation.type.startsWith("landscape");
  }
  // Fallback for older browsers
  return window.matchMedia("(orientation: landscape)").matches;
}


// 2. Listening for changes
// if (screen && screen.orientation) {
//   screen.orientation.addEventListener("change", (e: CustomEvent<{ type: string }>) => {
//     const type = e.target?.type; // e.g., "landscape-primary"
//     if (type.startsWith("landscape")) {
//       console.log(`Landscape mode activated: ${type}`);
//     } else {
//       console.log(`Portrait mode activated: ${type}`);
//     }
//   });
// }

import { useState, useEffect } from "react";

function useIsLandscape() {
  // Helper helper to get initial orientation state safely
  const checkLandscape = () => {
    if (typeof window !== "undefined" && window.screen?.orientation) {
      return window.screen.orientation.type.startsWith("landscape");
    }
    // Fallback for SSR or older browsers
    return typeof window !== "undefined" && window.matchMedia("(orientation: landscape)").matches;
  };

  const [isLandscape, setIsLandscape] = useState(checkLandscape);

  useEffect(() => {
    // Check if the modern Screen Orientation API is supported
    if (!window.screen?.orientation) return;

    const orientationAPI = window.screen.orientation;

    const handleChange = () => {
      setIsLandscape(orientationAPI.type.startsWith("landscape"));
    };

    // Listen for orientation changes
    orientationAPI.addEventListener("change", handleChange);

    // Clean up event listener on component unmount
    return () => {
      orientationAPI.removeEventListener("change", handleChange);
    };
  }, []);

  return isLandscape;
}

export default useIsLandscape;