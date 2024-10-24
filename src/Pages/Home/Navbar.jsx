import { useState, useEffect} from "react";
import { Link } from "react-scroll";

/**
 * A navigation bar component. It will be visible if the user has scrolled down or if the user is on a mobile device.
 * It will be hidden if the user is on a desktop and has scrolled up.
 * It will stay visible if the user is on a mobile device and has scrolled up.
 * The navbar also has a responsive behavior on resize.
 */
function Navbar() {
    const [navActive, setNavActive] = useState(false);
    /**
     * Toggles the navigation bar's active state.
     * If the navigation bar is currently active, it will be deactivated and vice versa.
     */
    const toggleNav = () => {
        setNavActive(!navActive);
    };

    /**
     * Closes the navigation menu by setting its active state to false.
     */
    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        /**
         * Handles the window resize event.
         * Closes the navigation menu if the window's inner width is less than or equal to 500 pixels.
         */
        const handleResize = () => {
            if (window.innerWidth <=500) {
                closeMenu(true);
            };
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
        closeMenu;
        }
    }, []);

    useEffect(() => {
        /**
         * Handles the window scroll event.
         * Sets the navigation bar's active state to true if the user has scrolled down (i.e., window.scrollY > 0).
         * Sets the navigation bar's active state to false if the user is at the top of the page (i.e., window.scrollY <= 0).
         */
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavActive(true);
            } else {
                setNavActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
          <img src="./img/logo.svg" alt="Logoipsum" />
        </div>
        <a
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="navbar--content"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="navbar--content"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <Link
          onClick={closeMenu}
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="testimonial"
          className="btn btn-outline-primary"
        >
          Contact Me
        </Link>
      </nav>
    );
}

export default Navbar;