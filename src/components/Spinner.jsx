import Image from "next/image"

const Spinner = () => {
   return(
      <div className="w-full h-screen flex items-center justify-center">
         <Image 
            src="/apple-touch-icon.png"
            width={80}
            height={80}
            alt="spinner"
            />
      </div>
   )
}

export default Spinner 