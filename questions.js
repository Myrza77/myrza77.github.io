// İşletim Sistemleri Test Soruları (Modüler JS Veri Dosyası)
window.ISLETIM_QUESTIONS = [
  {
    "id": 1,
    "question": "İşletim sisteminde bir işlemin bittiği işlemciye ................... aracılığıyla bildirilir.\nYukarıdaki ifadede yer alan boşluğa uygun olan terim hangisidir?",
    "options": {
      "a": "Tampon",
      "b": "İş parçacıkları",
      "c": "Kesinti",
      "d": "Yazmaç"
    },
    "answer": "c",
    "explanation": "İşlemciye bir donanım veya yazılım olayının (örneğin işlemin tamamlanması, I/O bitişi vb.) haber verilmesi 'Kesinti' (Interrupt) mekanizması ile gerçekleştirilir. Tampon (Buffer) geçici veri alanıdır, iş parçacıkları (Threads) yürütme birimidir, yazmaçlar (Registers) CPU içi en hızlı bellek hücreleridir."
  },
  {
    "id": 2,
    "question": "Aşağıdaki işletim sistemlerinden hangisi kaynak kodunu genel olarak kamuoyuna açık bir şekilde paylaşır?",
    "options": {
      "a": "Windows",
      "b": "Linux",
      "c": "Unix",
      "d": "MacOS"
    },
    "answer": "b",
    "explanation": "Linux, açık kaynak kodlu (Open Source) ve GPL (Genel Kamu Lisansı) lisanslı bir işletim sistemi çekirdeğidir; kaynak kodları tüm kamuoyuyla açıkça paylaşılır. Windows ve MacOS kapalı kaynaklı ve tescillidir. Unix ise ağırlıklı olarak tescilli/ticari lisanslarla geliştirilmiştir."
  },
  {
    "id": 3,
    "question": "Aşağıdakilerden hangisi işletim sisteminin fonksiyonlarından biri olmak zorunda değildir?",
    "options": {
      "a": "İşlem yönetimi",
      "b": "Disk yönetimi",
      "c": "Güvenlik",
      "d": "Hafıza yönetimi"
    },
    "answer": "c",
    "explanation": "Basit tek kullanıcılı veya erken dönem gömülü işletim sistemlerinde (örneğin ilk MS-DOS sürümlerinde) kullanıcı kimlik doğrulaması ve güvenlik zorunlu bir bileşen değildi. Ancak işlem yönetimi, bellek yönetimi ve disk/dosya yönetimi donanımın çalışabilmesi için zorunlu temel fonksiyonlardır."
  },
  {
    "id": 4,
    "question": "Eğer bir iş giriş-çıkış işlemlerine ihtiyaç duyuyorsa ...... durumuna geçer. Boşluk için uygun terimi işaretleyiniz.",
    "options": {
      "a": "Askıya al/Bekle",
      "b": "Yeni",
      "c": "Hazır",
      "d": "Bekleme/Bloklama"
    },
    "answer": "d",
    "explanation": "Çalışmakta olan (Running) bir işlem, disk okuma veya klavye girişi gibi bir G/Ç (I/O) işlemine ihtiyaç duyduğunda CPU'yu bırakır ve I/O işlemi tamamlanana kadar 'Bekleme/Bloklama' (Waiting/Blocked) durumuna geçer."
  },
  {
    "id": 5,
    "question": "Aşağıdaki belleklerden hangisine CPU tarafından doğrudan erişim sağlanamaz?",
    "options": {
      "a": "RAM",
      "b": "Sanal bellek",
      "c": "Yazmaç",
      "d": "Ön bellek"
    },
    "answer": "b",
    "explanation": "CPU doğrudan Yazmaçlara (Registers), Ön Belleğe (L1/L2/L3 Cache) ve Ana Belleğe (RAM) bellek yolu (bus) üzerinden adresleme ile doğrudan erişebilir. Sanal bellek ise ikincil depolama (Hard Disk / SSD) üzerinde oluşturulur ve CPU disk adresine doğrudan komut işletemez; ilgili sayfalar (pages) önce RAM'e yüklenir (Swap-in)."
  },
  {
    "id": 6,
    "question": "Bir process'e ait kodlar döngü içerisinde 1-10 arası sayıların ortalamasını hesaplarken işlemcideki durumu ne olur?",
    "options": {
      "a": "Bekliyor",
      "b": "Çalışıyor",
      "c": "Hazır",
      "d": "Yeni"
    },
    "answer": "b",
    "explanation": "Döngü ve aritmetik hesaplamalar CPU'nun doğrudan yürüttüğü aktif komutlardır. Herhangi bir I/O beklemesi olmadığı için process CPU üzerinde anlık olarak 'Çalışıyor' (Running) durumundadır."
  },
  {
    "id": 7,
    "question": "Aşağıdakilerden hangisi temel işletim sistemi katmanlarından değildir?",
    "options": {
      "a": "Uygulama",
      "b": "Oturum",
      "c": "Çekirdek",
      "d": "Kabuk"
    },
    "answer": "b",
    "explanation": "İşletim sistemi mimarisinde Donanım, Çekirdek (Kernel), Kabuk/Kullanıcı Arayüzü (Shell/UI) ve Uygulama (Application) temel katmanlardır. 'Oturum' (Session) katmanı ise OSI ağ modelinin 5. katmanıdır, işletim sistemi mimari katmanı değildir."
  },
  {
    "id": 8,
    "question": "Aşağıdakilerden hangisi sistem çağrısının tanımıdır?",
    "options": {
      "a": "E-posta servislerinin birbiriyle haberleşmesidir.",
      "b": "Bilgisayar donanımlarının birbiriyle etkileşimidir.",
      "c": "İki uygulamanın birbiriyle haberleşmesidir.",
      "d": "Çalışan bir uygulamayla işletim sisteminin iletişimidir."
    },
    "answer": "d",
    "explanation": "Sistem çağrısı (System Call), kullanıcı modundaki (User Mode) bir uygulamanın çekirdek modundaki (Kernel Mode) işletim sistemi servislerine (dosya açma/kapama, bellek ayırma, donanım kontrolü vb.) erişmek için kullandığı programlama arayüzüdür."
  },
  {
    "id": 9,
    "question": "Çoklu işlemciler hakkında aşağıdaki ifadelerden hangisi doğrudur?",
    "options": {
      "a": "Asimetrik çoklu işlemcilerde görev dağıtan bir işlemci vardır.",
      "b": "Asimetrik çoklu işlemcilerde tüm işlemciler eşit olarak görev alır.",
      "c": "Simetrik çoklu işlemcilerde bir işlemci diğer işlemcilere görev dağıtan bir yapı içerisindedir.",
      "d": "Simetrik çoklu işlemciler özellikle ilk zamanlarda kullanılmıştır."
    },
    "answer": "a",
    "explanation": "Asimetrik Çoklu İşlemci (AMP) mimarisinde bir ana işlemci (Master CPU) işletim sistemini yönetir ve görevleri diğer yardımcı işlemcilere (Slave CPU) paylaştırır. Simetrikte (SMP) ise her işlemci eşittir ve işletim sistemi kodunu bağımsız olarak yürütebilir."
  },
  {
    "id": 10,
    "question": "Aşağıdaki işler FIFO (First In First Out) algoritmasıyla planlanmaktadır:\n\nİşlem | Varış Zamanı | İşlem Süresi\n--- | --- | ---\nİşlem A | 0 ms | 6 ms\nİşlem B | 1 ms | 2 ms\nİşlem C | 3 ms | 8 ms\nİşlem D | 4 ms | 3 ms\n\nBu işler için ortalama bekleme süresi nedir?",
    "table": [
      {"İşlem": "İşlem A", "Varış Zamanı": "0 ms", "İşlem Süresi": "6 ms"},
      {"İşlem": "İşlem B", "Varış Zamanı": "1 ms", "İşlem Süresi": "2 ms"},
      {"İşlem": "İşlem C", "Varış Zamanı": "3 ms", "İşlem Süresi": "8 ms"},
      {"İşlem": "İşlem D", "Varış Zamanı": "4 ms", "İşlem Süresi": "3 ms"}
    ],
    "options": {
      "a": "7.25 ms.",
      "b": "5.5 ms.",
      "c": "7.5 ms.",
      "d": "6 ms."
    },
    "answer": "b",
    "explanation": "FIFO Sıralaması: A (0-6 ms), B (6-8 ms), C (8-16 ms), D (16-19 ms).\nBekleme Süresi = Başlama Zamanı - Varış Zamanı:\n• İşlem A: 0 - 0 = 0 ms\n• İşlem B: 6 - 1 = 5 ms\n• İşlem C: 8 - 3 = 5 ms\n• İşlem D: 16 - 4 = 12 ms\nToplam Bekleme = 0 + 5 + 5 + 12 = 22 ms.\nOrtalama Bekleme = 22 / 4 = 5.5 ms."
  },
  {
    "id": 11,
    "question": "Bir işlemin yaşam döngüsünde aşağıdaki hangi geçiş doğrudan gerçekleşmez?",
    "options": {
      "a": "Çalışıyor-Hazır",
      "b": "Çalışıyor-Sonlandı",
      "c": "Yeni-Hazır",
      "d": "Hazır-Bekliyor"
    },
    "answer": "d",
    "explanation": "Bir işlem 'Hazır' (Ready) durumundayken CPU almayı beklemektedir; henüz çalışmadığı için G/Ç talebinde bulunamaz. Dolayısıyla Hazır -> Bekliyor geçişi doğrudan yapılamaz; işlem önce CPU alıp 'Çalışıyor' durumuna geçmeli, sonra I/O isteğiyle 'Bekliyor' durumuna geçmelidir."
  },
  {
    "id": 12,
    "question": "10. soruda yer alan tablodaki işler için Kesintili SRTF (Shortest Remaining Time First) algoritmasına göre işlem sırası ve ortalama bekleme süresi kaçtır?",
    "options": {
      "a": "A -> B -> A -> D -> A -> C | 3.25 ms",
      "b": "A -> B -> D -> A -> C | 3.75 ms",
      "c": "A -> B -> C -> D -> A | 5.00 ms",
      "d": "A -> B -> A -> D -> C | 4.25 ms"
    },
    "answer": "a",
    "explanation": "Kesintili SRTF Planlaması:\n• t=0: A (6 ms) başlar.\n• t=1: B (2 ms) gelir. Kalan A (5 ms) > B (2 ms) olduğu için A kesilir, B çalışır.\n• t=3: B biter. C (8 ms) gelir. Kalanlar: A(5 ms), C(8 ms). A çalışır.\n• t=4: D (3 ms) gelir. Kalan A (4 ms) > D (3 ms) olduğu için A kesilir, D çalışır.\n• t=7: D biter. Kalanlar: A(4 ms), C(8 ms). A çalışır.\n• t=11: A biter. C çalışır.\n• t=19: C biter.\nİşlem sırası: A -> B -> A -> D -> A -> C.\nBekleme Süreleri: B = 0 ms, D = 0 ms, A = 11 - 6 - 0 = 5 ms, C = 19 - 8 - 3 = 8 ms.\nOrtalama Bekleme = (0 + 0 + 5 + 8) / 4 = 13 / 4 = 3.25 ms."
  },
  {
    "id": 13,
    "question": "Aşağıdakilerden hangisi Von-Neumann mimarisinin bileşenlerinden biridir?",
    "options": {
      "a": "Bellek",
      "b": "Çekirdek",
      "c": "Arayüz",
      "d": "Yazdırma birimi"
    },
    "answer": "a",
    "explanation": "Von-Neumann mimarisinin temel donanım bileşenleri: Merkezi İşlem Birimi (İşlemci / CPU: ALU ve Kontrol Birimi), Bellek Birimi (Memory) ve Giriş/Çıkış (I/O) mekanizmasıdır. Çekirdek ve Arayüz yazılımsal katmanlardır."
  },
  {
    "id": 14,
    "question": "Tüm işletim sistemindeki kaynakların paylaşılmasından ve düzenlenmesinden sorumlu katman hangisidir?",
    "options": {
      "a": "G/Ç sistemi",
      "b": "Çekirdek",
      "c": "Arayüz",
      "d": "Bellek yönetimi"
    },
    "answer": "b",
    "explanation": "Çekirdek (Kernel), işletim sisteminin merkezinde yer alır ve CPU, bellek, disk, I/O gibi tüm donanım ve yazılım kaynaklarının güvenli, adil ve senkronize paylaşımını yönetir."
  },
  {
    "id": 15,
    "question": "Merkezi işlem birimlerinin içinde yer alan küçük boyutlu ve çok hızlı erişilebilen bellek türü hangisidir?",
    "options": {
      "a": "Yazmaç-Register",
      "b": "RAM",
      "c": "Mantık birimi",
      "d": "Veri yolu"
    },
    "answer": "a",
    "explanation": "Yazmaçlar (Registers), CPU çekirdeği içerisine entegre edilmiş, en hızlı ve doğrudan saat çevrimiyle erişilen küçük kapasiteli geçici veri saklama alanlarıdır."
  },
  {
    "id": 16,
    "question": "Aşağıdakilerden hangisi işlem kontrol bloğunda (PCB - Process Control Block) yer almaz?",
    "options": {
      "a": "İşlem durumu",
      "b": "Bellek yönetimi bilgisi",
      "c": "İşlem numarası",
      "d": "İşletim sisteminin performans bilgileri"
    },
    "answer": "d",
    "explanation": "İşlem Kontrol Bloğu (PCB), belirli tek bir sürecin yönetim bilgilerini (PID, işlem durumu, Program Counter, CPU yazmaçları, bellek sınırları vb.) içerir. Genel işletim sistemi performans bilgileri PCB içinde tutulmaz."
  },
  {
    "id": 17,
    "question": "Aşağıda verilen görevlerden hangisi tüm işletim sistemi yazılımlarının temel sorumluluklarından biri değildir?",
    "options": {
      "a": "Ağ yönetimi",
      "b": "Dosya yönetimi",
      "c": "İş yönetimi",
      "d": "Sunucu yönetimi"
    },
    "answer": "a",
    "explanation": "Her işletim sistemi bir ağa bağlı olmak veya ağ yönetimi sunmak zorunda değildir (örneğin izole gömülü sistemler veya ilk kişisel bilgisayar işletim sistemleri). Dosya, iş ve bellek yönetimi ise her sistem için temeldir."
  },
  {
    "id": 18,
    "question": "Diskten ana belleğin boş bir alanına işlem veya iş parçacığı taşınmasına ---- denir. Boşluk için uygun terimi işaretleyiniz.",
    "options": {
      "a": "Swap out",
      "b": "Disk yönetimi",
      "c": "Swap in",
      "d": "Öncelik ataması"
    },
    "answer": "c",
    "explanation": "Sanal bellek mekanizmasında diskteki takas alanından ana belleğe (RAM) işlem getirilmesine 'Swap in'; ana bellekten diske çıkarılmasına ise 'Swap out' denir."
  },
  {
    "id": 19,
    "question": "Aşağıdaki tabloda verilen işlemler için:\n\nİşlem | Varış Zamanı | İşlem Süresi\n--- | --- | ---\nP1 | 0 ms | 7 ms\nP2 | 1 ms | 4 ms\nP3 | 2 ms | 8 ms\n\nPreemptive Shortest Job First (PSJF / Kesintili) ve Non-Preemptive Shortest Job First (SJF / Kesintisiz) algoritmaları için işlem sırası nasıldır?",
    "table": [
      {"İşlem": "P1", "Varış Zamanı": "0 ms", "İşlem Süresi": "7 ms"},
      {"İşlem": "P2", "Varış Zamanı": "1 ms", "İşlem Süresi": "4 ms"},
      {"İşlem": "P3", "Varış Zamanı": "2 ms", "İşlem Süresi": "8 ms"}
    ],
    "options": {
      "A": "PSJF: P1 -> P2 -> P1 -> P3 | SJF: P1 -> P2 -> P3",
      "B": "PSJF: P1 -> P2 -> P3 -> P1 | SJF: P1 -> P3 -> P2",
      "C": "PSJF: P2 -> P1 -> P3 | SJF: P2 -> P1 -> P3",
      "D": "PSJF: P1 -> P2 -> P3 | SJF: P1 -> P2 -> P3"
    },
    "answer": "A",
    "explanation": "• PSJF (Kesintili): t=0'da P1 başlar. t=1'de P2 (4 ms) gelir, P1'in kalan süresi 6 ms > 4 ms olduğundan P1 kesilir, P2 çalışır (t=5'e kadar). Sonra hazırda bekleyen P1 (6 ms) ve P3 (8 ms) arasından P1 seçilir (t=11'e kadar). Son olarak P3 çalışır. Sıra: P1 -> P2 -> P1 -> P3.\n• SJF (Kesintisiz): t=0'da P1 başlar ve bitene kadar kesilmez (t=7). t=7'de bekleyen P2 (4 ms) ve P3 (8 ms) arasından kısa olan P2 çalışır (t=11), ardından P3 çalışır. Sıra: P1 -> P2 -> P3."
  },
  {
    "id": 20,
    "question": "İşlem 1: 3 ms  | İşlem 2: 6 ms\nİşlem 3: 2 ms | İşlem 4: 8 ms\n(Tüm işlemlerin varış zamanı 0 kabul edildiğinde)\nBu işlemler FIFO ve SJF algoritmalarına göre sıralandığında, hangi algoritmada ortalama bekleme süresi daha düşüktür ve bu süre nedir?",
    "options": {
      "a": "FIFO - 6.5 ms",
      "b": "SJF - 4.5 ms",
      "c": "SJF - 5.5 ms",
      "d": "FIFO - 5.75 ms"
    },
    "answer": "b",
    "explanation": "SJF Sıralaması (Kısadan uzuna): İşlem 3 (2 ms) -> İşlem 1 (3 ms) -> İşlem 2 (6 ms) -> İşlem 4 (8 ms).\nBekleme Süreleri:\n• İşlem 3: 0 ms\n• İşlem 1: 2 ms\n• İşlem 2: 2 + 3 = 5 ms\n• İşlem 4: 5 + 6 = 11 ms\nToplam Bekleme = 0 + 2 + 5 + 11 = 18 ms.\nOrtalama Bekleme = 18 / 4 = 4.5 ms.\n(FIFO'da 1->2->3->4 sırasıyla ortalama bekleme (0 + 3 + 9 + 11)/4 = 5.75 ms olur. SJF 4.5 ms ile daha düşüktür)."
  }
];
