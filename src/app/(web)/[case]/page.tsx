import Image from "next/image";
import Case2 from "./Case2";
import Case3 from "./Case3";

export default async function Page({ params }: { params: Promise<{ case: string }> }) {
  const param = await params;
  const renderCase = () => {
    switch (param.case) {
      case "case2":
        return <Case2 />;
      case "case3":
        return <Case3 />;
    }
  };
  return <>{renderCase()}</>;
}
