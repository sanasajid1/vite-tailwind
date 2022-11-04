export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col py-12 px-10 lg:px-12">
      <div className=" sm:w-full sm:max-w-md">
        <h2 className="mt-6 mx-10 text-2xl font-extrabold text-dashblue">
          RAUHA Dashboard
        </h2>
      </div>

      <div className="mt-7 mx-10 grid gap-6 sm:grid-cols-3 sm:h-32 md:grid-cols-3 md:h-48 lg:h-52 lg:grid-cols-3">
        <div className="flex justify-center p-6 text-white font-bold rounded-xl bg-gradient-to-r from-lightgreen to-darkgreen">
          <div>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl"> Patients</h1>
            <p className="text-3xl text-center pt-10">150</p>
          </div>
        </div>
        <div className="flex justify-center p-6 text-white font-bold rounded-xl bg-gradient-to-r from-lightpink to-darkpink">
          <div>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl"> Clinics</h1>
            <p className="text-3xl text-center pt-10">20</p>
          </div>
        </div>
        <div className="flex justify-center p-6 text-white font-bold rounded-xl bg-gradient-to-r from-lightbluee to-darkblue">
          <div>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl"> Clinicans</h1>
            <p className="text-3xl text-center pt-10">100</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center align-center py-12 px-6 lg:px-8">
        <p className="mt-2 text-center text-sm text-gray font-bold text-lg max-w">
          Rauha is a digital CBT designed for those coping with specific
          disablities or health challenges.
        </p>
      </div>
    </div>
  );
};
