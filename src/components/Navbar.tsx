import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  lazy,
  Suspense,
  memo,
} from "react";

// ── Lazy load ContactForm — heavy component, don't block initial render
const ContactForm = lazy(() => import('./ContactForm'));

import { siteConfig } from "../config/Company";


interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

import Logo from "../assets/logo/transparentIco.png";

const Navbar: React.FC<NavbarProps> = ({ open, setOpen, successCondition }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav]       = useState(false);
  const rafRef = useRef<number>(0);   // track rAF id for cleanup

  const location    = useLocation();
  const currentPath = location.pathname;

  // ── FIX 1: Throttle scroll with requestAnimationFrame ──────────────
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return; // already queued, skip
      rafRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
        rafRef.current = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true }); // passive=true for smoother scroll
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []); // empty deps — handler never changes

  // ── FIX 2: Dialog auto-open timer — stable, no re-trigger ──────────
  // useEffect(() => {
  //   const timer = setTimeout(() => setOpen(true), 2000);
  //   return () => clearTimeout(timer);
  // }, []); // intentionally empty — run only once on mount
  
useEffect(() => {
  const timer = setTimeout(() => {
    setOpen(true);
  }, 5000);

  return () => clearTimeout(timer);
}, []);

  // ── FIX 3: Stable callbacks — no new function every render ─────────
  const closeNav       = useCallback(() => setOpenNav(false), []);
  const handleClickOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose     = useCallback(() => setOpen(false), [setOpen]);
  const toggleNav       = useCallback(() => setOpenNav(prev => !prev), []);

  // Close mobile nav on route change
  useEffect(() => { setOpenNav(false); }, [location.pathname]);

  return (
    <>
      <header>

        {/* ── Top Bar ── */}
        <div className="top-bar">
          <div className="top-left">
            <a className="phone" href="tel:+919422799477">
              <LocalPhoneIcon />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              className="whatsapp"
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="top-center">
            <a className="email" href={`mailto:${siteConfig.email.sales}`}>
              <MailOutlineIcon />
              <span>{siteConfig.email.sales}</span>
            </a>
            <a className="email" href={`mailto:${siteConfig.email.info}`}>
              <MailOutlineIcon />
              <span>{siteConfig.email.info}</span>
            </a>
          </div>

          <div className="top-right gstin">
            <VerifiedIcon />
            GSTIN: {siteConfig.legal.GSTIN}
          </div>
        </div>

        {/* ── Main Nav ── */}
        <nav className={isScrolled ? "scrolled" : ""}>

          {/* ── FIX 4: Logo with explicit width/height to prevent CLS ── */}
          <div className="logo">
            <Link to="/">
              <img
                src={Logo}
                alt="Gati Shifting Packers Logo"
                title="Gati Shifting Logo"
                loading="lazy"
                width={100}
                height={40}
              />
            </Link>
          </div>

          <ul className={openNav ? "active" : "inactive"}>
            <li>
              <Link
                className={currentPath === "/" ? "active" : ""}
                to="/"
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={currentPath === "/about" ? "active" : ""}
                to="/about"
                onClick={closeNav}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={currentPath === "/review" ? "active" : ""}
                to="/review"
                onClick={closeNav}
              >
                Review
              </Link>
            </li>
            <li>
              <Link
                className={currentPath === "/contact-us" ? "active" : ""}
                to="/contact-us"
                onClick={closeNav}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className={currentPath.startsWith("/services") ? "active" : ""}
                to="/services"
                onClick={closeNav}
              >
                Services
                <ArrowDropDownIcon />
              </Link>
            </li>

            {/* ── FIX 5: Direct class on li instead of :has() selector ── */}
            <li className="track-item">
              <Link
                className={currentPath === "/track-order" ? "active" : ""}
                to="/track-order"
                onClick={closeNav}
              >
                <FiberManualRecordIcon className="track-dot" aria-hidden="true" />
                Track
              </Link>
            </li>
          </ul>

          <div className="get-in-touch-btns">
            <a href="tel:+919422799477" aria-label="Call us">
              <LocalPhoneIcon />
            </a>
            <button
              aria-label="Get in touch with Gati Shifting Packers"
              onClick={handleClickOpen}
            >
              <ChatBubbleOutlineIcon />
              Get In Touch
            </button>
            <button className="nav-Toggle-Btn" onClick={toggleNav} aria-label={openNav ? "Close menu" : "Open menu"}>
              {openNav ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

        </nav>
      </header>

      {/* ── FIX 6: Conditional mount — Dialog only renders when needed ── */}
      {open && (
        <Dialog open={open} onClose={handleClose} maxWidth="xs">
          <DialogActions>
            <Button onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </Button>
          </DialogActions>
          <DialogContent sx={{ padding: '0 !important' }}>
            {/* Suspense fallback keeps UI responsive while ContactForm loads */}
            <Suspense fallback={<div style={{ minHeight: 200 }} />}>
              <ContactForm
                closeControl={handleClose}
                showDetail={false}
                successCondition={successCondition}
              />
            </Suspense>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

// ── FIX 7: React.memo — skip re-render if props haven't changed ───────
export default memo(Navbar);