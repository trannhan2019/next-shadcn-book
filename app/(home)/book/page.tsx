import BookList from "./_components/book.list";
import MainBanner from "./_components/main.banner";
import Popular from "./_components/popular";
import SectionBanner from "./_components/section.banner";

export default function Book() {
  return (
    <div>
      <MainBanner />
      <Popular />
      <SectionBanner />
      <BookList />
    </div>
  );
}
