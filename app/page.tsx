import ComingSoon from "@/components/page_components/coming_soon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | ICOC",
  description: "ICO Allocation Calculator by JFV",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center">
        <h1 className="font-bold text-2xl m-6">Home | ICOC</h1>
        <ComingSoon />
      </main>
    </>
  );
}
