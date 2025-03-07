import { useState, useEffect } from "react";
import { FaBuilding, FaUser, FaEnvelope } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 
import axios from "axios";
import "../App.css"; 

const Input = ({ icon: Icon, placeholder, type = "text", value, onChange, defaultCountry }) => (
  <div className="relative">
    {type === "tel" ? (
      <PhoneInput
        country={defaultCountry}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputClass="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        containerClass="react-tel-input-container"
      />
    ) : (
      <>
        {Icon && <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </>
    )}
  </div>
);

const Button = ({ children, onClick, variant = "primary", disabled = false, className = "" }) => {
  const baseStyles =
    "py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-100",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
};

const Checkbox = ({ id, checked, onChange }) => (
  <input
    id={id}
    type="checkbox"
    checked={checked}
    onChange={(e) => onChange(e.target.checked)}
    className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
  />
);

export default function SignupPage() {
  const [phone, setPhone] = useState("");
  const [defaultCountry, setDefaultCountry] = useState("us");
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("https://ipwho.is/");
        if (response.data?.country_code) {
          setDefaultCountry(response.data.country_code.toLowerCase());
        }
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };
    fetchLocation();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      alert("Please enter a valid phone number!");
      return;
    }
    alert(`Phone number submitted: ${phone}`);
  };

  return (
    <section
      className="h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/backgroundimage.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col md:flex-row w-[88%] h-[88%] max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
        {/* Left Section */}
        <div className="hidden md:flex md:w-1/2 bg-blue-500 p-6 text-white flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Start your free trial</h1>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i}>
                  <h3 className="font-semibold">Sample Title {i + 1}</h3>
                  <p className="text-sm ml-3">Sample Description {i + 1}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            <img
              src="https://picsum.photos/300/200"
              alt="CRM Illustration"
              className="max-w-[250px] mx-auto"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-white flex flex-col justify-between">
          <div className="max-w-md mx-auto space-y-0">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900">
                Create Your 15-day Free Trial Account
              </h2>
              <p className="text-gray-600">Join us by creating a Fairforce CRM account</p>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <Input icon={FaBuilding} placeholder="Company Name" />
                <Input icon={FaUser} placeholder="Full Name" />
                <Input icon={FaEnvelope} placeholder="Email Address" type="email" />
                <Input
                  placeholder="Mobile Number"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  defaultCountry={defaultCountry}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={agreed} onChange={setAgreed} />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button className="w-full" disabled={!agreed}>
                Sign Up
              </Button>

              <div className="text-center text-sm text-gray-500 space-y-1">
                <p>No Credit Card Required</p>
                <p>Sign Up Using</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
