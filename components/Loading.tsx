import { useRouter } from "next/router";
import { useEffect } from "react";

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: any) => {
      document.getElementById("loading")?.classList.remove("hidden");
    };
    const handleComplete = (url: any) => {
      document.getElementById("loading")?.classList.add("hidden");
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <div id="loading" className="loading-bg card hidden">
      <div className="loading-indicator"></div>
    </div>
  );
};

export default Loading;
