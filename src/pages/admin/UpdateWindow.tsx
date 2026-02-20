import { useState, useEffect } from "react";
import "./UpdateWindow.scss"
import privateAPI from "../../api/privateAxios";


// rohangupta9044222985@gmail.com

const UpdateWindow = ({ data, windowState, searchOrder }: any) => {

    // state for form
    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        fromLocation: "",
        toLocation: "",
        goods: "",
        status: "",
        currentLocation: ""
    });

    // load default values when component opens
    useEffect(() => {

        if (data) {

            setFormData({
                customerName: data.customerName || "",
                phone: data.phone || "",
                fromLocation: data.fromLocation || "",
                toLocation: data.toLocation || "",
                goods: data.goods || "",
                status: data.status || "",
                currentLocation: data.currentLocation || ""
            });

        }

    }, [data]);


    // handle change
    const handleChange = (e: any) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {

            await privateAPI.put(
                `/api/orders/updateRecord/${data._id}`,
                formData
            );

            alert("Order updated successfully");

            windowState(false);
            windowState(false)
            searchOrder()


        } catch (error: any) {

            alert(error.message);

        }

    };



    return (

        <div className="update-overlay">

            <div className="update-window">

                <h2>Update Order</h2>
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

                </form>
                <div className="btn-group">

                    <button className="cancel-btn" onClick={() => windowState(false)}>Cancel</button>

                    <button type="submit" onClick={handleSubmit} className="save-btn" >Save Changes</button>

                </div>

            </div>

        </div>

    );

};

export default UpdateWindow;
