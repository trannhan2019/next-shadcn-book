import AddForm from "./_add-form";
import List from "./_list";
// import AddFormAction from "./_add-form-action";

export default function CongTy() {
  return (
    <div className="mx-auto rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:max-w-[1200px]">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-medium">Công ty</h3>
        <AddForm />
      </div>
      <List />
    </div>
  );
}
