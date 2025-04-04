import Image from "next/image";

export default function Case3() {
  return (
    <>
      <section className="flex flex-col gap-20 justify-center items-center h-screen">
        <h2 className="text-[4.5rem]">250404</h2>
        <figure className="relative aspect-[355/187] w-full bgMotion">
          <Image src="./image/pamhyun.svg" fill sizes="100%" alt=""></Image>
        </figure>
        <h3 className="text-[4.5rem]">am1122</h3>
      </section>
    </>
  );
}
