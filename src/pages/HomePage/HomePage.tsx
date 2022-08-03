import imageHome from "../../assets/images/home3.png";
import MainGuestLayout from "layout/MainGuestLayout";
const HomePage = () => {
  return (
    <MainGuestLayout>
      <div className="w-full bg-gradient-to-b from-white to-[#fafafa]">
        <div className="w-full page-container bg-gradient-to-b from-white to-[#fafafa]">
          <div className="w-full home flex lg:flex-row flex-col items-center pb-20 justify-between gap-4 p-4 md:px-16 md:pt-10">
            <div className="w-full lg:w-[54%] xl:w-[32%] flex flex-col gap-y-6 justify-between items-start">
              <div className="flex items-center gap-x-2">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8.16497H11.0158L15.9542 3.22657L14.7734 2.04583L9.83503 6.98423V0H8.16497V6.98423L3.22657 2.04583L2.04583 3.22657L6.98423 8.16497H0V9.83503H6.98423L2.04583 14.7734L3.22657 15.9542L8.16497 11.0158V18H9.83503V11.0158L14.7734 15.9542L15.9542 14.7734L11.0158 9.83503H18V8.16497Z"
                    fill="url(#paint0_linear_107_1337)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_107_1337"
                      x1="3.5"
                      y1="15.5"
                      x2="14.1681"
                      y2="0.487576"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D1498B" />
                      <stop offset="0.355217" stopColor="#FE5A5B" />
                      <stop offset="0.785075" stopColor="#3145FC" />
                      <stop offset="1" stopColor="#BF34F0" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="slogan font-extrabold text-transparent text-base bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Best Kids Academic Online Learning Platform
                </span>
              </div>
              <h1 className="title text-6xl font-bold text-black">
                Inspiring Innovation And Discovery
              </h1>
              <span className=" text-gray-500 text-lg">
                We have more than 80 skills for you to master
              </span>
              <div className="flex email-contact items-center justify-between w-full sm:w-[80%] md:w-[50%] lg:w-full gap-x-2">
                <input
                  type="text"
                  className="p-3 bg-fa border-2 border-e5 text-sm rounded-lg outline-none flex-1"
                  placeholder="Email address"
                />
                <div className="button py-3 items-start text-sm border-primary">
                  Get Started
                </div>
              </div>
            </div>
            <div className="w-full md:w-[80%] lg:w-[60%] ">
              <img src={imageHome} alt="" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </MainGuestLayout>
  );
};

export default HomePage;
