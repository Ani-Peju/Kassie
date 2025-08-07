import React from "react";
import { useState, useEffect } from "react";

const Main = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (email) {
      console.log("Email changed:", email);
    }
  }, [email]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "john.doe@gmail.com") {
      alert("This email is valid.");
    } else {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#eef4ff] text-center p-4">
      <h1 className="text-5xl font-bold items-center justify-center text-gray-900 mb-4 mt-10">
        For SDRs to Book
      </h1>
      <h1 className="text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 bg-transparent ">
        Meetings that Drive Revenue
      </h1>
      <p className="text-2xl text-gray-700 mb-10 max-w-2xl">
        Our Pipeline Generation Platform eliminates tedious tasks, so your sales
        reps focus on building human connections that generate revenue.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between bg-white rounded-full border-2 border-gray-300 px-2 py-1 w-1/3 gap-2 mt-5 mb-20"
      >
        <input
          type={"email"}
          name={"work-email"}
          maxLength={30}
          placeholder={"Work Email"}
          value={email}
          onChange={handleEmailChange}
          className="px-4 py-2 rounded-full border-none focus:outline-none w-1/2"
        />
        <button
          type={"submit"}
          className="flex bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-md "
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
};

export default Main;
