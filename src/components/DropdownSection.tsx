import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { type SvgIconComponent } from "@mui/icons-material";

interface Item {
    name: string;
    quantity: number;
    icon?: SvgIconComponent;
}
interface Section {
    title: string;
    items: Item[];
}
interface Props {
    section: Section;
    category: string;
    updateQuantity: (cat: string, sec: string, item: string, change: number) => void;
}

const DropdownSection: React.FC<Props> = ({ section, category, updateQuantity }) => {
    const [open, setOpen] = useState(false);

    const sectionTotal = section.items.reduce((n, i) => n + i.quantity, 0);

    return (
        <div className={`dropdown-section ${open ? "open" : ""}`}>
            <div className="dropdown-header" onClick={() => setOpen(o => !o)}>
                <div>
                    {section.title}
                    {sectionTotal > 0 && <span className="badge">{sectionTotal}</span>}
                </div>
                {open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
            </div>

            <div className="dropdown-content">
                {section.items.map(item => {
                    const IconComp = item.icon;
                    return (
                        <div key={item.name} className="item-row">
                            <div className="item-left">
                                {/* icon pill — always rendered; uses icon if available */}
                                <span className="item-icon-pill">
                                    {IconComp
                                        ? <IconComp fontSize="small" />
                                        : <span style={{ fontSize: 13, fontWeight: 700, color: "#1a56db" }}>
                                            {item.name.charAt(0)}
                                          </span>
                                    }
                                </span>
                                <span>{item.name}</span>
                            </div>

                            <div className="counter">
                                <button
                                    aria-label={`Decrease ${item.name}`}
                                    onClick={() => updateQuantity(category, section.title, item.name, -1)}
                                >−</button>
                                <span>{item.quantity}</span>
                                <button
                                    aria-label={`Increase ${item.name}`}
                                    onClick={() => updateQuantity(category, section.title, item.name, 1)}
                                >+</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DropdownSection;