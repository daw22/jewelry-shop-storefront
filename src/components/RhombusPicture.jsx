import Image from "next/image";

function RhombusPicture({src, title}) {
  return (
    <div className="rhombus-clip p-1 transition-all duration-500 ease-in-out hover:-translate-y-3
    bg-blue-400 hover:bg-pink-400 hidden sm:block ">
      <div className="bg-contain rhombus-clip w-24 h-24 md:w-36 md:h-36 flex items-center justify-center"
      >
        <Image src={src} alt={title} width={300} height={100} />
      </div>
    </div>
  )
}

export default RhombusPicture;