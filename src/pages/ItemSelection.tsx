import { useState } from "react";
import "./ItemSelection.scss";
import DropdownSection from "./DropdownSection";
import Navbar from "../components/Navbar";
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import TableBarIcon from '@mui/icons-material/TableBar';

import TvIcon from '@mui/icons-material/Tv';
import SpeakerIcon from '@mui/icons-material/Speaker';


import { type SvgIconComponent } from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import SendIcon from '@mui/icons-material/Send';
import privateAPI from "../api/privateAxios";


interface Item {
    name: string;
    quantity: number;
    icon?: SvgIconComponent;
}

interface Section {
    title: string;
    items: Item[];
}

interface Category {
    name: string;
    sections: Section[];
}

const data: Category[] = [
    {
        name: "Living Room",
        sections: [
            {
                title: "Chairs",
                items: [
                    { name: "Plastic/Folding Chair", quantity: 0, icon: EventSeatIcon },
                    { name: "Dining Table Chairs", quantity: 0, icon: TableRestaurantIcon },
                    { name: "Office Chair", quantity: 0, icon: ChairAltIcon },
                    { name: "Rocking Chair", quantity: 0, icon: BedroomBabyIcon },
                ],
            },
            {
                title: "Tables",
                items: [
                    { name: "Center Table", quantity: 0, icon: TableBarIcon },
                    { name: "Dining Table", quantity: 0, icon: TableRestaurantIcon },
                    { name: "Coffee Table", quantity: 0, icon: TableRestaurantIcon },
                    { name: "Side Table", quantity: 0, icon: TableRestaurantIcon },
                ],
            },
            {
                title: "TV/Monitor",
                items: [
                    { name: "Up to 28 inch", quantity: 0, icon: TvIcon },
                    { name: "29 to 43 inch", quantity: 0, icon: TvIcon },
                    { name: "49 to 55 inch", quantity: 0, icon: TvIcon },
                    { name: "Above 55 inch", quantity: 0, icon: TvIcon },
                    { name: "Home Theater", quantity: 0, icon: SpeakerIcon },
                ],
            },
            {
                title: "Cabinet/Storage",
                items: [
                    { name: "TV Stand/Trolley", quantity: 0 },
                    { name: "Shoe Rack", quantity: 0 },
                    { name: "Bar Unit", quantity: 0 },
                    { name: "Showcase Unit", quantity: 0 },
                ],
            },
            {
                title: "Sofa",
                items: [
                    { name: "Single Seater", quantity: 0 },
                    { name: "Double Seater", quantity: 0 },
                    { name: "3 Seater", quantity: 0 },
                    { name: "4 Seater", quantity: 0 },
                    { name: "5 Seater", quantity: 0 },
                    { name: "6 Seater", quantity: 0 },
                    { name: "Recliner", quantity: 0 },
                ],
            },
            {
                title: "Home Utility",
                items: [
                    { name: "Decorative Item", quantity: 0 },
                    { name: "Lamp", quantity: 0 },
                    { name: "Iron Stand", quantity: 0 },
                    { name: "Wall Clock", quantity: 0 },
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
                    { name: "Single Bed", quantity: 0 },
                    { name: "Double Bed", quantity: 0 },
                    { name: "King Size Bed", quantity: 0 },
                ],
            },
            {
                title: "Mattress",
                items: [
                    { name: "Single Mattress", quantity: 0 },
                    { name: "Double Mattress", quantity: 0 },
                ],
            },
            {
                title: "Wardrobe",
                items: [
                    { name: "2 Door Wardrobe", quantity: 0 },
                    { name: "3 Door Wardrobe", quantity: 0 },
                    { name: "4 Door Wardrobe", quantity: 0 },
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
                    { name: "Refrigerator", quantity: 0 },
                    { name: "Microwave", quantity: 0 },
                    { name: "Washing Machine", quantity: 0 },
                    { name: "Dishwasher", quantity: 0 },
                ],
            },
            {
                title: "Utensils",
                items: [
                    { name: "Small Utensils Box", quantity: 0 },
                    { name: "Large Utensils Box", quantity: 0 },
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
                    { name: "Cycle", quantity: 0 },
                    { name: "Scooter", quantity: 0 },
                    { name: "Gym Equipment", quantity: 0 },
                ],
            },
            {
                title: "Miscellaneous",
                items: [
                    { name: "Water Tank", quantity: 0 },
                    { name: "Inverter/Battery", quantity: 0 },
                ],
            },
        ],
    },
];

interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

const MultiStepMoving: React.FC<NavbarProps> = ({ open, setOpen, successCondition }) => {
    const [step, setStep] = useState(1);
    const [categories, setCategories] = useState<Category[]>(data);
    const [activeTab, setActiveTab] = useState("Living Room");

    const [movingDetails, setMovingDetails] = useState({
        name: "",
        phone: "",
        from: "",
        to: "",
    });


    const isStep1Valid = () => {
        return (
            movingDetails.name.trim() !== "" &&
            movingDetails.phone.trim() !== "" &&
            movingDetails.from.trim() !== "" &&
            movingDetails.to.trim() !== ""
        );
    };

    const isStep2Valid = () => {
        return totalItems > 0;
    };

    const goToStep = (targetStep: number) => {

        // STEP 2 restriction
        if (targetStep === 2 && !isStep1Valid()) {
            alert("Please fill moving details first");
            return;
        }

        // STEP 3 restriction
        if (targetStep === 3 && !isStep2Valid()) {
            alert("Please select at least 1 item");
            return;
        }

        setStep(targetStep);
    };

    const updateQuantity = (
        categoryName: string,
        sectionTitle: string,
        itemName: string,
        change: number
    ) => {
        const updated = categories.map((cat) => {
            if (cat.name !== categoryName) return cat;

            return {
                ...cat,
                sections: cat.sections.map((sec) => {
                    if (sec.title !== sectionTitle) return sec;

                    return {
                        ...sec,
                        items: sec.items.map((item) =>
                            item.name === itemName
                                ? {
                                    ...item,
                                    quantity: Math.max(0, item.quantity + change),
                                }
                                : item
                        ),
                    };
                }),
            };
        });

        setCategories(updated);
    };

    const totalItems = categories.reduce((acc, cat) => {
        return (
            acc +
            cat.sections.reduce((secAcc, sec) => {
                return (
                    secAcc +
                    sec.items.reduce((itemAcc, item) => itemAcc + item.quantity, 0)
                );
            }, 0)
        );
    }, 0);

    const handleSubmit = async () => {

        if (!isStep1Valid()) {
            alert("Incomplete moving details");
            return;
        }

        if (!isStep2Valid()) {
            alert("No items selected");
            return;
        }

        const selectedItems = categories.flatMap((cat) =>
            cat.sections.flatMap((sec) =>
                sec.items
                    .filter((item) => item.quantity > 0)
                    .map((item) => ({
                        category: cat.name,
                        section: sec.title,
                        name: item.name,
                        quantity: item.quantity,
                    }))
            )
        );

        try {
            await privateAPI.post(
                "/api/items/submit-items",
                {
                    movingDetails,
                    items: selectedItems,
                }
            );

            alert("Request Submitted Successfully");
        } catch (err) {
            alert("Submission Failed");
        }
    };

    const selectedItems = categories.flatMap((cat) =>
        cat.sections.flatMap((sec) =>
            sec.items
                .filter((item) => item.quantity > 0)
                .map((item) => ({
                    category: cat.name,
                    section: sec.title,
                    name: item.name,
                    quantity: item.quantity,
                }))
        )
    );

    return (
        <>
            <Navbar  successCondition={successCondition} setOpen={setOpen} open={open} />
            <div className="items-selection-page">
                <div className="item-page">

                    {/* STEP HEADER */}
                    <div className="step-header">
                        {["Moving Details", "Add Items", "Submit"].map((label, index) => (
                            <div
                                key={label}
                                className={`step-wrapper clickable ${step >= index + 1 ? "done" : ""
                                    }`}
                                onClick={() => goToStep(index + 1)}
                            >
                                <div className={`step-circle ${step >= index + 1 ? "active" : ""}`}>
                                    {/* {index + 1} */}
                                    {(index == 0) ? <InfoIcon /> : (index == 1) ? <CategoryIcon /> : (index == 2) ? <SendIcon /> : ""}
                                </div>

                                <div className="step-label">
                                    {label}
                                </div>
                            </div>
                        ))}
                        <div className="progress-line">
                            <div
                                className="progress-fill"
                                style={{ width: `${(step - 1) * 50}%` }}
                            />
                        </div>
                    </div>

                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="moving-form">
                            <input
                                placeholder="Your Name"
                                value={movingDetails.name}
                                onChange={(e) =>
                                    setMovingDetails({ ...movingDetails, name: e.target.value })
                                }
                            />
                            <input
                                placeholder="Phone"
                                value={movingDetails.phone}
                                onChange={(e) =>
                                    setMovingDetails({ ...movingDetails, phone: e.target.value })
                                }
                            />
                            <input
                                placeholder="From Location"
                                value={movingDetails.from}
                                onChange={(e) =>
                                    setMovingDetails({ ...movingDetails, from: e.target.value })
                                }
                            />
                            <input
                                placeholder="To Location"
                                value={movingDetails.to}
                                onChange={(e) =>
                                    setMovingDetails({ ...movingDetails, to: e.target.value })
                                }
                            />

                            <button onClick={() => {
                                if (!isStep1Valid()) {
                                    alert("Please fill all details");
                                    return;
                                }
                                setStep(2);
                            }}>Next</button>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <div className="items-wrapper">

                            {/* CATEGORY TABS */}
                            <div className="category-tabs">
                                {categories.map(cat => (
                                    <button
                                        key={cat.name}
                                        className={activeTab === cat.name ? "active" : ""}
                                        onClick={() => setActiveTab(cat.name)}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>

                            {/* SECTIONS */}
                            <div className="sections-area">
                                {categories
                                    .filter(cat => cat.name === activeTab)
                                    .map(cat => (
                                        <div
                                            className={`sections-grid`}
                                            key={cat.name}
                                        >
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

                            {/* BOTTOM BAR */}
                            <div className="bottom-bar">
                                <div>{totalItems} Items Added</div>
                                <button onClick={() => setStep(3)}>Continue</button>
                            </div>

                        </div>
                    )}
                    {/* STEP 3 */}
                    {/* STEP 3 */}
                    {step === 3 && (
                        <div className="submit-container">

                            <h2 className="submit-title">Review Your Moving Details</h2>

                            <div className="details-card">
                                <h3>Customer Details</h3>
                                <p><strong>Name:</strong> {movingDetails.name}</p>
                                <p><strong>Phone:</strong> {movingDetails.phone}</p>
                                <p><strong>From:</strong> {movingDetails.from}</p>
                                <p><strong>To:</strong> {movingDetails.to}</p>
                            </div>

                            <div className="items-card">
                                <h3>Selected Items ({totalItems})</h3>

                                {selectedItems.length === 0 ? (
                                    <p>No items selected</p>
                                ) : (
                                    selectedItems.map((item, index) => (
                                        <div key={index} className="review-item">
                                            <div>
                                                <span className="item-name">{item.name} </span>
                                                <span className="item-category"> 
                                                    {item.category} / {item.section}
                                                </span>
                                            </div>

                                            <div className="item-qty">
                                                x{item.quantity}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <button className="submit-btn" onClick={handleSubmit}>
                                Confirm & Submit
                            </button>

                        </div>
                    )}

                </div>
            </div>
        </>

    );
};

export default MultiStepMoving;