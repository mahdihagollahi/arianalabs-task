import React from "react";
import { X } from "lucide-react";
import LogoutImage from "../assent/LogoutModal.png";
export default function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full mx-4">
        <div className="cursor-pointer flex justify-end ">
          <X onClick={onCancel} className="w-4   h-4" />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={LogoutImage} width={40} height={40} alt="" />
          <h3 className="text-lg font-semibold mb-4">Log out</h3>
          <p className="text-lg font-semibold text-[#4E5553] mb-4">
            Are you sure you want to sign out of your account?
          </p>
          <div className="flex  gap-3">
            <button
              onClick={onConfirm}
              className="px-20 py-3 border border-[#E2E8F0]  text-black  rounded-lg"
            >
              Log out
            </button>
            <button
              onClick={onCancel}
              className="px-20 py-3   text-white bg-[#0F172A] rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
