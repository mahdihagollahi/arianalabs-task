import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import axios from "axios";
import ExitIcon from "../assent/exitIcon.png";
import LogoutModal from "./LogoutModal";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://mock.arianalabs.io/current_user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(res.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete("https://mock.arianalabs.io/auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("error when exiting:", error);

    
    }
  };

  return (
    <>
      {showLogoutModal && (
        <LogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
      <button
        className="lg:hidden p-4"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed h-screen top-0 left-0 w-64 bg-[#F8FAFC] shadow z-40 transform transition-transform duration-300 
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex lg:flex-col`}
      >
        <div className="flex flex-col   items-center py-6 ">
          <img
            src={userData?.avatar || "/defaultUser.png"}
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <h3 className="mt-2 font-semibold">{userData?.first_name}</h3>
          <p className="text-sm text-gray-500">@{userData?.username}</p>
        </div>

        <button
          onClick={() => setShowLogoutModal(true)}
          className="mt-auto m-4 px-4 py-2 bg-[#DC2626] text-white rounded-lg hover:bg-red-700 flex justify-center items-center gap-2"
        >
          <img src={ExitIcon} alt="exit" className="w-4 h-4" />
          Logout
        </button>
      </div>
    </>
  );
}
