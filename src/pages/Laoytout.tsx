import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from 'react';
import PopUp from "../components/PopUpDisplay.tsx"

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [visibilityCondition, setVisibilityCondition] = useState<boolean>(false);
    return (
        <>
            <PopUp visibility={visibilityCondition} condition={setVisibilityCondition}></PopUp>
            <Navbar successCondition={setVisibilityCondition} setOpen={setOpen} open={open} />
            <ScrollToTop>
                {children}
            </ScrollToTop>
            <Footer />
        </>
    );
};

export default Layout;
