import { useState } from "react";
import privateAPI from "../../api/privateAxios";

interface OrderForm {
    customerName: string;
    phone: string;
    fromLocation: string;
    toLocation: string;
    goods: string;
    status: string;
    currentLocation: string;
    expectedDelivery: string;
    note: string;
    provider: string;

    courierPartner: string;
    courierTrackingId: string;
}

const CreateWindow = ({
    createState,
    searchOrder
}: any) => {

    const [formData, setFormData] =
        useState<OrderForm>({
            customerName: "",
            phone: "",
            fromLocation: "",
            toLocation: "",
            goods: "",
            status: "Order Placed",
            currentLocation: "",
            expectedDelivery: "",
            note: "",
            provider: "Gati Shifting Packers",

            courierPartner: "manual",
            courierTrackingId: "",
        });

    const handleChange = (e: any) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {

        try {

            const out = await privateAPI.post(
                "/api/orders/create",
                formData
            );

            console.log(out);

            createState(false);

            searchOrder();

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <>
            <div className="update-overlay">

                <div className="update-window">

                    <h2>Create Order</h2>

                    <form>

                        {/* Customer Name */}
                        <input
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            placeholder="Customer Name"
                        />

                        {/* Phone */}
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                        />

                        {/* From */}
                        <input
                            type="text"
                            name="fromLocation"
                            value={formData.fromLocation}
                            onChange={handleChange}
                            placeholder="From"
                        />

                        {/* To */}
                        <input
                            type="text"
                            name="toLocation"
                            value={formData.toLocation}
                            onChange={handleChange}
                            placeholder="To"
                        />

                        {/* Goods */}
                        <input
                            type="text"
                            name="goods"
                            value={formData.goods}
                            onChange={handleChange}
                            placeholder="Goods"
                        />

                        {/* Status */}
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >

                            <option value="Order Placed">
                                Order Placed
                            </option>

                            <option value="Packed">
                                Packed
                            </option>

                            <option value="In Transit">
                                In Transit
                            </option>

                            <option value="Out for Delivery">
                                Out for Delivery
                            </option>

                            <option value="Delivered">
                                Delivered
                            </option>

                        </select>

                        {/* Current Location */}
                        <input
                            type="text"
                            name="currentLocation"
                            value={formData.currentLocation}
                            onChange={handleChange}
                            placeholder="Current Location"
                        />

                        {/* Expected Delivery */}
                        <input
                            type="date"
                            name="expectedDelivery"
                            value={formData.expectedDelivery}
                            onChange={handleChange}
                        />

                        {/* Note */}
                        <input
                            type="text"
                            name="note"
                            value={formData.note}
                            onChange={handleChange}
                            placeholder="Note"
                        />

                        {/* Courier Partner */}
                        <select
                            name="courierPartner"
                            value={formData.courierPartner}
                            onChange={handleChange}
                        >

                            <option value="manual">
                                Manual
                            </option>

                            <option value="delhivery">
                                Delhivery
                            </option>

                            <option value="dtdc">
                                DTDC
                            </option>

                            <option value="xpressbees">
                                XpressBees
                            </option>

                            <option value="safeexpress">
                                SafeExpress
                            </option>

                            <option value="bluedart">
                                BlueDart
                            </option>

                            <option value="gati">
                                Gati
                            </option>

                        </select>

                        {/* Tracking ID */}
                        {
                            formData.courierPartner !==
                            "manual" && (

                                <input
                                    type="text"
                                    name="courierTrackingId"
                                    value={formData.courierTrackingId}
                                    onChange={handleChange}
                                    placeholder="Tracking ID"
                                />
                            )
                        }

                        {/* Provider */}
                        <select
                            name="provider"
                            value={formData.provider}
                            onChange={handleChange}
                        >

                            <option value="Gati Shifting Packers">
                                Gati Shifting Packers
                            </option>

                            <option value="Safexpress">
                                Safexpress
                            </option>

                            <option value="Aggarwal Packers and Movers">
                                Aggarwal Packers and Movers
                            </option>

                        </select>

                    </form>

                    <div className="btn-group">

                        <button
                            className="cancel-btn"
                            onClick={() =>
                                createState(false)
                            }
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="save-btn"
                        >
                            Save Changes
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
};

export default CreateWindow;