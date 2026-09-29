import type { ServiceSlug } from "./site";

/**
 * Sahada yapılmış gerçek işler. Her kayıt ilgili ilçe sayfasında, ilçe + hizmet
 * sayfasında ve hizmet sayfasında otomatik olarak listelenir. Liste boşken
 * bölüm hiç gösterilmez.
 *
 * Sadece gerçek işler eklenmeli. Örnek kayıt:
 *
 * {
 *   id: "2026-10-kadikoy-moda-banyo-kacak",
 *   date: "2026-10",
 *   district: "kadikoy",
 *   area: "Moda",
 *   service: "su-kacagi-tespiti",
 *   title: "1970 yapımı apartmanda banyo altı su kaçağı",
 *   problem: "Alt kattaki dairenin tavanında nem lekesi oluşmuş, sayaç su kullanılmadığı hâlde dönüyordu.",
 *   solution: "Termal kamera ve akustik dinlemeyle kaçak duş bataryası arkasındaki bağlantıda bulundu. Tek fayans açılarak onarıldı.",
 *   image: "/projeler/kadikoy-moda-banyo.jpg", // public/projeler klasörüne eklenir (isteğe bağlı)
 * },
 */
export type Project = {
  id: string;
  /** YYYY-MM */
  date: string;
  district: string;
  area?: string;
  service: ServiceSlug;
  title: string;
  problem: string;
  solution: string;
  image?: string;
};

export const projects: Project[] = [];

export const projectsFor = ({
  district,
  service,
}: {
  district?: string | undefined;
  service?: ServiceSlug | undefined;
}) =>
  projects
    .filter((p) => (!district || p.district === district) && (!service || p.service === service))
    .sort((a, b) => b.date.localeCompare(a.date));
