# 💻 İşletim Sistemleri Vize Sınavı Test Portalı

Bu klasör, **myrza77.github.io** web sitesi için hazırlanan modern, mobil uyumlu ve etkileşimli **İşletim Sistemleri Test Portalı** bileşenlerini içerir.

---

## 📁 Oluşturulan Dosyalar

1. **`isletim.html`**:
   - Sitenizin mevcut renk paletine (Tailwind / Outfit Font / Dark-Light Mode) birebir uyumlu ana sınav arayüzü.
   - **İki Farklı Çalışma Modu:**
     - **Tüm Sorular (Klasik Liste Modu):** 20 soruyu alt alta çözme, en alttaki **"Testi Bitir / Sonucu Gör"** butonu ile tek seferde puanlama.
     - **Tek Soru (Kart / Flashcard Modu):** Soruları tek tek çözme, önceki/sonraki butonu ve soru atlama menüsü.
   - **Gelişmiş Değerlendirme:**
     - Toplam Doğru, Yanlış, Boş sayısı ve Başarı Yüzdesi (%) hesaplanır.
     - Yanlış işaretlenen sorularda, kullanıcının seçtiği yanlış şık **kırmızı**, doğru cevap ise **yeşil** renkle belirginleşir.
     - Her sorunun altında hesaplama adımlarını ve mantığını anlatan **Detaylı Çözüm & Açıklama kutusu** açılır.
     - Soru 10 ve 19'daki işlem tabloları monospaced ve responsive olarak formatlanmıştır.

2. **`questions.js`**:
   - 20 sorunun şıklarını, doğru cevaplarını ve detaylı açıklamalarını içeren modüler JavaScript veri kaynağı.
   - `file://` protokolüyle (çift tıklayarak doğrudan tarayıcıda açıldığında) CORS engeline takılmadan %100 çevrimdışı (offline) çalışır.

3. **`questions.json`**:
   - REST API veya standart JSON yüklemeleri için temiz JSON veri kümesi.

4. **`index.html`**:
   - Klasör doğrudan bir web sunucusunda veya GitHub Pages alt klasöründe açıldığında `isletim.html`'e otomatik yönlendirme sağlar.

---

## 🚀 Web Sitenize (myrza77.github.io) Entegrasyon Rehberi

Yeni sayfayı mevcut sitenize entegre etmek için aşağıdaki 2 kolay yöntemden birini seçebilirsiniz:

### Yöntem 1: Doğrudan Kök Dizine Ekleme (Önerilen)
1. `isletim.html` ve `questions.js` dosyalarını yerel **`myrza77.github.io`** proje dizininizin kök klasörüne kopyalayın.
2. Ana sayfanızdaki (`index.html` veya ana menü) navigasyon çubuğuna şu bağlantıyı ekleyin:
   ```html
   <a href="./isletim.html" class="px-3 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground">
     İşletim Sistemleri
   </a>
   ```
3. Ana panonuzdaki sınav kartlarının arasına aşağıdaki vitrin kartını ekleyebilirsiniz:
   ```html
   <!-- İşletim Sistemleri Test Kartı -->
   <div class="border border-card-border bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
     <div class="space-y-2">
       <div class="flex items-center justify-between">
         <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
           Vize Testi
         </span>
         <span class="text-xs text-muted-foreground font-medium">20 Soru</span>
       </div>
       <h4 class="font-bold text-lg group-hover:text-indigo-500 transition-colors">
         💻 İşletim Sistemleri Sınavı
       </h4>
       <p class="text-sm text-muted-foreground">
         CPU planlama (FIFO, SRTF, SJF), kesintiler, sistem çağrıları, bellek hiyerarşisi ve işlem durumları.
       </p>
     </div>
     <a href="./isletim.html" class="btn-transition mt-5 w-full bg-secondary hover:bg-indigo-600 hover:text-white text-foreground font-semibold text-sm py-2.5 rounded-xl border border-card-border hover:border-transparent flex items-center justify-center space-x-2">
       <span>Sınavı Başlat</span>
       <span>→</span>
     </a>
   </div>
   ```

4. Terminalinizden repoyu gönderin:
   ```bash
   git add isletim.html questions.js questions.json
   git commit -m "feat: add Isletim Sistemleri exam portal"
   git push origin main
   ```
   Siteniz güncellendiğinde test sayfanız canlı olarak `https://myrza77.github.io/isletim.html` adresinde yayına girecektir.

---

### Yöntem 2: Alt Klasör Olarak Yayınlama
Eğer bu klasörü repoda bir alt dizin (`/isletim-sistemleri/`) olarak tutmak isterseniz:
- Klasörün içindeki `index.html` otomatik olarak `isletim.html`'i açar.
- Menünüzdeki linki `<a href="./isletim-sistemleri/">İşletim Sistemleri</a>` şeklinde vermeniz yeterlidir.
