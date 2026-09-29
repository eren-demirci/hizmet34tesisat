/**
 * İlçe sayfalarını birbirinden ayıran yerel bilgiler: bilinen semtler, komşu
 * ilçeler ve bölgedeki yapı stoğuna göre tesisat profili.
 */

export type BuildingProfile = "tarihi" | "karma" | "yeni" | "mustakil";

export type DistrictDetail = {
  areas: string[];
  neighbors: string[];
  profile: BuildingProfile;
};

export const profileText: Record<BuildingProfile, { title: string; text: string }> = {
  tarihi: {
    title: "Tarihi ve yoğun yapılaşma",
    text: "Bölgede çok sayıda eski kagir bina bulunuyor. Bu yapılarda galvaniz su boruları, eski dökme veya PVC gider hatları ve yıllar içinde sonradan eklenmiş bağlantılar sık görülür. Duvar içindeki hatların güzergâhı çoğu zaman belgesizdir; bu yüzden kaçak aramadan önce cihazla hat güzergâhını çıkarmak ayrıca önem kazanır.",
  },
  karma: {
    title: "Eski apartmanlar ve yeni yapılar bir arada",
    text: "Eski apartmanlarla kentsel dönüşüm kapsamında yapılmış yeni binalar yan yana. Eski binalarda ömrünü doldurmuş galvaniz hatlar, kireçlenmiş giderler ve ortak kolon sorunları; yeni binalarda ise bağlantı noktalarındaki işçilik kaynaklı kaçaklar ve gider eğimi problemleri daha sık görülür. Bu yüzden müdahale öncesinde binanın yaşı ve tesisat malzemesi mutlaka değerlendirilir.",
  },
  yeni: {
    title: "Siteler ve çok katlı yeni konutlar",
    text: "Çok katlı siteler ve yeni konut projeleri ağırlıkta. Tesisat çoğunlukla PPRC temiz su ve PVC gider hatlarından oluşur. Yerden ısıtma sistemleri, şaft içinden geçen ortak kolonlar ve gömme rezervuarlar arızanın yerini gözle bulmayı zorlaştırır; termal kamera ve akustik dinleme bu tip yapılarda gereksiz kırımı önlemenin en etkili yoludur.",
  },
  mustakil: {
    title: "Müstakil evler, villalar ve yazlıklar",
    text: "Müstakil evler, villalar ve yazlık konutlar yaygın. Bu yapılarda su hatları uzun olur ve çoğu zaman bahçeden, toprak altından geçer. Toprak altındaki kaçaklar yüzeyde geç belirti verdiği için sayaç takibi ve akustik hat dinleme önemlidir. Kış aylarında donma kaynaklı boru çatlakları da bu bölgelerde daha sık yaşanır.",
  },
};

export const districtDetails: Record<string, DistrictDetail> = {
  adalar: {
    areas: ["Büyükada", "Heybeliada", "Burgazada", "Kınalıada"],
    neighbors: ["kartal", "maltepe", "pendik"],
    profile: "mustakil",
  },
  atasehir: {
    areas: ["Barbaros", "Ataşehir merkez", "Kayışdağı", "İçerenköy", "Küçükbakkalköy", "Ferhatpaşa"],
    neighbors: ["kadikoy", "umraniye", "maltepe", "sancaktepe"],
    profile: "yeni",
  },
  beykoz: {
    areas: ["Kavacık", "Anadoluhisarı", "Paşabahçe", "Çubuklu", "Acarlar", "Riva"],
    neighbors: ["uskudar", "umraniye", "cekmekoy", "sile"],
    profile: "mustakil",
  },
  cekmekoy: {
    areas: ["Taşdelen", "Ömerli", "Alemdağ", "Mimar Sinan", "Çekmeköy merkez"],
    neighbors: ["umraniye", "sancaktepe", "beykoz", "sile"],
    profile: "yeni",
  },
  kadikoy: {
    areas: ["Moda", "Fenerbahçe", "Göztepe", "Erenköy", "Suadiye", "Bostancı", "Koşuyolu", "Fikirtepe"],
    neighbors: ["uskudar", "atasehir", "maltepe"],
    profile: "karma",
  },
  kartal: {
    areas: ["Kordonboyu", "Soğanlık", "Yakacık", "Uğur Mumcu", "Kartal merkez"],
    neighbors: ["maltepe", "pendik", "sultanbeyli"],
    profile: "karma",
  },
  maltepe: {
    areas: ["İdealtepe", "Küçükyalı", "Cevizli", "Altayçeşme", "Zümrütevler", "Bağlarbaşı"],
    neighbors: ["kadikoy", "atasehir", "kartal", "sancaktepe"],
    profile: "karma",
  },
  pendik: {
    areas: ["Kaynarca", "Kurtköy", "Güzelyalı", "Yenişehir", "Çamlık", "Pendik merkez"],
    neighbors: ["kartal", "tuzla", "sultanbeyli"],
    profile: "karma",
  },
  sancaktepe: {
    areas: ["Sarıgazi", "Samandıra", "Yenidoğan", "Emek", "Veysel Karani"],
    neighbors: ["umraniye", "cekmekoy", "sultanbeyli", "atasehir"],
    profile: "yeni",
  },
  sultanbeyli: {
    areas: ["Abdurrahmangazi", "Hasanpaşa", "Battalgazi", "Mecidiye", "Necip Fazıl"],
    neighbors: ["sancaktepe", "pendik", "kartal"],
    profile: "karma",
  },
  sile: {
    areas: ["Şile merkez", "Ağva", "Balibey", "Kumbaba"],
    neighbors: ["beykoz", "cekmekoy"],
    profile: "mustakil",
  },
  tuzla: {
    areas: ["İçmeler", "Aydınlı", "Aydıntepe", "Postane", "Şifa"],
    neighbors: ["pendik"],
    profile: "yeni",
  },
  umraniye: {
    areas: ["Atakent", "Çakmak", "Tantavi", "Yamanevler", "Esenşehir", "Ihlamurkuyu"],
    neighbors: ["uskudar", "atasehir", "cekmekoy", "sancaktepe", "beykoz"],
    profile: "karma",
  },
  uskudar: {
    areas: ["Kuzguncuk", "Çengelköy", "Beylerbeyi", "Altunizade", "Acıbadem", "Ünalan"],
    neighbors: ["kadikoy", "umraniye", "beykoz"],
    profile: "karma",
  },
  arnavutkoy: {
    areas: ["Hadımköy", "Bolluca", "Taşoluk", "Haraççı", "Arnavutköy merkez"],
    neighbors: ["basaksehir", "eyupsultan", "catalca"],
    profile: "mustakil",
  },
  avcilar: {
    areas: ["Ambarlı", "Denizköşkler", "Firuzköy", "Gümüşpala", "Avcılar merkez"],
    neighbors: ["kucukcekmece", "esenyurt", "beylikduzu"],
    profile: "karma",
  },
  bagcilar: {
    areas: ["Güneşli", "Kirazlı", "Mahmutbey", "Yenimahalle", "Demirkapı", "Yıldıztepe"],
    neighbors: ["bahcelievler", "gungoren", "esenler", "basaksehir", "kucukcekmece"],
    profile: "karma",
  },
  bahcelievler: {
    areas: ["Yenibosna", "Şirinevler", "Siyavuşpaşa", "Kocasinan", "Soğanlı", "Çobançeşme"],
    neighbors: ["bakirkoy", "bagcilar", "gungoren", "kucukcekmece"],
    profile: "karma",
  },
  bakirkoy: {
    areas: ["Ataköy", "Yeşilköy", "Yeşilyurt", "Kartaltepe", "Zeytinlik", "Osmaniye"],
    neighbors: ["zeytinburnu", "bahcelievler", "gungoren", "kucukcekmece"],
    profile: "karma",
  },
  basaksehir: {
    areas: ["Bahçeşehir", "Kayabaşı", "Altınşehir", "Ziya Gökalp", "Şahintepe"],
    neighbors: ["arnavutkoy", "esenyurt", "kucukcekmece", "bagcilar"],
    profile: "yeni",
  },
  bayrampasa: {
    areas: ["Kocatepe", "Yıldırım", "Altıntepsi", "Cevatpaşa", "Yenidoğan"],
    neighbors: ["fatih", "eyupsultan", "gaziosmanpasa", "esenler"],
    profile: "karma",
  },
  besiktas: {
    areas: ["Levent", "Etiler", "Ortaköy", "Bebek", "Balmumcu", "Abbasağa"],
    neighbors: ["sisli", "sariyer", "beyoglu"],
    profile: "karma",
  },
  beylikduzu: {
    areas: ["Yakuplu", "Kavaklı", "Gürpınar", "Adnan Kahveci", "Cumhuriyet"],
    neighbors: ["esenyurt", "buyukcekmece", "avcilar"],
    profile: "yeni",
  },
  beyoglu: {
    areas: ["Cihangir", "Galata", "Tarlabaşı", "Kasımpaşa", "Hasköy"],
    neighbors: ["sisli", "besiktas", "fatih"],
    profile: "tarihi",
  },
  buyukcekmece: {
    areas: ["Mimarsinan", "Kumburgaz", "Güzelce", "Alkent", "Celaliye"],
    neighbors: ["beylikduzu", "esenyurt", "catalca", "silivri"],
    profile: "mustakil",
  },
  catalca: {
    areas: ["Çatalca merkez", "Kaleiçi", "Ferhatpaşa", "Binkılıç", "Muratbey"],
    neighbors: ["buyukcekmece", "silivri", "arnavutkoy"],
    profile: "mustakil",
  },
  esenler: {
    areas: ["Menderes", "Oruçreis", "Tuna", "Fevzi Çakmak", "Namık Kemal"],
    neighbors: ["bagcilar", "bayrampasa", "gungoren", "sultangazi", "gaziosmanpasa"],
    profile: "karma",
  },
  esenyurt: {
    areas: ["Saadetdere", "Mehterçeşme", "Yenikent", "Pınar", "Güzelyurt"],
    neighbors: ["beylikduzu", "avcilar", "kucukcekmece", "basaksehir", "buyukcekmece"],
    profile: "yeni",
  },
  eyupsultan: {
    areas: ["Alibeyköy", "Göktürk", "Kemerburgaz", "Yeşilpınar", "Akşemsettin"],
    neighbors: ["kagithane", "gaziosmanpasa", "bayrampasa", "sariyer", "fatih"],
    profile: "karma",
  },
  fatih: {
    areas: ["Aksaray", "Sultanahmet", "Balat", "Fener", "Karagümrük", "Kocamustafapaşa"],
    neighbors: ["zeytinburnu", "bayrampasa", "eyupsultan", "beyoglu"],
    profile: "tarihi",
  },
  gaziosmanpasa: {
    areas: ["Karadeniz", "Yıldıztabya", "Karayolları", "Sarıgöl", "Küçükköy"],
    neighbors: ["sultangazi", "eyupsultan", "bayrampasa", "esenler"],
    profile: "karma",
  },
  gungoren: {
    areas: ["Güneştepe", "Tozkoparan", "Haznedar", "Gençosman", "Akıncılar", "Güngören merkez"],
    neighbors: ["bagcilar", "bahcelievler", "bakirkoy", "zeytinburnu", "esenler"],
    profile: "karma",
  },
  kagithane: {
    areas: ["Seyrantepe", "Çağlayan", "Gültepe", "Hamidiye", "Talatpaşa"],
    neighbors: ["sisli", "eyupsultan", "sariyer"],
    profile: "karma",
  },
  kucukcekmece: {
    areas: ["Halkalı", "Sefaköy", "Cennet", "Atakent", "İnönü", "Kanarya"],
    neighbors: ["avcilar", "bahcelievler", "bagcilar", "basaksehir", "esenyurt", "bakirkoy"],
    profile: "karma",
  },
  sariyer: {
    areas: ["Maslak", "İstinye", "Tarabya", "Yeniköy", "Emirgan", "Zekeriyaköy"],
    neighbors: ["besiktas", "kagithane", "eyupsultan"],
    profile: "karma",
  },
  silivri: {
    areas: ["Silivri merkez", "Selimpaşa", "Gümüşyaka", "Değirmenköy", "Çanta"],
    neighbors: ["buyukcekmece", "catalca"],
    profile: "mustakil",
  },
  sultangazi: {
    areas: ["Cebeci", "Esentepe", "Habibler", "Uğur Mumcu", "Gazi"],
    neighbors: ["gaziosmanpasa", "eyupsultan", "arnavutkoy", "basaksehir", "esenler"],
    profile: "karma",
  },
  sisli: {
    areas: ["Mecidiyeköy", "Nişantaşı", "Bomonti", "Feriköy", "Kurtuluş", "Fulya"],
    neighbors: ["besiktas", "beyoglu", "kagithane", "eyupsultan"],
    profile: "karma",
  },
  zeytinburnu: {
    areas: ["Merkezefendi", "Kazlıçeşme", "Seyitnizam", "Telsiz", "Beştelsiz", "Veliefendi"],
    neighbors: ["fatih", "bakirkoy", "gungoren"],
    profile: "karma",
  },
};

export const districtDetail = (slug: string): DistrictDetail | undefined => districtDetails[slug];
