import Image from "next/image"
export const spinner = () => {
   return(
      <div>
         <Image 
            src="/public/favicon.ico"
            width={100}
            height={100}
            alt="spinner"
         />
      </div>
   )
}