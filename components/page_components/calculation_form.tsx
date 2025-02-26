"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CalculationSchema } from "@/types";
import { AllocationCheck } from "@/app/actions/countResult.actions";

type CalculationProps = {
  id: string;
};

export default function CalculationForm({ id }: CalculationProps) {
  const form = useForm<z.infer<typeof CalculationSchema>>({
    resolver: zodResolver(CalculationSchema),
    defaultValues: {
      id: id,
      ICO_name: "",
      user_committed: 0,
      ICO_target: 0,
      ICO_currently_raised: 0,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof CalculationSchema>) {
    await AllocationCheck(values);
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="ICO_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ICO Name/Ticker</FormLabel>
                <FormControl>
                  <Input placeholder="Bitcoin" {...field} />
                </FormControl>
                <FormDescription>
                  This helps you identify the ICO when saved to account history.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="user_committed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount to be Committed</FormLabel>
                <FormControl>
                  <Input
                    placeholder="100"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? 0 : Number(value));
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Value in USD you are willing to commit to the ICO. Number
                  only.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ICO_target"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ICO Target</FormLabel>
                <FormControl>
                  <Input
                    placeholder="100"
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? 0 : Number(value));
                    }}
                  />
                </FormControl>
                <FormDescription>
                  The target to be raised on the ICO. Value in USD, number only.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ICO_currently_raised"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Currently Raised</FormLabel>
                <FormControl>
                  <Input
                    placeholder="100"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? 0 : Number(value));
                    }}
                  />
                </FormControl>
                <FormDescription>
                  The amount currently has been raised by the ICO. Number only.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button type="submit" className="bg-yellow-800 hover:bg-yellow-900">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
