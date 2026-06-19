import "./AdminOrdersList.scss"
import { useState, useEffect } from "react";
import UpdateWindow from "./UpdateWindow";
import CreateWindow from "./CreateWindow";
import privateAPI from "../../api/privateAxios";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import SearchIcon from '@mui/icons-material/Search';

const AdminOrdersList = () => {

  // const [deleteLoading, useDeleteLoading] = useState<Boolean>(false)
  // console.log(deleteLoading)


  // const API = "https://api.gatishiftingpackers.com/api/orders";
  // const API = "http://localhost:5000/api/orders";


  const [orders, setOrders] = useState<any[]>([]);
  const [updateWindow, setUpdateWindow] = useState<boolean>(false)
  const [createWindow, setCreateWindow] = useState<boolean>(false)
  // const [createBtnState, setCreateBtnState] = useState<boolean>(false)
  // const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [responsePage, setResponsePage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalOrders, setTotalOrders] = useState<number>(0)

  const [filter, setFilter] = useState<string>("All")
  const [search, setSearch] = useState("")

  // Search order
  const searchOrder = async () => {
    try {

      const res = await privateAPI.get(`/api/orders/orders?page=${page}&limit=10&filter=${filter}&search=${search}`);

      if (!res) {
        throw new Error("Order not found");
      }
      setOrders(res.data.orders);
      setResponsePage(res.data.page)
      setTotalPages(res.data.totalPages)
      setTotalOrders(res.data.total)
      console.log(res.data.orders[0]._id)

    }
    catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    searchOrder();
  }, []);


  useEffect(() => {
    searchOrder();
  }, [page, filter, search]);



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
      case "Order Placed":
        return "status placed";

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
    setUpdateWindow(true)
    setCurrentRecord(record);
  }

  const syncUpdate = async () => {
    try {

      await privateAPI.get(
        `/api/orders/syncUpdate`
      );

      searchOrder()

    }
    catch (err: any) {
      console.error(err.message);
    }
  }

  const shareableLink = (order: any) => {
    if (order.provider == "Gati Shifting Packers") {

      return `https://wa.me/${order.phone}?text=${encodeURIComponent(
        `Dear ${order.customerName},

Your order has been successfully booked.

You can track your order status using the link below:
https://gatishiftingpackers.com/track-order/${order.trackingId}

Thank you for choosing Gati Shifting Packers.`
      )}`;
    } else if (order.provider == "Safexpress") {
      return `https://wa.me/${order.phone}?text=${encodeURIComponent(
        `Dear ${order.customerName},

Your order has been successfully booked.

You can track your order status using the link below:
https://safeshiftingpackers.com/track-order/${order.trackingId}

Thank you for choosing Safe Shifting Packers.`
      )}`;
    } else if (order.provider == "Aggarwal Packers and Movers") {
      return `https://wa.me/${order.phone}?text=${encodeURIComponent(
        `Dear ${order.customerName},

Your order has been successfully booked.

You can track your order status using the link below:
https://aggrawalpackers.com/track-order/${order.trackingId}

Thank you for choosing Agarwal Packers and Movers.`
      )}`;
    } else {
      return `https://wa.me/${order.phone}?text=${encodeURIComponent(
        `Dear ${order.customerName},

Your order has been successfully booked.

You can track your order status using the link below:
https://gatishiftingpackers.com/track-order/${order.trackingId}

Thank you for choosing Gati Shifting Packers.`
      )}`;
    }
  };
  return (

    <div className="orders-page">

      <div className="orders-header">
        <div className="left-container">

          <h2>Orders Management</h2>
          <div className="filters-and-overview">
            <button className={filter == "All" ? "active" : ""} onClick={() => { setFilter("All") }}>All</button>
            <button className={filter == "Today" ? "active" : ""} onClick={() => { setFilter("Today") }}>Today's</button>
            <button className={filter == "Delivered" ? "active" : ""} onClick={() => { setFilter("Delivered") }}>Delivered</button>
            <span>Total: {totalOrders}</span>

            <div className="order-search">
              <SearchIcon className="icon" />
              <input type="text" className="order-search-input" placeholder="Tracking ID, Phone No, Name, Address" value={search}
                onChange={(e) => setSearch(e.target.value)} />

            </div>
          </div>
        </div>
        <button onClick={() => syncUpdate} className="create-btn">
          Sync Update
        </button>
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
              <th>Expected Delivery</th>
              <th>Note</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {orders.map(order => (

              <tr className={`provider ${order.provider}`} key={order.trackingId}>

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
                  {new Date(order.expectedDelivery)
                    .toLocaleDateString()}
                </td>
                <td>
                  {order.note}
                </td>

                <td>

                  <div className="actions">

                    <a href={shareableLink(order)}
                      className="update-btn"
                      style={{
                        background: "#25D366",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                        borderRadius: "10px",
                        color: "#fff"
                      }}
                      target="_blank"
                      rel="noopener noreferrer" >
                      <WhatsAppIcon />
                    </a>
                    <button onClick={() => updateRecord(order)} className="update-btn">
                      <EditIcon />
                    </button>

                    <button onClick={() => { deleteRecord(order.trackingId) }} className="delete-btn">
                      <DeleteIcon />
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

      <span>Total Pages: {totalPages}</span>
      <div className="pagination-btns-container">
        <button onClick={() => setPage(page - 1)}><ArrowLeftIcon className="icon" /></button>
        <span>{responsePage}</span>
        <button onClick={() => setPage(page + 1)}><ArrowRightIcon className="icon" /></button>
      </div>


    </div>

  );

};

export default AdminOrdersList;
