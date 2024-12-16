"use server";

import { CongTyFormData } from "@/types/congty";
import { themCongTySchema, themCongTySchema2 } from "@/schemas/congty";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function themCongTy(values: CongTyFormData) {
  const validate = themCongTySchema.safeParse(values);
  if (!validate.success) {
    return { error: validate.error.format() };
  }

  const { ten, tenVietTat, diachi, sdt, trangThai } = values;

  const res = await prisma.congty.create({
    data: {
      ten,
      tenVietTat,
      diachi,
      sdt,
      trangThai,
    },
  });

  if (!res) return { error: "Thêm công ty thất bại" };

  return { success: "Thêm công ty thành công" };
}

export async function themCongTy2(prevState: any, formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const validate = themCongTySchema2.safeParse(values);
  if (!validate.success) {
    const formattedErrors = validate.error.flatten().fieldErrors;
    return {
      errors: {
        ten: formattedErrors?.ten,
        tenVietTat: formattedErrors?.tenVietTat,
      },
    };
  }

  const { tenVietTat, ten, diachi, sdt, trangThai } = values;

  const res = await prisma.congty.create({
    data: {
      tenVietTat: tenVietTat as string,
      ten: ten as string,
      diachi: diachi as string,
      sdt: sdt as string,
      trangThai: true,
    },
  });

  if (!res) return { error: "Thêm công ty thất bại" };

  revalidatePath("/dashboard/cong-ty");
  return { success: "Thêm công ty thành công" };
}

export async function layDanhSachCongTy() {
  const res = await prisma.congty.findMany();
  return res;
}
