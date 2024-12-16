"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";
import { themCongTy2 } from "@/actions/congty";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import ValidateMsg from "@/components/validate-msg";
import { useEffect, useRef } from "react";

const initialState = {
  success: "",
  error: "",
  errors: {
    ten: "",
    tenVietTat: "",
  },
};

export default function AddFormAction() {
  const [state, formAction] = useFormState(themCongTy2, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <DialogContent
      onInteractOutside={(e) => {
        e.preventDefault();
      }}
    >
      <form ref={formRef} action={formAction}>
        <DialogHeader>
          <DialogTitle>Thêm công ty</DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Tên Công ty <span className="text-red-500">*</span>
              </Label>
              <Input name="ten" className="col-span-3" />
              <ValidateMsg error={state.errors?.ten as any} />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Tên viết tắt</Label>
              <Input name="tenVietTat" className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Địa chỉ</Label>

              <Textarea name="diachi" className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Số điện thoại</Label>

              <Input name="sdt" className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Trạng thái</Label>
              <Switch name="trangThai" defaultChecked />
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Hủy</Button>
          </DialogClose>
          <SubmitButton />
        </DialogFooter>
      </form>
      {state.error && toast.error(state.error)}
      {state.success && toast.success(state.success)}
    </DialogContent>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? <Loader2 className="animate-spin" /> : "Lưu"}
    </Button>
  );
}
