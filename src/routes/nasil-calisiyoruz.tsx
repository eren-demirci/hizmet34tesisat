import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ProblemSolution } from "@/components/site/ProblemSolution";
import { CTASection } from "@/components/site/CTASection";
import { canonical, pageMeta } from "@/lib/seo";

const title = "Nasıl Çalışıyoruz? | Hizmet34 Tesisat";
const description =
  "Talep alımından teslime kadar tesisat hizmet sürecimiz: değerlendirme, cihazla tespit, müdahale ve kontrol.";

export const Route = createFileRoute("/nasil-calisiyoruz")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/nasil-calisiyoruz" }),
    links: [canonical("/nasil-calisiyoruz")],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Süreç"
        title="Talepten Teslime Kadar Şeffaf Bir Süreç"
        description="Her aşamada ne yapıldığını, neden yapıldığını ve ne kadar süreceğini bilirsiniz."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "Nasıl Çalışıyoruz?" }]}
      />
      <ProcessTimeline />
      <ProblemSolution />
      <CTASection />
    </>
  );
}
