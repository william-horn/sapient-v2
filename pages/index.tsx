
import Image from "next/image"
import Logo from "../public/logo.webp";
import Button from "../components/buttons/Button";

export default function Home() {
  return (
    <div>
      <div className="w-full top-bar">

        <div className="p-5 image-frame">
          <Image 
          src={Logo} 
          width={100} 
          height={100}
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <h1 className="text-4xl text-center mb-7">Sapient</h1>

        <div className="p-3 mb-7 w-[25%]">
          <p className="text-2xl text-center text">
            Globally scoped, locally focused. Because compassion is in our DNA.
          </p>
        </div>

        <Button>Start Now</Button>
      </div>
    </div>
  )
}
