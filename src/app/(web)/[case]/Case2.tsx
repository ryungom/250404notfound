import Image from "next/image";

export default function Case2() {
  return (
    <section className="flex flex-col gap-20 justify-center items-center h-screen">
      <figure className="relative aspect-[236/95] w-full max-w-[400px] bgMotion2">
        <Image src="./image/404.svg" fill sizes="100%" alt=""></Image>
      </figure>
      <figure className="relative aspect-[237/73] w-full max-w-[400px] bgMotion3">
        <Image src="./image/president.svg" fill sizes="100%" alt=""></Image>
      </figure>
      <figure className="relative aspect-[224/68] w-full max-w-[400px] bgMotion2">
        <Image src="./image/notfound.svg" fill sizes="100%" alt=""></Image>
      </figure>
    </section>
  );
}
