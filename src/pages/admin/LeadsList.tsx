import { useState, useEffect } from "react";
import privateAPI from "../../api/privateAxios";

const LeadsList = () => {

    const [leads, setLeads] = useState<any[]>([]);
    const fetchLead = async () => {
        try {

            const res = await privateAPI.get(`/api/leads/fetch`);

            if (!res) {
                throw new Error("Order not found");
            }

            setLeads(res.data);
            console.log(res)


        }
        catch (err: any) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        fetchLead();
    }, []);

    return (
        <>
            <div className="orders-page">

                <div className="orders-header">

                    <h2>Leads Management</h2>

                    {/* <button onClick={() => setCreateWindow(true)} className="create-btn">
                        + Create Order
                    </button> */}

                </div>


                <div className="orders-table-wrapper">

                    <table className="orders-table">

                        <thead>

                            <tr>

                                <th>name</th>
                                <th>Phone</th>
                                <th>email</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Goods</th>
                                <th>Source Website</th>
                                <th>Landing Page</th>
                                <th>Lead Source</th>
                                <th>Created At</th>

                            </tr>

                        </thead>

                        <tbody>

                            {leads.map(order => (

                                <tr key={order._id}>

                                    <td className="tracking">
                                        {order.name}
                                    </td>

                                    <td>
                                        {order.phone}
                                    </td>
                                    <td>
                                        {order.email}
                                    </td>


                                    <td>
                                        {order.fromLocation}
                                    </td>
                                    <td>
                                        {order.toLocation}
                                    </td>
                                    <td>
                                        {order.goods}
                                    </td>

                                    <td>

                                        {order.sourceWebsite}

                                    </td>
                                    <td>
                                        {order.landingPage}
                                    </td>
                                    <td>
                                        {order.leadSource}
                                    </td>

                                    <td>
                                        {new Date(order.createdAt).toLocaleString("en-IN", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true
                                        })}
                                    </td>

                                    <td>

                                        {/* <div className="actions">

                                            <button onClick={() => updateRecord(order)} className="update-btn">
                                                Update
                                            </button>

                                            <button onClick={() => { deleteRecord(order.trackingId) }} className="delete-btn">
                                                Delete
                                            </button>

                                        </div> */}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
        </>
    )
}
export default LeadsList