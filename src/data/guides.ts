import type { ServiceSlug } from "./site";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  ordered?: boolean;
};

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  relatedServices: ServiceSlug[];
  sections: GuideSection[];
  faq: { q: string; a: string }[];
};

export const guides: Guide[] = [
  {
    slug: "evde-su-kacagi-nasil-anlasilir",
    title: "Evde Su Kaçağı Nasıl Anlaşılır? 10 Belirti ve İlk Yapılacaklar",
    metaTitle: "Evde Su Kaçağı Nasıl Anlaşılır? 10 Belirti — Hizmet34 Tesisat",
    metaDescription:
      "Duvarda nem, dönen sayaç, düşen kombi basıncı... Evde su kaçağı olduğunu gösteren 10 belirti, basit kontrol yöntemleri ve kaçağın kaynağını bulmanın yolları.",
    excerpt:
      "Su kaçağı çoğu zaman sessizdir. Duvarda nemden sayacın davranışına kadar, kaçağı erken fark etmenizi sağlayacak belirtiler ve ilk yapılacaklar.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingMinutes: 6,
    relatedServices: ["su-kacagi-tespiti", "su-tesisati-tamiri"],
    sections: [
      {
        heading: "Su kaçağı neden geç fark edilir?",
        paragraphs: [
          "Evdeki temiz su hatları duvarların ve zeminin içinden geçer ve sürekli basınç altındadır. Bu hatlardaki küçük bir çatlak ya da gevşemiş bir bağlantı, günlerce hatta haftalarca hiçbir görünür iz bırakmadan su kaybettirebilir. Su, boru boyunca ya da yapı malzemesinin içinde ilerlediği için belirti çoğu zaman kaçağın olduğu noktadan metrelerce uzakta ortaya çıkar.",
          "Bu yüzden belirtileri erken tanımak ve belirtinin görüldüğü yeri değil, kaçağın asıl kaynağını bulmak önemlidir.",
        ],
      },
      {
        heading: "Su kaçağının 10 yaygın belirtisi",
        paragraphs: [],
        ordered: true,
        list: [
          "Duvarda nem lekesi, boyada kabarma veya sıvada dökülme",
          "Banyo, mutfak ya da dolap arkalarından gelen küf ve rutubet kokusu",
          "Zeminde elle hissedilen sıcak bölgeler (sıcak su veya yerden ısıtma hattı kaçağı)",
          "Parkede kabarma, laminatta şişme ya da derzlerde kararma",
          "Alt kattaki dairenin tavanında leke veya damlama",
          "Kullanım alışkanlığınız değişmediği hâlde artan su faturası",
          "Hiç su kullanılmadığı hâlde dönmeye devam eden su sayacı",
          "Kombi basıncının sık sık düşmesi ve tekrar tekrar su doldurma ihtiyacı",
          "Musluklarda belirgin şekilde düşen su basıncı",
          "Tüm musluklar kapalıyken duvarın içinden gelen su akma sesi",
        ],
      },
      {
        heading: "Evde yapabileceğiniz basit kontrol: sayaç testi",
        paragraphs: [
          "Su kaçağı olup olmadığını anlamanın en güvenilir ev yöntemi sayaç testidir. Evdeki bütün muslukları kapatın; çamaşır makinesi, bulaşık makinesi ve rezervuarların dolmasının bitmesini bekleyin. Sayacın fotoğrafını çekin veya değeri not alın.",
          "Bir-iki saat boyunca hiç su kullanmadan bekleyin ve sayacı tekrar kontrol edin. Değer değişmişse ya da sayaçtaki küçük litre göstergesi (genellikle kırmızı çark) dönüyorsa, evde bir yerde su kaybı var demektir.",
        ],
      },
      {
        heading: "Kaçağı kendiniz daraltabilirsiniz",
        paragraphs: [
          "Sayaç testi kaçak olduğunu gösterdiyse önce görünür noktaları kontrol edin. En sık gözden kaçan kayıp, rezervuarın klozete sessizce su akıtmasıdır. Rezervuarın içine birkaç damla gıda boyası damlatın ve sifonu çekmeden 15-20 dakika bekleyin; klozette renk görünüyorsa rezervuar sızdırıyordur.",
          "Rezervuar ara musluklarını ve lavabo altı ara muslukları tek tek kapatarak sayacın durup durmadığını izleyebilirsiniz. Sayaç ara musluklar kapalıyken duruyorsa sorun o cihazdadır; hâlâ dönüyorsa kaçak büyük olasılıkla duvar veya zemin içindeki hattadır.",
        ],
      },
      {
        heading: "Kaçak duvarın içindeyse: kırmadan tespit",
        paragraphs: [
          "Duvar veya zemin içindeki bir kaçağı tahminle bulmaya çalışmak genellikle gereksiz kırım ve ek masraf demektir. Cihazla su kaçağı tespitinde akustik dinleme cihazları basınçlı hattan çıkan suyun sesini dinler, termal kamera sıcak su ve ısıtma hatlarındaki sıcaklık farkını gösterir, nem ölçerler ise suyun yayılım yönünü ortaya koyar.",
          "Bu yöntemler birlikte kullanıldığında kaçağın yeri noktasal olarak belirlenir. Onarım sırasında da yalnızca bu noktada, çoğu zaman bir-iki fayans genişliğinde açma yapılır.",
        ],
      },
      {
        heading: "Kaçak fark ettiğinizde ilk yapılacaklar",
        paragraphs: [],
        list: [
          "Su yayılıyorsa ana su vanasını kapatın",
          "Nemli alan elektrik prizlerine veya cihazlara yakınsa ilgili sigortayı indirin",
          "Islanan alanın ve sayacın fotoğrafını tarihli olarak çekin",
          "Alt kat komşunuzu ve bina yönetimini bilgilendirin",
          "Kaçak yeri tahminle kırmadan önce cihazla tespit yaptırın",
        ],
      },
    ],
    faq: [
      {
        q: "Su kaçağı kendiliğinden geçer mi?",
        a: "Hayır. Basınçlı hattaki bir kaçak zamanla büyür; su yapı malzemesine, yalıtıma ve alt katlara zarar vermeye devam eder. Ne kadar erken tespit edilirse onarım o kadar küçük olur.",
      },
      {
        q: "Duvardaki nem her zaman su kaçağı mıdır?",
        a: "Her zaman değil. Yoğuşma, dış cepheden gelen yağmur suyu veya yalıtım eksikliği de nem yapabilir. Nem ölçümü ve sayaç testi, sorunun tesisattan kaynaklanıp kaynaklanmadığını ayırt etmeye yardımcı olur.",
      },
      {
        q: "Sayaç testi ne kadar sürmeli?",
        a: "En az bir-iki saat hiç su kullanmadan beklemek yeterlidir. Çok küçük kaçaklar için testi gece boyunca, yatmadan önce ve sabah kalkınca sayacı okuyarak yapabilirsiniz.",
      },
    ],
  },
  {
    slug: "su-faturasi-neden-yuksek-geldi",
    title: "Su Faturası Neden Yüksek Geldi? 7 Olası Neden ve Kontrol Yöntemi",
    metaTitle: "Su Faturası Neden Yüksek Geldi? 7 Neden — Hizmet34 Tesisat",
    metaDescription:
      "Su faturanız beklenmedik şekilde yüksek mi geldi? Okuma dönemi, rezervuar sızıntısı ve gizli su kaçağı dahil 7 olası neden ve evde yapabileceğiniz kontroller.",
    excerpt:
      "Beklenmedik yüksek bir su faturasının arkasında okuma farkı da olabilir, gizli bir kaçak da. Hangisi olduğunu adım adım nasıl anlayacağınızı anlattık.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingMinutes: 5,
    relatedServices: ["su-kacagi-tespiti", "klozet-rezervuar-tamiri", "musluk-batarya-tamiri"],
    sections: [
      {
        heading: "Önce faturanın kendisini kontrol edin",
        paragraphs: [
          "Yüksek bir faturayla karşılaştığınızda ilk bakmanız gereken yer, faturadaki ilk ve son endeks değerleri ile okuma tarihleridir. Okuma dönemi normalden uzunsa tüketim de doğal olarak yüksek görünür.",
          "Sayaç bir önceki dönemde okunamamışsa tüketim tahmini olarak hesaplanmış olabilir; gerçek okuma yapıldığında aradaki fark tek bir faturaya yansıyabilir. Faturadaki son endeksi sayacınızdaki değerle karşılaştırmak bu durumu hemen ortaya çıkarır.",
        ],
      },
      {
        heading: "Faturayı yükselten 7 olası neden",
        paragraphs: [],
        ordered: true,
        list: [
          "Uzun okuma dönemi veya önceki dönemden kalan tahmini okuma farkı",
          "Klozete sürekli ince su akıtan rezervuar: en sık görülen ve en çok gözden kaçan kayıp",
          "Damlayan musluk ya da batarya",
          "Duvar veya zemin içindeki basınçlı temiz su hattında kaçak",
          "Bahçe, teras veya toprak altından geçen hatlarda kaçak",
          "Su deposu veya hidrofor şamandırasının arızalanması sonucu taşma",
          "Evde kalan kişi sayısı, misafir veya mevsimsel kullanım (bahçe sulama gibi) değişikliği",
        ],
      },
      {
        heading: "Rezervuar sızıntısı nasıl anlaşılır?",
        paragraphs: [
          "Rezervuar iç takımındaki conta yıprandığında ya da şamandıra ayarı bozulduğunda su klozete sürekli ve sessizce akar. Bu akış çoğu zaman gözle fark edilmez ama gün boyunca yüzlerce litreye ulaşabilir.",
          "Kontrol için rezervuarın içine birkaç damla gıda boyası damlatın ve 15-20 dakika sifonu çekmeden bekleyin. Klozetin içinde renk görünüyorsa rezervuar sızdırıyor demektir. İç takım değişimi genellikle kısa süren ve kırım gerektirmeyen bir işlemdir.",
        ],
      },
      {
        heading: "Gizli kaçak olup olmadığını sayaçla test edin",
        paragraphs: [
          "Evdeki tüm muslukları ve su kullanan cihazları kapatın, sayacın değerini not alın ve bir-iki saat hiç su kullanmadan bekleyin. Sayaç ilerlemişse ya da küçük litre göstergesi dönüyorsa evde bir yerde su kaybı vardır.",
          "Rezervuar ve lavabo ara musluklarını kapattığınızda sayaç duruyorsa kayıp o cihazlardandır. Sayaç hâlâ dönüyorsa kaçak büyük olasılıkla duvar ya da zemin içindeki hattadır ve cihazla tespit gerekir.",
        ],
      },
      {
        heading: "Ne zaman profesyonel destek almalı?",
        paragraphs: [
          "Görünür bir sızıntı bulamadığınız hâlde sayaç dönmeye devam ediyorsa, kaçağı tahminle aramak yerine cihazla tespit yaptırmak en ekonomik yoldur. Akustik dinleme, termal görüntüleme ve nem ölçümüyle kaçağın yeri kırmadan belirlenir; onarım yalnızca o noktada yapılır.",
        ],
      },
    ],
    faq: [
      {
        q: "Rezervuar sızıntısı faturayı ne kadar etkiler?",
        a: "Sürekli akan bir rezervuar, akışın şiddetine göre günde yüzlerce litre su harcatabilir. Bu da aylık faturada belirgin bir artış olarak görünür.",
      },
      {
        q: "Sayaç testi için ne kadar beklemeliyim?",
        a: "En az bir-iki saat hiç su kullanmadan beklemek yeterlidir. Daha küçük kayıpları görmek için sayacı gece yatmadan önce ve sabah kalkınca okuyabilirsiniz.",
      },
      {
        q: "Sayacın kendisi arızalı olabilir mi?",
        a: "Nadiren olabilir. Sayaçtan hemen sonraki vanayı kapattığınızda sayaç hâlâ dönüyorsa, sayaçta veya bağlantısında bir sorun olabilir. Bu durumda su idaresine başvurmanız gerekir.",
      },
    ],
  },
  {
    slug: "su-kullanmiyorum-sayac-donuyor",
    title: "Su Kullanmıyorum Ama Sayaç Dönüyor: Adım Adım Ne Yapmalı?",
    metaTitle: "Su Kullanmıyorum Ama Sayaç Dönüyor — Adım Adım Kontrol",
    metaDescription:
      "Tüm musluklar kapalıyken su sayacı dönüyorsa evde kaçak var demektir. Kaybın rezervuardan mı, cihazlardan mı yoksa duvar içinden mi geldiğini adım adım bulun.",
    excerpt:
      "Musluklar kapalı, sayaç dönüyor. Kaybın nereden geldiğini vanaları sırayla kapatarak evde nasıl daraltabileceğinizi anlattık.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingMinutes: 5,
    relatedServices: ["su-kacagi-tespiti", "klozet-rezervuar-tamiri"],
    sections: [
      {
        heading: "Dönen sayaç ne anlama gelir?",
        paragraphs: [
          "Evde hiçbir musluk açık değilken ve su kullanan hiçbir cihaz çalışmıyorken sayacın ilerlemesi, sayaçtan sonraki tesisatta bir yerden su kaybı olduğunu gösterir. Kayıp bazen göz önündeki bir rezervuardan, bazen de duvarın içindeki bir bağlantıdan kaynaklanır.",
          "İyi haber şu: Kaybın hangi bölümden geldiğini, vanaları sırayla kapatarak çoğu zaman evde daraltabilirsiniz.",
        ],
      },
      {
        heading: "Adım adım kontrol",
        paragraphs: [],
        ordered: true,
        list: [
          "Tüm muslukları kapatın; çamaşır makinesi, bulaşık makinesi ve rezervuarların dolmasının bitmesini bekleyin.",
          "Sayacın küçük litre göstergesini (genellikle kırmızı çark) izleyin. Dönüyorsa kayıp var demektir.",
          "Klozetlerin rezervuar ara musluklarını kapatın. Sayaç durduysa sorun rezervuardadır.",
          "Lavabo ve eviye altındaki ara muslukları kapatın. Sayaç durduysa sorun bu bataryalardan birindedir.",
          "Termosifon veya şofben varsa giriş vanasını kapatın; emniyet ventilinden sürekli su damlıyor olabilir.",
          "Bütün ara musluklar kapalıyken sayaç hâlâ dönüyorsa kayıp büyük olasılıkla duvar veya zemin içindeki hattadır.",
        ],
      },
      {
        heading: "Kaçak duvar veya zemin içindeyse",
        paragraphs: [
          "Bu aşamadan sonra kaçağı tahminle bulmaya çalışmak, genellikle yanlış yerde kırım yapılması demektir. Su, boru boyunca ve yapı malzemesi içinde ilerleyebildiği için nemin görüldüğü nokta ile kaçağın olduğu nokta çoğu zaman aynı değildir.",
          "Cihazla tespitte akustik dinleme ile basınçlı hattaki kayıp sesi, termal kamerayla sıcak su hattındaki ısı farkı, nem ölçümüyle de yayılım yönü belirlenir. Böylece kaçağın yeri kırmadan netleşir.",
        ],
      },
      {
        heading: "Sayacın kendisi arızalı olabilir mi?",
        paragraphs: [
          "Nadir de olsa mümkündür. Sayaçtan hemen sonraki vanayı kapattığınız hâlde sayaç dönmeye devam ediyorsa sorun sayaçta ya da sayaç bağlantısında olabilir. Bu durumda su idaresine başvurarak sayaç kontrolü talep etmeniz gerekir.",
        ],
      },
    ],
    faq: [
      {
        q: "Sayaç çok yavaş dönüyor, yine de kaçak mı var?",
        a: "Evet. Yavaş dönen bir sayaç küçük ama sürekli bir kayba işaret eder. Küçük kaçaklar da zamanla büyür ve yapıya zarar verir; erken tespit onarımı kolaylaştırır.",
      },
      {
        q: "Ara musluk yoksa ne yapmalıyım?",
        a: "Özellikle gömme rezervuarlarda ara musluğa erişim zor olabilir. Bu durumda rezervuar için gıda boyası testini uygulayabilir, diğer bölümler için cihazla tespit yaptırabilirsiniz.",
      },
    ],
  },
  {
    slug: "kombi-basinci-neden-duser",
    title: "Kombi Basıncı Neden Düşer? Sebepleri ve Ne Yapmanız Gerektiği",
    metaTitle: "Kombi Basıncı Neden Düşer? Sebepleri ve Çözümü — Hizmet34",
    metaDescription:
      "Kombi basıncı sürekli düşüyorsa ısıtma tesisatında kaçak olabilir. Normal basınç değerleri, düşmenin nedenleri ve kaçağın kırmadan nasıl bulunacağı.",
    excerpt:
      "Kombinize sık sık su doldurmak zorunda kalıyorsanız ısıtma tesisatında bir kaçak olabilir. Nedenleri ve kontrol yöntemleri.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingMinutes: 5,
    relatedServices: ["su-kacagi-tespiti", "su-tesisati-tamiri", "kombi-petek-temizligi"],
    sections: [
      {
        heading: "Normal kombi basıncı kaç olmalı?",
        paragraphs: [
          "Çoğu kombide sistem soğukken basıncın yaklaşık 1-1,5 bar aralığında olması önerilir; ısıtma çalışırken bu değer biraz yükselir. Kesin değer için kombinizin kullanım kılavuzunu esas alın.",
          "Basınç bir kez düşüp doldurulduktan sonra uzun süre sabit kalıyorsa bu genellikle normaldir. Ancak birkaç günde bir tekrar tekrar su doldurmanız gerekiyorsa sistemde bir yerden su kaybı var demektir.",
        ],
      },
      {
        heading: "Kombi basıncını düşüren başlıca nedenler",
        paragraphs: [],
        list: [
          "Duvar veya zemin içindeki ısıtma hattında kaçak",
          "Yerden ısıtma borularında veya kollektör bağlantılarında sızıntı",
          "Petek vanası, rakor veya petek gövdesinde sızıntı",
          "Emniyet ventilinin su atması (çoğu zaman genleşme tankı basıncının düşmesiyle ilgilidir)",
          "Kombi içindeki bağlantı veya eşanjör kaynaklı sızıntı",
          "Peteklerin havası alındıktan sonra oluşan tek seferlik basınç düşüşü",
        ],
      },
      {
        heading: "Evde yapabileceğiniz kontroller",
        paragraphs: [
          "Önce görünür noktalara bakın: Peteklerin altı ve vana bağlantıları, kombinin altı ve emniyet ventilinin tahliye borusu. Tahliye borusunda su izi varsa sorun büyük olasılıkla kombi tarafındadır ve kombi servisinin bakması gerekir.",
          "Görünür bir sızıntı yoksa ve basınç düzenli olarak düşüyorsa kaçak büyük olasılıkla duvar ya da zemin içindeki ısıtma hattındadır. Bu durumda duvarlarda nem, zeminde normalden sıcak bölgeler veya alt kattaki tavanda leke oluşabilir.",
        ],
      },
      {
        heading: "Isıtma hattındaki kaçak kırmadan nasıl bulunur?",
        paragraphs: [
          "Isıtma tesisatında dolaşan su sıcak olduğu için termal kamera bu tür kaçaklarda çok etkilidir. Sistem çalışırken kaçak noktasının çevresindeki ısı yayılımı kamerada belirgin şekilde görünür. Gerekirse akustik dinleme ve nem ölçümüyle sonuç doğrulanır.",
          "Kaçağın yeri netleştikten sonra yalnızca o noktada sınırlı bir açma yapılarak onarım tamamlanır ve sistem yeniden basınç testiyle kontrol edilir.",
        ],
      },
    ],
    faq: [
      {
        q: "Kombiye sürekli su doldurmak zarar verir mi?",
        a: "Evet. Sisteme sürekli taze su girmesi tesisatta kireç ve korozyonu artırabilir. Ayrıca asıl sorun olan kaçak yapıya zarar vermeye devam eder.",
      },
      {
        q: "Basınç düşüyor ama hiçbir yerde ıslaklık yok, yine de kaçak olabilir mi?",
        a: "Olabilir. Zemin içindeki veya şap altındaki bir kaçakta su uzun süre yüzeye çıkmayabilir. Termal kamera bu tür görünmeyen kaçakları tespit etmede özellikle etkilidir.",
      },
    ],
  },
  {
    slug: "ust-kattan-su-sizdiriyor",
    title: "Üst Kattan Su Sızıyor: Ne Yapmalı, Kaçak Nasıl Bulunur?",
    metaTitle: "Üst Kattan Su Sızıyor: Ne Yapmalı? — Hizmet34 Tesisat",
    metaDescription:
      "Tavanınızda leke mi var, üst kattan su mu damlıyor? İlk yapılacaklar, sızıntının temiz su hattından mı giderden mi geldiğini anlama yolları ve tespit süreci.",
    excerpt:
      "Tavandaki leke ya da damlama komşuluk ilişkisini de zorlayabilir. Sızıntının kaynağını anlamak için bilmeniz gerekenler.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingMinutes: 6,
    relatedServices: ["su-kacagi-tespiti", "kamerali-gider-goruntuleme"],
    sections: [
      {
        heading: "İlk yapılacaklar",
        paragraphs: [],
        ordered: true,
        list: [
          "Damlama aydınlatma armatürü veya priz yakınındaysa ilgili sigortayı indirin.",
          "Islanan alanın fotoğrafını ve videosunu tarihli olarak çekin.",
          "Üst kattaki komşunuza durumu bildirin; mümkünse banyo ve mutfak kullanımını kısa süre durdurmasını isteyin.",
          "Bina yönetimini bilgilendirin; sorun ortak kolondan kaynaklanıyor olabilir.",
          "Konut sigortanız varsa poliçenizi kontrol edin.",
        ],
      },
      {
        heading: "Sızıntı temiz sudan mı, giderden mi geliyor?",
        paragraphs: [
          "Bu ayrım, kaçağın kaynağını bulmayı büyük ölçüde hızlandırır. Temiz su hattı sürekli basınç altında olduğu için bu hattaki kaçak kesintisiz sızıntı yapar; üst katta su kullanılsın ya da kullanılmasın leke büyümeye devam eder.",
          "Sızıntı yalnızca üst katta duş alındığında, çamaşır makinesi boşaltıldığında veya lavabo kullanıldığında artıyorsa, sorun büyük olasılıkla gider bağlantısında, duş teknesi veya küvet çevresindeki yalıtımda ya da silikon derzlerdedir.",
        ],
      },
      {
        heading: "En sık görülen kaynaklar",
        paragraphs: [],
        list: [
          "Üst kattaki banyonun temiz su hattında veya batarya bağlantısında kaçak",
          "Duş teknesi, küvet veya yer süzgeci çevresindeki su yalıtımının bozulması",
          "Klozet veya lavabo gider bağlantısında sızıntı",
          "Binanın ortak pis su veya yağmur suyu kolonunda çatlak",
          "En üst katta çatı veya teras kaynaklı yağmur suyu sızıntısı",
        ],
      },
      {
        heading: "Masrafı kim karşılar?",
        paragraphs: [
          "Genel yaklaşım, onarım masrafının kaçağın kaynağının bulunduğu yerin sorumluluğunda olmasıdır: Kaçak üst kattaki bağımsız bölümün tesisatındaysa o dairenin sahibi, binanın ortak kolonundaysa kat malikleri birlikte sorumlu olur. Konut sigortanızda dahili su teminatı varsa hasarınız bu kapsamda değerlendirilebilir.",
          "Her durum farklı olduğundan anlaşmazlık hâlinde bina yönetimi, sigorta şirketiniz veya bir hukukçudan destek almanızı öneririz. Kaçağın kaynağının cihazla tespit edilip fotoğraf ve termal görüntülerle belgelenmesi, tarafların anlaşmasını da kolaylaştırır.",
        ],
      },
      {
        heading: "Kaçağın kaynağı nasıl tespit edilir?",
        paragraphs: [
          "Tespit çoğunlukla üst kattaki dairede yapılır. Temiz su hattı basınç testi ve akustik dinlemeyle kontrol edilir, sıcak su hatları termal kamerayla taranır, nem ölçümüyle yayılım yönü belirlenir. Gider şüphesi varsa kontrollü su testi ve gerekirse kameralı gider görüntüleme uygulanır.",
          "Bu şekilde kaçak noktasal olarak bulunur ve yalnızca gerekli yerde müdahale edilir. Tavandaki leke ise kaynak onarıldıktan ve alan tamamen kuruduktan sonra boyanmalıdır.",
        ],
      },
    ],
    faq: [
      {
        q: "Üst kat komşu erişim izni vermezse ne yapabilirim?",
        a: "Önce bina yönetimi aracılığıyla çözmeye çalışın. Sonuç alınamazsa hukuki yollara başvurmak gerekebilir. Bu süreçte hasarı tarihli fotoğraflarla belgelemeye devam edin.",
      },
      {
        q: "Tavan kuruduktan sonra leke geri gelir mi?",
        a: "Kaynak onarılmadan yapılan boya kısa sürede tekrar lekelenir. Önce kaçak giderilmeli, alan tamamen kurumalı, ardından leke örtücü astarla boya yapılmalıdır.",
      },
    ],
  },
  {
    slug: "gider-tikanikligi-nasil-onlenir",
    title: "Gider Tıkanıklığı Nasıl Önlenir? Mutfak ve Banyo İçin Pratik Öneriler",
    metaTitle: "Gider Tıkanıklığı Nasıl Önlenir? Pratik Öneriler — Hizmet34",
    metaDescription:
      "Mutfak ve banyo giderlerinin tıkanmasını önlemek için pratik öneriler, kimyasal gider açıcıların riskleri ve tıkanıklığın ana hatta olduğunu gösteren işaretler.",
    excerpt:
      "Tıkanıklıkların çoğu önlenebilir. Mutfakta yağ, banyoda saç ve klozette ıslak mendil; gider hatlarını uzun süre sorunsuz kullanmanın yolları.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingMinutes: 5,
    relatedServices: ["tikaniklik-acma", "lavabo-tikanikligi", "tuvalet-tikanikligi", "kamerali-gider-goruntuleme"],
    sections: [
      {
        heading: "Mutfak giderleri: en büyük düşman yağ",
        paragraphs: [
          "Sıvı yağ ve kızartma yağı gidere döküldüğünde soğudukça boru çeperine yapışır ve zamanla katılaşır. Üzerine yemek artıkları ve deterjan kalıntıları eklendikçe hat daralır. Yağı sıcak suyla birlikte dökmek sorunu çözmez; yalnızca yağın hattın daha ileri bir noktasında katılaşmasına neden olur.",
        ],
        list: [
          "Kullanılmış yağı bir şişede biriktirip atık yağ toplama noktalarına verin",
          "Tabak ve tencerelerdeki yağı yıkamadan önce kağıt havluyla silin",
          "Eviyede süzgeç kullanın; kahve telvesi ve çay posasını gidere dökmeyin",
        ],
      },
      {
        heading: "Banyo giderleri: saç ve sabun kalıntısı",
        paragraphs: [
          "Duş ve lavabo giderlerindeki tıkanıklıkların büyük bölümü saç ile sabun kalıntısının birleşmesinden oluşur. Duş giderine takılan basit bir saç tutucu bu sorunu büyük ölçüde önler.",
        ],
      },
      {
        heading: "Klozete atılmaması gerekenler",
        paragraphs: [
          "Islak mendil, pamuk, kulak çubuğu, hijyenik ped ve kağıt havlu klozete atılmamalıdır. Islak mendillerin birçoğu tuvalet kağıdı gibi suda kolayca dağılmaz; hattın dirsek ve eğim değişen noktalarında birikerek ciddi tıkanıklıklara yol açar.",
        ],
      },
      {
        heading: "Kimyasal gider açıcılar hakkında",
        paragraphs: [
          "Hazır kimyasal gider açıcılar hafif ve yüzeysel tıkanıklıklarda işe yarayabilir, ancak yağ ve tortu birikiminin ilerlediği hatlarda genellikle kalıcı sonuç vermez. Eski ve yıpranmış borulara, contalara ve bağlantılara zarar verebilirler.",
          "Farklı kimyasal ürünleri, özellikle çamaşır suyu ile asit içeren temizlik ürünlerini asla birbiriyle karıştırmayın; zehirli gaz açığa çıkabilir.",
        ],
      },
      {
        heading: "Tıkanıklığın ana hatta olduğunu gösteren işaretler",
        paragraphs: [],
        list: [
          "Birden fazla giderin aynı anda yavaş akması",
          "Lavabo kullanıldığında klozette veya duş giderinde su yükselmesi",
          "Giderlerden gelen guruldama sesi",
          "Kısa sürede tekrarlayan tıkanıklıklar",
          "Giderlerden gelen kalıcı kötü koku",
        ],
      },
      {
        heading: "Ne zaman profesyonel destek almalı?",
        paragraphs: [
          "Tıkanıklık tekrarlıyorsa ya da birden fazla gideri etkiliyorsa sorun büyük olasılıkla ana hatta veya kolondadır. Bu durumda boru çapına uygun spiral veya basınçlı su yöntemiyle hattın tamamı temizlenmeli ve işlem sonunda akış testi yapılmalıdır.",
          "Temizliğe rağmen tıkanıklık kısa sürede geri geliyorsa hatta çökme, kırık veya ters eğim olabilir. Kameralı gider görüntüleme ile hattın iç yapısı görülerek kalıcı çözüm planlanır.",
        ],
      },
    ],
    faq: [
      {
        q: "Giderlere düzenli olarak sıcak su dökmek işe yarar mı?",
        a: "Hafif sabun ve yağ kalıntılarının birikmesini bir miktar yavaşlatabilir, ancak yağ dökülmesinin yerini tutmaz. En etkili önlem yağın ve katı atıkların gidere hiç ulaşmamasıdır.",
      },
      {
        q: "Tıkanıklık açıldıktan sonra tekrar eder mi?",
        a: "Hat tamamen temizlendiyse ve kullanım alışkanlıklarına dikkat edilirse uzun süre sorun yaşanmaz. Kısa sürede tekrarlıyorsa hatta yapısal bir sorun olabilir ve kamerayla kontrol önerilir.",
      },
    ],
  },
  {
    slug: "su-kacagi-tespiti-fiyati-neye-gore-belirlenir",
    title: "Su Kaçağı Tespiti Fiyatı Neye Göre Belirlenir?",
    metaTitle: "Su Kaçağı Tespiti Fiyatları Neye Göre Belirlenir? — Hizmet34",
    metaDescription:
      "Su kaçağı tespiti fiyatını etkileyen faktörler: hat türü, alan büyüklüğü, kullanılan cihazlar ve onarım kapsamı. Ucuz tespitin neden pahalıya patlayabileceğini öğrenin.",
    excerpt:
      "Telefonda net fiyat söylemek neden zor? Tespit maliyetini belirleyen faktörler ve doğru teklif alırken sormanız gereken sorular.",
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    readingMinutes: 4,
    relatedServices: ["su-kacagi-tespiti", "su-tesisati-tamiri"],
    sections: [
      {
        heading: "Neden tek bir fiyat yok?",
        paragraphs: [
          "Su kaçağı tespiti, kaçağın türüne, konutun yapısına ve kullanılan yönteme göre birkaç dakikadan birkaç saate kadar sürebilen bir iştir. Bu yüzden her iş için aynı fiyatı vermek mümkün değildir. Yine de fiyatı belirleyen başlıca faktörleri bilmek, teklifleri doğru karşılaştırmanızı sağlar.",
        ],
      },
      {
        heading: "Fiyatı etkileyen başlıca faktörler",
        paragraphs: [],
        list: [
          "Kaçağın türü: temiz su hattı, sıcak su veya ısıtma hattı ya da gider hattı",
          "Konutun büyüklüğü ve taranması gereken hat uzunluğu",
          "Kullanılan yöntem: akustik dinleme, termal görüntüleme, nem ölçümü, basınç testi veya kameralı görüntüleme",
          "Kaçağın yerinin belirgin olup olmadığı; birden fazla kaçak bulunması",
          "Tespitten sonra onarımın da yapılıp yapılmayacağı",
          "Onarım sonrası fayans, sıva ve boya gibi yüzey işlemlerinin kapsamı",
        ],
      },
      {
        heading: "Ucuz tespit neden pahalıya patlayabilir?",
        paragraphs: [
          "Cihaz kullanılmadan, tahminle yapılan kaçak aramada genellikle birden fazla noktada kırım yapılır. Her açılan nokta ek fayans, sıva ve işçilik maliyeti demektir. Cihazla yapılan tespitte ise kaçağın yeri önceden belirlendiği için onarım tek noktada ve sınırlı bir alanda yapılır.",
          "Toplam maliyeti karşılaştırırken yalnızca tespit ücretine değil; kırım, onarım ve yüzey yenileme dahil tüm sürecin maliyetine bakmak gerekir.",
        ],
      },
      {
        heading: "Teklif alırken sormanız gereken sorular",
        paragraphs: [],
        list: [
          "Tespitte hangi cihazlar kullanılacak?",
          "Fiyata onarım dahil mi, yoksa sadece tespit mi?",
          "Kaçak bulunamazsa nasıl bir yol izleniyor?",
          "Onarım sonrası fayans ve sıva işlemleri kimin sorumluluğunda?",
          "İşlem sonunda basınç testi yapılıyor mu?",
        ],
      },
    ],
    faq: [
      {
        q: "Telefonda kesin fiyat alabilir miyim?",
        a: "Belirtileri ve konutun yapısını paylaşırsanız yaklaşık bir bilgi verilebilir. Kesin fiyat, yerinde değerlendirme sonrasında ve işlem başlamadan önce paylaşılır.",
      },
      {
        q: "Tespit ve onarım aynı gün yapılabilir mi?",
        a: "Çoğu durumda evet. Kaçağın yeri belirlendikten sonra gerekli malzeme hazırsa onarım aynı ziyarette tamamlanabilir.",
      },
    ],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);

export const guidesForService = (slug: ServiceSlug) =>
  guides.filter((g) => g.relatedServices.includes(slug));
