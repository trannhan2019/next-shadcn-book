"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const data = [
  {
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
  },
  {
    id: 2,
    title: "Yến Hội và Phaedrus",
    author: "Platon",
    price: "135k",
    description:
      "Tác phẩm gồm hai phần, 'Yến Hội' và 'Phaedrus', dành cho những ai quan tâm tới văn học và triết học Hy-La cổ đại.",
    code: "SBA0010",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://www.dtv-ebook.com/images/sach-moi-phat-hanh/2019/yen-hoi-va-phaedrus-tac-gia-platon.jpg",
  },
  {
    id: 3,
    title: "Trò Chơi và Thú Tiêu Khiển của Người Huế",
    author: "Trần Đức Anh Sơn",
    price: "139k",
    description:
      "Cuốn sách nghiên cứu, trình bày và phân tích các trò chơi, thú tiêu khiển truyền thống của người dân Huế.",
    code: "SBA0050",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/414/537/products/43033226-79e3-4182-afcb-55d3dfd20236.jpg?v=1671349837817",
  },
  {
    id: 4,
    title: "Thời Khắc Tươi Đẹp",
    author: "Nina Riggs",
    price: "159k",
    description:
      "Cuốn hồi ký tuyệt vời về sự sống và cái chết, từ nhà thơ Nina Riggs.",
    code: "SBA0074",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://omegaplus.vn/wp-content/uploads/2020/02/khoanh-khac-tuoi-dep-ok.jpg",
  },
  {
    id: 5,
    title: "Mọi Chuyện Trên Đời Đều Có Nguyên Do",
    author: "Kate Bowler",
    price: "109k",
    description:
      "Hành trình đi tìm ý nghĩa cuộc đời của một bệnh nhân ung thư.",
    code: "SBA0075",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://omegaplus.vn/wp-content/uploads/2019/07/5-Copy-1024x1024.jpg",
  },
  {
    id: 6,
    title: "Lẽ thường",
    author: "Thomas Paine",
    price: "109k",
    description:
      "Trong Lẽ thường, Thomas Paine phân tích thực trạng, hoàn cảnh và quan hệ của các Thuộc địa đối với nước Anh. Với lý luận chặt chẽ và văn chương nghị luận sắc bén, ông đã giúp cho người dân Mỹ ở thuộc địa nhìn rõ vấn đề và chọn cho mình hướng đi đúng đắn. Tác giả dùng văn phong và từ ngữ giản dị để trình bày những vấn đề phức tạp thuộc về triết học, tôn giáo và chính trị nhằm vào đối tượng chính là đại chúng. Lẽ thường còn ảnh hưởng đến việc soạn thảo Tuyên ngôn Độc lập của Mỹ vào tháng Bảy năm 1776",
    code: "SBA0075",
    location: "Ngăn 1",
    note: "Sách Công ty trang bị",
    image:
      "https://down-vn.img.susercontent.com/file/1a7c93ad401e5e97658b829c05ad07f9",
  },
];

export default function Popular() {
  return (
    <div className="py-20">
      <div className="container mx-auto p-5">
        <div className="flex flex-col">
          {/* START PORTFOLIO HEADING */}
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-4xl font-semibold">Our Popular Product</h1>
              <p className="mt-7">
                Aenean imperdiet. Etiam ultricies nisi vel augue men tuhi
                spectrum alle me.
              </p>
            </div>
          </div>
          {/* END PORTFOLIO HEADING */}

          {/* START PORTFOLIO IMAGES */}
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((item) => (
              <Link href={`/book/${item.id}`} key={item.id}>
                <motion.div
                  initial={{ opacity: 0.2, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <Card className="w-full overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <CardContent className="relative h-[300px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100vw 50vw"
                        className="object-cover"
                      />
                    </CardContent>
                    <CardFooter className="mt-5 h-[80px] flex-col items-start gap-y-1">
                      <CardTitle className="text-black/80">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-left">
                        {item.author}
                      </CardDescription>
                    </CardFooter>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
          {/* END PORTFOLIO IMAGES */}
        </div>
      </div>
    </div>
  );
}
