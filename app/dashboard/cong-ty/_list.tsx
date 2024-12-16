import { layDanhSachCongTy } from "@/actions/congty";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ListSearch from "./_list-search";
import { XIcon, CheckIcon, EllipsisVertical, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const List = async () => {
  const congTys = await layDanhSachCongTy();

  return (
    <>
      <ListSearch />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tên công ty</TableHead>
            <TableHead>Tên viết tắt</TableHead>
            <TableHead>Địa chỉ</TableHead>
            <TableHead>Số điện thoại</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {congTys.map((congTy) => (
            <TableRow key={congTy.id}>
              <TableCell className="text-sm text-gray-800">
                {congTy.ten}
              </TableCell>
              <TableCell className="text-sm text-gray-800">
                {congTy.tenVietTat}
              </TableCell>
              <TableCell className="text-sm text-gray-800">
                {congTy.diachi}
              </TableCell>
              <TableCell className="text-sm text-gray-800">
                {congTy.sdt}
              </TableCell>
              <TableCell>
                {congTy.trangThai ? (
                  <CheckIcon color="green" className="h-4 w-4" />
                ) : (
                  <XIcon color="red" className="h-4 w-4" />
                )}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <EllipsisVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Pencil />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default List;
