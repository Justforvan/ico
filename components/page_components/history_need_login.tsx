import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export default function HistoryNeedLogin() {
  return (
    <div className="m-6 p-3">
      <div className="flex flex-col items-center justify-center my-10">
        <p className="text-center">
          Connect your Solana wallet to access your history.
        </p>
        <div className="mt-3">
          <Button className="bg-yellow-800 hover:bg-yellow-900">
            <Wallet />
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
}
