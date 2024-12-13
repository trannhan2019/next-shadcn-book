import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const data = {
  id: 1,
  title: "Bạn đang ở đây: Cuốn sách ngắn về thế giới ",
  author: "Nicholas Crane",
  price: "95k",
  description:
    "Cuốn sách giúp chúng ta nhìn nhận lại về địa lý, một môn học quan trọng trong việc củng cố nền tảng tư duy cho con người.",
  code: "SBA0004",
  location: "Ngăn 1",
  note: "Sách Công ty trang bị",
  image:
    "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/33347.jpg?v=1&w=480&h=700",
};

export default function Detail() {
  return (
    <div className="mt-10">
      <div className="container mx-auto px-5">
        {/* breadcrumb */}
        <div className="mb-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">
                  Breadcrumb
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* heading */}
        <div className="mb-5">
          <h4 className="mb-4 text-center text-4xl font-semibold md:text-left">
            Books Collections
          </h4>
          <p className="text-center font-light md:text-left">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit.
          </p>
        </div>
        {/* detail */}
        <div className="flex flex-col md:flex-row">
          <div className="flex h-[500px] w-full items-center justify-center bg-gradient-to-r from-white to-gray-50 md:w-4/12">
            <div className="relative h-[80%] w-[80%]">
              <Image
                src={data.image}
                alt="book"
                fill
                className="object-cover"
                sizes="100vw 50vw"
              />
            </div>
          </div>
          <div className="w-full border border-gray-200 bg-gray-50 p-4 md:w-8/12">
            <div className="h-full rounded-lg bg-white p-3">
              <h4 className="mb-4 text-2xl font-semibold">{data.title}</h4>
              <p className="mb-4 text-base text-gray-700">{data.description}</p>
              <p className="mb-4 text-lg">Tác giả: {data.author}</p>
              <p className="mb-4 text-lg">Mã sách: {data.code}</p>
              <p className="mb-4 text-lg">
                Vị trí: {data.location} - {data.note}
              </p>
              <p className="mb-4 text-lg">Số lượng: 1</p>
              <p className="mb-4 text-lg">
                Giá: <span className="text-primary">{data.price}</span>
              </p>
              <Button>Mượn sách</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
