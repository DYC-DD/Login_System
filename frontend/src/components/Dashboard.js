import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // **如果沒有 Token，導回登入頁**
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // **移除 Token**
    navigate("/"); // **回到登入頁**
  };

  return (
    <div className="dashboard-container">
      <h2>歡迎來到儀表板！</h2>
      <p>你已成功登入！</p>
      <button className="button" onClick={handleLogout}>
        登出
      </button>
    </div>
  );
};

export default Dashboard;
