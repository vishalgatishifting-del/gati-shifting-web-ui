import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
  updateQuantity: Function;
}

const DropdownSection = ({ section, category, updateQuantity }: Props) => {
  const [open, setOpen] = useState(false);

  const sectionTotal = section.items.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0
  );

  return (
    <div className={`dropdown-section ${open ? "open" : ""}`}>
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <div>
          {section.title}
          {sectionTotal > 0 && (
            <span className="badge">{sectionTotal} added</span>
          )}
        </div>
        <span className={`arrow ${open ? "rotate" : ""}`}><ArrowDropDownIcon /></span>
      </div>

      <div className="dropdown-content">
        {section.items.map((item: Item) => {
          const Icon = item.icon;

          return (
            <div className="item-row" key={item.name}>

              <div className="item-left">
                {Icon && <Icon className="item-icon" fontSize="small" />}

                <span>{item.name}</span>
              </div>

              <div className="counter">
                <button
                  onClick={() =>
                    updateQuantity(category, section.title, item.name, -1)
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(category, section.title, item.name, 1)
                  }
                >
                  +
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownSection;