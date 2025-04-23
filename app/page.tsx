
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import IntroSection from "@/components/IntroSection";
import ProductCategory from "@/components/ProductCategory";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <IntroSection />
      <ProductCategory />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
