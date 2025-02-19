import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConnectWallet() {
  return (
    <>

        <div className="m-6 p-3 border border-gray-400 rounded-xl">
          <div className="flex flex-col items-center justify-center my-10">
            <p className="text-center">Connect your web3 wallet to login to your account.</p>
            <div className="mt-3">
              <Button className="bg-yellow-800 hover:bg-yellow-900">
                <Wallet></Wallet>
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
    </>
  );
}
