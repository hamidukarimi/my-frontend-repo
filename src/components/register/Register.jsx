import React, { useState, useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Validation schemas remain the same
const stepOneSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const stepTwoSchema = z.object({
  profilePicture: z.instanceof(File).optional(),
  bio: z.string().max(200, "Bio must be less than 200 characters").optional(),
  gender: z.enum(["Male", "Female", "Other"]),
  location: z
    .string()
    .max(50, "Location must be less than 50 characters")
    .optional(),
  website: z
    .string()
    .url("Please enter a valid URL")
    .or(z.literal(""))
    .optional(),
});

function Register() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({
    resolver: zodResolver(step === 1 ? stepOneSchema : stepTwoSchema),
  });

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
    bio: "",
    gender: "Male",
    location: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profilePicture" && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleStepOneSubmit = async (data) => {
    const isValid = await trigger();
    if (isValid) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();

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
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

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
        setMessage(true);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error during sign-in");
    }
  };

  const closeAlert = () => {
    setMessage(false);
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
      {/* Alert message - updated design */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
              className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full"
            >
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Login Failed
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                The email or password you entered is incorrect. Please try
                again.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={closeAlert}
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  OK
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-md bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="p-8">
          {/* Logo placeholder - you can add your actual logo here */}
          <div className="flex justify-center mb-8">
            <div className="text-2xl font-bold text-black">YourLogo</div>
          </div>

          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            {isSignup
              ? step === 1
                ? "Create your account"
                : "Complete your profile"
              : "Sign in to your account"}
          </h2>

          {/* Social login options - common in modern designs */}
          {!isSignup && (
            <div className="mb-6">
              <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 mb-3">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.667-4.167-2.698-6.735-2.698-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.67-0.069-1.325-0.189-1.961h-9.811z" />
                </svg>
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
                Continue with Facebook
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>
          )}

          <form
            onSubmit={
              isSignup
                ? step === 1
                  ? handleSubmit(handleStepOneSubmit)
                  : handleFinalSubmit
                : handleSignIn
            }
            encType="multipart/form-data"
          >
            <AnimatePresence mode="wait">
              {isSignup ? (
                step === 1 ? (
                  <motion.div
                    key="signup-step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First name
                        </label>
                        <input
                          {...register("name")}
                          name="name"
                          type="text"
                          onChange={handleChange}
                          value={formData.name}
                          className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                            errors.name
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-black focus:border-black"
                          } focus:outline-none focus:ring-1`}
                          placeholder="John"
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last name
                        </label>
                        <input
                          {...register("lastName")}
                          name="lastName"
                          type="text"
                          onChange={handleChange}
                          value={formData.lastName}
                          className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                            errors.lastName
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-black focus:border-black"
                          } focus:outline-none focus:ring-1`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email address
                      </label>
                      <input
                        {...register("email")}
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={formData.email}
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-black focus:border-black"
                        } focus:outline-none focus:ring-1`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        {...register("password")}
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={formData.password}
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.password
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-black focus:border-black"
                        } focus:outline-none focus:ring-1`}
                        placeholder="••••••••"
                      />
                      {errors.password && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.password.message}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-gray-500">
                        Use 8 or more characters
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm password
                      </label>
                      <input
                        {...register("confirmPassword")}
                        name="confirmPassword"
                        type="password"
                        onChange={handleChange}
                        value={formData.confirmPassword}
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.confirmPassword
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-black focus:border-black"
                        } focus:outline-none focus:ring-1`}
                        placeholder="••••••••"
                      />
                      {errors.confirmPassword && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup-step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="text-center">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Profile picture
                      </label>
                      <div className="flex justify-center">
                        <div
                          className="relative w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-gray-200 transition-colors"
                          onClick={triggerFileSelect}
                        >
                          {previewImage ? (
                            <img
                              src={previewImage}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <img
                              className="w-full h-full object-cover"
                              src="https://i.pinimg.com/736x/33/f8/26/33f8266681c946cd80de486c499fe992.jpg"
                            />
                          )}
                        </div>
                        <input
                          {...register("profilePicture")}
                          ref={fileInputRef}
                          type="file"
                          name="profilePicture"
                          accept="image/*"
                          onChange={handleChange}
                          className="hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio <span className="text-gray-400">(optional)</span>
                      </label>
                      <textarea
                        {...register("bio")}
                        name="bio"
                        onChange={handleChange}
                        value={formData.bio}
                        rows="3"
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.bio
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-black focus:border-black"
                        } focus:outline-none focus:ring-1`}
                        placeholder="Tell us about yourself..."
                      ></textarea>
                      {errors.bio && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.bio.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        {...register("gender")}
                        name="gender"
                        onChange={handleChange}
                        value={formData.gender}
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.gender
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-black focus:border-black"
                        } focus:outline-none focus:ring-1`}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location{" "}
                        <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        {...register("location")}
                        name="location"
                        type="text"
                        onChange={handleChange}
                        value={formData.location}
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.location
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-black focus:border-black"
                        } focus:outline-none focus:ring-1`}
                        placeholder="City, Country"
                      />
                      {errors.location && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.location.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website{" "}
                        <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        {...register("website")}
                        name="website"
                        type="url"
                        onChange={handleChange}
                        value={formData.website}
                        className={`w-full px-3 py-2.5 text-sm rounded-md border ${
                          errors.website
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-black focus:border-black"
                        } focus:outline-none focus:ring-1`}
                        placeholder="https://example.com"
                      />
                      {errors.website && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.website.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-between pt-2">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium"
                      >
                        Back
                      </button>
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
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={formData.email}
                      className="w-full px-3 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={formData.password}
                      className="w-full px-3 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 text-gray-600"
                      >
                        Remember me
                      </label>
                    </div>
                    <button
                      type="button"
                      className="text-black hover:text-gray-800"
                    >
                      Forgot password?
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
              >
                {isSignup
                  ? step === 1
                    ? "Continue"
                    : "Complete registration"
                  : "Sign in"}
              </button>

              <p className="text-center text-sm mt-4 text-gray-600">
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignup(!isSignup);
                    setStep(1);
                    reset();
                    setPreviewImage(null);
                  }}
                  className="text-black font-medium hover:text-gray-800 hover:underline"
                >
                  {isSignup ? "Sign in" : "Sign up"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
