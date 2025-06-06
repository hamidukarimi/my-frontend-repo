import React, { useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Register() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null, // Now a file
    backgroundPicture: "",
    gender: "",
    location: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        alert("❌ Passwords do not match");
        return;
      }

      if (step === 1) {
        setStep(2);
        return;
      }

      try {
        const formToSend = new FormData();

        for (const key in formData) {
          if (formData[key]) {
            formToSend.append(key, formData[key]);
          }
        }

        const res = await fetch(`${BASE_URL}/api/users/insert`, {
          method: "POST",
          body: formToSend,
        });

        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          navigate("/profile");
        } else {
          alert(data.error || "❌ Something went wrong");
        }
      } catch (err) {
        console.error(err);
        alert("❌ Error during registration");
      }
    } else {
      try {
        const res = await fetch(`${BASE_URL}/api/users/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          navigate("/profile");
        } else {
          // alert(data.error || "❌ Invalid credentials");
          setMessage(true);
        }
      } catch (err) {
        console.error(err);
        alert("❌ Error during sign-in");
      }
    }
  };

  const closeAlert = () => {
    setMessage(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f4f1] p-6">
      {/* slert message */}

      {message && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center px-10 bg-[#0000007e]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-[180px] bg-placeholderColor p-6 rounded-md"
          >
            <p className="font-bold text-xl">Unable to Log in</p>
            <p className=" mt-3">
              An unexpected error occurred. Please try logging in again.
            </p>
            <span onClick={closeAlert} className="absolute bottom-6 right-6">
              OK
            </span>
          </motion.div>
        </div>
      )}

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-black mb-8 uppercase tracking-wide">
          {isSignup
            ? step === 1
              ? "Create Account"
              : "Profile Details"
            : "Sign In"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <AnimatePresence mode="wait">
            {isSignup ? (
              step === 1 ? (
                <motion.div
                  key="signup-step-1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        value={formData.name}
                        className="w-full px-4 py-2 border-2 border-black rounded-lg"
                        required
                        placeholder="Enter Your Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={formData.email}
                        className="w-full px-4 py-2 border-2 border-black rounded-lg"
                        required
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={formData.password}
                        className="w-full px-4 py-2 border-2 border-black rounded-lg"
                        required
                        placeholder="Create a strong password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Confirm Password
                      </label>
                      <input
                        name="confirmPassword"
                        type="password"
                        onChange={handleChange}
                        value={formData.confirmPassword}
                        className="w-full px-4 py-2 border-2 border-black rounded-lg"
                        required
                        placeholder="Confirm Your Password"
                      />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="signup-step-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Profile Picture
                      </label>
                      <input
                        type="file"
                        name="profilePicture"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Background Picture URL
                      </label>
                      <input
                        name="backgroundPicture"
                        type="text"
                        onChange={handleChange}
                        value={formData.backgroundPicture}
                        className="w-full px-4 py-2 border-2 border-black rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Gender
                      </label>
                      <select
                        name="gender"
                        onChange={handleChange}
                        value={formData.gender}
                        className="w-full px-4 py-2 border-2 border-black rounded-lg"
                      >
                        {/* <option value="">Select</option> */}
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Location
                      </label>
                      <input
                        name="location"
                        type="text"
                        onChange={handleChange}
                        value={formData.location}
                        className="w-full px-4 py-2 border-2 border-black rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Website
                      </label>
                      <input
                        name="website"
                        type="text"
                        onChange={handleChange}
                        value={formData.website}
                        className="w-full px-4 py-2 border-2 border-black rounded-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            ) : (
              <motion.div
                key="signin"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={formData.email}
                      className="w-full px-4 py-2 border-2 border-black rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={formData.password}
                      className="w-full px-4 py-2 border-2 border-black rounded-lg"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200 font-semibold tracking-wide"
          >
            {isSignup
              ? step === 1
                ? "Continue"
                : "Complete Registration"
              : "Sign In"}
          </button>

          <p className="text-center text-sm mt-4">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsSignup(!isSignup);
                setStep(1);
              }}
              className="text-blue-600 hover:underline"
            >
              {isSignup ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
