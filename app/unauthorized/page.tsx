import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="w-3xl h-screen mx-auto border-x flex justify-center items-center">
      <div className=" w-full h-screen flex flex-col gap-3 justify-center items-center ">
        <h1 className="text-2xl font-bold">Unauthorized</h1>
        <p className=" text-sm text-neutral-400 capitalize ">
          Only Unauthorized persons are allowed
        </p>
        <Link className="text-md text-blue-400 hover:underline" href="/">
          Return To Home Page
        </Link>
      </div>
    </div>
  );
}
