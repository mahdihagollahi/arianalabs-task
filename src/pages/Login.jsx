// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import Logo from "../assent/Logo.png";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     if (data.username === "admin" && data.password === "password") {
//       login({ username: "admin" });
//       navigate("/dashboard");
//     } else {
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <div className="w-96 font-inter max-w-sm mx-auto mt-36 rounded-lg border border-[#E2E8F0] shadow-md">
//       <div>
//         <img src={Logo} alt="logo" className="mt-5 px-6" />
//       </div>

//       <div className="w-96 p-6 flex flex-col gap-3">
//         <h1 className="text-[#020617] font-bold text-2xl leading-6">Login</h1>
//         <p className="text-[#64748B] font-normal text-sm leading-5">
//           Enter your username and password to login to your account.
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
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Please enter your username"
//             {...register("username", { required: "Username is required" })}
//             className="mt-2 p-2 w-full border rounded-lg

//             border-[#E2E8F0] text-[#020617] placeholder:text-[#64748B]
//        "
//           />
//           {errors.username && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.username.message}
//             </p>
//           )}
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className={`block text-sm font-medium ${
//               errors.password ? "text-red-500" : "text-[#020617]"
//             }`}
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Please enter your password"
//             {...register("password", { required: "Password is required" })}
//             className="mt-2 p-2 w-full border rounded-lg

//                  border-[#E2E8F0] text-[#020617] placeholder:text-[#64748B]
//             "
//           />
//           {errors.password && (
//             <p className="text-red-500 text-xs mt-1">
//               {errors.password.message}
//             </p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-[#0F172A] text-white py-2 rounded-lg"
//         >
//           Login
//         </button>
//       </form>

//       <div className="px-6 ml-16 pt-5 pb-5">
//         <span className="block text-sm text-[#000000]">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-[#0F172A] underline font-medium">
//             Sign up
//           </Link>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assent/Logo.png";
import { useLogin } from "../logic/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [apiError, setApiError] = React.useState("");
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (response) => {
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
      },
      onError: (err) => {
        console.error(err);
        setApiError("Invalid username or password");
      },
    });
  };

  return (
    <div className="w-96 font-inter max-w-sm mx-auto mt-36 rounded-lg border border-[#E2E8F0] shadow-md">
      <div>
        <img src={Logo} alt="logo" className="mt-5 px-6" />
      </div>

      <div className="w-96 p-6 flex flex-col gap-3">
        <h1 className="text-[#020617] font-bold text-2xl leading-6">Login</h1>
        <p className="text-[#64748B] font-normal text-sm leading-5">
          Enter your username and password to login to your account.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-6 rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="username"
            className={`block text-sm font-medium ${
              errors.username ? "text-red-500" : "text-[#020617]"
            }`}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Please enter your username"
            {...register("username", { required: "Username is required" })}
            className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617] placeholder:text-[#64748B]"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className={`block text-sm font-medium ${
              errors.password ? "text-red-500" : "text-[#020617]"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Please enter your password"
            {...register("password", { required: "Password is required" })}
            className="mt-2 p-2 w-full border rounded-lg border-[#E2E8F0] text-[#020617] placeholder:text-[#64748B]"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        {apiError && <p className="text-red-500 ml-20 text-sm mb-4">{apiError}</p>}
        <button
          type="submit"
          className="w-full bg-[#0F172A] text-white py-2 rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="px-6 ml-16 pt-5 pb-5">
        <span className="block text-sm text-[#000000]">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#0F172A] underline font-medium">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
