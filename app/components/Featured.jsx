export default function Featured() {
  return (
    <div className="max-w-7xl mx-auto w-full p-4 mt-2">
      <h1 className="font-semibold text-xl mb-2">Work with us</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
        <div className="bg-white rounded-xl">
          <img
            src="https://www.foodora.com/wp-content/uploads/2023/05/foodora-home-4-650x367.jpg"
            alt=""
          />
          <div className="flex flex-col p-2 gap-2 text-sm">
            <p>
              A dynamic and inclusive workplace, where you will have the freedom
              to create your own journey. Find your next adventure in
              Deliverino.
            </p>
            <button className="bg-[#f54748] text-white rounded-full px-4 py-2 w-max">
              Join the team!
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl">
          <img
            src="https://www.foodora.com/wp-content/uploads/2023/05/foodora-home-partners-650x367.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2 p-2 text-sm">
            <p>
              Grow your business while focusing on what you want to: making
              delicious food. Team up with Deliverino and tap into a fresh
              audience.
            </p>
            <button className="bg-[#f54748] text-white rounded-full px-4 py-2 w-max">
              Become a partner!
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl">
          <img
            src="https://www.foodora.com/wp-content/uploads/2023/05/foodora-rider-2-650x365.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2 p-2 text-sm">
            <p>
              Join the rider community. We enable the freedom to pursue your
              dreams and passions, providing the flexibility and means to make
              it happen.
            </p>
            <button className="bg-[#f54748] text-white rounded-full px-4 py-2 w-max">
              Become a rider!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
