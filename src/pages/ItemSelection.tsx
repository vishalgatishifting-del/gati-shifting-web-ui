import { useState, useEffect } from "react";
import "./ItemSelection.scss";
import DropdownSection from "./DropdownSection";
import Navbar from "../components/Navbar";

// ── Furniture / Room icons ──
import EventSeatIcon from "@mui/icons-material/EventSeat";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import TableBarIcon from "@mui/icons-material/TableBar";
import TvIcon from "@mui/icons-material/Tv";
import SpeakerIcon from "@mui/icons-material/Speaker";
import WeekendIcon from "@mui/icons-material/Weekend";         // sofa
import HotelIcon from "@mui/icons-material/Hotel";             // double bed
import CheckroomIcon from "@mui/icons-material/Checkroom";     // wardrobe

// ── Kitchen ──
import KitchenIcon from "@mui/icons-material/Kitchen";         // fridge
import MicrowaveIcon from "@mui/icons-material/Microwave";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import DishwasherIcon from "@mui/icons-material/CleanHands";
import InventoryIcon from "@mui/icons-material/Inventory";     // utensil box

// ── Living Room extras ──
// import StorageIcon from "@mui/icons-material/Storage";         // cabinet
import LiveTvIcon from "@mui/icons-material/LiveTv";           // tv stand
import ShoesIcon from "@mui/icons-material/DirectionsWalk";
import LiquorIcon from "@mui/icons-material/Liquor";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings"; // showcase
import LampIcon from "@mui/icons-material/Highlight";
import IronIcon from "@mui/icons-material/Iron";
import WatchIcon from "@mui/icons-material/WatchLater";
import DecoIcon from "@mui/icons-material/EmojiNature";

// ── Others ──
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WaterIcon from "@mui/icons-material/Water";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";

// ── Step / UI icons ──
import InfoIcon from "@mui/icons-material/Info";
import CategoryIcon from "@mui/icons-material/Category";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShieldIcon from "@mui/icons-material/Shield";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StarIcon from "@mui/icons-material/Star";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PinDropIcon from "@mui/icons-material/PinDrop";

import { type SvgIconComponent } from "@mui/icons-material";
import privateAPI from "../api/privateAxios";

/* ─────────────────────────────────────────
   INTERFACES
───────────────────────────────────────── */
interface Item { name: string; quantity: number; icon?: SvgIconComponent; }
interface Section { title: string; items: Item[]; }
interface Category { name: string; sections: Section[]; }
interface NavbarProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}
interface MovingDetails { name: string; phone: string; from: string; to: string; }
interface FormErrors { name?: string; phone?: string; from?: string; to?: string; }

/* ─────────────────────────────────────────
   DATA  (all items now have icons)
───────────────────────────────────────── */
const data: Category[] = [
    {
        name: "Living Room",
        sections: [
            {
                title: "Chairs",
                items: [
                    { name: "Plastic/Folding Chair", quantity: 0, icon: EventSeatIcon },
                    { name: "Dining Table Chairs",   quantity: 0, icon: TableRestaurantIcon },
                    { name: "Office Chair",           quantity: 0, icon: ChairAltIcon },
                    { name: "Rocking Chair",          quantity: 0, icon: BedroomBabyIcon },
                ],
            },
            {
                title: "Tables",
                items: [
                    { name: "Center Table",  quantity: 0, icon: TableBarIcon },
                    { name: "Dining Table",  quantity: 0, icon: TableRestaurantIcon },
                    { name: "Coffee Table",  quantity: 0, icon: TableBarIcon },
                    { name: "Side Table",    quantity: 0, icon: TableBarIcon },
                ],
            },
            {
                title: "TV / Monitor",
                items: [
                    { name: "Up to 28 inch",  quantity: 0, icon: TvIcon },
                    { name: "29 to 43 inch",  quantity: 0, icon: TvIcon },
                    { name: "49 to 55 inch",  quantity: 0, icon: TvIcon },
                    { name: "Above 55 inch",  quantity: 0, icon: TvIcon },
                    { name: "Home Theater",   quantity: 0, icon: SpeakerIcon },
                ],
            },
            {
                title: "Cabinet / Storage",
                items: [
                    { name: "TV Stand / Trolley", quantity: 0, icon: LiveTvIcon },
                    { name: "Shoe Rack",           quantity: 0, icon: ShoesIcon },
                    { name: "Bar Unit",            quantity: 0, icon: LiquorIcon },
                    { name: "Showcase Unit",       quantity: 0, icon: DisplaySettingsIcon },
                ],
            },
            {
                title: "Sofa",
                items: [
                    { name: "Single Seater",  quantity: 0, icon: WeekendIcon },
                    { name: "Double Seater",  quantity: 0, icon: WeekendIcon },
                    { name: "3 Seater",       quantity: 0, icon: WeekendIcon },
                    { name: "4 Seater",       quantity: 0, icon: WeekendIcon },
                    { name: "5 Seater",       quantity: 0, icon: WeekendIcon },
                    { name: "6 Seater",       quantity: 0, icon: WeekendIcon },
                    { name: "Recliner",       quantity: 0, icon: ChairAltIcon },
                ],
            },
            {
                title: "Home Utility",
                items: [
                    { name: "Decorative Item", quantity: 0, icon: DecoIcon },
                    { name: "Lamp",            quantity: 0, icon: LampIcon },
                    { name: "Iron Stand",      quantity: 0, icon: IronIcon },
                    { name: "Wall Clock",      quantity: 0, icon: WatchIcon },
                ],
            },
        ],
    },
    {
        name: "Bedroom",
        sections: [
            {
                title: "Beds",
                items: [
                    { name: "Double Bed",    quantity: 0, icon: HotelIcon },
                ],
            },
            {
                title: "Mattress",
                items: [
                    { name: "Double Mattress", quantity: 0, icon: HotelIcon },
                ],
            },
            {
                title: "Wardrobe",
                items: [
                    { name: "2 Door Wardrobe", quantity: 0, icon: CheckroomIcon },
                    { name: "3 Door Wardrobe", quantity: 0, icon: CheckroomIcon },
                    { name: "4 Door Wardrobe", quantity: 0, icon: CheckroomIcon },
                ],
            },
        ],
    },
    {
        name: "Kitchen",
        sections: [
            {
                title: "Appliances",
                items: [
                    { name: "Refrigerator",    quantity: 0, icon: KitchenIcon },
                    { name: "Microwave",       quantity: 0, icon: MicrowaveIcon },
                    { name: "Washing Machine", quantity: 0, icon: LocalLaundryServiceIcon },
                    { name: "Dishwasher",      quantity: 0, icon: DishwasherIcon },
                ],
            },
            {
                title: "Utensils",
                items: [
                    { name: "Small Utensils Box", quantity: 0, icon: InventoryIcon },
                    { name: "Large Utensils Box", quantity: 0, icon: InventoryIcon },
                ],
            },
        ],
    },
    {
        name: "Others",
        sections: [
            {
                title: "Outdoor",
                items: [
                    { name: "Cycle",          quantity: 0, icon: DirectionsBikeIcon },
                    { name: "Scooter",        quantity: 0, icon: TwoWheelerIcon },
                    { name: "Gym Equipment",  quantity: 0, icon: FitnessCenterIcon },
                ],
            },
            {
                title: "Miscellaneous",
                items: [
                    { name: "Water Tank",        quantity: 0, icon: WaterIcon },
                    { name: "Inverter / Battery", quantity: 0, icon: BatteryFullIcon },
                ],
            },
        ],
    },
];

const CATEGORY_META: Record<string, { icon: React.ReactNode; color: string }> = {
    "Living Room": { icon: <HomeIcon fontSize="small" />,      color: "#4f6ef7" },
    Kitchen:       { icon: <KitchenIcon fontSize="small" />,   color: "#e67e22" },
    Others:        { icon: <MoreHorizIcon fontSize="small" />, color: "#27ae60" },
};

/* ─────────────────────────────────────────
   TRUST BADGES  (Step 1 hero)
───────────────────────────────────────── */
const TRUST_BADGES = [
    { icon: <LocalShippingIcon />, label: "Pan-India Coverage" },
    { icon: <ShieldIcon />,        label: "Insured Shifting" },
    { icon: <SupportAgentIcon />,  label: "24/7 Support" },
];

const STATS = [
    { value: "50,000+", label: "Happy Moves" },
    { value: "4.9★",    label: "Avg. Rating" },
    { value: "200+",    label: "Cities Served" },
];

/* ─────────────────────────────────────────
   VALIDATION
───────────────────────────────────────── */
const PHONE_REGEX = /^[6-9]\d{9}$/;
const NAME_REGEX  = /^[a-zA-Z\s]{2,60}$/;
const sanitize    = (v: string) => v.replace(/<[^>]*>?/gm, "").replace(/[<>"'`\\]/g, "");

function validateDetails(d: MovingDetails): FormErrors {
    const e: FormErrors = {};
    const name  = sanitize(d.name.trim());
    const phone = sanitize(d.phone.trim());
    const from  = sanitize(d.from.trim());
    const to    = sanitize(d.to.trim());

    if (!name)                      e.name  = "Name is required.";
    else if (!NAME_REGEX.test(name)) e.name  = "Letters only, 2–60 chars.";

    if (!phone)                          e.phone = "Phone is required.";
    else if (!PHONE_REGEX.test(phone))   e.phone = "Valid 10-digit Indian mobile number.";

    if (!from)                e.from = "Pickup location required.";
    else if (from.length < 3) e.from = "At least 3 characters.";

    if (!to)                e.to = "Drop location required.";
    else if (to.length < 3) e.to = "At least 3 characters.";
    else if (from.toLowerCase() === to.toLowerCase()) e.to = "Pickup & drop can't be same.";

    return e;
}

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const MultiStepMoving: React.FC<NavbarProps> = ({ open, setOpen, successCondition }) => {
    const [step, setStep]               = useState(1);
    const [categories, setCategories]   = useState<Category[]>(data);
    const [activeTab, setActiveTab]     = useState("Living Room");
    const [formErrors, setFormErrors]   = useState<FormErrors>({});
    const [touched, setTouched]         = useState<Record<string, boolean>>({});
    const [submitting, setSubmitting]   = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const [movingDetails, setMovingDetails] = useState<MovingDetails>({
        name: "", phone: "", from: "", to: "",
    });

    useEffect(() => { setFormErrors(validateDetails(movingDetails)); }, [movingDetails]);

    const isStep1Valid = () => Object.keys(validateDetails(movingDetails)).length === 0;
    const totalItems   = categories.reduce((a, c) =>
        a + c.sections.reduce((b, s) => b + s.items.reduce((n, i) => n + i.quantity, 0), 0), 0);
    const isStep2Valid = () => totalItems > 0;

    const selectedItems = categories.flatMap(cat =>
        cat.sections.flatMap(sec =>
            sec.items.filter(i => i.quantity > 0).map(i => ({
                category: cat.name, section: sec.title, name: i.name, quantity: i.quantity,
            }))
        )
    );

    const goToStep = (t: number) => {
        if (t === 2 && !isStep1Valid()) { setTouched({ name: true, phone: true, from: true, to: true }); return; }
        if (t === 3 && !isStep2Valid()) return;
        setStep(t);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleChange = (field: keyof MovingDetails, raw: string) => {
        const value = sanitize(raw);
        if (field === "phone" && /\D/.test(value)) return;
        setMovingDetails(p => ({ ...p, [field]: value }));
    };

    const handleBlur = (f: string) => setTouched(p => ({ ...p, [f]: true }));

    const updateQuantity = (catName: string, secTitle: string, itemName: string, change: number) => {
        setCategories(prev => prev.map(cat =>
            cat.name !== catName ? cat : {
                ...cat, sections: cat.sections.map(sec =>
                    sec.title !== secTitle ? sec : {
                        ...sec, items: sec.items.map(item =>
                            item.name !== itemName ? item : {
                                ...item, quantity: Math.max(0, Math.min(99, item.quantity + change)),
                            }
                        ),
                    }
                ),
            }
        ));
    };

    const handleSubmit = async () => {
        if (!isStep1Valid() || !isStep2Valid() || submitting) return;
        setSubmitting(true);
        try {
            await privateAPI.post("/api/items/submit-items", {
                movingDetails: {
                    name:  sanitize(movingDetails.name.trim()),
                    phone: sanitize(movingDetails.phone.trim()),
                    from:  sanitize(movingDetails.from.trim()),
                    to:    sanitize(movingDetails.to.trim()),
                },
                items: selectedItems,
            });
            setSubmitSuccess(true);
            successCondition(true);
        } catch { alert("Submission failed. Please try again."); }
        finally { setSubmitting(false); }
    };

    /* ── SUCCESS ── */
    if (submitSuccess) return (
        <>
            <Navbar successCondition={successCondition} setOpen={setOpen} open={open} />
            <div className="ms-page">
                <div className="ms-success">
                    <div className="ms-success__icon"><CheckCircleOutlineIcon sx={{ fontSize: 64 }} /></div>
                    <h1>You're all set!</h1>
                    <p>We've received your moving request.<br />Our team will call <strong>+91 {movingDetails.phone}</strong> within 30 minutes.</p>
                    <button className="ms-btn ms-btn--primary" onClick={() => {
                        setSubmitSuccess(false); setStep(1); setCategories(data);
                        setMovingDetails({ name: "", phone: "", from: "", to: "" }); setTouched({});
                    }}>Book Another Move</button>
                </div>
            </div>
        </>
    );

    /* ── MAIN ── */
    return (
        <>
            <Navbar successCondition={successCondition} setOpen={setOpen} open={open} />
            <div className="ms-page">

                {/* STEPPER */}
                <div className="ms-stepper">
                    <div className="ms-stepper__track">
                        <div className="ms-stepper__fill" style={{ width: `${(step - 1) * 50}%` }} />
                    </div>
                    {[
                        { label: "Your Details", Icon: InfoIcon },
                        { label: "Add Items",    Icon: CategoryIcon },
                        { label: "Confirm",      Icon: SendIcon },
                    ].map(({ label, Icon }, idx) => {
                        const num = idx + 1;
                        return (
                            <button
                                key={label}
                                className={`ms-stepper__step ${step === num ? "is-active" : ""} ${step > num ? "is-done" : ""}`}
                                onClick={() => goToStep(num)}
                                aria-current={step === num ? "step" : undefined}
                            >
                                <span className="ms-stepper__circle">
                                    {step > num ? <CheckCircleOutlineIcon fontSize="small" /> : <Icon fontSize="small" />}
                                </span>
                                <span className="ms-stepper__label">{label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* ══════════ STEP 1 ══════════ */}
                {step === 1 && (
                    <div className="ms-step1-layout">

                        {/* LEFT — Hero panel */}
                        <div className="ms-hero-panel">
                            <div className="ms-hero-panel__inner">
                                <div className="ms-hero-panel__truck">
                                    <LocalShippingIcon sx={{ fontSize: 56 }} />
                                </div>
                                <h1 className="ms-hero-panel__title">
                                    Shifting made<br /><span>effortless.</span>
                                </h1>
                                <p className="ms-hero-panel__sub">
                                    Book a professional home relocation in under 2 minutes. Trained packers, real-time tracking &amp; zero damage guarantee.
                                </p>

                                {/* Stats row */}
                                <div className="ms-hero-stats">
                                    {STATS.map(s => (
                                        <div key={s.label} className="ms-hero-stats__item">
                                            <span className="ms-hero-stats__val">{s.value}</span>
                                            <span className="ms-hero-stats__lbl">{s.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Trust badges */}
                                <div className="ms-trust-badges">
                                    {TRUST_BADGES.map(b => (
                                        <div key={b.label} className="ms-trust-badge">
                                            <span className="ms-trust-badge__icon">{b.icon}</span>
                                            <span>{b.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Review strip */}
                                <div className="ms-review-strip">
                                    <div className="ms-review-strip__avatars">
                                        {["R","P","A","M"].map((l, i) => (
                                            <span key={i} className="ms-review-strip__av" style={{ zIndex: 4 - i }}>{l}</span>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="ms-review-strip__stars">
                                            {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ fontSize: 14 }} />)}
                                        </div>
                                        <span className="ms-review-strip__txt">Trusted by 50,000+ families</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — Form */}
                        <div className="ms-form-side">
                            <div className="ms-card ms-form-card">
                                <div className="ms-form-card__head">
                                    <span className="ms-chip">Step 1 of 3</span>
                                    <h2>Get your free quote</h2>
                                    <p>Fill in details &amp; we'll call you within 15 min</p>
                                </div>
                                <div className="ms-form-body">
                                    {/* Name */}
                                    <div className={`ms-field ${touched.name ? (formErrors.name ? "ms-field--error" : "ms-field--ok") : ""}`}>
                                        <label htmlFor="f-name">
                                            <EmojiPeopleIcon fontSize="small" /> Full Name
                                        </label>
                                        <input id="f-name" type="text" placeholder="Rahul Sharma"
                                            maxLength={60} autoComplete="name"
                                            value={movingDetails.name}
                                            onChange={e => handleChange("name", e.target.value)}
                                            onBlur={() => handleBlur("name")} />
                                        {touched.name && formErrors.name && <span className="ms-field__err">{formErrors.name}</span>}
                                    </div>

                                    {/* Phone */}
                                    <div className={`ms-field ${touched.phone ? (formErrors.phone ? "ms-field--error" : "ms-field--ok") : ""}`}>
                                        <label htmlFor="f-phone">Mobile Number</label>
                                        <div className="ms-prefix-wrap">
                                            <span className="ms-prefix">+91</span>
                                            <input id="f-phone" type="tel" placeholder="9876543210"
                                                maxLength={10} inputMode="numeric" autoComplete="tel"
                                                value={movingDetails.phone}
                                                onChange={e => handleChange("phone", e.target.value)}
                                                onBlur={() => handleBlur("phone")} />
                                        </div>
                                        {touched.phone && formErrors.phone && <span className="ms-field__err">{formErrors.phone}</span>}
                                    </div>

                                    {/* Locations */}
                                    <div className="ms-form-row">
                                        <div className={`ms-field ${touched.from ? (formErrors.from ? "ms-field--error" : "ms-field--ok") : ""}`}>
                                            <label htmlFor="f-from">
                                                <PinDropIcon fontSize="small" style={{ color: "#e74c3c" }} /> Pickup
                                            </label>
                                            <input id="f-from" type="text" placeholder="Sector 62, Noida"
                                                maxLength={120} autoComplete="off"
                                                value={movingDetails.from}
                                                onChange={e => handleChange("from", e.target.value)}
                                                onBlur={() => handleBlur("from")} />
                                            {touched.from && formErrors.from && <span className="ms-field__err">{formErrors.from}</span>}
                                        </div>
                                        <div className={`ms-field ${touched.to ? (formErrors.to ? "ms-field--error" : "ms-field--ok") : ""}`}>
                                            <label htmlFor="f-to">
                                                <PinDropIcon fontSize="small" style={{ color: "#27ae60" }} /> Drop
                                            </label>
                                            <input id="f-to" type="text" placeholder="Indiranagar, Bengaluru"
                                                maxLength={120} autoComplete="off"
                                                value={movingDetails.to}
                                                onChange={e => handleChange("to", e.target.value)}
                                                onBlur={() => handleBlur("to")} />
                                            {touched.to && formErrors.to && <span className="ms-field__err">{formErrors.to}</span>}
                                        </div>
                                    </div>

                                    <button className="ms-btn ms-btn--primary ms-btn--full" onClick={() => {
                                        setTouched({ name: true, phone: true, from: true, to: true });
                                        if (isStep1Valid()) setStep(2);
                                    }}>
                                        Continue to Items →
                                    </button>

                                    <p className="ms-form-footer">
                                        🔒 Your data is encrypted &amp; never shared.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ══════════ STEP 2 ══════════ */}
                {step === 2 && (
                    <div className="ms-items-wrap">
                        <div className="ms-items-header">
                            <h2>Select your items</h2>
                            <p>Tap a category, then add items you'd like to move.</p>
                        </div>

                        {/* Category tabs */}
                        <div className="ms-tabs">
                            {categories.map(cat => {
                                const catTotal = cat.sections.reduce(
                                    (s, sec) => s + sec.items.reduce((n, i) => n + i.quantity, 0), 0);
                                const meta = CATEGORY_META[cat.name] ?? { icon: <MoreHorizIcon fontSize="small" />, color: "#1a56db" };
                                return (
                                    <button
                                        key={cat.name}
                                        className={`ms-tabs__btn ${activeTab === cat.name ? "is-active" : ""}`}
                                        style={activeTab === cat.name ? { "--tab-color": meta.color } as React.CSSProperties : {}}
                                        onClick={() => setActiveTab(cat.name)}
                                    >
                                        <span className="ms-tabs__icon" style={{ color: activeTab === cat.name ? "#fff" : meta.color }}>
                                            {meta.icon}
                                        </span>
                                        {cat.name}
                                        {catTotal > 0 && <span className="ms-tabs__badge">{catTotal}</span>}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Sections grid */}
                        <div className="ms-sections-area">
                            {categories.filter(c => c.name === activeTab).map(cat => (
                                <div className="ms-sections-grid" key={cat.name}>
                                    {cat.sections.map(section => (
                                        <DropdownSection
                                            key={section.title}
                                            section={section}
                                            category={cat.name}
                                            updateQuantity={updateQuantity}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Bottom bar */}
                        <div className="ms-bottom-bar">
                            <div className="ms-bottom-bar__count">
                                <span className="ms-bottom-bar__num">{totalItems}</span>
                                <span className="ms-bottom-bar__txt">{totalItems === 1 ? "item" : "items"} selected</span>
                            </div>
                            <button
                                className={`ms-btn ms-btn--primary ${!isStep2Valid() ? "ms-btn--disabled" : ""}`}
                                onClick={() => { if (isStep2Valid()) setStep(3); }}
                                disabled={!isStep2Valid()}
                            >
                                Review & Confirm →
                            </button>
                        </div>
                    </div>
                )}

                {/* ══════════ STEP 3 ══════════ */}
                {step === 3 && (
                    <div className="ms-review-wrap">
                        <div className="ms-review-header">
                            <span className="ms-chip">Final Step</span>
                            <h2>Review your booking</h2>
                        </div>

                        <div className="ms-card ms-review-card">
                            <div className="ms-review-card__title"><InfoIcon fontSize="small" /> Customer Details</div>
                            <div className="ms-review-grid">
                                <span className="ms-review-grid__key">Name</span>   <span className="ms-review-grid__val">{movingDetails.name}</span>
                                <span className="ms-review-grid__key">Phone</span>  <span className="ms-review-grid__val">+91 {movingDetails.phone}</span>
                                <span className="ms-review-grid__key">From</span>   <span className="ms-review-grid__val">{movingDetails.from}</span>
                                <span className="ms-review-grid__key">To</span>     <span className="ms-review-grid__val">{movingDetails.to}</span>
                            </div>
                        </div>

                        <div className="ms-card ms-review-card">
                            <div className="ms-review-card__title">
                                <CategoryIcon fontSize="small" /> Selected Items
                                <span className="ms-review-card__count">{totalItems} total</span>
                            </div>
                            {selectedItems.length === 0
                                ? <p className="ms-review-empty">No items selected.</p>
                                : (
                                    <ul className="ms-review-items">
                                        {selectedItems.map((item, i) => (
                                            <li key={i} className="ms-review-item">
                                                <div className="ms-review-item__info">
                                                    <span className="ms-review-item__name">{item.name}</span>
                                                    <span className="ms-review-item__cat">{item.category} · {item.section}</span>
                                                </div>
                                                <span className="ms-review-item__qty">×{item.quantity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                        </div>

                        <div className="ms-review-actions">
                            <button className="ms-btn ms-btn--ghost" onClick={() => setStep(2)}>← Edit Items</button>
                            <button
                                className={`ms-btn ms-btn--primary ${submitting ? "ms-btn--loading" : ""}`}
                                onClick={handleSubmit} disabled={submitting}
                            >
                                {submitting ? "Submitting…" : "Confirm & Submit"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MultiStepMoving;