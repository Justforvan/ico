/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { CalculationSchema } from "@/types";
import { z } from "zod";

export const AllocationCheck = async (
  values: z.infer<typeof CalculationSchema>
) => {
  try {
    CalculationSchema.parse(values);
    const { user_committed, ICO_target, ICO_currently_raised } = values;
    const PercentAllocated = (user_committed / ICO_target) * 100;

    console.log(PercentAllocated);
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      error: error?.message,
    };
  }
};      
