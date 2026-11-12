// İşletim Sistemleri & E-Ticaret Modüler Soru Verisi
window.ISLETIM_QUESTIONS = [
  {
    "id": 9001,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 1 • Kesintiler (Interrupts)",
    "question": "İşletim sisteminde bir işlemin bittiği işlemciye ................... aracılığıyla bildirilir.\nYukarıdaki ifadede yer alan boşluğa uygun olan terim hangisidir?",
    "code": null,
    "options": {
      "A": "Tampon",
      "B": "İş parçacıkları",
      "C": "Kesinti",
      "D": "Yazmaç"
    },
    "answer": "C",
    "explanation": "Doğru Cevap: C (Kesinti). İşlemciye bir donanım veya yazılım olayının (örneğin işlemin tamamlanması, I/O bitişi vb.) haber verilmesi 'Kesinti' (Interrupt) mekanizması ile gerçekleştirilir.",
    "explanations": {
      "A": "Yanlış: Tampon (Buffer), cihazlar veya süreçler arasında hız farkını dengelemek için kullanılan geçici veri saklama alanıdır.",
      "B": "Yanlış: İş parçacıkları (Threads), bir process içindeki eşzamanlı yürütme birimleridir.",
      "C": "DOĞRU YANIT: Kesinti (Interrupt), bir işlemin veya G/Ç olayının tamamlandığını işlemciye bildiren sinyaldir.",
      "D": "Yanlış: Yazmaç (Register), CPU içinde yer alan en hızlı ve küçük boyutlu bellek birimidir."
    }
  },
  {
    "id": 9002,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 2 • Açık Kaynak İşletim Sistemleri",
    "question": "Aşağıdaki işletim sistemlerinden hangisi kaynak kodunu genel olarak kamuoyuna açık bir şekilde paylaşır?",
    "code": null,
    "options": {
      "A": "Windows",
      "B": "Linux",
      "C": "Unix",
      "D": "MacOS"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: B (Linux). Linux, açık kaynak kodlu (Open Source) ve GPL (Genel Kamu Lisansı) lisanslı bir işletim sistemidir; kaynak kodları tüm kamuoyuyla açıkça paylaşılır.",
    "explanations": {
      "A": "Yanlış: Microsoft Windows kapalı kaynak kodlu (propietary/tescilli) ticari bir işletim sistemidir.",
      "B": "DOĞRU YANIT: Linux, kaynak kodunu kamuoyuna açık olarak paylaşan (Open Source) bir işletim sistemidir.",
      "C": "Yanlış: Orijinal AT&T Unix ve ticari türevleri (AIX, HP-UX, Solaris) kapalı kaynaklı/tescilli sistemlerdir.",
      "D": "Yanlış: Apple macOS kapalı kaynak kodlu ve yalnızca Apple donanımlarında lisanslı çalışan tescilli bir sistemdir."
    }
  },
  {
    "id": 9003,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 3 • İşletim Sistemi Fonksiyonları",
    "question": "Aşağıdakilerden hangisi işletim sisteminin fonksiyonlarından biri olmak zorunda değildir?",
    "code": null,
    "options": {
      "A": "İşlem yönetimi",
      "B": "Disk yönetimi",
      "C": "Güvenlik",
      "D": "Hafıza yönetimi"
    },
    "answer": "C",
    "explanation": "Doğru Cevap: C (Güvenlik). Basit tek kullanıcılı veya erken dönem gömülü işletim sistemlerinde (örneğin ilk MS-DOS sürümlerinde) kullanıcı kimlik doğrulaması ve güvenlik zorunlu bir bileşen değildi. İşlem, hafıza ve disk yönetimi ise temel zorunlu fonksiyonlardır.",
    "explanations": {
      "A": "Yanlış: İşlem (Process) yönetimi, CPU üzerinde programların çalıştırılması için her işletim sisteminde zorunludur.",
      "B": "Yanlış: Disk ve dosya yönetimi, verilerin depolanması ve okunması için temel fonksiyonlardandır.",
      "C": "DOĞRU YANIT: Güvenlik, tek kullanıcılı veya izole basit işletim sistemlerinde zorunlu bir fonksiyon değildir.",
      "D": "Yanlış: Hafıza (Bellek) yönetimi, çalışan programlara RAM tahsisi yapmak için her işletim sisteminde zorunludur."
    }
  },
  {
    "id": 9004,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 4 • İşlem Durumları (Process States)",
    "question": "Eğer bir iş giriş-çıkış işlemlerine ihtiyaç duyuyorsa ...... durumuna geçer. Boşluk için uygun terimi işaretleyiniz.",
    "code": null,
    "options": {
      "A": "Askıya al/Bekle",
      "B": "Yeni",
      "C": "Hazır",
      "D": "Bekleme/Bloklama"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: D (Bekleme/Bloklama). Çalışmakta olan (Running) bir işlem, disk okuma veya klavye girişi gibi bir G/Ç (I/O) işlemine ihtiyaç duyduğunda CPU'yu bırakır ve I/O tamamlanana kadar 'Bekleme/Bloklama' (Waiting/Blocked) durumuna geçer.",
    "explanations": {
      "A": "Yanlış: Standart 5 durumlu süreç diyagramında G/Ç bekleyen süreç 'Bekleme/Bloklama' (Waiting/Blocked) olarak adlandırılır.",
      "B": "Yanlış: Yeni (New), sürecin henüz oluşturulmakta olduğu ilk başlangıç durumudur.",
      "C": "Yanlış: Hazır (Ready), G/Ç eksiği olmayan ve sadece CPU sırası bekleyen süreçlerin durumudur.",
      "D": "DOĞRU YANIT: Giriş-çıkış (I/O) işlemine ihtiyaç duyan süreç 'Bekleme/Bloklama' (Waiting/Blocked) durumuna geçer."
    }
  },
  {
    "id": 9005,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 5 • Bellek Hiyerarşisi",
    "question": "Aşağıdaki belleklerden hangisine CPU tarafından doğrudan erişim sağlanamaz?",
    "code": null,
    "options": {
      "A": "RAM",
      "B": "Sanal bellek",
      "C": "Yazmaç",
      "D": "Ön bellek"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: B (Sanal bellek). CPU doğrudan Yazmaçlara (Registers), Ön Belleğe (Cache) ve Ana Belleğe (RAM) erişebilir. Sanal bellek ise disk (HDD/SSD) üzerinde tutulur; CPU diske doğrudan erişemez, veriler önce RAM'e taşınmalıdır (Swap-in).",
    "explanations": {
      "A": "Yanlış: RAM (Ana Bellek), CPU'nun bellek veri yolu üzerinden doğrudan okuyup yazabildiği birincil bellektir.",
      "B": "DOĞRU YANIT: Sanal bellek sabit disk üzerinde yer aldığı için CPU tarafından doğrudan erişilemez; önce RAM'e yüklenir.",
      "C": "Yanlış: Yazmaçlar (Registers) bizzat CPU'nun kendi içindeki bellek birimleridir, doğrudan erişilir.",
      "D": "Yanlış: Ön bellek (L1/L2/L3 Cache) CPU içinde veya hemen yanında yer alır ve CPU tarafından doğrudan erişilir."
    }
  },
  {
    "id": 9006,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 6 • İşlem Durumları (Running)",
    "question": "Bir process'e ait kodlar döngü içerisinde 1-10 arası sayıların ortalamasını hesaplarken işlemcideki durumu ne olur?",
    "code": null,
    "options": {
      "A": "Bekliyor",
      "B": "Çalışıyor",
      "C": "Hazır",
      "D": "Yeni"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: B (Çalışıyor). Döngü ve aritmetik ortalama hesaplaması CPU'nun ALU birimi tarafından aktif olarak yürütülen komutlardır. Dolayısıyla process o anda işlemcide 'Çalışıyor' (Running) durumundadır.",
    "explanations": {
      "A": "Yanlış: Bekliyor (Waiting), sürecin CPU'da değil G/Ç (disk, klavye vb.) beklediği durumdur.",
      "B": "DOĞRU YANIT: Aritmetik döngü hesaplaması CPU üzerinde aktif yürütüldüğü için süreç 'Çalışıyor' (Running) durumundadır.",
      "C": "Yanlış: Hazır (Ready), sürecin çalışmaya hazır olup kuyrukta CPU sırası beklediği durumdur.",
      "D": "Yanlış: Yeni (New), sürecin henüz belleğe yüklenmekte olduğu başlangıç durumudur."
    }
  },
  {
    "id": 9007,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 7 • İşletim Sistemi Katmanları",
    "question": "Aşağıdakilerden hangisi temel işletim sistemi katmanlarından değildir?",
    "code": null,
    "options": {
      "A": "Uygulama",
      "B": "Oturum",
      "C": "Çekirdek",
      "D": "Kabuk"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: B (Oturum). Temel işletim sistemi katmanları: Donanım -> Çekirdek (Kernel) -> Kabuk (Shell) -> Uygulama (Application) şeklindedir. 'Oturum' (Session) katmanı ise bilgisayar ağlarındaki OSI referans modelinin 5. katmanıdır.",
    "explanations": {
      "A": "Yanlış: Uygulama (Application) katmanı, son kullanıcı programlarının çalıştığı en üst katmandır.",
      "B": "DOĞRU YANIT: Oturum (Session) katmanı işletim sistemi mimarisinde değil, OSI ağ modelinde yer alır.",
      "C": "Yanlış: Çekirdek (Kernel), donanımı doğrudan yöneten en temel işletim sistemi katmanıdır.",
      "D": "Yanlış: Kabuk (Shell), kullanıcı ile çekirdek arasındaki komut/arayüz katmanıdır."
    }
  },
  {
    "id": 9008,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 8 • Sistem Çağrısı (System Call)",
    "question": "Aşağıdakilerden hangisi sistem çağrısının tanımıdır?",
    "code": null,
    "options": {
      "A": "E-posta servislerinin birbiriyle haberleşmesidir.",
      "B": "Bilgisayar donanımlarının birbiriyle etkileşimidir.",
      "C": "İki uygulamanın birbiriyle haberleşmesidir.",
      "D": "Çalışan bir uygulamayla işletim sisteminin iletişimidir."
    },
    "answer": "D",
    "explanation": "Doğru Cevap: D (Çalışan bir uygulamayla işletim sisteminin iletişimidir). Sistem çağrısı (System Call), kullanıcı modunda çalışan bir programın, çekirdek modundaki işletim sistemi hizmetlerinden (dosya okuma, süreç oluşturma, bellek tahsisi vb.) yararlanmak için işletim sistemiyle kurduğu iletişimdir.",
    "explanations": {
      "A": "Yanlış: E-posta servislerinin haberleşmesi SMTP/POP/IMAP gibi ağ protokolleriyle gerçekleşir.",
      "B": "Yanlış: Donanımların birbiriyle etkileşimi veri yolları (bus) ve donanım denetleyicileriyle yapılır.",
      "C": "Yanlış: İki uygulamanın haberleşmesi Süreçler Arası İletişim (IPC - Inter-Process Communication) olarak adlandırılır.",
      "D": "DOĞRU YANIT: Sistem çağrısı (System Call), çalışan bir uygulama ile işletim sistemi çekirdeği arasındaki iletişim arayüzüdür."
    }
  },
  {
    "id": 9009,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 9 • Çoklu İşlemciler (AMP & SMP)",
    "question": "Çoklu işlemciler hakkında aşağıdaki ifadelerden hangisi doğrudur?",
    "code": null,
    "options": {
      "A": "Asimetrik çoklu işlemcilerde görev dağıtan bir işlemci vardır.",
      "B": "Asimetrik çoklu işlemcilerde tüm işlemciler eşit olarak görev alır.",
      "C": "Simetrik çoklu işlemcilerde bir işlemci diğer işlemcilere görev dağıtan bir yapı içerisindedir.",
      "D": "Simetrik çoklu işlemciler özellikle ilk zamanlarda kullanılmıştır."
    },
    "answer": "A",
    "explanation": "Doğru Cevap: A (Asimetrik çoklu işlemcilerde görev dağıtan bir işlemci vardır). Asimetrik Çoklu İşleme (AMP) yapısında bir 'Master' (Ana) işlemci sistemi kontrol eder ve 'Slave' (Uydu) işlemcilere görev dağıtır. Simetrik Çoklu İşlemede (SMP) ise tüm işlemciler eşittir.",
    "explanations": {
      "A": "DOĞRU YANIT: Asimetrik çoklu işlemcilerde (AMP) işleri kontrol eden ve diğerlerine görev dağıtan bir ana (master) işlemci vardır.",
      "B": "Yanlış: Tüm işlemcilerin eşit görev aldığı yapı Asimetrik değil, Simetrik Çoklu İşleme (SMP) yapısıdır.",
      "C": "Yanlış: Simetrik çoklu işlemcilerde patron-işçi (master-slave) hiyerarşisi yoktur, tüm işlemciler akbandır.",
      "D": "Yanlış: İlk zamanlarda donanım ve işletim sistemi tasarımı daha basit olduğu için Asimetrik çoklu işlemciler kullanılmıştır; günümüzde SMP yaygındır."
    }
  },
  {
    "id": 9010,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 10 • FIFO CPU Zamanlama Algoritması",
    "question": "FIFO algoritmasıyla aşağıdaki tabloda verilen işler için ortalama bekleme süresi nedir?",
    "code": "İşlem    Varış Zamanı    İşlem Süresi\n-------------------------------------\nİşlem A      0 ms            6 ms\nİşlem B      1 ms            2 ms\nİşlem C      3 ms            8 ms\nİşlem D      4 ms            3 ms",
    "options": {
      "A": "7.25 ms.",
      "B": "5.5 ms.",
      "C": "7.5 ms.",
      "D": "6 ms."
    },
    "answer": "B",
    "explanation": "Doğru Cevap: B (5.5 ms). FIFO (First-In First-Out) Sıralaması: A (0-6 ms), B (6-8 ms), C (8-16 ms), D (16-19 ms). Bekleme Süresi = Başlama - Varış: A = 0-0 = 0 ms; B = 6-1 = 5 ms; C = 8-3 = 5 ms; D = 16-4 = 12 ms. Toplam = 0 + 5 + 5 + 12 = 22 ms. Ortalama = 22 / 4 = 5.5 ms.",
    "explanations": {
      "A": "Yanlış: Toplam bekleme süresi 29 ms değil 22 ms'dir (22 / 4 = 5.5 ms).",
      "B": "DOĞRU YANIT: Bekleme süreleri A=0, B=5, C=5, D=12 ms olup ortalaması (0+5+5+12)/4 = 5.5 ms'dir.",
      "C": "Yanlış: Varış zamanları çıkarılmadan hesaplandığında bulunan hatalı değerdir.",
      "D": "Yanlış: Ortalama bekleme süresi 22 / 4 = 5.5 ms'dir."
    }
  },
  {
    "id": 9011,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 11 • İşlem Yaşam Döngüsü Geçişleri",
    "question": "Bir işlemin yaşam döngüsünde aşağıdaki hangi geçiş doğrudan gerçekleşmez?",
    "code": null,
    "options": {
      "A": "Çalışıyor-Hazır",
      "B": "Çalışıyor-Sonlandı",
      "C": "Yeni-Hazır",
      "D": "Hazır-Bekliyor"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: D (Hazır-Bekliyor). 'Hazır' (Ready) kuyruğundaki bir işlem henüz CPU'da çalışmadığı için G/Ç (I/O) isteği yapamaz ve doğrudan 'Bekliyor' (Waiting) durumuna geçemez. Sadece 'Çalışıyor' (Running) durumundaki bir işlem G/Ç isteği yaparak 'Bekliyor' durumuna geçebilir.",
    "explanations": {
      "A": "Yanlış (Gerçekleşir): Süresi (time slice) dolan veya kesintiye uğrayan işlem Çalışıyor -> Hazır durumuna doğrudan geçer.",
      "B": "Yanlış (Gerçekleşir): Görevini tamamlayan işlem Çalışıyor -> Sonlandı (Terminated) durumuna doğrudan geçer.",
      "C": "Yanlış (Gerçekleşir): Belleğe kabul edilen yeni bir süreç Yeni -> Hazır kuyruğuna doğrudan geçer.",
      "D": "DOĞRU YANIT: Hazır durumundaki işlem CPU'da olmadığı için G/Ç talep edemez; Hazır -> Bekliyor geçişi doğrudan gerçekleşmez."
    }
  },
  {
    "id": 9012,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 12 • Kesintili SRTF Algoritması",
    "question": "10. soruda yer alan tablodaki işler için Kesintili SRTF algoritmasına göre işlem sırası ve ortalama bekleme süresi kaçtır?",
    "code": "İşlem    Varış Zamanı    İşlem Süresi\n-------------------------------------\nİşlem A      0 ms            6 ms\nİşlem B      1 ms            2 ms\nİşlem C      3 ms            8 ms\nİşlem D      4 ms            3 ms",
    "options": {
      "A": "A -> B -> A -> D -> A -> C | 3.25 ms",
      "B": "A -> B -> D -> A -> C | 3.75 ms",
      "C": "A -> B -> C -> D -> A | 5.00 ms",
      "D": "A -> B -> A -> D -> C | 4.25 ms"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: A (A -> B -> A -> D -> A -> C | 3.25 ms). t=0'da A(6) başlar. t=1'de B(2) gelir, A(kalan 5) kesilir, B çalışır (1-3 ms). t=3'te B biter, C(8) gelir, A(5) < C(8) olduğundan A çalışır (3-4 ms). t=4'te D(3) gelir, A(kalan 4) kesilir, D çalışır (4-7 ms). t=7'de D biter, A(4) çalışır (7-11 ms). t=11-19 arası C(8) çalışır. Beklemeler: B=0, D=0, A=11-6-0=5, C=19-8-3=8 ms. Ortalama = (0+0+5+8)/4 = 3.25 ms.",
    "explanations": {
      "A": "DOĞRU YANIT: t=3 ile t=4 arasında A 1 ms çalıştığı için sıra A -> B -> A -> D -> A -> C olur ve ortalama bekleme 13/4 = 3.25 ms'dir.",
      "B": "Yanlış: t=3'te B bittiğinde D henüz gelmemiştir (D t=4'te gelir), bu yüzden t=3..4 arasında A çalışır.",
      "C": "Yanlış: C'nin süresi 8 ms olduğu için en son çalışmalıdır.",
      "D": "Yanlış: D bittikten sonra (t=7) kalan süresi 4 ms olan A tekrar çalışıp bitmeli, C en son çalışmalıdır."
    }
  },
  {
    "id": 9013,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 13 • Von-Neumann Mimarisi",
    "question": "Aşağıdakilerden hangisi Von-Neumann mimarisinin bileşenlerinden biridir?",
    "code": null,
    "options": {
      "A": "Bellek",
      "B": "Çekirdek",
      "C": "Arayüz",
      "D": "Yazdırma birimi"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: A (Bellek). Von-Neumann bilgisayar mimarisinin temel donanım bileşenleri: Merkezi İşlem Birimi (CPU: ALU + Kontrol Birimi), Bellek Birimi (Memory) ve Giriş/Çıkış (I/O) birimleridir.",
    "explanations": {
      "A": "DOĞRU YANIT: Bellek (Memory Unit), komutların ve verilerin birlikte saklandığı temel Von-Neumann donanım bileşenidir.",
      "B": "Yanlış: Çekirdek (Kernel), donanım mimarisi bileşeni değil işletim sisteminin yazılım katmanıdır.",
      "C": "Yanlış: Kullanıcı arayüzü (UI/GUI), işletim sisteminin yazılımsal etkileşim katmanıdır.",
      "D": "Yanlış: Yazdırma birimi harici bir çevre birimidir, temel Von-Neumann mimari bloklarından biri değildir."
    }
  },
  {
    "id": 9014,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 14 • Çekirdek (Kernel) Görevleri",
    "question": "Tüm işletim sistemindeki kaynakların paylaşılmasından ve düzenlenmesinden sorumlu katman hangisidir?",
    "code": null,
    "options": {
      "A": "G/Ç sistemi",
      "B": "Çekirdek",
      "C": "Arayüz",
      "D": "Bellek yönetimi"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: B (Çekirdek). Çekirdek (Kernel), işletim sisteminin kalbidir; donanım ile yazılım arasında köprü kurarak tüm sistem kaynaklarının (CPU, bellek, G/Ç aygıtları) paylaşılmasından ve düzenlenmesinden sorumludur.",
    "explanations": {
      "A": "Yanlış: G/Ç sistemi yalnızca giriş-çıkış aygıtlarının iletişiminden sorumludur, tüm kaynakları yönetmez.",
      "B": "DOĞRU YANIT: Çekirdek (Kernel), işletim sistemindeki tüm donanım ve sistem kaynaklarının paylaşımından sorumlu ana katmandır.",
      "C": "Yanlış: Arayüz (Shell/GUI), yalnızca kullanıcının sistemle etkileşim kurmasını sağlar.",
      "D": "Yanlış: Bellek yönetimi, çekirdeğin alt bileşenlerinden sadece biridir ve yalnızca RAM tahsisini yönetir."
    }
  },
  {
    "id": 9015,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 15 • Yazmaçlar (Registers)",
    "question": "Merkezi işlem birimlerinin içinde yer alan küçük boyutlu ve çok hızlı erişilebilen bellek türü hangisidir?",
    "code": null,
    "options": {
      "A": "Yazmaç-Register",
      "B": "RAM",
      "C": "Mantık birimi",
      "D": "Veri yolu"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: A (Yazmaç-Register). Merkezi İşlem Birimi (CPU) içerisinde bulunan, o an işlenen komut ve verileri tutan en küçük boyutlu ve en yüksek hızlı bellek birimi Yazmaçtır (Register).",
    "explanations": {
      "A": "DOĞRU YANIT: Yazmaç (Register), doğrudan CPU içinde yer alan, çok küçük boyutlu ve en hızlı erişilebilen bellek türüdür.",
      "B": "Yanlış: RAM, CPU'nun dışında anakart üzerinde yer alan büyük kapasiteli ana bellektir.",
      "C": "Yanlış: Mantık birimi (ALU - Aritmetik Mantık Birimi), bellek değil toplama/karşılaştırma işlemlerini yapan işlem birimidir.",
      "D": "Yanlış: Veri yolu (Bus), bellek değil bileşenler arasında veri taşıyan iletim hattıdır."
    }
  },
  {
    "id": 9016,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 16 • İşlem Kontrol Bloğu (PCB)",
    "question": "Aşağıdakilerden hangisi işlem kontrol bloğunda yer almaz?",
    "code": null,
    "options": {
      "A": "İşlem durumu",
      "B": "Bellek yönetimi bilgisi",
      "C": "İşlem numarası",
      "D": "İşletim sisteminin performans bilgileri"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: D (İşletim sisteminin performans bilgileri). İşlem Kontrol Bloğu (PCB - Process Control Block), yalnızca ilgili tekil işleme (process) ait bilgileri (İşlem numarası/PID, işlem durumu, program sayacı, yazmaçlar, bellek sınırları vb.) tutar; tüm işletim sisteminin genel performans bilgilerini içermez.",
    "explanations": {
      "A": "Yanlış (PCB'de yer alır): Sürecin o anki durumu (Hazır, Çalışıyor, Bekliyor) PCB içinde tutulur.",
      "B": "Yanlış (PCB'de yer alır): Sürece tahsis edilen sayfa tabloları ve bellek sınırları PCB'de yer alır.",
      "C": "Yanlış (PCB'de yer alır): Her sürecin benzersiz kimlik numarası (PID) PCB'de kayıtlıdır.",
      "D": "DOĞRU YANIT: İşletim sisteminin genel performans bilgileri tek bir sürecin PCB bloğunda yer almaz."
    }
  },
  {
    "id": 9017,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 17 • İşletim Sistemi Sorumlulukları",
    "question": "Aşağıda verilen görevlerden hangisi tüm işletim sistemi yazılımlarının temel sorumluluklarından biri değildir?",
    "code": null,
    "options": {
      "A": "Ağ yönetimi",
      "B": "Dosya yönetimi",
      "C": "İş yönetimi",
      "D": "Sunucu yönetimi"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: A (Ağ yönetimi). Tüm işletim sistemleri bir ağa bağlı olmak zorunda değildir (örneğin bağımsız/stand-alone çalışan sistemler veya erken dönem işletim sistemleri). Bu nedenle sorunun resmi cevap anahtarında 'Ağ yönetimi' doğru yanıt olarak kabul edilmektedir.",
    "explanations": {
      "A": "DOĞRU YANIT: Ağ yönetimi, ağ bağlantısı olmayan tekil/bağımsız işletim sistemlerinde temel zorunluluk değildir (Cevap anahtarı: A).",
      "B": "Yanlış: Dosya yönetimi, verilerin saklanması ve organize edilmesi için temel sorumluluktur.",
      "C": "Yanlış: İş (Süreç/Process) yönetimi, tüm işletim sistemlerinin en temel görevidir.",
      "D": "Yanlış: Çeldirici seçenektir (Sınav cevap anahtarında A şıkkı doğru cevap olarak tanımlanmıştır)."
    }
  },
  {
    "id": 9018,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 18 • Bellek Takası (Swap In / Swap Out)",
    "question": "Diskten ana belleğin boş bir alanına işlem veya iş parçacığı taşınmasına ---- denir. Boşluk için uygun terimi işaretleyiniz.",
    "code": null,
    "options": {
      "A": "Swap out",
      "B": "Disk yönetimi",
      "C": "Swap in",
      "D": "Öncelik ataması"
    },
    "answer": "C",
    "explanation": "Doğru Cevap: C (Swap in). Diskteki sanal bellek/takas alanından ana belleğe (RAM) işlem yüklenmesine 'Swap in' (İçeri takas), ana bellekten (RAM) diske taşınmasına ise 'Swap out' (Dışarı takas) denir.",
    "explanations": {
      "A": "Yanlış: Swap out, işlemin ana bellekten (RAM) çıkarılıp diske yazılması işlemidir.",
      "B": "Yanlış: Disk yönetimi, sabit diskteki sektörlerin ve dosya sisteminin genel yönetimidir.",
      "C": "DOĞRU YANIT: Swap in, diskten ana belleğin (RAM) boş bir alanına işlem/iş parçacığı taşınmasıdır.",
      "D": "Yanlış: Öncelik ataması, CPU zamanlayıcısının süreçlere önem derecesi vermesidir."
    }
  },
  {
    "id": 9019,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 19 • PSJF ve SJF Algoritmaları",
    "question": "Tablodaki process'ler için Preemptive Shortest Job First (PSJF/Kesintili) ve Non-Preemptive Shortest Remaining Time First (SJF/Kesintisiz) algoritmaları kullanılacaktır. Algoritmalar için işlem sırası nasıldır?",
    "code": "İşlem    Varış Zamanı    İşlem Süresi\n-------------------------------------\nP1           0 ms            7 ms\nP2           1 ms            4 ms\nP3           2 ms            8 ms",
    "options": {
      "A": "PSJF: P1 -> P2 -> P1 -> P3 | SJF: P1 -> P2 -> P3",
      "B": "PSJF: P1 -> P2 -> P3 -> P1 | SJF: P1 -> P3 -> P2",
      "C": "PSJF: P2 -> P1 -> P3 | SJF: P2 -> P1 -> P3",
      "D": "PSJF: P1 -> P2 -> P3 | SJF: P1 -> P2 -> P3"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: A (PSJF: P1 -> P2 -> P1 -> P3 | SJF: P1 -> P2 -> P3). Kesintili PSJF'de t=0'da P1(7) başlar; t=1'de P2(4) geldiğinde P1'in kalan süresi 6 ms > 4 ms olduğu için P1 kesilir ve P2 çalışır (1-5 ms). Ardından P1(6) < P3(8) olduğundan P1 tamamlanır, en son P3 çalışır. Kesintisiz SJF'de ise t=0'da başlayan P1 bitene kadar (7 ms) kesilmez, sonra kısa olan P2(4) ve en son P3(8) çalışır.",
    "explanations": {
      "A": "DOĞRU YANIT: Kesintili PSJF'de P1 -> P2 -> P1 -> P3, kesintisiz SJF'de ise P1 -> P2 -> P3 sırasıyla çalışır.",
      "B": "Yanlış: P3'ün süresi (8 ms) en uzun olduğu için P1 veya P2'den önce çalışamaz.",
      "C": "Yanlış: t=0 anında sistemde sadece P1 olduğu için her iki algoritmada da ilk başlayan süreç P1 olmalıdır.",
      "D": "Yanlış: PSJF kesintili (preemptive) olduğundan t=1'de gelen P2(4 ms), P1'i (kalan 6 ms) keserek araya girer."
    }
  },
  {
    "id": 9020,
    "course": "isletim_vize",
    "week": 1,
    "week_title": "İşletim Sistemleri Vize Testi (20 Soru)",
    "qType": "test",
    "difficulty": "Vize Sorusu",
    "test_type": "İşletim Sistemleri - Vize Test Soruları",
    "category": "Soru 20 • FIFO ve SJF Karşılaştırması",
    "question": "İşlem 1: 3 ms  | İşlem 2: 6 ms\nİşlem 3: 2 ms | İşlem 4: 8 ms\nBu işlemler FIFO ve SJF algoritmalarına göre sıralandığında, hangi algoritmada ortalama bekleme süresi daha düşüktür ve bu süre nedir?",
    "code": "İşlem 1: 3 ms  |  İşlem 2: 6 ms\nİşlem 3: 2 ms  |  İşlem 4: 8 ms",
    "options": {
      "A": "FIFO - 6.5 ms",
      "B": "SJF - 4.5 ms",
      "C": "SJF - 5.5 ms",
      "D": "FIFO - 5.75 ms"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: B (SJF - 4.5 ms). SJF algoritması işleri en kısadan en uzuna sıralar: İşlem 3 (2 ms) -> İşlem 1 (3 ms) -> İşlem 2 (6 ms) -> İşlem 4 (8 ms). Bekleme süreleri: İşlem 3 = 0 ms, İşlem 1 = 2 ms, İşlem 2 = 2+3 = 5 ms, İşlem 4 = 2+3+6 = 11 ms. Ortalama bekleme = (0 + 2 + 5 + 11) / 4 = 18 / 4 = 4.5 ms. (FIFO'da ise (0 + 3 + 9 + 11) / 4 = 5.75 ms olur; SJF 4.5 ms ile daha düşüktür).",
    "explanations": {
      "A": "Yanlış: FIFO ortalama bekleme süresi 5.75 ms'dir ve SJF'den daha yüksektir.",
      "B": "DOĞRU YANIT: SJF sıralamasında (2ms -> 3ms -> 6ms -> 8ms) ortalama bekleme süresi (0+2+5+11)/4 = 4.5 ms ile en düşüktür.",
      "C": "Yanlış: SJF ortalama bekleme süresi 5.5 ms değil, 18 / 4 = 4.5 ms'dir.",
      "D": "Yanlış: FIFO'nun süresi gerçekten 5.75 ms'dir ancak soru 'hangisinde daha düşüktür' dediği için 4.5 ms olan SJF doğrudur."
    }
  }
];
window.ETICARET_QUESTIONS = [
  {
    "id": 8001,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "1. Mobil Kuşak Sınıflandırmaları",
    "question": "Aşağıdakilerden hangisi mobil kuşak sınıflandırmaları içerisinde yer almaz?",
    "code": null,
    "options": {
      "A": "1G",
      "B": "2G",
      "C": "3G",
      "D": "3.5G",
      "E": "4G"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: 3.5G. 1G, 2G, 3G, 4G, 5G ve 6G mobil iletişimin standart ana nesilleridir (kuşaklarıdır). 3.5G (HSPA gibi), 3G ile 4G arasında geçişi sağlayan bir ara teknoloji formudur; temel mobil kuşak sınıflandırması içerisinde yer almaz.",
    "explanations": {
      "A": "Yanlış: 1G (Birinci Nesil), analog ses iletimine dayanan temel ana mobil kuşaklardan biridir.",
      "B": "Yanlış: 2G (İkinci Nesil), dijital ses ve SMS iletimini getiren (GSM) temel ana mobil kuşaklardan biridir.",
      "C": "Yanlış: 3G (Üçüncü Nesil), görüntülü görüşme ve mobil interneti getiren standart ana kuşaklardan biridir.",
      "D": "DOĞRU YANIT: 3.5G, 3G ile 4G arasındaki bir ara geçiş teknolojisidir; ana mobil kuşak sınıflandırmalarında (1G, 2G, 3G, 4G, 5G, 6G) yer almaz.",
      "E": "Yanlış: 4G (Dördüncü Nesil), yüksek hızlı genişbant IP tabanlı mobil iletişimi sağlayan standart ana kuşaktır."
    }
  },
  {
    "id": 8002,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "2. GSM Cihaz Kimliği (IMEI)",
    "question": "GSM sisteminde uluslararası mobil cihaz kimliğini ifade eden kısaltma aşağıdakilerden hangisidir?",
    "code": null,
    "options": {
      "A": "SIM",
      "B": "IMSI",
      "C": "IMEI",
      "D": "ISMI",
      "E": "UMTS"
    },
    "answer": "C",
    "explanation": "Doğru Cevap: IMEI (International Mobile Equipment Identity - Uluslararası Mobil Cihaz Kodu). Her mobil cihaza üretim aşamasında verilen 15 haneli benzersiz donanım kimlik numarasıdır. SIM abone kimlik kartıdır, IMSI abonenin (hattın) kimliğidir, UMTS ise 3G ağ teknolojisidir.",
    "explanations": {
      "A": "Yanlış: SIM (Subscriber Identity Module), telefona takılan abone kimlik modülüdür (karttır), cihazın donanım kimliği değildir.",
      "B": "Yanlış: IMSI (International Mobile Subscriber Identity), cihazın değil SIM karttaki abonenin (hattın/kişinin) uluslararası kimliğidir.",
      "C": "DOĞRU YANIT: IMEI (International Mobile Equipment Identity), GSM sisteminde uluslararası mobil cihaz kimliğini ifade eder.",
      "D": "Yanlış: ISMI, IMSI kısaltmasının harflerinin değiştirilmesiyle oluşturulmuş çeldirici bir ifadedir.",
      "E": "Yanlış: UMTS (Universal Mobile Telecommunications System), bir kimlik numarası değil 3G mobil iletişim ağ teknolojisidir."
    }
  },
  {
    "id": 8003,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "3. GSM Altyapısı Bileşenleri",
    "question": "Bir GSM abonesinin şebekeye girişini ve cep telefonu ile santral arasındaki bağlantıyı sağlayan sisteme ne ad verilir?",
    "code": null,
    "options": {
      "A": "Mobil istasyon",
      "B": "Anahtarlama sistemi",
      "C": "Destek Sistemi",
      "D": "Baz istasyonu",
      "E": "Bilgi sistemi"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: Baz istasyonu. GSM mimarisinde abonenin şebekeye radyo dalgalarıyla erişimini ve cep telefonu (mobil istasyon) ile santral (anahtarlama sistemi) arasındaki bağlantıyı sağlayan birim Baz İstasyonu sistemidir.",
    "explanations": {
      "A": "Yanlış: Mobil istasyon, kullanıcının elindeki cep telefonu (ME) ve içindeki SIM kartın bütününe verilen addır.",
      "B": "Yanlış: Anahtarlama sistemi, çağrıları yönlendiren, abone verilerini (HLR/VLR) tutan ve sanal kanalları oluşturan santral sistemidir.",
      "C": "Yanlış: Destek sistemi (OSS), tüm GSM şebekesinin izlenmesi, bakımı ve denetlenmesini yapan sistemdir.",
      "D": "DOĞRU YANIT: Baz istasyonu, abonenin şebekeye girişini ve cep telefonu ile santral arasındaki radyo bağlantısını sağlar.",
      "E": "Yanlış: Bilgi sistemi genel bir kavramdır, GSM şebeke mimarisinin 4 temel bileşeninden (Mobil İstasyon, Baz İstasyonu, Anahtarlama, Destek) biri değildir."
    }
  },
  {
    "id": 8004,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "4. İnternet Protokolleri (FTP)",
    "question": "İnternete bağlı bir bilgisayardan diğerine iki yönlü olarak dosya aktarımı yapmak için geliştirilen bir internet protokolü ve bu işi yapan uygulama programlarına verilen genel ad hangisidir?",
    "code": null,
    "options": {
      "A": "File Transfer Protocol (FTP)",
      "B": "World Wide Web (WWW)",
      "C": "Hyper Text Murkup Language (HTML)",
      "D": "Network News Transfer Protocol (NNTP)",
      "E": "Post Office Protocol (POP)"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: File Transfer Protocol (FTP - Dosya Aktarım Protokolü). İnternete bağlı bilgisayarlar arasında çift yönlü dosya yükleme (upload) ve indirme (download) işlemlerini gerçekleştiren protokoldür.",
    "explanations": {
      "A": "DOĞRU YANIT: File Transfer Protocol (FTP), bilgisayarlar arasında iki yönlü dosya aktarımı yapan protokol ve uygulama programlarının genel adıdır.",
      "B": "Yanlış: WWW (World Wide Web), metin, resim, ses ve videoları hiper metin (HTTP) yapısıyla sunan çoklu ortam web sistemidir.",
      "C": "Yanlış: HTML, dosya aktarım protokolü değil, web sayfalarını oluşturmaya yarayan işaretleme (kodlama) dilidir.",
      "D": "Yanlış: NNTP, internet üzerindeki tartışma ve haber grupları (Usenet) mesajlarını ileten protokoldür.",
      "E": "Yanlış: POP (Post Office Protocol), gelen e-postaları posta sunucusundan bilgisayara indirmeye yarayan e-posta protokolüdür."
    }
  },
  {
    "id": 8005,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "5. Bluetooth'un Özellikleri",
    "question": "I. Gerçek zamanlı konum belirlemek için kullanılabilir.\nII. Farklı üretici firmaların farklı cihazları aynı profili ve standartları kullanarak birlikte çalışabilir.\nIII. Telif haklarıyla korunan bir teknolojidir.\nBluetooth teknolojisiyle ilgili yukarıdaki ifadelerden hangisi ya da hangileri doğrudur?",
    "code": null,
    "options": {
      "A": "Yalnız I",
      "B": "Yalnız II",
      "C": "I ve III",
      "D": "II ve III",
      "E": "I ve II"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: I ve II (E). Bluetooth gerçek zamanlı konum belirleme (Beacon/RTLS) için kullanılabilir ve küresel açık standartları sayesinde farklı üreticilerin cihazları birbiriyle uyumlu çalışır. III. madde yanlıştır çünkü Bluetooth telif haklarıyla korunan (ücretli/lisanslı) bir teknoloji değil, açık standartlı bir teknolojidir.",
    "explanations": {
      "A": "Yanlış: I. öncül doğrudur ancak II. öncül de doğrudur (farklı üreticilerin cihazları aynı standartla birlikte çalışır).",
      "B": "Yanlış: II. öncül doğrudur ancak I. öncül de doğrudur (Bluetooth gerçek zamanlı konum belirlemek için de kullanılır).",
      "C": "Yanlış: III. madde yanlıştır; Bluetooth telif haklarıyla korunan kapalı bir teknoloji değil, açık standartlı bir teknolojidir.",
      "D": "Yanlış: III. madde yanlıştır; Bluetooth telif hakkı/lisans ücreti gerektirmeyen açık bir standarttır.",
      "E": "DOĞRU YANIT: I ve II doğrudur. III. ifade yanlıştır çünkü Bluetooth telif haklarıyla korunan bir teknoloji değildir."
    }
  },
  {
    "id": 8006,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "6. Wi-Fi Teknolojisinin Avantajları",
    "question": "I. WEP, WPA gibi şifreleme yöntemleriyle yüksek güvenlik sağlar.\nII. Global bir sistem olduğundan dolayı dünyanın her yerinde aynı şekilde çalışır.\nIII. Diğer kablosuz ağ olanağı sağlayan teknolojilere göre daha az güç tüketir.\nWi-Fi teknolojisinin avantajları ile ilgili olarak yukarıdakilerden hangisi ya da hangileri doğrudur?",
    "code": null,
    "options": {
      "A": "I ve II",
      "B": "Yalnız II",
      "C": "Yalnız III",
      "D": "I ve III",
      "E": "I, II ve III"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: I ve II (A). Wi-Fi WEP/WPA/WPA2 şifreleme sunar ve IEEE 802.11 global standardı ile dünyanın her yerinde aynı şekilde çalışır. III. madde yanlıştır: Wi-Fi diğer kısa mesafeli kablosuz ağlara (Bluetooth, ZigBee vb.) göre daha AZ değil, daha FAZLA güç tüketir (bu durum Wi-Fi'ın dezavantajıdır).",
    "explanations": {
      "A": "DOĞRU YANIT: I ve II doğrudur. III. madde yanlıştır çünkü yüksek güç tüketimi Wi-Fi'ın avantajı değil dezavantajıdır.",
      "B": "Yanlış: II. öncülün yanında I. öncül (WEP, WPA şifreleme güvenliği) de Wi-Fi'ın avantajları arasındadır.",
      "C": "Yanlış: III. madde yanlıştır; Wi-Fi diğer kablosuz teknolojilere (Bluetooth vb.) kıyasla daha fazla enerji tüketir.",
      "D": "Yanlış: III. madde yanlıştır; Wi-Fi mobil cihazların pilini hızla tükettiği için yüksek güç tüketimi bir dezavantajdır.",
      "E": "Yanlış: III. madde yanlış olduğu için I, II ve III seçeneği elenir."
    }
  },
  {
    "id": 8007,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "7. Kablo TV'nin Özellikleri",
    "question": "Aşağıdakilerden hangisi Kablo TV'nin özellikleri arasında sayılmaz?",
    "code": null,
    "options": {
      "A": "Frekans kirlenmesinden etkilenmemesi",
      "B": "Yüksek kalitede ses ve görüntü iletimi sunması",
      "C": "Ücretsiz kullanılabilmesi",
      "D": "Hareket ve sesli denetim sunması",
      "E": "Etkileşimli (interaktif) hizmetler sunması"
    },
    "answer": "C",
    "explanation": "Doğru Cevap: Ücretsiz kullanılabilmesi (C). Kablo TV, koaksiyel/fiber kablolar üzerinden abonelik ücreti karşılığında sunulan ücretli bir yayın sistemidir; ücretsiz değildir.",
    "explanations": {
      "A": "Yanlış (Kablo TV özelliğidir): Kablo üzerinden iletildiği için havadaki elektromanyetik frekans kirlenmesinden etkilenmez.",
      "B": "Yanlış (Kablo TV özelliğidir): Kablolu altyapı sayesinde yüksek kalitede ses ve görüntü iletimi sunar.",
      "C": "DOĞRU YANIT: Kablo TV ücretsiz değil, abonelik ücreti karşılığında kullanılan bir sistemdir.",
      "D": "Yanlış (Kablo TV özelliğidir): Gelişmiş alıcı kutuları ile hareket ve sesli denetim olanakları sunabilir.",
      "E": "Yanlış (Kablo TV özelliğidir): Çift yönlü kablo altyapısı sayesinde etkileşimli (interaktif) hizmetler ve internet sunar."
    }
  },
  {
    "id": 8008,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "8. Dijital Yayın Uygulamaları",
    "question": "Aşağıdakilerden hangisi dijital yayın uygulamalarının özelliklerinden biri değildir?",
    "code": null,
    "options": {
      "A": "Çevrimiçi oyunlar oynama imkânı sunması",
      "B": "Bankacılık hizmetlerine imkân sağlaması",
      "C": "Film seçip izleme imkânı sunması",
      "D": "Evden alışveriş imkânı sunması",
      "E": "Sadece tek yönlü iletişime imkân vermesi"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: Sadece tek yönlü iletişime imkân vermesi (E). Sadece tek yönlü iletişim, geleneksel Analog TV yayınlarının özelliğidir. Dijital (Sayısal) yayın uygulamaları çift yönlü (etkileşimli/interaktif) iletişim sağlayarak evden alışveriş, bankacılık, VOD (film seçip izleme) ve oyun imkânı sunar.",
    "explanations": {
      "A": "Yanlış (Özelliğidir): Dijital yayın platformları interaktif yapısı sayesinde çevrimiçi oyun oynama imkânı sunar.",
      "B": "Yanlış (Özelliğidir): Çift yönlü veri iletimi ile TV üzerinden bankacılık işlemlerine imkân sağlar.",
      "C": "Yanlış (Özelliğidir): İsteğe bağlı video (VOD / Pay-Per-View) ile film seçip izleme imkânı sunar.",
      "D": "Yanlış (Özelliğidir): İnteraktif TV uygulamaları üzerinden evden alışveriş (t-ticaret) imkânı sunar.",
      "E": "DOĞRU YANIT: Dijital yayınlar tek yönlü değil çift yönlü (etkileşimli) iletişim sağlar; sadece tek yönlü olması Analog TV özelliğidir."
    }
  },
  {
    "id": 8009,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "9. İntranetin Özellikleri",
    "question": "Aşağıdakilerden hangisi intranetin özellikleri arasında yer almaz?",
    "code": null,
    "options": {
      "A": "Sınırsız erişimli özel bir ağ olarak faaliyet gösterir",
      "B": "Açık ve esnek bağlantı yapısı sağlar",
      "C": "Kuruma özel bilgiyle sınırlıdır",
      "D": "Yetkili kişiler arasında iş birliği sağlar",
      "E": "Esnek bir bağlantı yapısı vardır"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: Sınırsız erişimli özel bir ağ olarak faaliyet gösterir (A). İntranet 'sınırsız erişimli' değildir; yalnızca kurum içindeki yetkili çalışanların erişimine izin veren, dış dünyaya (Firewall ile) kapalı/sınırlı bir kurum içi özel ağdır.",
    "explanations": {
      "A": "DOĞRU YANIT: İntranet sınırsız erişimli değildir; sadece kurum çalışanlarına ve yetkililere açık, erişimi sınırlandırılmış özel bir ağdır.",
      "B": "Yanlış (İntranet özelliğidir): Kurum içinde TCP/IP ve web standartlarıyla açık ve esnek bir bağlantı yapısı sağlar.",
      "C": "Yanlış (İntranet özelliğidir): İçeriği sadece ilgili kuruma özel bilgi ve dokümanlarla sınırlıdır.",
      "D": "Yanlış (İntranet özelliğidir): Kurum içindeki yetkili personel ve departmanlar arasında iş birliği sağlar.",
      "E": "Yanlış (İntranet özelliğidir): Web tabanlı mimarisi sayesinde kurum içinde esnek bir bağlantı yapısına sahiptir."
    }
  },
  {
    "id": 8010,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "10. E-Ticaretin Alıcıya Dezavantajları",
    "question": "Aşağıdakilerden hangisi e-ticaretin alıcı açısından dezavantajları arasında yer almaz?",
    "code": null,
    "options": {
      "A": "Kredi kartı olmaması",
      "B": "Karşılıklı güven sorunu",
      "C": "Bazı mal ve hizmetlerin online alışverişinin zorluğu",
      "D": "Bazı malların gönderme sırasında özelliğini kaybetmesi",
      "E": "Reklamcılık ve pazarlama harcaması gerektirebilmesi"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: Reklamcılık ve pazarlama harcaması gerektirebilmesi (E). Reklam ve pazarlama bütçesi ayırmak alıcının (müşterinin) değil, malı satmak isteyen SATICININ (işletmenin) katlandığı bir maliyet/dezavantajdır.",
    "explanations": {
      "A": "Yanlış (Alıcı dezavantajıdır): Kredi kartı veya dijital ödeme aracı olmayan tüketicilerin e-ticaretten yararlanması zordur.",
      "B": "Yanlış (Alıcı dezavantajıdır): Alıcının sanal mağazaya ve ödeme güvenliğine duyduğu güven endişesi alıcı açısından dezavantajdır.",
      "C": "Yanlış (Alıcı dezavantajıdır): Denenerek alınması gereken bazı ürünlerin internetten incelenmesinin zorluğu alıcı dezavantajıdır.",
      "D": "Yanlış (Alıcı dezavantajıdır): Kargo/taşıma sürecinde bozulabilecek gıda vb. ürünlerin özelliğini kaybetmesi alıcı için dezavantajdır.",
      "E": "DOĞRU YANIT: Reklamcılık ve pazarlama harcaması yapmak alıcıyı değil, SATICIYI (işletmeyi) ilgilendiren bir unsurdur."
    }
  },
  {
    "id": 8011,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "11. WWW (World Wide Web)",
    "question": "Aşağıdakilerden hangisi \"internet üzerinden metin, resim, ses, video ve animasyon gibi farklı yapılardaki verileri bir arada işleyen ve etkileşimli olarak kullanımını sağlayan çoklu ortam sistemi\"ne verilen addır?",
    "code": null,
    "options": {
      "A": "TELNET",
      "B": "WWW",
      "C": "FTP",
      "D": "GSM",
      "E": "E-POSTA"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: WWW (World Wide Web - B). Metin, grafik, ses, video ve animasyon gibi çoklu ortam (multimedya) bileşenlerini hiper metin (HTTP/HTML) yapısıyla etkileşimli olarak sunan bilgi sistemine WWW denir.",
    "explanations": {
      "A": "Yanlış: TELNET, uzaktaki bir bilgisayara metin tabanlı komut satırı (terminal) üzerinden bağlanmayı sağlayan protokoldür.",
      "B": "DOĞRU YANIT: WWW (World Wide Web), metin, resim, ses, video ve animasyonu etkileşimli sunan çoklu ortam sistemidir.",
      "C": "Yanlış: FTP (File Transfer Protocol), bilgisayarlar arasında yalnızca dosya transferi yapmaya yarayan protokoldür.",
      "D": "Yanlış: GSM (Global System for Mobile Communications), hücresel mobil telefon iletişim standardıdır.",
      "E": "Yanlış: E-POSTA, elektronik mektup gönderip alma (SMTP/POP3/IMAP) sistemidir."
    }
  },
  {
    "id": 8012,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "12. GPRS Teknolojisi",
    "question": "I. İletişim hızı 171.2 kbps' e çıkan teknolojidir.\nII. Dial-up bağlantı gerekli değildir.\nIII. GPRS ile WAP a bağlanmak mümkündür.\nGPRS ile ilgili yukarıdaki ifadelerden hangisi ya da hangileri doğrudur?",
    "code": null,
    "options": {
      "A": "Yalnız I",
      "B": "I ve II",
      "C": "I ve III",
      "D": "II ve III",
      "E": "I, II ve III"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: I, II ve III (E). GPRS (General Packet Radio Service - 2.5G), paket anahtarlamalı veri iletimi sayesinde hızı teorik olarak 171.2 kbps'e çıkarır, sürekli bağlı (always-on) olduğu için çevirmeli (dial-up) bağlantı gerektirmez ve WAP üzerinden mobil internet erişimi sağlar.",
    "explanations": {
      "A": "Yanlış: I. öncül doğrudur ancak II ve III. öncüller de GPRS için doğrudur.",
      "B": "Yanlış: I ve II'nin yanında III. öncül de doğrudur (GPRS ile WAP sayfalarına bağlanılabilir).",
      "C": "Yanlış: II. öncül de doğrudur; GPRS paket anahtarlamalı olduğundan dial-up bağlantı gerektirmez.",
      "D": "Yanlış: I. öncül de doğrudur; GPRS'in maksimum veri iletişim hızı 171.2 kbps'tir.",
      "E": "DOĞRU YANIT: Her üç ifade de (171.2 kbps hız, dial-up gerektirmemesi ve WAP bağlantısı sağlaması) GPRS için doğrudur."
    }
  },
  {
    "id": 8013,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "13. GSM Standartları (EDGE)",
    "question": "Aşağıdakilerden hangisi bir kablosuz ağ içerisinde kablosuz veri transfer ve uygulamalarına olanak veren GSM standartlarından biridir?",
    "code": null,
    "options": {
      "A": "IMEI",
      "B": "Bluetooth",
      "C": "Wi-Fi",
      "D": "EDGE",
      "E": "PDA"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: EDGE (Enhanced Data Rates for GSM Evolution - D). GSM şebekesi üzerinde (CSD, HSCSD, GPRS ile birlikte) kablosuz veri transferini 384 kbps hıza çıkaran hücresel GSM standardı EDGE'dir (2.75G).",
    "explanations": {
      "A": "Yanlış: IMEI bir veri transfer standardı değil, mobil cihazların 15 haneli uluslararası donanım kimlik numarasıdır.",
      "B": "Yanlış: Bluetooth bir GSM (hücresel) standardı değil, kısa mesafeli kişisel alan ağı (WPAN) teknolojisidir.",
      "C": "Yanlış: Wi-Fi bir GSM standardı değil, kablosuz yerel alan ağı (WLAN - IEEE 802.11) teknolojisidir.",
      "D": "DOĞRU YANIT: EDGE, GSM şebekeleri içerisinde yüksek hızlı kablosuz veri transferine olanak veren GSM standardıdır.",
      "E": "Yanlış: PDA (Personal Digital Assistant), bir iletişim standardı değil, cep bilgisayarı (donanım cihazı) türüdür."
    }
  },
  {
    "id": 8014,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "14. 5G İndirme Hızı",
    "question": "5G teknolojisiyle indirme hızlarının saniyede kaç Gigabite çıkması beklenmektedir?",
    "code": null,
    "options": {
      "A": "1 Gigabit",
      "B": "2 Gigabit",
      "C": "3 Gigabit",
      "D": "5 Gigabit",
      "E": "10 Gigabit"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: 10 Gigabit (E). BTS321 ders notlarına göre 4G'de 100 Mbps – 1 Gbps seviyesinde olan indirme hızlarının, 5G teknolojisiyle birlikte saniyede 10 Gigabit (10 Gbps) seviyesine çıkması hedeflenmektedir.",
    "explanations": {
      "A": "Yanlış: 1 Gigabit hız 4G / LTE-Advanced teknolojisinde ulaşılan teorik hız sınırıdır.",
      "B": "Yanlış: 5G'nin hedeflediği maksimum indirme hızı 2 Gigabit'ten çok daha yüksektir (10 Gigabit).",
      "C": "Yanlış: 3 Gigabit, ders kitabında belirtilen 5G tepe indirme hızı değildir.",
      "D": "Yanlış: 5 Gigabit ('5G' isminden türetilmiş çeldiricidir); 5G'de '5' nesli ifade eder, hız hedefi 10 Gigabit'tir.",
      "E": "DOĞRU YANIT: 5G teknolojisiyle veri indirme hızlarının saniyede 10 Gigabite (10 Gbps) çıkması beklenmektedir."
    }
  },
  {
    "id": 8015,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "15. HTTP Protokolü Açılımı",
    "question": "Web ortamında iletişimi sağlayan protokole verilen isim olan HTTP-Hiper Metin Transfer Protokolü'nün açılımı aşağıdakilerden hangisidir?",
    "code": null,
    "options": {
      "A": "Hyper Test Transfer Language",
      "B": "Hyper Test Transport Language",
      "C": "Hyper Text Transport Protocol",
      "D": "Hyper Text Transfer Protocol",
      "E": "Hyper Test Transfer Protocol"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: Hyper Text Transfer Protocol (D). Kelime karşılıkları: Hyper Text = Hiper Metin, Transfer = Transfer/Aktarım, Protocol = Protokol.",
    "explanations": {
      "A": "Yanlış: 'Test' değil 'Text' (Metin), 'Language' (Dil) değil 'Protocol' (Protokol) olmalıdır.",
      "B": "Yanlış: 'Test', 'Transport' ve 'Language' kelimelerinin tamamı hatalıdır.",
      "C": "Yanlış: 'Transport' değil 'Transfer' olmalıdır.",
      "D": "DOĞRU YANIT: HTTP'nin doğru açılımı 'Hyper Text Transfer Protocol'dür.",
      "E": "Yanlış: 'Hyper Test' yazıldığı için yanlıştır ('Hyper Text' olmalıdır)."
    }
  },
  {
    "id": 8016,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "16. Yönlendirici (Router)",
    "question": "\"..., büyük ve değişik protokollere sahip bilgisayar ağlarını birleştirir, ağ üzerindeki tüm bilgisayarların adreslerini bilir ve buna göre kendilerine gelen paketi en uygun şekilde hedefe yollar.\" Cümlede boş bırakılan yere getirilebilecek en iyi ifade hangisidir?",
    "code": null,
    "options": {
      "A": "Alan Adı",
      "B": "İç Geçit",
      "C": "Dış Geçit",
      "D": "Host",
      "E": "Yönlendirici"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: Yönlendirici (Router - E). Ağlar arası trafik polisi görevi görerek gelen veri paketlerinin IP adreslerine bakıp en uygun rotadan hedefe ileten ağ cihazı Yönlendiricidir.",
    "explanations": {
      "A": "Yanlış: Alan Adı (Domain Name), IP adreslerinin insanlar tarafından kolay hatırlanmasını sağlayan web adres ismidir.",
      "B": "Yanlış: İç Geçit (Interior Gateway), aynı otonom sistem içindeki yönlendirme protokolü kavramıdır.",
      "C": "Yanlış: Dış Geçit (Exterior Gateway), farklı otonom sistemler arası yönlendirme protokolü kavramıdır.",
      "D": "Yanlış: Host, ağa bağlı olan her bir uç bilgisayarın/sunucunun kendisidir; paketleri yönlendiren ara cihaz değildir.",
      "E": "DOĞRU YANIT: Yönlendirici (Router), ağları birleştirir ve gelen paketleri adreslerine göre en uygun yoldan hedefe yollar."
    }
  },
  {
    "id": 8017,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "17. İlk İnternet Telefon Teknolojisi",
    "question": "İlk İnternet telefon teknolojisinin kullanılmaya başlandığı yıl hangisidir?",
    "code": null,
    "options": {
      "A": "1996",
      "B": "1997",
      "C": "1998",
      "D": "1999",
      "E": "2000"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: 1996 (A). BTS321 ders notlarında İnternetin Tarihsel Gelişimi kronolojisinde 'İlk İnternet telefon teknolojisi 1996 yılında kullanılmaya başlanmıştır' bilgisi yer almaktadır.",
    "explanations": {
      "A": "DOĞRU YANIT: İlk İnternet telefon (VoIP) teknolojisi 1996 yılında kullanılmaya başlanmıştır.",
      "B": "Yanlış: 1997 yılı değil, ders notlarındaki resmi tarihsel kronolojiye göre 1996 yılıdır.",
      "C": "Yanlış: 1998 yılında internet üzerinden ticari faaliyetler hız kazanmıştır ancak ilk internet telefonu 1996'dadır.",
      "D": "Yanlış: 1999 yılı çeldirici seçenektir.",
      "E": "Yanlış: 2000 yılı çeldirici seçenektir."
    }
  },
  {
    "id": 8018,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "18. E-Ticaretin Yöneticilere Yararları",
    "question": "Aşağıdakilerden hangisi e-ticaretin yöneticilere yararları arasında yer almaz?",
    "code": null,
    "options": {
      "A": "Elektronikleşme",
      "B": "Hareketlilik",
      "C": "Yönetsel kararlar için bilgiye hızlı erişim",
      "D": "Yaşam standardının yükselmesi",
      "E": "Çalışma grupları oluşturma imkânı"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: Yaşam standardının yükselmesi (D). Yaşam standardının yükselmesi e-ticaretin 'yöneticilere' özel bir yararı değil, tüm 'TOPLUMA' sağladığı toplumsal yararlar (Hafta-2) arasındadır.",
    "explanations": {
      "A": "Yanlış (Yöneticilere yararıdır): Yönetsel süreçlerin elektronikleşmesi yöneticilere hız ve denetim kolaylığı sağlar.",
      "B": "Yanlış (Yöneticilere yararıdır): Yöneticilere ofis dışından da işleri yönetebilme (hareketlilik/mobilite) olanağı tanır.",
      "C": "Yanlış (Yöneticilere yararıdır): Yönetsel kararlar için gerekli rapor ve bilgilere anında erişim sağlar.",
      "D": "DOĞRU YANIT: Yaşam standardının yükselmesi yöneticilere özgü değil, e-ticaretin 'toplumsal yararları' arasındadır.",
      "E": "Yanlış (Yöneticilere yararıdır): Yöneticilerin farklı yerlerdeki çalışanlarla sanal çalışma grupları oluşturmasına imkân verir."
    }
  },
  {
    "id": 8019,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "19. E-Ticaretin Satıcıya Dezavantajları",
    "question": "Aşağıdakilerden hangisi e-ticaretin satıcı açısından dezavantajlarından biri değildir?",
    "code": null,
    "options": {
      "A": "Müşteri devamlılığını sağlamak",
      "B": "Sunulan tekliflerin sık sık değiştirilmesi",
      "C": "Piyasada iyi bir izlenim bırakma gerekliliği",
      "D": "Durumsal olarak farklı fiyat ve teklif verme zorluğu",
      "E": "Ürünler arasından seçim yapma zorluğu"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: Ürünler arasından seçim yapma zorluğu (E). İnternetteki binlerce ürün ve bilgi yoğunluğu karşısında seçim yapma zorluğu yaşamak SATICININ değil, ALICININ (tüketicinin) yaşadığı bir dezavantajdır.",
    "explanations": {
      "A": "Yanlış (Satıcı dezavantajıdır): Rakip sitelere bir tıkla geçilebildiği için müşteri sadakati/devamlılığı sağlamak satıcı için zordur.",
      "B": "Yanlış (Satıcı dezavantajıdır): Dinamik rekabet yüzünden teklif ve kampanyaları sürekli güncelleme zorunluluğu satıcı dezavantajıdır.",
      "C": "Yanlış (Satıcı dezavantajıdır): Dijital ortamda marka imajı ve iyi izlenim bırakma baskısı satıcı açısından bir zorluktur.",
      "D": "Yanlış (Satıcı dezavantajıdır): Web sitesinde sabit fiyatlar göründüğünden müşteriye göre durumsal pazarlık/fiyat verme zorluğu satıcıya aittir.",
      "E": "DOĞRU YANIT: Ürünler arasından seçim yapma zorluğu (karar felci) satıcının değil, ALICININ (müşterinin) dezavantajıdır."
    }
  },
  {
    "id": 8020,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "20. E-Ticaretin Ekonomik Hayata Etkileri",
    "question": "Aşağıdakilerden hangisi e-ticaretin ekonomik hayatta etkilediği faaliyetler arasında yer almaz?",
    "code": null,
    "options": {
      "A": "Pazarlama",
      "B": "Finansman ve sigorta",
      "C": "Tedarik",
      "D": "Ticari işlemler",
      "E": "Örgütsel iletişim"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: Örgütsel iletişim (E). Pazarlama, finansman/sigorta, tedarik ve ticari işlemler doğrudan ekonomik hayattaki ticari faaliyetlerdir. Örgütsel iletişim ise ekonomik faaliyet değil, işletme içi yönetsel/örgütsel bir süreçtir.",
    "explanations": {
      "A": "Yanlış (Ekonomik faaliyettir): Pazarlama ve reklamcılık e-ticaretin doğrudan dönüştürdüğü ekonomik faaliyetlerdendir.",
      "B": "Yanlış (Ekonomik faaliyettir): Finansman, bankacılık ve sigorta işlemleri ekonomik faaliyetler arasında yer alır.",
      "C": "Yanlış (Ekonomik faaliyettir): Tedarik ve lojistik faaliyetleri ekonomik hayatın temel halkalarındandır.",
      "D": "Yanlış (Ekonomik faaliyettir): Sipariş, alım-satım ve ödeme gibi ticari işlemler doğrudan ekonomik faaliyettir.",
      "E": "DOĞRU YANIT: Örgütsel iletişim, makro ekonomik bir ticari faaliyet değil, kurum içi yönetsel bir iletişim sürecidir."
    }
  },
  {
    "id": 8021,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "21. E-Ticaretin Örgütlere Yararları",
    "question": "Aşağıdakilerden hangisi e-ticaretin örgütlere yararları arasında yer almaz?",
    "code": null,
    "options": {
      "A": "Yer sınırsızlığı ve kitlesel erişim olanağı",
      "B": "Rekabeti zorlaştırması",
      "C": "Maliyet azalımı",
      "D": "İş süreçlerinin reorganizasyonu",
      "E": "Rekabetin yaygınlaşması"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: Rekabeti zorlaştırması (B). Rekabetin zorlaşması bir işletme (örgüt) için 'yarar' (avantaj) değil, katlanılması gereken bir zorluk/tehdittir.",
    "explanations": {
      "A": "Yanlış (Örgütlere yararıdır): Fiziksel mağaza sınırı olmadan küresel pazara erişim olanağı sağlar.",
      "B": "DOĞRU YANIT: Rekabeti zorlaştırması örgütler için bir yarar değil, olumsuz bir baskı/dezavantajdır.",
      "C": "Yanlış (Örgütlere yararıdır): İşlem, stok, kırtasiye ve dağıtım maliyetlerinde önemli azalım sağlar.",
      "D": "Yanlış (Örgütlere yararıdır): İş süreçlerinin yeniden yapılandırılarak (reorganizasyon) verimliliğin artırılmasını sağlar.",
      "E": "Yanlış (Örgütlere yararıdır): Küçük ve orta ölçekli işletmelerin de pazara girmesiyle rekabetin yaygınlaşmasını sağlar."
    }
  },
  {
    "id": 8022,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "22. EDI'nin Dezavantajları",
    "question": "Aşağıdakilerden hangisi EDI'nin dezavantajlarından biri değildir?",
    "code": null,
    "options": {
      "A": "Yüksek maliyet",
      "B": "Sınırlı erişim",
      "C": "Yaygın kullanım",
      "D": "Kısmi çözümler sunması",
      "E": "Kapalı dünya"
    },
    "answer": "C",
    "explanation": "Doğru Cevap: Yaygın kullanım (C). EDI (Elektronik Veri Değişimi) kurulumu çok pahalı, katı standartlı ve kapalı bir ağ yapısı gerektirdiğinden KOBİ'ler tarafından yaygın kullanılamaz. Dolayısıyla 'yaygın kullanım' EDI'nin bir dezavantajı değildir.",
    "explanations": {
      "A": "Yanlış (EDI dezavantajıdır): Özel ağ (VAN) ve yazılım yatırımı gerektirdiği için kurulum/işletim maliyeti yüksektir.",
      "B": "Yanlış (EDI dezavantajıdır): Sadece sisteme dahil olan anlaşmalı ticari ortaklar arasında sınırlı erişim sunar.",
      "C": "DOĞRU YANIT: Yaygın kullanım bir dezavantaj değildir; kaldı ki EDI yüksek maliyeti nedeniyle yaygın kullanıma sahip değildir.",
      "D": "Yanlış (EDI dezavantajıdır): Süreçlerin tamamını değil yalnızca standartlaştırılmış belge değişimini kapsayan kısmi çözümler sunar.",
      "E": "Yanlış (EDI dezavantajıdır): Dışarıya kapalı, esnek olmayan bir 'kapalı dünya' yapısına sahiptir."
    }
  },
  {
    "id": 8023,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "23. E-Ticaretin Teknik Dezavantajları",
    "question": "Aşağıdakilerden hangisi e-ticaretin teknik dezavantajları arasında yer almaz?",
    "code": null,
    "options": {
      "A": "Karşılıklı güven sorunu",
      "B": "Güvenlik",
      "C": "Bant genişliğinin sınırlı olması",
      "D": "Özel web sunucuları gereksinimi",
      "E": "Yazılım ve donanım uyumsuzluğu"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: Karşılıklı güven sorunu (A). Karşılıklı güven sorunu donanımsal veya yazılımsal bir 'teknik' sorun değil; alıcı ve satıcı arasındaki psikolojik, sosyal ve hukuki (teknik olmayan) bir dezavantajdır.",
    "explanations": {
      "A": "DOĞRU YANIT: Karşılıklı güven sorunu teknik bir dezavantaj değil, sosyal/psikolojik (teknik olmayan) bir dezavantajdır.",
      "B": "Yanlış (Teknik dezavantajdır): Sistem güvenliği, şifreleme ve siber saldırı açıkları teknik dezavantajlar arasındadır.",
      "C": "Yanlış (Teknik dezavantajdır): Telekomünikasyon altyapısı ve bant genişliği yetersizliği doğrudan teknik bir sorundur.",
      "D": "Yanlış (Teknik dezavantajdır): Yüksek trafikli işlemler için özel web sunucuları gereksinimi teknik bir unsurdur.",
      "E": "Yanlış (Teknik dezavantajdır): Hızla değişen yazılım/protokollerle mevcut donanımların uyumsuzluğu teknik dezavantajdır."
    }
  },
  {
    "id": 8024,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "24. 5G Teknolojisinin Yaygınlaşma Dönemi",
    "question": "Dünyada 5G teknolojilerinin hangi yıllarda yaygınlık olarak zirve yapması beklenmektedir?",
    "code": null,
    "options": {
      "A": "2020'li yıllarda",
      "B": "2030'lu yıllarda",
      "C": "2040'lı yıllarda",
      "D": "2050'li yıllarda",
      "E": "2060'lı yıllarda"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: 2020'li yıllarda (A). Ders notlarında (Hafta-5 5G bölümü) 2020'li yıllarda yaygınlaşarak zirve yapmasının beklendiği ifade edilmektedir (Not: Sınıf içi Forms görüntüsünde imleç 2040'lı yıllar üzerinde de görüntülenmiştir; ancak 5G'nin küresel yayılım dönemi 2020'li yıllardır).",
    "explanations": {
      "A": "DOĞRU YANIT: 5G teknolojilerinin 2020'li yıllarda dünya genelinde yaygınlaşarak zirve yapması beklenmektedir.",
      "B": "Yanlış: 2030'lu yıllar 6G teknolojisinin ticarileşme ve yaygınlaşma dönemi olarak öngörülmektedir.",
      "C": "Yanlış: 2040'lı yıllar 5G için çok geç bir dönemdir (Sınıf fotoğrafında işaretli görünse de teknik ve ders notu karşılığı 2020'li yıllardır).",
      "D": "Yanlış: 2050'li yıllar çeldirici seçenektir.",
      "E": "Yanlış: 2060'lı yıllar çeldirici seçenektir."
    }
  },
  {
    "id": 8025,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "25. E-Ticaretin Tüketicilere Yararları",
    "question": "Aşağıdakilerden hangisi e-ticaretin tüketicilere yararları arasında yer almaz?",
    "code": null,
    "options": {
      "A": "Kesintisiz hizmet alma",
      "B": "Yer bağımsızlığı",
      "C": "Etkileşimli tedarik zinciri yönetimi",
      "D": "Seçim yapma olanağı",
      "E": "Sanal açık artırma katılımı"
    },
    "answer": "C",
    "explanation": "Doğru Cevap: Etkileşimli tedarik zinciri yönetimi (C). Tedarik zinciri yönetimi bireysel tüketicinin (müşterinin) değil, mal üreten ve satan ÖRGÜTLERİN (işletmelerin) kendi aralarında (B2B) elde ettiği örgütsel bir yarardır.",
    "explanations": {
      "A": "Yanlış (Tüketiciye yararıdır): Tüketiciler 7 gün 24 saat kesintisiz alışveriş hizmeti alabilir.",
      "B": "Yanlış (Tüketiciye yararıdır): Tüketiciler evlerinden veya istedikleri her yerden (yer bağımsız) alışveriş yapabilir.",
      "C": "DOĞRU YANIT: Etkileşimli tedarik zinciri yönetimi tüketicilere değil, ÖRGÜTLERE (firmalara) sağlanan bir yarardır.",
      "D": "Yanlış (Tüketiciye yararıdır): Tüketicilere çok sayıda ürün ve satıcı arasından karşılaştırmalı seçim yapma olanağı sunar.",
      "E": "Yanlış (Tüketiciye yararıdır): Tüketicilerin sanal açık artırmalara katılarak uygun fiyatla ürün almasını sağlar."
    }
  },
  {
    "id": 8026,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "26. E-Ticaretin Toplumsal Yararları",
    "question": "Aşağıdakilerden hangisi e-ticaretin toplumsal yararları arasında yer almaz?",
    "code": null,
    "options": {
      "A": "Trafik yoğunluğu ve hava kirliliğinin azalmasına katkı",
      "B": "Yaşam standardının yükselmesi",
      "C": "Etkileşimli stok yönetimi",
      "D": "Fiziksel olarak ulaşılması mümkün olmayan mal ve hizmetlere erişim",
      "E": "Kamu hizmetlerinin ulaştırılması"
    },
    "answer": "C",
    "explanation": "Doğru Cevap: Etkileşimli stok yönetimi (C). Etkileşimli stok yönetimi toplumsal bir yarar değil, işletmelerin maliyetlerini düşüren ÖRGÜTSEL bir yarardır (Hafta-2 Konu Özeti).",
    "explanations": {
      "A": "Yanlış (Toplumsal yarardır): İnsanların alışveriş için trafiğe çıkmaması hava kirliliği ve trafik yoğunluğunu azaltır.",
      "B": "Yanlış (Toplumsal yarardır): Daha ucuz ürünlere kolay erişim toplumun genel yaşam standardını yükseltir.",
      "C": "DOĞRU YANIT: Etkileşimli stok yönetimi topluma değil, işletmelere (örgütlere) sağlanan örgütsel bir yarardır.",
      "D": "Yanlış (Toplumsal yarardır): Uzak bölgelerdeki insanların fiziksel olarak ulaşamadığı ürün/eğitim/sağlık hizmetlerine erişimini sağlar.",
      "E": "Yanlış (Toplumsal yarardır): E-devlet uygulamalarıyla sağlık, eğitim ve vergi gibi kamu hizmetlerinin topluma etkin ulaştırılmasını sağlar."
    }
  },
  {
    "id": 8027,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "27. Dünyada E-Ticaret Pazar Payı (2018)",
    "question": "2018 yılı verilerine göre dünyada e-ticaret pazar payı en yüksek olan ülke hangisidir?",
    "code": null,
    "options": {
      "A": "Çin",
      "B": "Amerika Birleşik Devletleri",
      "C": "Birleşik Krallık",
      "D": "Almanya",
      "E": "Hindistan"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: Çin (A). BTS321 Hafta-2 ders notlarındaki 2018 yılı küresel e-ticaret verilerine göre Çin, yaklaşık 636 milyar dolarlık hacim ve en yüksek pazar payı ile dünyada 1. sıradadır (2. sırada ABD, 3. sırada Birleşik Krallık yer alır).",
    "explanations": {
      "A": "DOĞRU YANIT: 2018 yılı verilerine göre dünyada e-ticaret pazar payı en yüksek olan ülke Çin'dir.",
      "B": "Yanlış: Amerika Birleşik Devletleri (ABD), Çin'in ardından dünyada 2. sırada yer almaktadır.",
      "C": "Yanlış: Birleşik Krallık, Avrupa'da lider olmakla birlikte dünya sıralamasında Çin ve ABD'nin gerisindedir.",
      "D": "Yanlış: Almanya, Avrupa'nın önde gelen pazarlarından biridir ancak dünyada 1. sırada değildir.",
      "E": "Yanlış: Hindistan hızla büyüyen bir pazardır ancak 2018 verilerinde pazar payı lideri Çin'dir."
    }
  },
  {
    "id": 8028,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "28. EDI'nin Faydaları",
    "question": "Aşağıdakilerden hangisi EDI'nin faydaları arasında değildir?",
    "code": null,
    "options": {
      "A": "Hızlı ve doğru veri akışı",
      "B": "Daha etkin denetim yöntemlerinin geliştirilmesi",
      "C": "Üretkenliğin ve karlılığın artması",
      "D": "Bilgi yoğunluğu",
      "E": "İş ilişkilerinin geliştirilmesi"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: Bilgi yoğunluğu (D). EDI (Elektronik Veri Değişimi), kağıt evrak karmaşasını ve gereksiz bilgi yığınını azaltarak standart ve yalın veri akışı sağlamak için kullanılır; 'bilgi yoğunluğu' bir fayda değil, kaçınılan bir sorundur.",
    "explanations": {
      "A": "Yanlış (EDI faydasıdır): İnsan müdahalesi olmadan bilgisayarlar arası hızlı ve hatasız veri akışı sağlar.",
      "B": "Yanlış (EDI faydasıdır): Kayıtların elektronik izlenebilirliği sayesinde daha etkin denetim yöntemleri geliştirilmesini sağlar.",
      "C": "Yanlış (EDI faydasıdır): Zaman ve maliyet tasarrufu sağlayarak işletmenin üretkenliğini ve karlılığını artırır.",
      "D": "DOĞRU YANIT: Bilgi yoğunluğu EDI'nin bir faydası değildir; EDI aksine evrak ve bilgi karmaşasını ortadan kaldırır.",
      "E": "Yanlış (EDI faydasıdır): Tedarikçi ve alıcı firmalar arasındaki ticari iş ilişkilerinin geliştirilmesini sağlar."
    }
  },
  {
    "id": 8029,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "29. Smart TV (Akıllı TV)",
    "question": "Farklı bir televizyon teknolojisi olmayıp sahip olduğu işletim sistemi sayesinde ekstra özelliklerin kullanılabilmesine olanak sağlayan görüntüleme sistemine ne ad verilir?",
    "code": null,
    "options": {
      "A": "Analog TV",
      "B": "Dijital TV",
      "C": "Sayısal TV",
      "D": "Smart TV",
      "E": "İnteraktif TV"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: Smart TV (D). Smart TV (Akıllı TV), başlı başına farklı bir yayıncılık/ekran teknolojisi olmayıp, içerisine entegre edilen işletim sistemi (Android TV, Tizen, webOS vb.) sayesinde internete bağlanma ve uygulama çalıştırma gibi ekstra özellikler sunan sistemdir.",
    "explanations": {
      "A": "Yanlış: Analog TV, radyo dalgalarıyla tek yönlü ses ve görüntü ileten geleneksel televizyon yayıncılığıdır.",
      "B": "Yanlış: Dijital TV, yayın sinyallerinin 0 ve 1'lerle (sayısal) kodlanarak iletildiği yayın teknolojisidir.",
      "C": "Yanlış: Sayısal TV, Dijital TV'nin Türkçe karşılığıdır; yayın iletim teknolojisini ifade eder.",
      "D": "DOĞRU YANIT: Smart TV, sahip olduğu işletim sistemi sayesinde ekstra uygulama ve internet özelliklerinin kullanılmasını sağlar.",
      "E": "Yanlış: İnteraktif TV, izleyicinin yayınla etkileşime geçebildiği yayıncılık kavramıdır; işletim sistemi tanımı doğrudan Smart TV'ye aittir."
    }
  },
  {
    "id": 8030,
    "course": "eticaret_vize",
    "week": 1,
    "week_title": "Bölüm 1: 30 Çıkmış Test Sorusu",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - 30 Çıkmış Test Sorusu",
    "category": "30. İnternetin Temeli (ARPANET)",
    "question": "İnternet'in temelini oluşturan ilk bilgisayar ağı aşağıdakilerden hangisidir?",
    "code": null,
    "options": {
      "A": "BBN",
      "B": "NSFNET",
      "C": "DARPA",
      "D": "ARPANET",
      "E": "NWG"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: ARPANET (D). 1969 yılında ABD Savunma Bakanlığı bünyesinde paket anahtarlama teknolojisiyle kurulan ve günümüz İnternet'inin temelini (atasını) oluşturan ilk bilgisayar ağı ARPANET'tir.",
    "explanations": {
      "A": "Yanlış: BBN, ARPANET için IMP (Interface Message Processor) yönlendirici donanımlarını geliştiren teknoloji şirketidir.",
      "B": "Yanlış: NSFNET, 1980'lerde Ulusal Bilim Vakfı tarafından ARPANET sonrasında üniversiteleri bağlamak için kurulan omurga ağdır.",
      "C": "Yanlış: DARPA, ağın kendisi değil, projeyi finanse eden ABD Savunma Bakanlığı İleri Araştırma Projeleri Ajansıdır (kurumdur).",
      "D": "DOĞRU YANIT: ARPANET, 1969'da kurulan ve İnternet'in temelini oluşturan ilk paket anahtarlamalı bilgisayar ağıdır.",
      "E": "Yanlış: NWG (Network Working Group), protokol standartlarını (RFC) hazırlayan çalışma grubudur."
    }
  },
  {
    "id": 8031,
    "course": "eticaret_vize",
    "week": 2,
    "week_title": "Bölüm 2: Görsellerdeki Ek Sınav Soruları",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - Görsellerdeki Ek Sorular",
    "category": "Ek Soru 1: Bant Genişliği (Hafta-2)",
    "question": "\"Bant genişliği\" kavramı aşağıdakilerden hangisiyle ilişkilidir?",
    "code": null,
    "options": {
      "A": "Pazarlama",
      "B": "Hız",
      "C": "Güvenlik",
      "D": "Stok yönetimi",
      "E": "Kredi kartı"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: Hız (B). Bant genişliği (Bandwidth), bir iletişim kanalının birim zamanda (saniyede) taşıyabileceği maksimum veri miktarını (bps, Mbps, Gbps) yani veri iletim HIZINI ifade eder.",
    "explanations": {
      "A": "Yanlış: Pazarlama ticari bir faaliyettir, ağ iletişim kapasitesi olan bant genişliği ile ilişkili değildir.",
      "B": "DOĞRU YANIT: Bant genişliği (Bandwidth), internet ve ağ bağlantılarındaki veri aktarım hızı ve kapasitesiyle ilişkilidir.",
      "C": "Yanlış: Güvenlik şifreleme ve erişim denetimiyle ilgilidir.",
      "D": "Yanlış: Stok yönetimi lojistik ve tedarik zinciri kavramıdır.",
      "E": "Yanlış: Kredi kartı elektronik ödeme aracıdır."
    }
  },
  {
    "id": 8032,
    "course": "eticaret_vize",
    "week": 2,
    "week_title": "Bölüm 2: Görsellerdeki Ek Sınav Soruları",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - Görsellerdeki Ek Sorular",
    "category": "Ek Soru 2: Tek Taraflı TV Yayınları (Hafta-3)",
    "question": "Aşağıdakilerden hangisi tek taraflı televizyon yayınları ile yapılabilen elektronik ticaret faaliyetleri arasında yer almaz?",
    "code": null,
    "options": {
      "A": "Reklam",
      "B": "Fatura ödeme",
      "C": "Tanıtım",
      "D": "Tele alış veriş",
      "E": "Bilgilendirme"
    },
    "answer": "B",
    "explanation": "Doğru Cevap: Fatura ödeme (B). Geleneksel tek yönlü televizyon yayınlarıyla mal/hizmet reklamı, tanıtımı, bilgilendirme ve ekrandaki telefon numarasını arayarak tele-alışveriş yapılabilir; ancak TV üzerinden doğrudan 'fatura ödeme' yapılabilmesi için çift yönlü (etkileşimli/dijital) yayın altyapısı gerekir.",
    "explanations": {
      "A": "Yanlış: Tek taraflı TV yayınlarında ürün ve hizmet reklamları yaygın olarak yapılır.",
      "B": "DOĞRU YANIT: Fatura ödeme işlemi çift yönlü veri iletişimi gerektirdiğinden tek taraflı TV yayınlarıyla doğrudan yapılamaz.",
      "C": "Yanlış: Ürünlerin görsel ve işitsel tanıtımı tek taraflı TV yayınlarıyla yapılabilir.",
      "D": "Yanlış: TV'de tanıtılan ürünün telefonla sipariş edildiği tele-alışveriş tek taraflı TV yayınlarıyla gerçekleştirilir.",
      "E": "Yanlış: Tüketicileri ürün/hizmet hakkında bilgilendirme tek taraflı TV yayınlarıyla yapılabilir."
    }
  },
  {
    "id": 8033,
    "course": "eticaret_vize",
    "week": 2,
    "week_title": "Bölüm 2: Görsellerdeki Ek Sınav Soruları",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - Görsellerdeki Ek Sorular",
    "category": "Ek Soru 3: Elektronik Veri Değişimi Tanımı (Hafta-3)",
    "question": "\"......................., ticaret yapan kurumlar arasında iş bilgilerinin ve dokümanlarının tüm taraflar tarafından kullanılabilecek şekilde elektronik iletişim araçlarıyla iletilmesini sağlayan bir araçtır.\"\nCümlede boş bırakılan yere gelecek en uygun ifade aşağıdakilerden hangisidir?",
    "code": null,
    "options": {
      "A": "Extranet",
      "B": "Televizyon",
      "C": "Sayısal (digital) televizyon",
      "D": "Smart TV",
      "E": "Elektronik veri değişimi"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: Elektronik veri değişimi (EDI - E). Ticaret yapan iki kurum (B2B) arasında sipariş formu, fatura, irsaliye gibi standart iş dokümanlarının elektronik iletişim araçlarıyla doğrudan bilgisayarlar arasında iletilmesini sağlayan araca Elektronik Veri Değişimi (EDI) denir.",
    "explanations": {
      "A": "Yanlış: Extranet, farklı yerlerdeki intranetleri internet/VPN üzerinden birbirine bağlayan ağ yapısıdır.",
      "B": "Yanlış: Televizyon görsel/işitsel yayın aracıdır, kurumlar arası doküman değişim standardı değildir.",
      "C": "Yanlış: Sayısal televizyon dijital TV yayın teknolojisidir.",
      "D": "Yanlış: Smart TV işletim sistemli televizyondur.",
      "E": "DOĞRU YANIT: Elektronik veri değişimi (EDI), ticaret yapan kurumlar arasında standart iş dokümanlarının elektronik iletimini sağlar."
    }
  },
  {
    "id": 8034,
    "course": "eticaret_vize",
    "week": 2,
    "week_title": "Bölüm 2: Görsellerdeki Ek Sınav Soruları",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - Görsellerdeki Ek Sorular",
    "category": "Ek Soru 4: Alan Adı Sistemi - DNS (Hafta-4)",
    "question": "İnternete bağlı bilgisayarlara ve bilgisayar sistemlerine hiyerarşik bir şekilde isimlerin verilmesini sağlayan sisteme ne ad verilir?",
    "code": null,
    "options": {
      "A": "Web isimlendirme sistemi",
      "B": "İnternet isimlendirme sistemi",
      "C": "Web adres sistemi",
      "D": "Alan adı sistemi",
      "E": "Hiyerarşik isimlendirme sistemi"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: Alan adı sistemi (DNS - Domain Name System - D). İnternete bağlı bilgisayarların IP adreslerinin insanlar tarafından kolayca hatırlanabilmesi için hiyerarşik bir yapıda (.com, .edu.tr vb.) isimlendirilmesini sağlayan sisteme Alan Adı Sistemi (DNS) denir.",
    "explanations": {
      "A": "Yanlış: Resmi teknik terim 'Web isimlendirme sistemi' değil 'Alan adı sistemi'dir (DNS).",
      "B": "Yanlış: Çeldirici seçenektir; doğru kavram Alan Adı Sistemi'dir.",
      "C": "Yanlış: Çeldirici seçenektir.",
      "D": "DOĞRU YANIT: Alan adı sistemi (DNS - Domain Name System), bilgisayarlara hiyerarşik isimler verilmesini ve IP'ye çevrilmesini sağlar.",
      "E": "Yanlış: Soru kökündeki 'hiyerarşik' kelimesinden türetilmiş çeldirici seçenektir."
    }
  },
  {
    "id": 8035,
    "course": "eticaret_vize",
    "week": 2,
    "week_title": "Bölüm 2: Görsellerdeki Ek Sınav Soruları",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - Görsellerdeki Ek Sorular",
    "category": "Ek Soru 5: IP Adres Sınıfları (Hafta-4)",
    "question": "Aşağıdaki ağ adreslerinden hangisi A sınıfı adresleme biçimine bir örnek teşkil eder?",
    "code": null,
    "options": {
      "A": "200.12.23.145",
      "B": "143.191.47.137",
      "C": "194.27.49.12",
      "D": "100.191.224.136",
      "E": "224.254.1.177"
    },
    "answer": "D",
    "explanation": "Doğru Cevap: 100.191.224.136 (D). IPv4 adres sınıflarında ilk oktet (ilk sayı) aralığı: A Sınıfı: 1 – 126 (0-127), B Sınıfı: 128 – 191, C Sınıfı: 192 – 223, D Sınıfı: 224 – 239'dur. İlk sayısı 100 olan '100.191.224.136' adresi 1 ile 126 arasında olduğu için A sınıfı bir IP adresidir.",
    "explanations": {
      "A": "Yanlış: İlk okteti 200 (192-223 aralığında) olduğu için C sınıfı bir IP adresidir.",
      "B": "Yanlış: İlk okteti 143 (128-191 aralığında) olduğu için B sınıfı bir IP adresidir.",
      "C": "Yanlış: İlk okteti 194 (192-223 aralığında) olduğu için C sınıfı bir IP adresidir.",
      "D": "DOĞRU YANIT: İlk okteti 100 (1-126 aralığında) olduğu için A sınıfı adresleme biçimine örnektir.",
      "E": "Yanlış: İlk okteti 224 (224-239 aralığında) olduğu için D sınıfı (Multicast) bir IP adresidir."
    }
  },
  {
    "id": 8036,
    "course": "eticaret_vize",
    "week": 2,
    "week_title": "Bölüm 2: Görsellerdeki Ek Sınav Soruları",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - Görsellerdeki Ek Sorular",
    "category": "Ek Soru 6: İntranet Altyapı Bileşenleri (Hafta-4)",
    "question": "Aşağıdakilerden hangisi intranet kurmak için gerekli altyapı bileşenlerinden biri değildir?",
    "code": null,
    "options": {
      "A": "Web sunucuları",
      "B": "Web tarayıcılar",
      "C": "Veri tabanları",
      "D": "Firewall",
      "E": "Hosting"
    },
    "answer": "E",
    "explanation": "Doğru Cevap: Hosting (E). Hafta-4 ders özetine göre bir İntranet kurmak için gereken bileşenler: TCP/IP ağı, Web sunucuları, Web tarayıcılar, Veri tabanları ve Güvenlik duvarı (Firewall) sistemidir. Dışarıdan kiralanan ticari web barındırma (Hosting) hizmeti kurum içi özel ağ olan İntranet için gerekli değildir.",
    "explanations": {
      "A": "Yanlış (Gereklidir): Kurum içi web sayfalarını ve uygulamaları yayınlamak için Web sunucusu gereklidir.",
      "B": "Yanlış (Gereklidir): Çalışanların intranet sayfalarını görüntülemesi için Web tarayıcılar gereklidir.",
      "C": "Yanlış (Gereklidir): Kurumsal verilerin saklanması ve işlenmesi için Veri tabanları gereklidir.",
      "D": "Yanlış (Gereklidir): Kurum içi özel ağı dış dünyadan korumak için Firewall (Güvenlik Duvarı) şarttır.",
      "E": "DOĞRU YANIT: Hosting (dış web barındırma hizmeti), kurum içi yerel sunucularda çalışan İntranet bileşenlerinden biri değildir."
    }
  },
  {
    "id": 8037,
    "course": "eticaret_vize",
    "week": 2,
    "week_title": "Bölüm 2: Görsellerdeki Ek Sınav Soruları",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - Görsellerdeki Ek Sorular",
    "category": "Ek Soru 7: Extranet Özellikleri (Hafta-4)",
    "question": "Extranetler ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
    "code": null,
    "options": {
      "A": "Farklı yerlerdeki İntranetleri TCP/IP protokolleri ile bağlayan ağlardır",
      "B": "VPN (Virtually Private Network-Sanal Özel Ağ) olarak isimlendirilen internet Tünel Teknolojisi kullanır",
      "C": "Bir firmanın kendi içindeki interneti olarak hizmet verir",
      "D": "Çalışma grupları arasındaki iş birliğini daha verimli hâle getirir",
      "E": "Etkin pazarlama, satış ve müşteri desteği sağlar"
    },
    "answer": "C",
    "explanation": "Doğru Cevap: Bir firmanın kendi içindeki interneti olarak hizmet verir (C). 'Bir firmanın kendi içindeki interneti' tanımı Extranet'e değil, İNTRANET'e aittir. Extranet ise işletmenin tedarikçileri, bayileri, iş ortakları ve müşterileriyle güvenli bağlantı kurduğu dışa uzanan özel iş ağıdır.",
    "explanations": {
      "A": "Yanlış (Extranet için doğrudur): Farklı coğrafi yerlerdeki İntranetleri TCP/IP ile birbirine bağlar.",
      "B": "Yanlış (Extranet için doğrudur): Güvenli veri iletimi için VPN (Sanal Özel Ağ / Tünel Teknolojisi) kullanır.",
      "C": "DOĞRU YANIT (Yanlış olan ifadedir): Sadece bir firmanın kendi içindeki interneti olarak hizmet veren ağ Extranet değil, İntranet'tir.",
      "D": "Yanlış (Extranet için doğrudur): İş ortakları ve çalışma grupları arasındaki iş birliğini verimli hale getirir.",
      "E": "Yanlış (Extranet için doğrudur): Bayi ve müşterilerle etkin pazarlama, satış ve destek iletişimi sağlar."
    }
  },
  {
    "id": 8038,
    "course": "eticaret_vize",
    "week": 2,
    "week_title": "Bölüm 2: Görsellerdeki Ek Sınav Soruları",
    "qType": "test",
    "difficulty": "Çıkmış Soru",
    "test_type": "E-Ticaret - Görsellerdeki Ek Sorular",
    "category": "Ek Soru 8: Kısa Mesafeli Kablosuz İletişim (Hafta-5)",
    "question": "Taşınabilir bilgisayarlar, kişisel bilgisayarlar, el bilgisayarları, mobil telefonlar, çevre birimleri ve diğer aygıtların birbiriyle etkileşimine olanak sağlayan kısa mesafeli kablosuz iletişim standardına verilen isim aşağıdakilerden hangisidir?",
    "code": null,
    "options": {
      "A": "Bluetooth",
      "B": "Wi-Fi",
      "C": "i-Mode",
      "D": "Mobil web",
      "E": "WAP"
    },
    "answer": "A",
    "explanation": "Doğru Cevap: Bluetooth (A). Hafta-5 ders slaytlarında (Slayt 22) birebir geçen bu tanım, 10–100 metre kısa mesafede bilgisayarlar, mobil telefonlar ve çevre birimlerinin (kulaklık, fare, yazıcı vb.) kablosuz etkileşimini sağlayan WPAN standardı Bluetooth'a aittir.",
    "explanations": {
      "A": "DOĞRU YANIT: Cihazların ve çevre birimlerinin kısa mesafeli (WPAN) kablosuz etkileşimini sağlayan standart Bluetooth'tur.",
      "B": "Yanlış: Wi-Fi, cihaz-çevre birimi eşleşmesinden ziyade kablosuz yerel alan ağı (WLAN) ve internet erişimi standardıdır.",
      "C": "Yanlış: i-Mode, Japonya'da NTT DoCoMo tarafından geliştirilen mobil internet web servisidir.",
      "D": "Yanlış: Mobil web, mobil cihaz tarayıcıları üzerinden erişilen web siteleri bütünüdür.",
      "E": "Yanlış: WAP (Wireless Application Protocol), mobil cihazların internete erişmesi için geliştirilmiş uygulama protokolüdür."
    }
  }
];
