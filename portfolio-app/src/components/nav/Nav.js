import React from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";

export default function Nav() {
  const router = useRouter();

  const getNavPositionClass = () => {
    switch (router.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (router.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link href={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };
  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink(
        "/",
        "/assets/astronaut-helmet.png",
        "astronaut helmet icon",
        "nav-about"
      )}
      {renderNavLink("/skills", "/assets/dead-eye.png", "deadEye icon", "nav-skills")}
      {renderNavLink("/projects", "/assets/stack.png", "stack icon", "nav-projects")}
      {renderNavLink("/contact", "/assets/envelope.png", "envelope icon", "nav-contact")}
    </nav>
  );
}