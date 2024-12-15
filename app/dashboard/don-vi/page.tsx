import CongTy from "./_congty/congty";
import PhongBan from "./_phongban/phongban";

export default function DonVi() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row">
      <CongTy />
      <PhongBan />
    </div>
  );
}
