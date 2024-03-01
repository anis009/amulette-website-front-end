import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full mt-[20px]">
      <MoonLoader color="#F65F19" className="mx-auto" />
    </div>
  );
};

export default Loading;
