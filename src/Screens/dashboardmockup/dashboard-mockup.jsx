export default function DashboardMockup() {
    return (
      <div className="dashboard-mockup bg-white p-3 rounded-3" style={{ border: "1px solid #e0e0e0" }}>
        {/* Dashboard Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="fw-bold mb-0">Dashboard Overview</h5>
            <p className="text-muted small mb-0">Welcome back, Admin</p>
          </div>
          <div className="d-flex">
            <div className="me-3 p-2 rounded-circle" style={{ backgroundColor: "#f0f0f0" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="p-2 rounded-circle" style={{ backgroundColor: "#f0f0f0" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
  
        {/* Dashboard Content */}
        <div className="row g-3">
          {/* Stats Cards */}
          <div className="col-md-3">
            <div className="p-3 rounded-3" style={{ backgroundColor: "#f8f0ff" }}>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted small">Total Users</span>
                <span className="badge rounded-pill" style={{ backgroundColor: "#e6c6ff" }}>
                  +12%
                </span>
              </div>
              <h4 className="fw-bold mb-0">8,642</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 rounded-3" style={{ backgroundColor: "#f0f8ff" }}>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted small">Revenue</span>
                <span className="badge rounded-pill" style={{ backgroundColor: "#c6e6ff" }}>
                  +8%
                </span>
              </div>
              <h4 className="fw-bold mb-0">$32,854</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 rounded-3" style={{ backgroundColor: "#f0fff8" }}>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted small">Conversion</span>
                <span className="badge rounded-pill" style={{ backgroundColor: "#c6ffe6" }}>
                  +5%
                </span>
              </div>
              <h4 className="fw-bold mb-0">24.8%</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 rounded-3" style={{ backgroundColor: "#fff8f0" }}>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted small">Active Tasks</span>
                <span className="badge rounded-pill" style={{ backgroundColor: "#ffe6c6" }}>
                  +3
                </span>
              </div>
              <h4 className="fw-bold mb-0">16</h4>
            </div>
          </div>
  
          {/* Chart Area */}
          <div className="col-md-8">
            <div className="p-3 rounded-3 border h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Performance Analytics</h6>
                <div className="btn-group btn-group-sm">
                  <button className="btn btn-sm btn-light">Day</button>
                  <button className="btn btn-sm" style={{ backgroundColor: "#8A2BE2", color: "white" }}>
                    Week
                  </button>
                  <button className="btn btn-sm btn-light">Month</button>
                </div>
              </div>
              <div
                style={{ height: "180px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}
                className="d-flex align-items-end p-2"
              >
                {[35, 58, 45, 65, 72, 55, 40].map((height, index) => (
                  <div key={index} className="mx-2 flex-grow-1 d-flex flex-column align-items-center">
                    <div
                      style={{
                        height: `${height}%`,
                        backgroundColor: index === 4 ? "#8A2BE2" : "#e0e0e0",
                        width: "100%",
                        borderRadius: "4px 4px 0 0",
                      }}
                    ></div>
                    <span className="small text-muted mt-1">{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Tasks Area */}
          <div className="col-md-4">
            <div className="p-3 rounded-3 border h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Upcoming Tasks</h6>
                <button className="btn btn-sm" style={{ backgroundColor: "#8A2BE2", color: "white" }}>
                  + Add
                </button>
              </div>
              <div className="task-list">
                {[
                  { title: "Team Meeting", time: "10:30 AM", completed: true },
                  { title: "Project Review", time: "1:00 PM", completed: false },
                  { title: "Client Call", time: "3:30 PM", completed: false },
                ].map((task, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center mb-2 p-2 rounded"
                    style={{ backgroundColor: index === 0 ? "#f8f8f8" : "transparent" }}
                  >
                    <div className="form-check me-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={task.completed}
                        readOnly
                        style={{
                          borderColor: task.completed ? "#8A2BE2" : "#aaa",
                          backgroundColor: task.completed ? "#8A2BE2" : "transparent",
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.title}
                      </p>
                      <small className="text-muted">{task.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  