import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccountDetails() {
  return (
    <>
      <div className="m-6 p-3">
        <div className="flex flex-col items-center justify-center my-10">
          <p className="text-center">
            Wallet: <span className="font-bold">0x1234567890abcdef</span>
          </p>
          <div className="mt-3">
            <Button className="bg-yellow-800 hover:bg-yellow-900">
              <LogOut />
              Disconnect Wallet
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
