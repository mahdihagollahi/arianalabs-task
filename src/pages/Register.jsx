// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Logo from "../assent/Logo.png";

// const Register = () => {
//   const [apiError, setApiError] = useState("");
//   const [avatarPreview, setAvatarPreview] = useState(null);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       setApiError("");
//       await axios.post("https://mock.arianalabs.io/register/", {
//         username: data.username,
//         confirm_password: data.confirm_password,
//         first_name: data.username,
//         last_name: data.last_name,
//         password: data.password,
//       });
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       setApiError("ثبت‌نام ناموفق بود. لطفاً دوباره تلاش کنید.");
//     }
//   };

//   return (
//     <div className="w-96 font-inter max-w-sm mx-auto  rounded-lg border border-[#E2E8F0] shadow-md">
//       <div>
//         <img src={Logo} alt="logo" className="mt-5 px-6" />
//       </div>

//       <div className="w-96 p-6 flex flex-col gap-3">
//         <h1 className="text-[#020617] font-bold text-2xl leading-6">Sign Up</h1>
//         <p className="text-[#64748B] font-normal text-sm leading-5">
//         Enter your information to create an account.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="px-6 rounded-lg">
//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className={`block text-sm font-medium ${
//               errors.username ? "text-red-500" : "text-[#020617]"
//             }`}
//           >
//           First name
//           </label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Please enter your first name"
//             {...register("username", { required: "Username is required" })}
//             className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617] placeholder:text-[#64748B]"
//           />
//           {errors.username && (
//             <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className={`block text-sm font-medium ${
//               errors.username ? "text-red-500" : "text-[#020617]"
//             }`}
//           >
//        Last name
//           </label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Please enter your last name"
//             {...register("username", { required: "Username is required" })}
//             className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617] placeholder:text-[#64748B]"
//           />
//           {errors.username && (
//             <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className={`block text-sm font-medium ${
//               errors.username ? "text-red-500" : "text-[#020617]"
//             }`}
//           >
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Enter your username"
//             {...register("username", { required: "Username is required" })}
//             className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617] placeholder:text-[#64748B]"
//           />
//           {errors.username && (
//             <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className={`block text-sm font-medium ${
//               errors.username ? "text-red-500" : "text-[#020617]"
//             }`}
//           >
//           Password
//           </label>
//           <input
//             type="text"
//             id="Password"
//             placeholder="Please enter password"
//             {...register("username", { required: "Username is required" })}
//             className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617] placeholder:text-[#64748B]"
//           />
//           {errors.username && (
//             <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className={`block text-sm font-medium ${
//               errors.password ? "text-red-500" : "text-[#020617]"
//             }`}
//           >
//            Confirm Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Please re-enter your password"
//             {...register("password", { required: "Password is required" })}
//             className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617] placeholder:text-[#64748B]"
//           />
//           {errors.password && (
//             <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
//           )}
//         </div>

//         {apiError && (
//           <p className="text-red-500 text-sm mb-4">{apiError}</p>
//         )}

//         <button
//           type="submit"
//           className="w-full bg-[#F1F5F9] text-[#0F172A]  py-2 rounded-lg"
//         >
//           Register
//         </button>
//       </form>

//       <div className="px-6 ml-16 pt-5 pb-5">
//         <span className="block text-sm text-[#000000]">
//           Already have an account?{" "}
//           <Link to="/" className="text-[#0F172A] underline font-medium">
//             Login
//           </Link>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assent/Logo.png";

const Register = () => {
  const [apiError, setApiError] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setApiError("");

      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("password", data.password);
      formData.append("confirm_password", data.confirm_password);
      formData.append("first_name", data.username);
      formData.append("last_name", data.last_name);
      if (data.avatar && data.avatar[0]) {
        formData.append("avatar", data.avatar[0]);
      }

      await axios.post("https://mock.arianalabs.io/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      setApiError("Registration failed. Please try again.");
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setValue("avatar", e.target.files); 
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-96 font-inter max-w-sm mx-auto mt-36 rounded-lg border border-[#E2E8F0] shadow-md">
      <div>
        <img src={Logo} alt="logo" className="mt-5 px-6" />
      </div>

      <div className="w-96 p-6 flex flex-col gap-3">
        <h1 className="text-[#020617] font-bold text-2xl leading-6">
          Register
        </h1>
        <p className="text-[#64748B] font-normal text-sm leading-5">
          Enter your information to create an account.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-6 rounded-lg"
        encType="multipart/form-data"
      >
        <div className="flex justify-between items-center border p-3 border-[#E2E8F0] gap-8 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                className="w-8 h-8 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
          </div>

          <div>
            <label className="cursor-pointer px-4 py-2 border border-gray-200 rounded-lg text-lg font-medium text-gray-900 hover:bg-gray-100 transition">
              Upload +
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#020617]">
            First name
          </label>
          <input
            type="text"
            {...register("first_name", { required: false })}
            placeholder="First name"
            className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617] "
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#020617]">
            Last name{" "}
          </label>
          <input
            type="text"
            {...register("last_name", { required: "Last name is required" })}
            placeholder="Please enter your last name"
            className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617]"
          />
          {errors.last_name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.last_name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#020617]">
            Username
          </label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617] "
            placeholder="Please enter username"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#020617]">
            Password{" "}
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Please enter password"
            className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617]"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#020617]">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirm_password", {
              required: "re-enter is required",
            })}
            placeholder="Please re-enter your password"
            className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617]"
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        {apiError && <p className="text-red-500 text-sm mb-4">{apiError}</p>}

        <button
          type="submit"
          className="w-full bg-[#0F172A] text-white py-2 rounded-lg"
        >
          Register
        </button>
      </form>

      <div className="px-6 ml-16 pt-5 pb-5">
        <span className="block text-sm text-[#000000]">
          Already have an account?
          <Link to="/" className="text-[#0F172A] underline font-medium">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
