import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import FindUs from "../pages/FindUs";
import Menu from "../pages/Menu";
import Reviews from "../pages/Reviews";
import Catering from "../pages/Catering";
import Story from "../pages/Story";

const routes = {
  home: Home,
  "find-us": FindUs,
  menu: Menu,
  reviews: Reviews,
  catering: Catering,
  story: Story,
};

function getRoute() {
  const value = window.location.hash.replace(/^#\/?/, "");
  return routes[value] ? value : "home";
}

export default function Layout() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHash = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", handleHash);
    handleHash();
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigate = (page) => {
    const target = routes[page] ? page : "home";
    window.location.hash = target;
  };

  const Page = routes[route];

  return (
    <>
      <Navbar currentPage={route} onNavigate={navigate} />
      <main>
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </>
  );
}
