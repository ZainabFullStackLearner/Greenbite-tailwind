import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
       backgroundImage: `url(https://images.unsplash.com/photo-1539902743451-20dfa0a92ffd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
      }}
    >
      <div className="absolute top-4 left-4 text-white text-sm sm:text-base font-inter flex items-center cursor-pointer mt-20 font-semibold">
        <Link href="/">
          <span className="mr-2">&#8592; </span> Back
        </Link>
      </div>
      
      <div className="bg-gray-700 opacity-70 bg-opacity-90 rounded-2xl p-6 sm:p-10 shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold font-inter text-gray-300 mb-1">
          Hey, Hello <span className="wave">👋</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-inter mb-6">
          Enter your credentials to access your account
        </p>

        {/* Social Login Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center text-sm sm:text-base font-inter">
            Facebook
          </button>
          <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg flex items-center justify-center text-sm sm:text-base font-inter border">
            Google
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm sm:text-base mb-4 font-inter">
          or continue with
        </p>

        {/* Form Fields */}
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <span className="absolute right-4 top-2/4 transform -translate-y-2/4 text-gray-500 cursor-pointer">
              👁️
            </span>
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <span className="absolute right-4 top-2/4 transform -translate-y-2/4 text-gray-500 cursor-pointer">
              👁️
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg text-sm sm:text-base font-bold font-inter flex items-center justify-center gap-2"
          >
            Create an account <span>&#8594;</span>
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm sm:text-base mt-6 font-inter">
          Already have an account?{" "}
          <a
            href="#"
            className="text-green-500 font-semibold hover:underline"
          >
            SIGN IN
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
