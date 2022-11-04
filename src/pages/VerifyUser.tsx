import Logo from "../assets/image.png";

export const VerifyUser: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-36 w-80 rounded-xl" src={Logo} alt="" />
        <h2 className="mt-6 text-center text-2xl font-extrabold text-black">
          Code Verification
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray">
                Enter Code
              </label>
              <div className="mt-1">
                <input
                  id="code"
                  name="code"
                  type="text"
                  required
                  className=""
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full mr-2 flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-lg text-md font-bold text-black bg-yellow hover:bg-lightyellow hover:border-lightyellow focus:outline-none"
              >
                Verify
              </button>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-lg text-md font-bold text-black bg-yellow hover:bg-lightyellow hover:border-lightyellow focus:outline-none"
              >
                Resend
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
