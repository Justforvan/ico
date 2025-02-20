import { z } from "zod";

export const CalculationSchema = z.object({
    id: z.string().uuid(),
    ICO_name: z.string().min(2).max(50),
    user_committed: z.number().int().positive(),
    ICO_target: z.number().int().positive(),
    ICO_currently_raised: z.number().int().positive(),
  });