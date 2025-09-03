"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function InstallPrompt() {
  const [prompt, setPrompt] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const pathname = usePathname();

  // Detect iOS Safari
  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;

    if (isStandalone) {
      setVisible(false); // Don't show if app is already installed
      return;
    }

    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isIOS && isSafari && pathname === "/") {
      setIsIos(true);
      setVisible(true);
    }
  }, [pathname]);

 // Android: Handle beforeinstallprompt
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();

      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;

      if (isStandalone) return; // Skip showing prompt if installed

      setPrompt(e);
      if (pathname === "/") setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, [pathname]);

  // Lock scroll when visible
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  const handleInstall = () => {
    if (!prompt) return;
    prompt.prompt();
    prompt.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        console.log("App installed");
      }
      setPrompt(null);
      setVisible(false);
    });
  };

  const handleClose = () => {
    setPrompt(null);
    setVisible(false);
    setIsIos(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === "install-backdrop") {
      handleClose();
    }
  };

  if (!visible || pathname !== "/") return null;

  console.log("Standalone mode:", window.navigator.standalone);

 return (
  <div
    id="install-backdrop"
    onClick={handleBackdropClick}
    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-baseline justify-center pt-12"
  >
    <div className="relative flex justify-around items-baseline w-10/12 max-w-sm bg-white rounded-2xl shadow-2xl px-2 pt-0 pb-4 animate-slideDown space-y-4">

      {/* iOS Prompt */}
      {isIos ? (
        <>
                 <div className="flex flex-col items-center space-y-4">
         <h2 className="text-xl font-bold text-center text-gray-900 pt-2">
            Install Our App
          </h2>
        <p className="text-center text-sm text-gray-600">
          Tap the <strong>Share</strong> icon <span className="text-xl">🔗</span> and choose{" "}
          <strong>Add to Home Screen</strong>
        </p>
        </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold text-center text-gray-900">
            Install Our App
          </h2>
          <h2
            onClick={handleInstall}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 shadow-md cursor-pointer"
          >
            Install Now
          </h2>
          </>
      )}
    </div>
  </div>
);
}
