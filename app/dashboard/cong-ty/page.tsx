import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
// import AddForm from "./_add-form";
import List from "./_list";
import AddFormAction from "./_add-form-action";

export default function CongTy() {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm xl:w-1/2">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-medium">Công ty</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600">
              <PlusIcon className="h-4 w-4" />
              <span>Thêm</span>
            </Button>
          </DialogTrigger>
          <AddFormAction />
        </Dialog>
      </div>

      <List />
    </div>
  );
}
