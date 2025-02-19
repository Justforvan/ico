import ConnectWallet from "@/components/page_components/connect_wallet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | ICOC",
  description: "ICO Allocation account page",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center">
        <h1 className="font-bold text-2xl m-6">Account | ICOC</h1>
        <ConnectWallet />
      </main>
    </>
  );
}
