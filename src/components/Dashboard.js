import React, { useState } from "react";
import "../Styles/Dashboard.css";

function Dashboard() {
  // Mock user data (replace with actual user data from your backend)
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    userType: "customer",
    joinedDate: "Jan 2024",
  };

  // Mock order data (replace with actual data from your backend)
  const [currentOrders, setCurrentOrders] = useState([
    {
      id: 1,
      serviceProvider: "Prashant Mahor",
      service: "Gardening",
      status: "In Progress",
      date: "2024-01-15",
      amount: 1200,
      paymentStatus: "Paid Online",
    },
    {
      id: 2,
      serviceProvider: "Shivam",
      service: "House Cleaning",
      status: "Scheduled",
      date: "2024-01-18",
      amount: 800,
      paymentStatus: "Pending",
    },
  ]);

  const [orderHistory, setOrderHistory] = useState([
    {
      id: 101,
      serviceProvider: "Tarun Singh",
      service: "Electrical Work",
      status: "Completed",
      date: "2024-01-10",
      amount: 2500,
      paymentStatus: "Paid Online",
      rating: 4.5,
    },
    {
      id: 102,
      serviceProvider: "Rani Devi ",
      service: "Plumbing",
      status: "Completed",
      date: "2024-01-05",
      amount: 1800,
      paymentStatus: "Paid Cash",
      rating: 5,
    },
  ]);

  return (
    <div className="dashboard-container">
      <div className="container py-4">
        {/* User Profile Section */}
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="profile-card">
              <div className="d-flex align-items-center">
                <div className="profile-icon">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="profile-info">
                  <h2>{userData.name}</h2>
                  <p className="text-muted mb-0">Employer Account</p>
                  <p className="text-muted mb-0">
                    Member since: {userData.joinedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Orders Section */}
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="dashboard-card">
              <h3 className="mb-4">Current Orders</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Service Provider</th>
                      <th>Service</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Payment</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentOrders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.serviceProvider}</td>
                        <td>{order.service}</td>
                        <td>{order.date}</td>
                        <td>₹{order.amount}</td>
                        <td>
                          <span
                            className={`badge ${
                              order.status === "In Progress"
                                ? "bg-warning"
                                : "bg-info"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              order.paymentStatus === "Paid Online"
                                ? "bg-success"
                                : "bg-warning"
                            }`}
                          >
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary">
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className="row">
          <div className="col-md-12">
            <div className="dashboard-card">
              <h3 className="mb-4">Order History</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Service Provider</th>
                      <th>Service</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Payment</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((order) => (
                      <tr key={order.id}>
                        <td>{order.serviceProvider}</td>
                        <td>{order.service}</td>
                        <td>{order.date}</td>
                        <td>₹{order.amount}</td>
                        <td>
                          <span className="badge bg-success">
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              order.paymentStatus === "Paid Online"
                                ? "bg-success"
                                : "bg-info"
                            }`}
                          >
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td>
                          <div className="rating">
                            {order.rating}{" "}
                            <i className="fas fa-star text-warning"></i>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
