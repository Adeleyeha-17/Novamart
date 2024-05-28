import Image from "next/image"

const Spinner = () => {
   return(
      <div className="fixed inset-0 h-screen flex items-center justify-center z-50 bg-white">
         <Image 
            src="/logo.png"
            width={80}
            height={80}
            alt="spinner"
            />
      </div>
   )
}

export default Spinner 