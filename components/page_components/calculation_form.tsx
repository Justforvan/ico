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

const formSchema = z.object({
  ICO_name: z.string().min(2).max(50),
  user_committed: z.number().int().positive(),
  ICO_target: z.number().int().positive(),
  ICO_currently_raised: z.number().int().positive(),
});

export default function CalculationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ICO_name: "",
      user_committed: 0,
      ICO_target: 0,
      ICO_currently_raised: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
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
                  Value in USD you are willing to commit to the ICO. Only
                  number.
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
                  The target to be raised on the ICO. Value in USD, only number.
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
                  The amount currently has been raised by the ICO.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-yellow-800 hover:bg-yellow-900">Submit</Button>
        </form>
      </Form>
    </>
  );
}
