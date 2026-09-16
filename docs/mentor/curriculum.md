# Mentor-AGENT — AI Destekli Ürün ve Mimari Rotası

## 10. Rotanın hedefi ve kullanımı

**Hedef:** Öğrencinin bir ürünü tanımlaması, mimarisini kurması, uygulamayı AI ile yönetmesi, kodu/kanıtı incelemesi ve güvenli biçimde teslim etmesi. Tek programda senior uzmanlığı, bütün araçları elle yazma veya geniş bilgisayar bilimi ustalığı hedeflenmez.

**Derinlik etiketleri:** K = karar ve doğrulama çekirdeği; U = AI ile uygulama; F = farkındalık; J = gerektiğinde öğren. Sınırlar `stack-and-learning-depth.md` bölüm 8'de tanımlıdır. F konuları toplam 5–10 dakikalık kısa tanıtımla kapanır; görev/quiz/lab/puan/geçiş kapısı yoktur. J konuları aktif ders değildir.

Faz numaraları mevcut not ve dosyalarla bağlantıyı korumak için **0–14** olarak tutulmuştur. Bunlar artık tek tek bitirilmesi gereken doğrusal ders blokları değildir. Aktif ürüne hizmet eden en küçük K/U parçaları seçilir; aşağıdaki rota kullanılır. Bir fazdaki tüm maddeleri tüketmek ilerleme koşulu değildir. Etiketsiz yeni alt konu varsayılan olarak J'dir.

### Ürün üzerinden ilerleme

| Aşama | Çalışan çıktı | Kullanılacak faz parçaları |
|---|---|---|
| 1 — Ürünü tarif et ve çalıştır | Kısa ürün brief'i, basit veri akışı, ilk AI görevi ve çalışan geliştirme ortamı | Faz 0; gereken Git/araç ve Faz 13 ortam bilgisi |
| 2 — İlk kullanıcı akışı | Aynı ürünün örnek veriyle çalışan bir ekranı/formu | Faz 1–5 içinden akışa gereken dil, UI ve server/client parçaları |
| 3 — Kalıcı ve yetkili işlem | Kullanıcının kendi verisini kaydetmesi/okuması | Faz 6–8; ilgili Faz 5 ve Faz 10 kontrolleri |
| 4 — Doğrula ve teslim et | Test edilmiş preview, migration/gözlem/geri dönüş yolu | Faz 9, 10 ve 13 |
| 5 — İkinci dilim ve değişiklik | İlk tasarımın yeni gereksinime uyarlanması; somut review ve karar kanıtı | Gereken önceki parçalar ve Faz 14 |
| Koşullu genişleme | Üründe gerçekten istenen AI özelliği veya ödeme | Yalnız ihtiyaç varsa Faz 11 veya 12 |

Test, güvenlik, erişilebilirlik ve teslim düşüncesi ilgili ilk davranıştan itibaren uygulanır; bu başlıkların faz numarası onları sona ertelemez. Faz 11 **ürüne AI özelliği eklemektir**; geliştirmede AI kullanmak Faz 0'dan itibaren açıktır.

Varsayılan örnek ürün mevcut rotadaki freelancer teklif ürünüdür; güncel kullanıcı hedefi farklıysa onu kullan. İlk dilim örneği: teklif taslağını oluşturma ve görüntüleme. Ödeme, AI içerik üretimi, public paylaşım ve dosya yükleme ilk dilimin zorunlu özellikleri değildir.

### 15 Eylül 2026 geçiş notu

Kullanıcı şu iki konuyu bitirdiğini bildirdi:

- CPU, bellek, disk, process, thread ve port ilişkisi.
- Process yaşam döngüsü, exit code ve signal.

**Durum: kullanıcı beyanıyla tamamlandı; yeni rotada F kapsamı kapalı.** Bu kayıt yeni test veya kod incelemesiyle doğrulanmış ustalık iddiası değildir; F konusunu kapatmak için böyle bir kanıt aranmaz. Yeni adlarla lifecycle/cleanup/worker labı, tekrar sınavı veya eksik ayrıntı listesi açma. Mevcut not ve deney dosyalarını koru.

Bu iki başlığın tamamlanması Faz 0'ın bütününün veya diğer geliştirme becerilerinin tamamlandığı anlamına gelmez. Sonraki adım ürünün tek kullanıcı akışı için **kapsam, kabul kriteri ve AI görevini** belirlemektir. Dil/Git/ortam açığı çıkarsa yalnız bu adımı engelleyen kısmı kısa çalış. Eski kapsam envanterinin kalan maddelerine otomatik devam etme.

### Faz 0 — Ürün, AI iş akışı ve gerekli ortam

**Çıktı:** Bir kullanıcı ihtiyacı için küçük brief, UI → server → veri taslağı ve çalıştırılabilir proje/görev.

- **K:** Kullanıcı, problem, kapsam dışı ve kabul kriteri; AI'a amaç/bağlam/kısıt/kanıt içeren görev verme; öğrenci ile AI'ın sorumluluğunu ayırma.
- **K:** Diff'te ne değiştiğini, hangi komutun çalıştığını ve sonucun neyi kanıtladığını görme; secret paylaşmama ve gereksiz erişim vermeme.
- **U:** Repo açma/çalıştırma; gereken `package.json` script'i, kurulum, basit branch/commit, log ve hata çıktısı toplama. AI komutları bulabilir/yazabilir.
- **F:** CPU/bellek/disk/process/thread/port; lifecycle/exit code/signal; path, shell, environment ve araçların genel rolü. İlk iki konu yukarıdaki geçiş notuyla kapalıdır.
- **J:** Ayrıntılı shell/metin işleme, process yönetimi, signal handler, işletim sistemi labları ve Git'in ileri komutları.

**AI işi:** Kurulum veya mevcut projeyi tanıma, iskelet, komutlar ve brief taslağı.
**Öğrenci kararı:** Hangi kullanıcı sonucunu hedeflediği, neyin kapsam dışı olduğu, tamamlanmayı nasıl kontrol edeceği.
**Yeterli kanıt:** Görev açık, proje için gerçek çalıştırma çıktısı var, öğrenci diff/çıktının amacını açıklıyor. Ayrı environment-checker CLI, 60–90 dakikalık seviye sınavı ve lifecycle labı gerekmez.

### Faz 1 — JavaScript kodunu okuma ve davranışı değerlendirme

**Çıktı:** Ürün verisi üzerinde küçük bir dönüşüm veya kullanıcı etkileşimi.

- **K:** Değer, değişken, fonksiyon, koşul, array/object ve null/undefined akışını okumak; ilgili iş kuralını kodda bulmak.
- **K:** Mutasyon/yan etki, modül sınırı, hata yolu ve `async/await` akışının sonuçlarını gerekli örnekte anlamak.
- **U:** Eşleme/filtreleme/sıralama, JSON, fetch ve standart Promise/hata kodu; doküman/AI yardımıyla küçük davranış değişikliği.
- **F:** Scope/closure yalnız callback/state hatasını anlamaya gerektiği kadar; event loop için bekleme ve blocking etkisi; büyük input maliyeti.
- **J:** Prototype ayrıntıları, özel coercion bilmeceleri, generator/metaprogramming, queue ordering ve algoritma serileri.

**AI işi:** Küçük implementasyon ve test taslağı.
**Öğrenci kararı:** Girdi/çıktı örneği, iş kuralı ve ilgili boş/hatalı veri davranışı.
**Yeterli kanıt:** Öğrenci ilgili akışı okuyabiliyor; bir örnek veya küçük değişiklikle doğru/yanlış davranışı ayırt ediyor. Bütün syntax'ı boş dosyadan yeniden yazmak gerekmez.

### Faz 2 — TypeScript sözleşmeleri ve gerekli Node.js kullanımı

**Çıktı:** Aynı ürün akışında tipli veri sözleşmesi ve dış veri sınırı.

- **K:** Tip ile çalışma anındaki doğrulama farkı; null/undefined, union/narrowing, `unknown`; `any`/assertion ile hatanın gizlenmesini fark etme.
- **K:** Ürün durumlarını ve girdi/çıktıyı modelleme; browser/server API ve secret sınırını ayırma.
- **U:** Interface/type, basit generic, config, package/script, lockfile ve SDK/IO kodu.
- **F:** Runtime/compiler/bundler görevleri; Node process ve event loop'un görünür etkisi.
- **J:** İleri conditional/mapped type egzersizleri, compiler internalleri, stream/backpressure, worker/child-process ve özel shutdown tasarımı.

**AI işi:** Tip ve config taslağı, type error analizi.
**Öğrenci kararı:** Hangi verinin dışarıdan geldiği, hangi durumun geçerli olduğu ve nerede doğrulanacağı.
**Yeterli kanıt:** Öğrenci önemli tip sözleşmesini okuyabiliyor, uygunsuz dış girdinin runtime'da reddedildiğini gösteriyor; type-check ilgili kod için çalışıyor. Node runtime dersi ayrı önkoşul olmaz.

### Faz 3 — Kullanıcı akışı, HTML/CSS ve React

**Çıktı:** Ürünün örnek veriyle çalışan bir ekranı.

- **K:** Kullanıcı akışı, component sorumluluğu, props/state sahipliği, liste anahtarı, form girdisi ve loading/empty/error davranışı.
- **K:** Semantik HTML, klavye/focus, label ve responsive kullanım; gereksiz effect veya yanlış state yerleşiminin görünür sonucu.
- **U:** JSX/component, CSS/Flex/Grid/Tailwind, stiller ve standart event handler.
- **F:** Browser render/hydration ve React render modelinin gerekli özeti.
- **J:** Reconciler, bütün hook API'leri, karmaşık state kütüphanesi, ileri animasyon ve ölçümsüz optimizasyon.

**AI işi:** Ekran ve stil iskeleti, tekrarlı component kodu.
**Öğrenci kararı:** Ekranın ne yaptığı, state'in sahibi, hata/boş durumda kullanıcıya ne gösterileceği.
**Yeterli kanıt:** Akış çalışıyor; öğrenci ilgili state ve veri yolunu gösteriyor; temel ekran/klavye kontrolü yapılmış. Tasarımı sıfırdan CSS ile tekrar kurmak gerekmez.

### Faz 4 — Form, doğrulama ve UI tutarlılığı

**Çıktı:** Aynı üründe geçerli veriyi kabul eden ve hatayı anlaşılır gösteren form.

- **K:** Girdi kuralları, client/server doğrulama ayrımı, submit/duplicate davranışı, hata mesajı ve erişilebilirlik.
- **U:** React Hook Form, Zod, shadcn/ui, Base UI, Tailwind ve helper kodunun seçili kullanımını kurma.
- **F:** Headless/hazır component ve form kütüphanesi görev ayrımı.
- **J:** Tüm component kataloğu, CSS yardımcıları ezberi, sıfırdan design system ve büyük dinamik form mimarisi.

**AI işi:** Form/component/schema taslağı ve örnek test.
**Öğrenci kararı:** İş kuralı, geçerli/geçersiz örnek ve server'da uygulanacak sınır.
**Yeterli kanıt:** Hatalı girdi ilgili sınırda reddediliyor; hata label/focus ilişkisi ve düzeltip yeniden gönderme davranışı incelenmiş. Ürüne gerekmeyen büyük form alıştırması açılmaz.

### Faz 5 — Next.js ve full-stack veri akışı

**Çıktı:** Ekranı bir server okuma veya mutation işlemine bağlamak.

- **K:** Route/layout, Server/Client sınırı, veri okuma/değiştirme, auth/validation noktası ve güvenli dış çıktı.
- **K:** HTTP method/status/header/cookie mantığı; özel verinin cache/gizlilik kararı; loading/error ve mutation sonrası görünür sonuç.
- **U:** Route/layout/action/handler, fetch ve cache güncelleme kodu; kurulu sürümün resmi örnekleri.
- **F:** SSR/CSR/SSG ve framework'ün neyi yönettiği; CORS'un yetkilendirme yerine geçmediği.
- **J:** Bütün routing özellikleri, kapsamlı router karşılaştırması, alternatif framework'e migration ve cache internalleri.

**AI işi:** Framework bağlantı kodu ve ilgili test taslağı.
**Öğrenci kararı:** İşlemin nerede çalışacağı, kimin erişeceği ve verinin nerede/kim için tutulacağı.
**Yeterli kanıt:** Öğrenci UI → server akışını ve kontrol noktalarını kodda gösterir; ilgili normal/hatalı erişim ve güncelleme davranışı doğrulanır. Framework'ün bütün API'leri kapı değildir.

### Faz 6 — Veri modeli, SQL ve değişiklik güvenliği

**Çıktı:** Ürün verisinin ilişkisel modeli ve uygulanabilir migration.

- **K:** Varlık/ilişki/sahiplik, primary/foreign key, unique/not-null/check, veri ömrü ve silme etkisi.
- **K:** Gereken SELECT/JOIN/mutation'ı okumak; transaction sınırı ve aynı anda/tekrar gelen işlemlerin ürün kuralına etkisi.
- **U:** SQL ve migration taslağı; örnek veri; gerçek yavaş sorguda hedefli index/EXPLAIN incelemesi.
- **F:** Index'in okuma/yazma maliyeti, MVCC/isolation'ın görünür sonucu.
- **J:** MVCC/lock-manager internalleri, DBA, fiziksel replication, geniş SQL fonksiyon kataloğu ve kanıtsız tuning.

**AI işi:** SQL, migration ve doğrulama sorgusu.
**Öğrenci kararı:** Veri invariant'ı (daima korunması gereken kural), ilişkiler ve değişiklikte veri kaybı riski.
**Yeterli kanıt:** Şema iş kuralını destekler; gerekli geçersiz/duplicate veri reddedilir; migration kontrollü ortamda denenir. Kritik eşzamanlı mutation varsa uygun senaryo doğrulanır; sırf teori için concurrency labı yoktur.

### Faz 7 — Kimlik, yetki ve managed backend

**Çıktı:** Kullanıcının yalnız izin verilen veriye eriştiği kalıcı ürün akışı.

- **K:** Authentication/authorization ayrımı, oturum, sahiplik, rol/aktör matrisi, server ve RLS sınırı.
- **K:** Client'a gidebilecek veri/anahtar, explicit grant, public/private veri ve negatif erişim senaryosu.
- **U:** Supabase client/Auth bağlantısı, policy/grant ve gerekli Storage kodu.
- **F:** JWT/oturumun genel rolü ve managed servis sorumluluğu.
- **J:** Kullanılmayan OAuth/MFA/Realtime/Edge Function özellikleri, kriptografi internalleri; Storage üründe yoksa bu entegrasyon da J.

**AI işi:** SDK ve policy taslakları, aktör testleri.
**Öğrenci kararı:** Kim hangi satırı/işlemi görebilir veya değiştirebilir; her aktör için beklenen izin/red.
**Yeterli kanıt:** İlgili owner/other-user/anon/service sınırları test edilmiş; UI'daki kontrol kaldırıldığında da yetki korunuyor; secret sızmıyor. Policy'yi AI yazmış olması bu doğrulamayı azaltmaz.

### Faz 8 — Ürün kuralları ve modül mimarisi

**Çıktı:** Bir iş kuralını UI, server ve veri katmanında tutarlı uygulamak.

- **K:** Gereksinimi durum/iş kuralına çevirmek; modül sorumluluğu, API/DTO sözleşmesi, veri ve güven sınırı.
- **K:** İlgili transaction, duplicate/idempotency, timeout/retry ve hata davranışı; gereksiz abstraction'ı reddetmek.
- **U:** Standart CRUD, servis/adapter, DTO mapping ve ilgili entegrasyon bağlantısı.
- **F:** Modular monolith, katman ve adapter düşüncesi.
- **J:** Kullanılmayan public token/e-posta, queue/outbox/saga, microservice, CQRS/event sourcing; ileri resilience kalıpları.

**AI işi:** Küçük mimari seçenekler ve seçilmiş uygulama taslağı.
**Öğrenci kararı:** Kuralın sahibi, en basit yeterli tasarım ve önemli failure davranışı.
**Yeterli kanıt:** Kural kod ve veri sınırında korunur; ilgili senaryo ve kısa seçim gerekçesi vardır. Public paylaşım veya e-posta yoksa bunlar zorunlu alt proje olmaz.

### Faz 9 — AI çıktısını test etme, review ve debugging

**Çıktı:** Ürün diliminin kritik doğruluk kanıtı ve tekrar çalıştırılabilir kontrol yolu.

- **K:** Test senaryosu ve beklenen sonuç, risk temelli unit/integration/E2E seçimi; yalnız implementasyonu tekrar edip iş gereksinimini sınamayan testi fark etme.
- **K:** Diff review, kapsam dışı değişiklik, assertion'ın zayıflatılması, aşırı mock ve AI'ın test geçti iddiasını gerçek çıktıyla ayırma.
- **K:** Hata varsa beklenen/gerçek davranış → reproducer → hipotez/deney → düzeltme kanıtı.
- **U:** Test/fixture/mock/CI kodu, log analizi, reproducer ve düzeltme taslağı.
- **F:** Test runner/coverage araçlarının rolü.
- **J:** Her framework'ü öğrenme, coverage kotası, her adımda kasıtlı bug ve zorunlu AI'sız debug sınavı.

**AI işi:** Öğrencinin belirlediği senaryoları uygulama, test çalıştırma ve bulgu önerme.
**Öğrenci kararı:** Hangi kusurun yakalanması gerektiği ve eldeki kanıtın yeterliliği.
**Yeterli kanıt:** Kritik senaryonun kontrolü kusurlu davranışta başarısız olabiliyor; gerçek çıktılar incelenmiş; bulunan önemli hata için regression kontrolü var. Yapılan değişikliğe uygun kontrol seçilir; her görevde üç test katmanı birden şart değildir.

### Faz 10 — Güvenlik, kalite ve gözlemlenebilirlik

**Çıktı:** Seçili kullanıcı akışındaki önemli risklerin görünür ve kontrol edilebilir olması.

- **K:** Veri/güven sınırı, auth/validation, hassas log/veri, abuse ve kullanıcıya güvenli hata davranışı.
- **K:** Kullanıcının klavye/erişilebilirlik ihtiyacı; gerçek performans ölçümü; maliyet ve başarısızlığı fark edecek sinyal.
- **U:** Güvenlik/a11y tarama ve kontrolleri, log/metric bağlantısı, ölçüm ve düzeltme taslağı.
- **F:** Yaygın web saldırılarının etkisi ve uzman desteği gereken sınırlar; gizlilik/veri minimizasyonu.
- **J:** Saldırı/protokol internalleri, kapsamlı telemetry platformu, ürüne gerekmeyen optimizasyon ve hukuk uzmanlığı.

**AI işi:** Kontrol taslakları ve kanıta dayalı düzeltme.
**Öğrenci kararı:** Ürün için önemli risk, kabul ölçütü ve çözülmeden yayınlanamayacak kusur.
**Yeterli kanıt:** İlgili güvenlik, erişilebilirlik ve kalite kontrolleri yapılmış; kritik açık yok; kalan risk açıkça belirtilmiş. Bu kontroller ilk ilgili fazda da uygulanır.

### Faz 11 — Ürüne AI özelliği ekleme — koşullu

**Açılma koşulu:** Üründe kullanıcıya değer sağlayan AI özelliği açıkça istenmiştir. Aksi halde **J**, program geçişini engellemez.

- **K:** Kullanım amacı, veri sınırı, başarı/kalite örnekleri, güvenli fallback, maliyet/kota ve kullanıcı kontrolü.
- **K:** AI çıktısına güvenmeme, schema validation, prompt injection ve iş kuralı/yetki sınırının model dışında uygulanması.
- **U:** Seçilmiş sağlayıcı adapter'ı, prompt/schema, eval seti ve hata/kota bağlantısı.
- **F:** Model, token ve bağlam sınırının pratik etkisi.
- **J:** Training/fine-tuning, RAG veya agent altyapısı; üründe gerekmedikçe eklenmez.

**Yeterli kanıt:** Öğrenci kabul edilebilir/kabul edilemez çıktıyı belirler; örneklerle kalite, hatalı çıktı, timeout ve ilgili kota sınırı doğrulanır. AI önerisi kendiliğinden fiyat/yetki/durum değiştiremez.

### Faz 12 — Ödeme ve entitlement — koşullu

**Açılma koşulu:** Ürün ödeme veya abonelik gerektirir. Aksi halde **J**, program geçişini engellemez.

- **K:** Plan/erişim hakkı, ödeme durumu, hosted checkout sınırı, webhook doğrulama, duplicate/out-of-order ve reconciliation davranışı.
- **U:** Seçilmiş sağlayıcının sandbox bağlantısı, adapter, webhook ve test taslağı.
- **F:** Kart işleme altyapısı ve uzman incelemesi gereken kapsam.
- **J:** Özel kart altyapısı, kullanılmayan abonelik/vergilendirme senaryoları ve sağlayıcı kataloğu.

**Yeterli kanıt:** Öğrenci iş kuralını ve aktörleri açıklar; sandbox'ta imza, duplicate, sıralama, entitlement ve ilgili recovery senaryoları test edilir. Sağlayıcı seçilmeden belirli bir marka varsayılmaz.

### Faz 13 — Preview, deployment ve geri dönüş

**Çıktı:** İzole ortamda çalışan ürün dilimi ve uygulanabilir teslim/geri dönüş yolu.

- **K:** Local/Preview/Production veri ve secret ayrımı, migration etkisi, smoke test, gözlem ve rollback/forward-fix seçimi.
- **K:** Veri kaybı halinde backup/restore yolu; maliyet ve gereken servis sınırları.
- **U:** Vercel/CI/env config, release komutları, runbook ve mevcut aracın kontrolleri.
- **F:** DNS/HTTPS, serverless timeout/statelessness, process/port ve container'ın rolü.
- **J:** Linux yönetimi, elle Docker/Kubernetes/self-hosting, multi-region, load balancer kurma ve kapsamlı incident tatbikatı; gerçek ihtiyaç yoksa açılmaz.

**AI işi:** Config, komut ve kontrol taslakları.
**Öğrenci kararı:** Neyi nereye yayınladığı, hangi veri/secret'ın kullanıldığı, hata halinde hangi geri dönüşün güvenli olduğu.
**Yeterli kanıt:** Preview ve ilgili smoke testi çalışır; migration kontrollü ortamda denenir; kalıcı veri varsa geri yükleme yolu test ortamında doğrulanır. Production yayını ayrı ürün kararıdır; eğitim için canlı müşteri veya ücretli altyapı zorunlu değildir.

### Faz 14 — Ürün teslimi ve mimari karar kanıtı

**Çıktı:** Aynı ürünün çalışan dilimi ve yeni gereksinim karşısında yapılmış kontrollü bir değişiklik.

- **K:** Kullanıcı sonucu, kapsam, veri/güven sınırı, modül sorumluluğu, basit tasarım, maliyet ve önemli trade-off.
- **K:** AI'a görev verme, implementasyonu inceleme, kanıtla kabul/düzeltme; yeni gereksinimin mevcut karara etkisi.
- **U:** Kod, diyagram, kısa ADR, test, release ve dokümantasyon taslakları.
- **F:** Sistem tasarımı terimleri, pattern adları ve ölçekleme seçenekleri.
- **J:** Enterprise mimari kataloğu, formel distributed systems, multi-region, teknik liderlik/on-call uzmanlığı ve senior unvanı değerlendirmesi.

**Gerekli teslimatlar:**
- Kısa ürün brief'i ve kabul kriterleri.
- Basit veri akışı/mimari görünümü; önemli veri/yetki kuralları.
- İncelenebilir AI görevleri, diff ve öğrencinin review/karar katkısı.
- İlgili testler ve gerçek çıktılar; kalıcı veri varsa migration/yetki kanıtı.
- Çalışan preview, kısa çalıştırma/teslim/geri dönüş notu.
- En az bir önemli kararın gerekçesi, reddedilen seçenek ve yeniden değerlendirme koşulu.
- Yeni gereksinimin uygulanması veya anlamlı kusurun bulunup düzeltilmesine ait kanıt.

AI/ödeme/Storage/public paylaşım teslimatı yalnız bu özellik uygulanmışsa gerekir. Her diyagram türü, ayrı dashboard, üç ADR, bütün test katmanları veya AI'sız yeniden yazma şart değildir.

**Programın tamamlanma ölçütü:** Öğrenci AI desteğiyle ürünü tarif eder, tasarlar, uygulamayı yönlendirir, kritik kod/sınırları değerlendirir ve doğrulanmış sonucu teslim eder. Bilmediği noktayı işaretleyip hedefli yardım/araştırma isteyebilir. Bu kanıt program hedefini gösterir; tek başına senior veya uzman mimar unvanı vermez.
