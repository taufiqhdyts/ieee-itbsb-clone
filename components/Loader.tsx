import Image from "next/image";

function Loader() {
  return (
    <main className="Loader w-full h-[calc(100vh-224px)] sm:w-[100vw-80px] lg:h-[calc(100vh-384px)] flex ">
      <div className="container flex w-[50%] m-auto ">
        <Image
          src="/logo-white.png"
          alt="IEEE Logo"
          className="gambar animate-pulse"
          width={100}
          height={100}
          priority
          layout="responsive"
        />
      </div>
    </main>
  );
}

export default Loader;
