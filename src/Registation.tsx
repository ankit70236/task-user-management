function Register({goLogin}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-6">
          Register
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
            Register
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?
          <span 
          onClick={goLogin}
          className="text-blue-500 ml-1 cursor-pointer">
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;