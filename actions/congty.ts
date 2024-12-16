"use server";

import { CongTyFormData } from "@/types/congty";
import { themCongTySchema } from "@/schemas/congty";
import prisma from "@/lib/prisma";

export async function themCongTy(values: CongTyFormData) {
  const validate = themCongTySchema.safeParse(values);
  if (!validate.success) {
    return { error: "Dữ liệu không hợp lệ" };
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

export async function layDanhSachCongTy() {
  const res = await prisma.congty.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return res;
}
