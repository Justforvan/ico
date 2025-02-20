import AccountDetails from "@/components/page_components/account_details";
import ConnectWallet from "@/components/page_components/connect_wallet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | ICO Calculator",
  description: "ICO Allocation account page",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center">
        <h1 className="font-bold text-2xl m-6">Account | ICOC</h1>
        <ConnectWallet />
        <AccountDetails />
      </main>
    </>
  );
}
