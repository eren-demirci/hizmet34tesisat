export const site = {
  url: "https://www.hizmet34tesisat.com",
  name: "Hizmet34 Tesisat",
  tagline: "Profesyonel Tesisat Çözümleri, Hızlı Müdahale",
  phone: "0530 372 60 63",
  phoneHref: "tel:+905303726063",
  phoneNumbers: [
    { label: "0530 372 60 63", href: "tel:+905303726063" },
    { label: "0543 522 09 84", href: "tel:+905435220984" },
  ],
  whatsapp: "0530 372 60 63",
  whatsappHref: "https://wa.me/905303726063",
  email: "info@hizmet34tesisat.com",
  address: "Güneştepe Mah. Başaran Sok. No: 6, Güngören / İstanbul",
  streetAddress: "Güneştepe Mah. Başaran Sok. No: 6",
  district: "Güngören",
  hours: "7/24 Hizmetteyiz",
  // Google İşletme Profili, Instagram, Facebook vb. linkler buraya eklenince
  // schema'daki sameAs alanına otomatik girer.
  sameAs: [] as string[],
  description:
    "Su kaçağı tespiti, tıkanıklık açma ve tesisat onarımında cihaz destekli, temiz işçilikle çalışan profesyonel tesisat ekibi.",
} as const;

export type ServiceSlug =
  | "su-kacagi-tespiti"
  | "tikaniklik-acma"
  | "kamerali-gider-goruntuleme"
  | "tuvalet-tikanikligi"
  | "lavabo-tikanikligi"
  | "su-tesisati-tamiri"
  | "musluk-batarya-tamiri"
  | "klozet-rezervuar-tamiri"
  | "tesisat-yenileme";

export type Service = {
  slug: ServiceSlug;
  title: string;
  navTitle: string;
  icon: string;
  short: string;
  heroTitle: string;
  heroText: string;
  intro: string[];
  symptoms: string[];
  steps: { title: string; text: string }[];
  equipment: { title: string; text: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "su-kacagi-tespiti",
    title: "Su Kaçağı Tespiti",
    navTitle: "Su Kaçağı Tespiti",
    icon: "radar",
    short:
      "Gelişmiş cihazlarla su kaçağının kaynağını noktasal olarak tespit ediyoruz.",
    heroTitle: "Cihazla Su Kaçağı Tespiti",
    heroText:
      "Gelişmiş tespit ekipmanlarıyla su kaçağının kaynağını belirliyor, gereksiz kırma işlemlerinin önüne geçiyoruz.",
    intro: [
      "Su kaçakları çoğu zaman gözle görülmeyen noktalarda başlar. Duvarda nem lekesi, zeminde ısınma, sebepsiz artan su tüketimi veya sürekli çalışan sayaç gibi belirtiler ortaya çıktığında sorunun kaynağını doğru belirlemek en kritik adımdır.",
      "Hizmet34 Tesisat olarak akustik dinleme, termal görüntüleme ve nem ölçüm cihazlarını birlikte kullanarak kaçağın bulunduğu bölgeyi daraltıyor, ardından yalnızca gerekli noktada müdahale ediyoruz.",
    ],
    symptoms: [
      "Duvar veya zeminde nem, rutubet ve kabaran boya",
      "Su kullanılmadığı halde dönmeye devam eden sayaç",
      "Beklenmedik şekilde yükselen su faturası",
      "Zeminde sıcak nokta veya ısınan seramik",
      "Alt kattaki komşuda tavan lekesi ve damlama",
      "Kombi basıncının sürekli düşmesi",
    ],
    steps: [
      {
        title: "Ön inceleme",
        text: "Tesisat şeması, sayaç davranışı ve görünür belirtiler değerlendirilir.",
      },
      {
        title: "Bölge daraltma",
        text: "Akustik dinleme ve nem ölçümüyle şüpheli hat ve alanlar sınırlandırılır.",
      },
      {
        title: "Noktasal tespit",
        text: "Termal kamera ve dinleme cihazıyla kaçağın konumu netleştirilir.",
      },
      {
        title: "Müdahale planı",
        text: "Yapılacak işlem, kırım gerekliliği ve süresi hakkında bilgi verilir.",
      },
    ],
    equipment: [
      {
        title: "Akustik dinleme sistemleri",
        text: "Basınçlı hattaki kaçak sesini zemin ve duvar üzerinden analiz eder.",
      },
      {
        title: "Termal görüntüleme",
        text: "Sıcak su hatlarındaki kaçakların oluşturduğu ısı farkını görünür kılar.",
      },
      {
        title: "Nem ölçüm cihazları",
        text: "Yapı malzemesindeki nem oranını ölçerek yayılım yönünü gösterir.",
      },
      {
        title: "Basınç testi ekipmanları",
        text: "Hattın kaçak yapıp yapmadığını kontrollü basınçla doğrular.",
      },
    ],
    benefits: [
      "Gereksiz kırma işlemlerinin önüne geçilir",
      "Onarım süresi ve maliyeti öngörülebilir hâle gelir",
      "Yapıdaki nem hasarı büyümeden durdurulur",
      "İşlem sonrası kontrol ile sonuç doğrulanır",
    ],
    faq: [
      {
        q: "Su kaçağı kırmadan bulunabilir mi?",
        a: "Kaçağın yerini belirlemek için cihaz destekli yöntemler kullanılır ve bu aşamada kırma işlemi yapılmaz. Onarım aşamasında ise yalnızca tespit edilen noktada sınırlı bir açma gerekebilir.",
      },
      {
        q: "Tespit işlemi ne kadar sürer?",
        a: "Tesisatın yapısına ve kaçağın konumuna göre değişmekle birlikte tespit çalışmaları genellikle aynı ziyaret içinde tamamlanır.",
      },
      {
        q: "Hangi durumlarda basınç testi yapılır?",
        a: "Kaçağın hangi hatta olduğu net değilse temiz su, sıcak su ve ısıtma hatları ayrı ayrı basınç testine tabi tutulur.",
      },
    ],
    metaTitle: "Su Kaçağı Tespiti | Cihazla Kırmadan Tespit — Hizmet34 Tesisat",
    metaDescription:
      "Akustik dinleme, termal görüntüleme ve nem ölçümü ile su kaçağının kaynağını noktasal tespit ediyoruz. Gereksiz kırma olmadan profesyonel çözüm.",
  },
  {
    slug: "tikaniklik-acma",
    title: "Tıkanıklık Açma",
    navTitle: "Tıkanıklık Açma",
    icon: "waves",
    short:
      "Lavabo, mutfak, banyo ve gider tıkanıklıklarını profesyonel ekipmanlarla açıyoruz.",
    heroTitle: "Profesyonel Tıkanıklık Açma",
    heroText:
      "Gider hatlarındaki tıkanıklıkları uygun ekipman ve yöntemle, tesisata zarar vermeden açıyoruz.",
    intro: [
      "Tıkanıklıklar çoğunlukla yağ birikmesi, saç, kireçlenme veya hatta biriken katı atıklardan kaynaklanır. Yanlış yöntemle yapılan müdahaleler boruya zarar verebilir ve sorunu kısa sürede tekrarlatabilir.",
      "Ekibimiz tıkanıklığın konumuna ve boru çapına uygun spiral, basınçlı su veya kamera destekli yöntemleri seçerek hattı kalıcı şekilde açar.",
    ],
    symptoms: [
      "Suyun giderden yavaş çekilmesi",
      "Gider ağzından gelen koku",
      "Lavabo veya duş teknesinde su birikmesi",
      "Gider hattından gelen fokurdama sesi",
      "Birden fazla noktada eş zamanlı tahliye sorunu",
    ],
    steps: [
      { title: "Hat tespiti", text: "Tıkanıklığın hangi hatta ve yaklaşık hangi mesafede olduğu belirlenir." },
      { title: "Yöntem seçimi", text: "Boru çapı ve tıkanıklık türüne göre spiral ya da basınçlı su yöntemi seçilir." },
      { title: "Açma işlemi", text: "Hat kontrollü şekilde açılır, gerekirse kamera ile doğrulama yapılır." },
      { title: "Akış testi", text: "Tahliye hızı test edilerek çalışma alanı temiz şekilde teslim edilir." },
    ],
    equipment: [
      { title: "Elektrikli spiral makineleri", text: "Farklı çaplardaki hatlarda birikintileri parçalayarak ilerler." },
      { title: "Basınçlı su sistemleri", text: "Yağ ve tortu birikintilerini boru cidarından temizler." },
      { title: "Gider kamerası", text: "Tekrarlayan tıkanıklıklarda hattın yapısal durumunu gösterir." },
    ],
    benefits: [
      "Boruya zarar vermeyen doğru yöntem seçimi",
      "Tekrarlayan tıkanıklıkların nedeninin belirlenmesi",
      "Çalışma alanının temiz bırakılması",
      "İşlem sonrası akış kontrolü",
    ],
    faq: [
      {
        q: "Tıkanıklık açma işlemi nasıl yapılır?",
        a: "Önce tıkanıklığın konumu belirlenir, ardından boru çapına uygun spiral veya basınçlı su yöntemiyle hat açılır ve akış testi yapılır.",
      },
      {
        q: "Kimyasal açıcılar zararlı mı?",
        a: "Sık kullanılan güçlü kimyasallar özellikle eski tesisatlarda boru cidarına zarar verebilir. Mekanik yöntemler genellikle daha güvenlidir.",
      },
      {
        q: "Tıkanıklık neden tekrarlıyor?",
        a: "Hatta çökme, ters eğim veya kök girişi gibi yapısal bir sorun varsa tıkanıklık tekrarlar. Bu durumda kameralı görüntüleme önerilir.",
      },
    ],
    metaTitle: "Tıkanıklık Açma | Lavabo, Mutfak ve Gider — Hizmet34 Tesisat",
    metaDescription:
      "Lavabo, mutfak, banyo ve ana gider tıkanıklıklarını spiral ve basınçlı su yöntemleriyle tesisata zarar vermeden açıyoruz.",
  },
  {
    slug: "kamerali-gider-goruntuleme",
    title: "Kameralı Gider Görüntüleme",
    navTitle: "Kameralı Görüntüleme",
    icon: "video",
    short:
      "Gider ve boru hatlarını kamera sistemleriyle görüntüleyerek problemin kaynağını tespit ediyoruz.",
    heroTitle: "Kameralı Gider ve Boru Görüntüleme",
    heroText:
      "Robotik kamera sistemleriyle hattın içini görüntüleyerek tıkanıklığın ve hasarın gerçek nedenini belirliyoruz.",
    intro: [
      "Tekrarlayan tıkanıklıklar çoğu zaman yüzeysel bir birikintiden değil, hattın yapısındaki bir sorundan kaynaklanır. Kameralı görüntüleme bu noktada tahmin yerine görüntüye dayalı bir değerlendirme sağlar.",
      "Hat içinde ilerleyen kamera; çökme, kırık, ters eğim, kök girişi ve yabancı cisim gibi durumları net şekilde ortaya koyar.",
    ],
    symptoms: [
      "Kısa aralıklarla tekrar eden tıkanıklıklar",
      "Açma işleminden kısa süre sonra yavaşlayan tahliye",
      "Bahçe veya zeminde çökme belirtisi",
      "Kanalizasyon kokusunun kalıcı hâle gelmesi",
      "Eski binalarda bilinmeyen hat güzergâhı",
    ],
    steps: [
      { title: "Erişim noktası", text: "Hatta giriş için uygun rögar veya temizleme kapağı belirlenir." },
      { title: "Kamera ilerletme", text: "Kamera hat boyunca ilerletilerek görüntü kaydedilir." },
      { title: "Konum işaretleme", text: "Sorunlu bölge yüzeyden konum ve derinlik olarak işaretlenir." },
      { title: "Raporlama", text: "Tespit edilen durum ve önerilen çözüm sizinle paylaşılır." },
    ],
    equipment: [
      { title: "Robotik hat kamerası", text: "Farklı çaplardaki hatlarda yüksek çözünürlüklü görüntü sağlar." },
      { title: "Konum belirleme probu", text: "Sorunlu noktanın yüzeydeki karşılığını işaretler." },
      { title: "Kayıt sistemi", text: "Görüntüler kayıt altına alınarak değerlendirme yapılır." },
    ],
    benefits: [
      "Tahmin yerine görüntüye dayalı teşhis",
      "Gereksiz kazı ve kırımın önlenmesi",
      "Yapısal sorunların erken fark edilmesi",
      "Onarım kapsamının net belirlenmesi",
    ],
    faq: [
      {
        q: "Kameralı gider görüntüleme nedir?",
        a: "Gider hattının içine su geçirmez bir kamera gönderilerek borunun iç durumunun görüntülenmesi işlemidir. Tıkanıklığın ve hasarın nedeni doğrudan görülür.",
      },
      {
        q: "Her tıkanıklıkta kamera gerekir mi?",
        a: "Hayır. Basit birikintilerde açma işlemi yeterlidir. Kamera özellikle tekrarlayan veya nedeni belirsiz sorunlarda önerilir.",
      },
    ],
    metaTitle: "Kameralı Gider Görüntüleme | Boru İçi Kamera — Hizmet34 Tesisat",
    metaDescription:
      "Gider ve boru hatlarını robotik kamera ile görüntüleyerek çökme, kırık ve tıkanıklık nedenini net şekilde tespit ediyoruz.",
  },
  {
    slug: "tuvalet-tikanikligi",
    title: "Tuvalet Tıkanıklığı Açma",
    navTitle: "Tuvalet Tıkanıklığı",
    icon: "toilet",
    short:
      "Klozet ve tuvalet giderlerinde oluşan tıkanıklıkları uygun ekipmanlarla gideriyoruz.",
    heroTitle: "Tuvalet ve Klozet Tıkanıklığı Açma",
    heroText:
      "Klozet giderindeki tıkanıklıkları seramiğe ve tesisata zarar vermeden, uygun ekipmanlarla açıyoruz.",
    intro: [
      "Tuvalet tıkanıklıkları genellikle ıslak mendil, hijyenik ürünler veya çözünmeyen atıkların hatta takılmasıyla oluşur. Bu tür tıkanıklıklarda yanlış müdahale klozetin çatlamasına yol açabilir.",
      "Ekibimiz önce tıkanıklığın klozet içinde mi yoksa hatta mı olduğunu belirler ve buna uygun yöntemle işlemi gerçekleştirir.",
    ],
    symptoms: [
      "Sifon sonrası suyun yükselip yavaş çekilmesi",
      "Klozetten geri gelen su",
      "Tahliye sırasında fokurdama sesi",
      "Aynı hatta bağlı duş giderinde yavaşlama",
    ],
    steps: [
      { title: "Durum kontrolü", text: "Tıkanıklığın klozet sifonunda mı hatta mı olduğu belirlenir." },
      { title: "Uygun ekipman", text: "Klozet spirali veya hat spirali seçilerek işlem yapılır." },
      { title: "Açma ve temizlik", text: "Hat açılır, çalışma alanı temizlenerek teslim edilir." },
      { title: "Tahliye testi", text: "Birkaç kez sifon çekilerek akış doğrulanır." },
    ],
    equipment: [
      { title: "Klozet spirali", text: "Seramiğe zarar vermeyen koruyucu uçlu spiral kullanılır." },
      { title: "Hat spirali", text: "Klozet sonrası hattaki tıkanıklıklara ulaşır." },
      { title: "Kamera desteği", text: "Yabancı cisim şüphesinde hat görüntülenir." },
    ],
    benefits: [
      "Seramiğe zarar vermeyen müdahale",
      "Yabancı cisim durumunda doğru yöntem",
      "Temiz çalışma ve hijyenik teslim",
      "İşlem sonrası tahliye kontrolü",
    ],
    faq: [
      {
        q: "Klozete düşen cisim çıkarılabilir mi?",
        a: "Cismin konumuna göre çoğu durumda klozet sökülmeden çıkarılabilir. Gerekirse klozet sökülerek hat kontrol edilir.",
      },
      {
        q: "Sıcak su dökmek işe yarar mı?",
        a: "Sıcak su bazı yağ kaynaklı birikintilerde geçici fayda sağlayabilir; ancak kaynar su seramikte çatlamaya neden olabileceği için önerilmez.",
      },
    ],
    metaTitle: "Tuvalet Tıkanıklığı Açma | Klozet Gider Açma — Hizmet34 Tesisat",
    metaDescription:
      "Klozet ve tuvalet giderlerindeki tıkanıklıkları seramiğe zarar vermeden, profesyonel ekipmanlarla açıyoruz.",
  },
  {
    slug: "lavabo-tikanikligi",
    title: "Lavabo Tıkanıklığı Açma",
    navTitle: "Lavabo Tıkanıklığı",
    icon: "droplets",
    short: "Mutfak ve banyo lavabolarındaki gider problemlerine profesyonel müdahale.",
    heroTitle: "Lavabo Tıkanıklığı Açma",
    heroText:
      "Mutfak ve banyo lavabolarındaki yavaş tahliye ve tıkanıklık sorunlarını kalıcı şekilde çözüyoruz.",
    intro: [
      "Mutfak lavabolarında yağ birikmesi, banyo lavabolarında ise saç ve sabun kalıntısı en yaygın tıkanıklık nedenidir. Zamanla boru cidarında oluşan tabaka su akışını daraltır.",
      "Sifon temizliği çoğu durumda yeterli olmaz; hattın devamındaki birikintinin de temizlenmesi gerekir. Ekibimiz her iki bölgeyi de kontrol eder.",
    ],
    symptoms: [
      "Suyun lavaboda birikmesi",
      "Sifon altında sızıntı veya damlama",
      "Gider ağzından koku gelmesi",
      "Boşalırken duyulan fokurdama",
    ],
    steps: [
      { title: "Sifon kontrolü", text: "Sifon sökülerek birikinti ve sızdırmazlık kontrol edilir." },
      { title: "Hat temizliği", text: "Spiral veya basınçlı su ile hattaki birikinti temizlenir." },
      { title: "Montaj", text: "Sifon contaları kontrol edilerek yeniden monte edilir." },
      { title: "Sızdırmazlık testi", text: "Su verilerek akış ve sızdırmazlık test edilir." },
    ],
    equipment: [
      { title: "İnce çaplı spiral", text: "Lavabo hatlarına uygun esnek spiral kullanılır." },
      { title: "Basınçlı su ünitesi", text: "Yağ tabakasını boru cidarından ayırır." },
      { title: "Conta ve sifon seti", text: "Gerektiğinde eskiyen parçalar yenilenir." },
    ],
    benefits: [
      "Sifon ve hat birlikte değerlendirilir",
      "Sızdırmazlık kontrolü yapılır",
      "Koku probleminin kaynağı giderilir",
      "Tekrar riskine karşı öneri verilir",
    ],
    faq: [
      {
        q: "Sifon temizliği yeterli olur mu?",
        a: "Tıkanıklık yalnızca sifonda ise yeterlidir. Ancak birikinti hatta devam ediyorsa hattın da temizlenmesi gerekir.",
      },
      {
        q: "Mutfak lavabosunun tıkanmasını nasıl önlerim?",
        a: "Kızartma yağlarının gidere dökülmemesi ve gider süzgeci kullanılması tıkanıklık riskini belirgin şekilde azaltır.",
      },
    ],
    metaTitle: "Lavabo Tıkanıklığı Açma | Mutfak ve Banyo — Hizmet34 Tesisat",
    metaDescription:
      "Mutfak ve banyo lavabolarındaki tıkanıklık, yavaş tahliye ve koku problemlerini profesyonel ekipmanlarla çözüyoruz.",
  },
  {
    slug: "su-tesisati-tamiri",
    title: "Su Tesisatı Tamiri",
    navTitle: "Su Tesisatı Tamiri",
    icon: "wrench",
    short: "Su tesisatında oluşan arıza, sızıntı ve bağlantı problemlerinin onarımı.",
    heroTitle: "Su Tesisatı Tamiri",
    heroText:
      "Sızdıran bağlantılar, patlak borular ve basınç problemleri için kontrollü ve kalıcı onarım.",
    intro: [
      "Su tesisatı arızaları küçük bir sızıntı olarak başlar ve zamanla yapıya zarar veren bir soruna dönüşebilir. Erken müdahale hem onarım kapsamını hem de maliyeti sınırlar.",
      "Onarım öncesinde hattın malzemesi, yaşı ve basınç durumu değerlendirilir; uygun bağlantı ve ek yöntemi seçilir.",
    ],
    symptoms: [
      "Bağlantı noktalarında damlama",
      "Duvar veya dolap içinde nem",
      "Ani basınç düşüşü veya su akışının azalması",
      "Boru hattından gelen darbe sesi",
      "Sıcak su hattında kararsız sıcaklık",
    ],
    steps: [
      { title: "Arıza tespiti", text: "Sızıntının kaynağı ve hattın durumu incelenir." },
      { title: "Hat izolasyonu", text: "İlgili hat kapatılarak çalışma alanı hazırlanır." },
      { title: "Onarım", text: "Uygun ek, bağlantı veya boru değişimi uygulanır." },
      { title: "Test ve teslim", text: "Basınç ve sızdırmazlık kontrolü yapılarak teslim edilir." },
    ],
    equipment: [
      { title: "Pres ve kaynak ekipmanları", text: "PPRC, pex ve metal hatlarda uygun birleştirme sağlar." },
      { title: "Basınç test pompası", text: "Onarım sonrası hattın dayanımını doğrular." },
      { title: "Nem ölçer", text: "Onarım bölgesindeki kalıntı nem takip edilir." },
    ],
    benefits: [
      "Hattın tamamı yerine sorunlu bölgeye müdahale",
      "Onarım sonrası basınç testi",
      "Uygun malzeme seçimi",
      "Temiz ve düzenli çalışma",
    ],
    faq: [
      {
        q: "Küçük bir damlama için müdahale gerekir mi?",
        a: "Evet. Küçük damlamalar zamanla bağlantıyı aşındırır ve daha büyük bir kaçağa dönüşebilir.",
      },
      {
        q: "Tesisatın tamamı değişmeli mi?",
        a: "Genellikle hayır. Hattın genel durumu iyiyse yalnızca sorunlu bölge onarılır.",
      },
    ],
    metaTitle: "Su Tesisatı Tamiri | Sızıntı ve Boru Onarımı — Hizmet34 Tesisat",
    metaDescription:
      "Sızdıran bağlantı, patlak boru ve basınç problemleri için kontrollü su tesisatı onarımı ve sonrasında basınç testi.",
  },
  {
    slug: "musluk-batarya-tamiri",
    title: "Musluk ve Batarya Tamiri",
    navTitle: "Musluk / Batarya",
    icon: "shower",
    short:
      "Damlatan, su kaçıran veya arızalanan musluk ve bataryaların tamir ve değişimi.",
    heroTitle: "Musluk ve Batarya Tamiri",
    heroText:
      "Damlatan, sızdıran veya sıkışan armatürlerin onarımı ve gerektiğinde uygun ürünle değişimi.",
    intro: [
      "Damlayan bir musluk günlük kullanımı rahatsız etmenin yanında ciddi bir su kaybına da yol açar. Çoğu arıza kartuş, conta veya perlatör kaynaklıdır ve armatür değişimi gerekmeden çözülebilir.",
      "Ekibimiz önce onarım imkânını değerlendirir, yalnızca gerekli durumlarda değişim önerir.",
    ],
    symptoms: [
      "Kapalı konumda damlayan musluk",
      "Batarya gövdesinden sızıntı",
      "Zor dönen veya sıkışan kol",
      "Zayıf ve dağınık su akışı",
      "Sıcak-soğuk su ayarının bozulması",
    ],
    steps: [
      { title: "Arıza tespiti", text: "Kartuş, conta veya perlatör kaynaklı arıza belirlenir." },
      { title: "Parça değişimi", text: "Uygun kartuş ve conta ile onarım yapılır." },
      { title: "Kireç temizliği", text: "Perlatör ve iç yüzeylerdeki kireç temizlenir." },
      { title: "Kontrol", text: "Akış, sızdırmazlık ve sıcaklık ayarı test edilir." },
    ],
    equipment: [
      { title: "Kartuş ve conta setleri", text: "Yaygın armatür modellerine uygun yedek parçalar." },
      { title: "Armatür anahtarları", text: "Yüzeye zarar vermeden sökme ve montaj sağlar." },
      { title: "Kireç çözücü uygulama", text: "Perlatör ve iç parçalarda akış performansını iyileştirir." },
    ],
    benefits: [
      "Gereksiz armatür değişiminden kaçınma",
      "Su kaybının hızla durdurulması",
      "Kaliteli yedek parça kullanımı",
      "Kısa süreli müdahale",
    ],
    faq: [
      {
        q: "Damlayan musluk için batarya değişmeli mi?",
        a: "Çoğu durumda kartuş veya conta değişimi yeterlidir. Gövdede çatlak veya ileri kireçlenme varsa değişim önerilir.",
      },
      {
        q: "Su basıncı düşükse sorun nedir?",
        a: "Genellikle perlatör tıkanıklığı veya ara musluğun tam açık olmaması kaynaklıdır; kontrol edilerek giderilir.",
      },
    ],
    metaTitle: "Musluk ve Batarya Tamiri | Armatür Onarımı — Hizmet34 Tesisat",
    metaDescription:
      "Damlayan musluk, sızdıran batarya ve zayıf su akışı problemlerinde kartuş, conta değişimi ve armatür montajı.",
  },
  {
    slug: "klozet-rezervuar-tamiri",
    title: "Klozet ve Rezervuar Tamiri",
    navTitle: "Klozet / Rezervuar",
    icon: "settings",
    short: "Klozet, rezervuar ve iç takım arızalarının profesyonel onarımı.",
    heroTitle: "Klozet ve Rezervuar Tamiri",
    heroText:
      "Sürekli su akıtan rezervuar, çalışmayan sifon ve klozet montaj problemleri için kalıcı onarım.",
    intro: [
      "Rezervuardan sürekli su akması hem su kaybına hem de klozette kireç izlerine yol açar. Sorun genellikle iç takım, şamandıra veya conta kaynaklıdır.",
      "Gömme rezervuarlarda müdahale kapağı üzerinden çalışılır; duvarın açılması çoğu durumda gerekmez.",
    ],
    symptoms: [
      "Rezervuardan klozete sürekli su akışı",
      "Sifonun basmaması veya zayıf basması",
      "Rezervuarın geç dolması",
      "Klozet tabanında sızıntı",
      "Gömme rezervuar panelinde nem",
    ],
    steps: [
      { title: "İç takım kontrolü", text: "Şamandıra, sifon mekanizması ve contalar incelenir." },
      { title: "Parça değişimi", text: "Arızalı iç takım parçaları uygun muadilleriyle değiştirilir." },
      { title: "Montaj kontrolü", text: "Klozet tabanı ve gider bağlantısı sızdırmazlık açısından kontrol edilir." },
      { title: "Test", text: "Dolum süresi ve sifon performansı test edilir." },
    ],
    equipment: [
      { title: "İç takım setleri", text: "Yaygın rezervuar modellerine uygun mekanizmalar." },
      { title: "Sızdırmazlık malzemeleri", text: "Klozet tabanı ve bağlantılarda kalıcı sızdırmazlık." },
      { title: "Gömme rezervuar aparatları", text: "Panel açılmadan iç takıma erişim sağlar." },
    ],
    benefits: [
      "Su kaybının hızlıca durdurulması",
      "Gömme sistemlerde kırımsız müdahale",
      "Uyumlu yedek parça kullanımı",
      "İşlem sonrası performans testi",
    ],
    faq: [
      {
        q: "Gömme rezervuar tamiri için duvar açılır mı?",
        a: "Genellikle hayır. Müdahale kapağı üzerinden iç takıma erişilerek onarım yapılabilir.",
      },
      {
        q: "Rezervuar neden sürekli su akıtır?",
        a: "En yaygın nedenler şamandıra ayarının bozulması, iç takım contasının yıpranması veya kireç birikmesidir.",
      },
    ],
    metaTitle: "Klozet ve Rezervuar Tamiri | İç Takım Değişimi — Hizmet34 Tesisat",
    metaDescription:
      "Sürekli su akıtan rezervuar, çalışmayan sifon ve klozet sızıntısı için iç takım değişimi ve profesyonel onarım.",
  },
  {
    slug: "tesisat-yenileme",
    title: "Tesisat Yenileme",
    navTitle: "Tesisat Yenileme",
    icon: "layers",
    short: "Eski veya problemli tesisat sistemlerinin kontrollü şekilde yenilenmesi.",
    heroTitle: "Tesisat Yenileme",
    heroText:
      "Ömrünü tamamlamış tesisat hatlarını planlı, kontrollü ve minimum müdahaleyle yeniliyoruz.",
    intro: [
      "Sık tekrarlayan kaçaklar, paslı su, düşük basınç ve eskiyen galvaniz hatlar tesisat yenileme ihtiyacının en belirgin göstergeleridir.",
      "Yenileme çalışması öncesinde mevcut hat güzergâhı çıkarılır, iş planı ve süresi paylaşılır. Böylece yaşam alanındaki etki en aza indirilir.",
    ],
    symptoms: [
      "Farklı noktalarda tekrarlayan su kaçakları",
      "Musluktan gelen paslı veya bulanık su",
      "Belirgin şekilde düşen su basıncı",
      "Galvaniz veya ömrünü doldurmuş boru hatları",
      "Tadilat ile birlikte planlanan tesisat değişimi",
    ],
    steps: [
      { title: "Yerinde keşif", text: "Mevcut tesisat, güzergâh ve ihtiyaçlar değerlendirilir." },
      { title: "Planlama", text: "Malzeme, iş sırası ve süre planı paylaşılır." },
      { title: "Uygulama", text: "Yeni hatlar döşenir, bağlantılar standartlara uygun yapılır." },
      { title: "Test ve teslim", text: "Basınç testi sonrası sistem kullanıma hazır teslim edilir." },
    ],
    equipment: [
      { title: "PPRC kaynak makineleri", text: "Sızdırmaz ve uzun ömürlü birleştirme sağlar." },
      { title: "Hat tarama cihazları", text: "Mevcut boru güzergâhının belirlenmesine yardımcı olur." },
      { title: "Basınç test ekipmanı", text: "Yeni hattın dayanımı test edilir." },
    ],
    benefits: [
      "Planlı ve öngörülebilir çalışma takvimi",
      "Kontrollü kırım ile sınırlı müdahale",
      "Standartlara uygun malzeme kullanımı",
      "Teslim öncesi kapsamlı test",
    ],
    faq: [
      {
        q: "Tesisat yenileme ne kadar sürer?",
        a: "Dairenin büyüklüğüne ve hat sayısına göre değişir. Keşif sonrasında net bir süre planı paylaşılır.",
      },
      {
        q: "Yenileme sırasında evde kalınabilir mi?",
        a: "Çoğu durumda evet. Çalışma bölgeleri sırayla ele alınarak su kesintisi süresi sınırlandırılır.",
      },
    ],
    metaTitle: "Tesisat Yenileme | Eski Su Tesisatı Değişimi — Hizmet34 Tesisat",
    metaDescription:
      "Eski ve problemli su tesisatlarının planlı, kontrollü ve test edilerek yenilenmesi. Minimum kırım, standartlara uygun malzeme.",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const homeFaq = [
  {
    q: "Su kaçağı kırmadan bulunabilir mi?",
    a: "Kaçağın konumu akustik dinleme, termal görüntüleme ve nem ölçüm cihazlarıyla belirlenir. Tespit aşamasında kırma işlemi yapılmaz; onarımda ise yalnızca tespit edilen noktada sınırlı bir açma gerekebilir.",
  },
  {
    q: "Su kaçağı tespiti ne kadar sürer?",
    a: "Tesisatın yapısına ve kaçağın konumuna göre değişir. Çoğu durumda tespit çalışması aynı ziyaret içinde tamamlanır ve sonuç sizinle paylaşılır.",
  },
  {
    q: "Tıkanıklık açma işlemi nasıl yapılır?",
    a: "Önce tıkanıklığın hangi hatta olduğu belirlenir. Ardından boru çapına ve tıkanıklık türüne uygun spiral veya basınçlı su yöntemi uygulanır ve işlem sonunda akış testi yapılır.",
  },
  {
    q: "Kameralı gider görüntüleme nedir?",
    a: "Gider hattının içine su geçirmez bir kamera gönderilerek borunun iç durumunun görüntülenmesidir. Çökme, kırık, ters eğim veya yabancı cisim gibi sorunlar doğrudan görülür.",
  },
  {
    q: "Su kaçağı olduğunu nasıl anlarım?",
    a: "Duvarda nem ve rutubet, zeminde ısınan bölgeler, sebepsiz artan su faturası, su kullanılmadığı hâlde dönen sayaç ve kombi basıncının düşmesi en yaygın belirtilerdir.",
  },
  {
    q: "Tesisatçı çağırmadan önce ne yapmalıyım?",
    a: "Mümkünse ana su vanasını kapatın, sızıntı olan alanı boşaltın ve elektrikli cihazlarla temasını önleyin. Sorunun ne zaman başladığını not etmeniz değerlendirmeyi hızlandırır.",
  },
  {
    q: "Servis talebi nasıl oluşturabilirim?",
    a: "Telefon, WhatsApp veya sitedeki servis talebi formu üzerinden bize ulaşabilirsiniz. Talebiniz alındıktan sonra ekibimiz sizinle iletişime geçer.",
  },
];

export const districts = [
  { slug: "adalar", name: "Adalar", region: "Anadolu Yakası" },
  { slug: "atasehir", name: "Ataşehir", region: "Anadolu Yakası" },
  { slug: "beykoz", name: "Beykoz", region: "Anadolu Yakası" },
  { slug: "cekmekoy", name: "Çekmeköy", region: "Anadolu Yakası" },
  { slug: "kadikoy", name: "Kadıköy", region: "Anadolu Yakası" },
  { slug: "kartal", name: "Kartal", region: "Anadolu Yakası" },
  { slug: "maltepe", name: "Maltepe", region: "Anadolu Yakası" },
  { slug: "pendik", name: "Pendik", region: "Anadolu Yakası" },
  { slug: "sancaktepe", name: "Sancaktepe", region: "Anadolu Yakası" },
  { slug: "sultanbeyli", name: "Sultanbeyli", region: "Anadolu Yakası" },
  { slug: "sile", name: "Şile", region: "Anadolu Yakası" },
  { slug: "tuzla", name: "Tuzla", region: "Anadolu Yakası" },
  { slug: "umraniye", name: "Ümraniye", region: "Anadolu Yakası" },
  { slug: "uskudar", name: "Üsküdar", region: "Anadolu Yakası" },
  { slug: "arnavutkoy", name: "Arnavutköy", region: "Avrupa Yakası" },
  { slug: "avcilar", name: "Avcılar", region: "Avrupa Yakası" },
  { slug: "bagcilar", name: "Bağcılar", region: "Avrupa Yakası" },
  { slug: "bahcelievler", name: "Bahçelievler", region: "Avrupa Yakası" },
  { slug: "bakirkoy", name: "Bakırköy", region: "Avrupa Yakası" },
  { slug: "basaksehir", name: "Başakşehir", region: "Avrupa Yakası" },
  { slug: "bayrampasa", name: "Bayrampaşa", region: "Avrupa Yakası" },
  { slug: "besiktas", name: "Beşiktaş", region: "Avrupa Yakası" },
  { slug: "beylikduzu", name: "Beylikdüzü", region: "Avrupa Yakası" },
  { slug: "beyoglu", name: "Beyoğlu", region: "Avrupa Yakası" },
  { slug: "buyukcekmece", name: "Büyükçekmece", region: "Avrupa Yakası" },
  { slug: "catalca", name: "Çatalca", region: "Avrupa Yakası" },
  { slug: "esenler", name: "Esenler", region: "Avrupa Yakası" },
  { slug: "esenyurt", name: "Esenyurt", region: "Avrupa Yakası" },
  { slug: "eyupsultan", name: "Eyüpsultan", region: "Avrupa Yakası" },
  { slug: "fatih", name: "Fatih", region: "Avrupa Yakası" },
  { slug: "gaziosmanpasa", name: "Gaziosmanpaşa", region: "Avrupa Yakası" },
  { slug: "gungoren", name: "Güngören", region: "Avrupa Yakası" },
  { slug: "kagithane", name: "Kağıthane", region: "Avrupa Yakası" },
  { slug: "kucukcekmece", name: "Küçükçekmece", region: "Avrupa Yakası" },
  { slug: "sariyer", name: "Sarıyer", region: "Avrupa Yakası" },
  { slug: "silivri", name: "Silivri", region: "Avrupa Yakası" },
  { slug: "sultangazi", name: "Sultangazi", region: "Avrupa Yakası" },
  { slug: "sisli", name: "Şişli", region: "Avrupa Yakası" },
  { slug: "zeytinburnu", name: "Zeytinburnu", region: "Avrupa Yakası" },
];

export const districtBySlug = (slug: string) => districts.find((d) => d.slug === slug);

export const testimonials = [
  {
    name: "Mehmet A.",
    service: "Su Kaçağı Tespiti",
    text: "Banyo duvarındaki nemin nereden geldiği belli değildi. Cihazla kontrol edildikten sonra tek bir noktada işlem yapıldı, gereksiz kırım olmadı.",
  },
  {
    name: "Elif K.",
    service: "Tıkanıklık Açma",
    text: "Mutfak gideri sürekli yavaş çekiyordu. Hattın tamamı temizlendi ve sonrasında tekrar etmemesi için nelere dikkat etmem gerektiği anlatıldı.",
  },
  {
    name: "Serkan D.",
    service: "Klozet ve Rezervuar Tamiri",
    text: "Gömme rezervuar sürekli su akıtıyordu. Panel açılmadan iç takım değiştirildi, çalışma alanı temiz bırakıldı.",
  },
];
