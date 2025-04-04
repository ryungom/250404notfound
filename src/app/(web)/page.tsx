"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="font-[jejuG] h-screen flex flex-col gap-5 items-center justify-center">
      <article className="ml-[-15px]">
        <figure className="relative aspect-square w-full max-w-[150px] bgMotion mb-2">
          <Image src="./image/oops.svg" fill sizes="100%" alt=""></Image>
        </figure>
        <h2 className="text-[1.8rem] text-red-500">대통령을 찾을 수 없음</h2>
        <h3 className="mt-[-8px]">people과의 연결을 거부했습니다.</h3>
      </article>

      <article className="flex flex-col gap-2">
        <h4>다음 방법을 시도해보세요</h4>
        <ul>
          <li>60일 내 대선</li>
          <li>국민의짐? 내란의힘? 뭐 비슷한거 해체;</li>
        </ul>
        <h5 className="text-[#bbb]">WIN_250404_1122_FROM_241203</h5>
      </article>
    </section>
  );
}
