import CalculationForm from "@/components/page_components/calculation_form";
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
        <section className="m-6 p-3 max-w-screen-xl flex flex-col items-center justify-center">
          <CalculationForm />
        </section>
      </main>
    </>
  );
}
