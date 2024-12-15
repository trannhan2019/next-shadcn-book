"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
export default function ListSearch() {
  const form = useForm();
  return (
    <div>
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Search</Button>
        </form>
      </Form>
    </div>
  );
}
