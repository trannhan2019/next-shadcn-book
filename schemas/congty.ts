import { z } from "zod";

export const themCongTySchema = z.object({
  ten: z.string().min(3),
  tenVietTat: z.string().min(1),
  diachi: z.string(),
  sdt: z.string(),
  trangThai: z.boolean(),
});

export const themCongTySchema2 = z.object({
  ten: z.string().min(3),
  tenVietTat: z.string().min(1),
});
