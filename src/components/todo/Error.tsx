import { BsExclamation } from "react-icons/bs";

export default function Error() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-24 h-24 flex justify-center items-center bg-tomato-4 rounded-full">
        <BsExclamation size={100} className='fill-tomato-9'/>
      </div>
      <p className="font-popping font-bold text-3xl mt-5">Opps :(</p>
      <p className="text-xl mt-3">Something is wrong try again</p>
    </div>
  );
}
