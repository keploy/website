import { useCallback, useRef, useEffect } from "react";

interface UseFullScreenProps {
  onEnter?: () => void; // Function to call when entering fullscreen
  onExit?: () => void; // Function to call when exiting fullscreen
}

function useFullScreen({ onEnter, onExit }: UseFullScreenProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleFullScreenChange = useCallback(() => {
    if (!document.fullscreenElement && onExit) {
      onExit();
    }
  }, [onExit]);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange); // For Safari
    document.addEventListener("mozfullscreenchange", handleFullScreenChange); // For Firefox
    document.addEventListener("MSFullscreenChange", handleFullScreenChange); // For IE/Edge

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullScreenChange);
    };
  }, [handleFullScreenChange]);

  const enterFullScreen = useCallback(() => {
    if (elementRef.current) {
      const element = elementRef.current as HTMLDivElement & {
        mozRequestFullScreen?: () => void;
        webkitRequestFullscreen?: () => void;
        msRequestFullscreen?: () => void;
      };
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }

      if (onEnter) {
        onEnter(); // Call the onEnter function if provided
      }
    }
  }, [onEnter]);

  const exitFullScreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }

    if (onExit) {
      onExit(); // Call the onExit function if provided
    }
  }, [onExit]);

  return { elementRef, enterFullScreen, exitFullScreen };
}

export default useFullScreen;
