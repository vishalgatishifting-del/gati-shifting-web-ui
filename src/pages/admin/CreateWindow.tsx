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
}
const CreateWindow = ({ createState, searchOrder }: any) => {

    const [formData, setFormData] = useState<OrderForm>({
        customerName: "",
        phone: "",
        fromLocation: "",
        toLocation: "",
        goods: "",
        status: "",
        currentLocation: "",
        expectedDelivery: "",
        note: ""
    });

    const handleChange = (e: any) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async () => {
        await privateAPI.post(
            "/api/orders/create",
            formData
        );

        // const data = await res.json();

        // setTrackingId(data.trackingId);
        createState(false)
        searchOrder()
    }
    return (
        <>
            <div className="update-overlay">

                <div className="update-window">

                    <h2>Create Order</h2>
                    <form>

                        <input
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            placeholder="Customer Name"
                        />

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                        />

                        <input
                            type="text"
                            name="fromLocation"
                            value={formData.fromLocation}
                            onChange={handleChange}
                            placeholder="From"
                        />

                        <input
                            type="text"
                            name="toLocation"
                            value={formData.toLocation}
                            onChange={handleChange}
                            placeholder="To"
                        />

                        <input
                            type="text"
                            name="goods"
                            value={formData.goods}
                            onChange={handleChange}
                            placeholder="Goods"
                        />

                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >

                            <option value="Order Placed">Order Placed</option>
                            <option value="Packed">Packed</option>
                            <option value="In Transit">In Transit</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>

                        </select>

                        <input
                            type="text"
                            name="currentLocation"
                            value={formData.currentLocation}
                            onChange={handleChange}
                            placeholder="Current Location"
                        />
                        <input
                            type="date"
                            name="expectedDelivery"
                            value={formData.expectedDelivery}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="note"
                            value={formData.note}
                            onChange={handleChange}
                            placeholder="Note"
                        />

                    </form>
                    <div className="btn-group">

                        <button className="cancel-btn" onClick={() => createState(false)}>Cancel</button>

                        <button type="submit" onClick={handleSubmit} className="save-btn" >Save Changes</button>

                    </div>

                </div>

            </div>
        </>
    )
}

export default CreateWindow;