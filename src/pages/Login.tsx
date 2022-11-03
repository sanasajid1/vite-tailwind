export const Login: React.FC = () => {
  return (
    <div>
      <div className="flex mx-auto mt-24 w-60 h-16 rounded-lg bg-blue text-orange justify-center text-5xl items-center">
        RAUHA
      </div>

      <div className="flex text-black font-extrabold text-3xl mt-3 justify-center items-center">
        Create your account
      </div>

      <div className="flex mt-3 justify-center items-center">
        <span className="flex font-normal text-gray text-sm justify-center items-center">
          Already Registered?
        </span>
        <span className="flex font-normal text-indigo text-sm ml-1 justify-center items-center">
          Log in
        </span>
      </div>

      <div className="mt-8 ">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6">
            <div>
              <label id="email" className="block text-sm font-bold text-blue ">
                Email
              </label>
              <div className="mt-1 ">
                <input id="email" type="email" required className="" />
              </div>
            </div>

            <div>
              <label
                id="password"
                className="block text-sm font-bold text-blue "
              >
                Password
              </label>
              <div className="mt-1 ">
                <input id="password" type="password" required className="" />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full mt-9 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-small font-medium text-yellow bg-blue"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
