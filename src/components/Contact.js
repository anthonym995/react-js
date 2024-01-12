import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to a server)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto">
      <div className="h-[470px] flex justify-center items-center">
        <div className="text-center max-w-[600px]">
          <h1 className="text-4xl text-[#27ae60] mb-5">Contact Us</h1>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label className="text-base text-[#555]" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full p-2 text-base border"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="text-base text-[#555]" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full p-2 text-base border"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="text-base text-[#555]" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full p-2 text-base border"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              className="bg-[#3498db] text-[#fff] p-3 cursor-pointer border-none hover:bg-[#2980b9]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
