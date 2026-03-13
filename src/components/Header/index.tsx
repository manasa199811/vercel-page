import React, { useState, useEffect } from "react";
import "./Header.css";
import ProductsMenu from "./MegaMenu/ProductsMenu";
import ResourcesMenu from "./MegaMenu/ResourcesMenu";
import SolutionsMenu from "./MegaMenu/SolutionsMenu";
import logoDarkSrc from "../../assets/logo-dark.svg";
import logoLightSrc from "../../assets/logo.svg";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  let closeTimer: any;

  const openMenu = (menu: string) => {
    clearTimeout(closeTimer);
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    closeTimer = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(prefersDark ? "dark" : "light");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <div
      className={`header-wrapper ${scrolled ? "" : "transparentUntilScroll"}`}
      data-navigation-header=""
      data-scrolled={scrolled}
      id="header-wrapper"
    >
      <header className="header" data-cdp-scope='{"name":"header"}'>
        <div className="header-container">
          <a
            href="/home"
            className="logo-link"
            data-cdp-track='{"event":"header_logo_clicked"}'
          >
            <img
              alt="Vercel Logotype"
              className={`logo-dark ${theme === "dark" ? "visible" : "hidden"}`}
              loading="eager"
              width="91"
              height="18"
              src={logoDarkSrc}
            />
            <img
              alt="Vercel Logotype"
              className={`logo-light ${theme === "light" ? "visible" : "hidden"}`}
              loading="eager"
              width="91"
              height="18"
              src={logoLightSrc}
            />
          </a>

          <nav className="nav-menu">
            <ul className="nav-list">
              <li
                className={`nav-item ${activeMenu === "products" ? "active" : ""}`}
                onMouseEnter={() => openMenu("products")}
                onMouseLeave={closeMenu}
              >
                <button className="nav-trigger">
                  Products
                  <svg
                    className="chevron"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                {activeMenu === "products" && (
                  <ProductsMenu
                    closeMenu={closeMenu}
                    openMenu={() => openMenu("products")}
                  />
                )}
              </li>
              <li
                className={`nav-item ${activeMenu === "resources" ? "active" : ""}`}
                onMouseEnter={() => openMenu("resources")}
                onMouseLeave={closeMenu}
              >
                <button className="nav-trigger">
                  Resources
                  <svg
                    className="chevron"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                {activeMenu === "resources" && (
                  <ResourcesMenu
                    closeMenu={closeMenu}
                    openMenu={() => openMenu("resources")}
                  />
                )}
              </li>
              <li
                className={`nav-item ${activeMenu === "solutions" ? "active" : ""}`}
                onMouseEnter={() => openMenu("solutions")}
                onMouseLeave={closeMenu}
              >
                <button className="nav-trigger">
                  Solutions
                  <svg
                    className="chevron"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                {activeMenu === "solutions" && (
                  <SolutionsMenu
                    closeMenu={closeMenu}
                    openMenu={() => openMenu("solutions")}
                  />
                )}
              </li>
              <li className="nav-item">
                <a href="/enterprise" className="nav-link">
                  Enterprise
                </a>
              </li>
              <li className="nav-item">
                <a href="/pricing" className="nav-link">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="ask-ai-btn">Log In</button>
            <a href="/dashboard" className="dashboard-btn">
              Sign In
            </a>

            <button className="mobile-menu-btn" aria-label="Menu">
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
