import { useState, useEffect } from "react";
import privateAPI from "../../api/privateAxios";
import "./ItemsRequest.scss"
const ItemsRequest= () => {

    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    const [leads, setLeads] = useState<any[]>([]);
    const fetchItems = async () => {
        try {

            const res = await privateAPI.get(`/api/items/fetch`);

            if (!res) {
                throw new Error("Order not found");
            }

            setLeads(res.data);
            console.log("In items", res)


        }
        catch (err: any) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <>
            <div className="orders-page">

                <div className="orders-header">

                    <h2>Items Management</h2>

                    {/* <button onClick={() => setCreateWindow(true)} className="create-btn">
                        + Create Order
                    </button> */}

                </div>


                <div className="orders-table-wrapper">

                    <table className="orders-table">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Total Items</th>
                                <th>Items Details</th>
                                <th>Created At</th>
                            </tr>
                        </thead>

                        <tbody>

                            {leads.map((order) => {

                                const totalItems = order.items.reduce(
                                    (acc: number, item: any) => acc + item.quantity,
                                    0
                                );

                                return (
                                    <tr key={order._id}>


                                        <td>{order.name}</td>

                                        <td>{order.phone}</td>

                                        <td>{order.from}</td>

                                        <td>{order.to}</td>

                                        {/* Total Items */}
                                        <td>
                                            <strong>{totalItems}</strong>
                                        </td>

                                        {/* Items List */}
                                        <td>
                                            <button
                                                className="view-items-btn"
                                                onClick={() => setSelectedOrder(order)}
                                            >
                                                View Items
                                            </button>
                                        </td>

                                        <td>
                                            {new Date(order.createdAt).toLocaleString("en-IN", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </td>

                                    </tr>
                                );
                            })}

                        </tbody>

                    </table>

                </div>

            </div >

            {selectedOrder && (
    <div className="items-modal-overlay">

        <div className="items-modal">

            <div className="modal-header">
                <h3>Customer Items</h3>

                <button
                    onClick={() => setSelectedOrder(null)}
                >
                    ✕
                </button>
            </div>

            <div className="modal-details">
                <p><strong>Name:</strong> {selectedOrder.name}</p>
                <p><strong>Name:</strong> {selectedOrder.phone}</p>
                <p><strong>From:</strong> {selectedOrder.from}</p>
                <p><strong>To:</strong> {selectedOrder.to}</p>
            </div>

            <table className="items-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Section</th>
                        <th>Item</th>
                        <th>Qty</th>
                    </tr>
                </thead>

                <tbody>
                    {selectedOrder.items.map(
                        (item: any, index: number) => (
                            <tr key={index}>
                                <td>{item.category}</td>
                                <td>{item.section}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>

        </div>

    </div>
)}
        </>
    )
}
export default ItemsRequest