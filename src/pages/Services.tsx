import BrandList from "../components/BrandsList";
import ContactForm from "../components/ContactForm";
import ServicesSection from "../components/Services";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";


const Services = () => {

    interface Service {
        shiftingType: string;
        packingMaterial: string;
        movingCharges: string;
    }

    const servicesData: Service[] = [
        { shiftingType: "1 BHK Moving", packingMaterial: "Rs. 500 - 1000", movingCharges: "Rs. 2500 - 3000" },
        { shiftingType: "2 BHK Moving", packingMaterial: "Rs. 800 - 1200", movingCharges: "Rs. 3000 - 3500" },
        { shiftingType: "3/4 BHK Moving", packingMaterial: "Rs. 1200 - 1500", movingCharges: "Rs. 3500 - 3800" },
        { shiftingType: "Few Items Only", packingMaterial: "Rs. 600 - 1000", movingCharges: "Rs. 2000 - 2800" },
    ];
    return (
        <>
            <ServicesSection ></ServicesSection>
             <section id="table-section-services">
                <h1>Estimated Charges of Packing and Moving Services in India</h1>
                <p>Gati Shifting Packers offers reliable packing and moving services across India. Our team ensures the safe handling and transportation of your belongings. Get a clear price estimate tailored to your needs.</p>
                <div className="container">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#2563eb' }}>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Shifting Type</b></TableCell>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Packing Material</b></TableCell>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Moving Charges</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {servicesData.map((row) => (
                                    <TableRow>
                                        <TableCell align="center">{row.shiftingType}</TableCell>
                                        <TableCell align="center">{row.packingMaterial}</TableCell>
                                        <TableCell align="center">{row.movingCharges}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>
            <ContactForm></ContactForm>
            <BrandList />
        </>
    )
}

export default Services;