import { notFound } from "next/navigation";
import { services } from "../../../../libs/services";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";
type Props = {
  params: Promise<{ slug: string }>;
};

const ServicePage = async ({ params }: Props) => {
  const { slug } = await params;

  console.log(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <>
      <NavbarTwo />
      <PageBanner pageTitle={service.title} BGImage="/images/page-banner1.jpg" />

      <ServiceDetailsContent service={service} />
      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default ServicePage;
// Ovo omogućava da Next napravi statične stranice za sve slugove
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
