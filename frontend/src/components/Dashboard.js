import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const moveHandler = (event) => {
      const interactive = document.querySelector(".interactive");
      if (interactive) {
        interactive.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", moveHandler);

    return () => document.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div>
      <div className="gradient-bg">
        <div className="text-container">
          <h2>Hello World !</h2>
          <p>You have successfully logged in!</p>
          <button className="button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
