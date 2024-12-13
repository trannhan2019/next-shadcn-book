import BookList from "./_book-list";
import MainBanner from "./_main-banner";
import Popular from "./_popular";
import SectionBanner from "./_section-banner";

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
