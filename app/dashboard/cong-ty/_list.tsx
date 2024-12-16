import { layDanhSachCongTy } from "@/actions/congty";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ListSearch from "./_list-search";

const List = async () => {
  const congTys = await layDanhSachCongTy();

  return (
    <>
      <ListSearch />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tên công ty</TableHead>
            <TableHead>Địa chỉ</TableHead>
            <TableHead>Trạng thái</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {congTys.map((congTy) => (
            <TableRow key={congTy.id}>
              <TableCell className="text-md font-medium">
                {congTy.ten}
              </TableCell>
              <TableCell className="text-sm text-gray-700">
                {congTy.diachi}
              </TableCell>
              <TableCell>
                {congTy.trangThai ? (
                  <Badge className="bg-sky-500 text-white hover:bg-sky-600">
                    Hoạt động
                  </Badge>
                ) : (
                  <Badge variant="destructive">Không hoạt động</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default List;
