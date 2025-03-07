import React from "react";

const Test = () => {
  return (
    <React.Fragment>
      <section
        className="bg-cover bg-center p-8"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826')",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 justify-items-center shadow-lg bg-white p-8 rounded-lg">
          {/* Left Section: Image and Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6">
              <img
                src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
                alt="Placeholder"
                className="object-cover rounded-lg max-w-full"
              />
            </div>
            <div>
              <h5 className="text-xl font-semibold text-blue-gray-900 mb-2">
                UI/UX Review Check
              </h5>
              <p className="text-gray-700">
                The place is close to Barceloneta Beach and a bus stop just 2
                minutes away. It's also near "Naviglio," where you can enjoy the
                main nightlife in Barcelona.
              </p>
            </div>
          </div>

          {/* Right Section: Login Form */}
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Login
            </h1>
            <form className="space-y-4">
              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-gray-600 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a
                  href="#"
                  className="text-blue-500 hover:underline text-sm font-medium"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Sign In
              </button>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="text-blue-600"
                />
                <label htmlFor="remember" className="ml-2 text-gray-700">
                  Remember Me
                </label>
              </div>

              {/* Social Login Divider */}
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 text-gray-600">or login with</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center border border-gray-300 p-3 rounded-md hover:border-gray-500 hover:bg-gray-100 transition"
                >
                  <svg
                    className="w-4 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#EA4335"
                      d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                    />
                  </svg>
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center border border-gray-300 p-3 rounded-md hover:border-gray-500 hover:bg-gray-100 transition"
                >
                  <svg
                    className="w-4 mr-2"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 2.5c-58.892 1.725-64.898 84.363-7.46 95h14.92c57.451-10.647 51.419-93.281-7.46-95z"
                      style={{ fill: "#1877f2" }}
                    />
                    <path
                      d="M57.46 64.104h11.125l2.117-13.814H57.46v-8.965c0-3.779 1.85-7.463 7.781-7.463h6.021V22.101c-12.894-2.323-28.385-1.616-28.722 17.66V50.29H30.417v13.814H42.54V97.5h14.92V64.104z"
                      style={{ fill: "#f1f1f1" }}
                    />
                  </svg>
                  <span>Facebook</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Test;
