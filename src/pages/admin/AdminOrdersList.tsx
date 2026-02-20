import "./AdminOrdersList.scss"
import { useState, useEffect } from "react";
import UpdateWindow from "./UpdateWindow";
import CreateWindow from "./CreateWindow";
import privateAPI from "../../api/privateAxios";


const AdminOrdersList = () => {

  // const [deleteLoading, useDeleteLoading] = useState<Boolean>(false)
  // console.log(deleteLoading)


  // const API = "https://api.gatishiftingpackers.com/api/orders";
  // const API = "http://localhost:5000/api/orders";


  const [orders, setOrders] = useState<any[]>([]);
  const [updateWindow, setUpdateWindow] = useState<boolean>(false)
  const [createWindow, setCreateWindow] = useState<boolean>(false)

  // Search order
  const searchOrder = async () => {
    try {

      const res = await privateAPI.get(`/api/orders/orders`);

      if (!res) {
        throw new Error("Order not found");
      }

      setOrders(res.data);


    }
    catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    searchOrder();
  }, []);



  // const orders = [
  //   {
  //     trackingId: "GTI123456",
  //     customer: "Rahul Sharma",
  //     phone: "9354122998",
  //     from: "ghaziabad",
  //     to: "delhi",
  //     goods: "domestic",
  //     status: "In Transit",
  //     location: "Delhi"
  //   },
  //   {
  //     trackingId: "GTI123456",
  //     customer: "Rahul Sharma",
  //     phone: "9354122998",
  //     from: "ghaziabad",
  //     to: "delhi",
  //     goods: "domestic",
  //     status: "In Transit",
  //     location: "Delhi"
  //   }
  // ];

  const deleteRecord = async (trackingID: any) => {
    try {

      await privateAPI.delete(
        `/api/orders/delete/${trackingID}`
      );

      searchOrder()

    }
    catch (err: any) {
      console.error(err.message);
    }
  }

  const getStatusClass = (status: string) => {

    switch (status) {

      case "Delivered":
        return "status delivered";

      case "In Transit":
        return "status transit";

      case "Packed":
        return "status packed";

      default:
        return "status";

    }

  };


  const [currentRecord, setCurrentRecord] = useState<any>(null);
  const updateRecord = (record: any) => {
    console.log(record)
    setUpdateWindow(true)
    setCurrentRecord(record);
  }

  return (

    <div className="orders-page">

      <div className="orders-header">

        <h2>Orders Management</h2>

        <button onClick={() => setCreateWindow(true)} className="create-btn">
          + Create Order
        </button>

      </div>


      <div className="orders-table-wrapper">

        <table className="orders-table">

          <thead>

            <tr>

              <th>Tracking ID</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>From</th>
              <th>To</th>
              <th>Goods</th>
              <th>Status</th>
              <th>Location</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {orders.map(order => (

              <tr key={order.trackingId}>

                <td className="tracking">
                  {order.trackingId}
                </td>

                <td>
                  {order.customerName}
                </td>
                <td>
                  {order.phone}
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

                  <span className={getStatusClass(order.status)}>
                    {order.status}
                  </span>

                </td>

                <td>
                  {order.currentLocation}
                </td>

                <td>

                  <div className="actions">

                    <button onClick={() => updateRecord(order)} className="update-btn">
                      Update
                    </button>

                    <button onClick={() => { deleteRecord(order.trackingId) }} className="delete-btn">
                      Delete
                      {/* {useDeleteLoading ? <></> : "Delete"} */}
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
      {
        (updateWindow) ? <UpdateWindow windowState={setUpdateWindow} data={currentRecord} searchOrder={searchOrder}></UpdateWindow> : ""
      }
      {
        (createWindow) ? <CreateWindow createState={setCreateWindow} searchOrder={searchOrder}></CreateWindow> : ""
      }


    </div>

  );

};

export default AdminOrdersList;
