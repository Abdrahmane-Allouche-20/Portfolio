import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models/Fox";
import useAlert from "../hook/useAlert";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Allouche Mohamed Abderrahmane",
          from_email: form.email,
          to_email: "abdrahmane.all23@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-6 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
  {alert.show && <Alert {...alert} />}

  {/* Contact Form */}
  <div className="flex-1 min-w-[50%] flex flex-col">
    <h1 className="sm:text-5xl text-3xl  font-semibold sm:leading-snug font-poppins ">Get in Touch</h1>

    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="backdrop-blur-md bg-white/10 border border-blue-900/30 rounded-xl p-6  shadow-lg w-full flex flex-col gap-7 mt-14"
    >
      <label className=" font-semibold">
        Name
        <input
          type="text"
          name="name"
          className="bg-white outline-blue-600 border border-blue-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </label>

      <label className=" font-semibold">
        Email
        <input
          type="email"
          name="email"
          className="bg-white border outline-blue-600 border-blue-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
          placeholder="anything@gmail.com"
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </label>

      <label className=" font-semibold">
        Your Message
        <textarea
          name="message"
          rows="4"
          className=" block p-2.5 w-full outline-blue-600 text-sm text-gray-900 bg-white rounded-lg border border-blue-600 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card"
          placeholder="Write your thoughts here..."
          value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  </div>

  {/* 3D Fox Model */}
  <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
    >
      <directionalLight position={[0, 0, 1]} intensity={0} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 10, 0]} intensity={0} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
      />

      <Suspense fallback={<Loader />}>
        <Fox
          currentAnimation={currentAnimation}
          position={[0.5, 0.35, 0]}
          rotation={[12.629, -0.6, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
      </Suspense>
    </Canvas>
  </div>
</section>

  );
};

export default Contact;