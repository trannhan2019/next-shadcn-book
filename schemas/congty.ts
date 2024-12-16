import { z } from "zod";

export const themCongTySchema = z.object({
  ten: z.string().min(3),
  tenVietTat: z.string().min(1),
});
