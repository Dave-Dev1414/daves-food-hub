import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Delivery from "../components/Delivery";
import MenuTiles from "../components/MenuTiles";
import Ingredients from "../components/Ingredients";
import Family from "../components/Family";
import Footer from "../components/Footer";
import ReviewsPage from "../pages/ReviewsPage";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState("home");

  // Sync with browser hash if user navigates or reloads
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#reviews") {
        setCurrentPage("reviews");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setCurrentPage("home");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleNavigate = (page, targetId) => {
    setCurrentPage(page);
    if (page === "reviews") {
      window.location.hash = "reviews";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (targetId && targetId.startsWith("#") && targetId !== "#reviews") {
        window.location.hash = targetId;
        setTimeout(() => {
          const el = document.querySelector(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        window.location.hash = "";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {currentPage === "reviews" ? (
          <ReviewsPage />
        ) : (
          <>
            <Hero onNavigate={handleNavigate} />
            <Delivery />
            <MenuTiles />
            <Ingredients />
            <Family />
          </>
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
