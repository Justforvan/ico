import CalculationForm from "@/components/page_components/calculation_form";
import { Metadata } from "next";
import { randomUUID } from "crypto";

export const metadata: Metadata = {
  title: "Home | ICO Calculator",
  description: "ICO Allocation Calculator by JFV",
};

export default function Home() {
  const idForForms = randomUUID();

  return (
    <>
      <h1 className="font-bold text-2xl m-6">Home | ICOC</h1>
      <main className="flex flex-col justify-center items-center">
        <section className="mx-6 mb-20 p-3 max-w-screen-xl">
          <CalculationForm id={idForForms} />
        </section>
      </main>
    </>
  );
}
