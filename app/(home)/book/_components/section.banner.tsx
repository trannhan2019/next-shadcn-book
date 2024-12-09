import BannerImg from "@/assets/img/banner.jpg";
import BgSlide from "@/assets/img/slider-bg-2.jpg";
import { Button } from "@/components/ui/button";

export default function SectionBanner() {
  return (
    <div
      className="h-[500px]"
      style={{
        backgroundImage: `url(${BgSlide})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-5">
        <div className="w-full py-36 text-center lg:w-6/12 lg:text-left">
          <span className="font-semibold">TRENDING PRODUCT OF THE WEEK</span>
          <h1 className="mt-7 text-5xl font-extralight text-black/80 md:text-7xl">
            Books <span className="font-semibold text-black">Collections</span>
          </h1>
          <p className="mt-7">
            Aenean imperdiet. Etiam ultricies nisi vel augue men tuhi spectrum
            alle me
          </p>
          <Button className="mt-4 bg-gradient-to-t from-[#62ab00] to-[#a3d600]">
            BUY NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
