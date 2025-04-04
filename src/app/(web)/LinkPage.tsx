"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function LinkPage() {
  const params = useParams();
  const gnb = [
    {
      route: "/",
      text: "홈",
    },
    {
      route: "case2",
      text: "case2",
    },
    {
      route: "case3",
      text: "case3",
    },
  ];
  const isActive = (input: string) => {
    if (input === params.case || (input === "/" && params.case === undefined)) {
      return "bg-[#555] active";
    } else {
      return "bg-[#ddd]";
    }
  };
  const changeLinks = gnb.map((item) => {
    return <Link key={`${item.route}`} href={`${item.route}`} className={`w-[15px] h-[15px] rounded-[50%] block duration-100 ease-linear ${isActive(item.route)}`}></Link>;
  });

  return (
    <>
      <aside className="absolute bottom-[50px] translate-x-[-50%] left-[50%] w-full max-w-[150px] flex flex-col items-center">
        {/* <button className="border-1 px-2">
              대통령
              <br />
              새로고침
            </button> */}
        <div className="flex justify-between mb-[30px] w-full relative linkBtnWrap">{changeLinks}</div>
        <span className="text-[#999]">잘가시게</span>
        {/* <button className="underline w-full max-w-[200px]">
          <Link href="https://www.criminalyoon.com/" className="w-full h-full block px-2" target="_blank">
            내란범죄 동조명단
          </Link>
        </button> */}
      </aside>
    </>
  );
}
