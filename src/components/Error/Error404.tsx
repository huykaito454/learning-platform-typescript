import { useNavigation } from "@pankod/refine-core";
const Error404 = () => {
  const { push } = useNavigation();
  return (
    <div className="w-full h-full bg-white fixed top-0 right-0 left-0 bottom-0 z-[9999]">
      <div className=" bg-white flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg gap-4">
        <span className=" text-red-500 text-9xl font-semibold">404</span>
        <span className=" text-3xl">opps! Page not found</span>
        <span className="text-lg text-center mt-2">
          Oops! The page you are looking for does not exist, it might have been
          moved or deleted
        </span>
        <div className="flex items-center justify-center gap-6 uppercase">
          <div
            className="button border-blue-500 bg-blue-500"
            onClick={() => {
              push("/");
            }}
          >
            Home
          </div>
          <div className="button bg-red-400 border-red-400">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
