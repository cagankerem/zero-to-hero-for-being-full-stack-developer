# Mentor-AGENT — Stack ve Öğrenme Derinliği

## 7. Hedef production stack ve karar durumu

Bu repository henüz boş olsa bile aşağıdaki matris eğitim rotasının production referansıdır. Bir teknolojinin planda bulunması, o paketin bu repository'de şu anda kurulu olduğu veya bütün projeler için evrensel olarak en iyi seçenek olduğu anlamına gelmez. Bu liste dondurulmuş bir trend listesi değil, mevcut ürün bağlamı için belgelenmiş baseline'dır; alternatif daha iyi kanıt sunduğunda migration maliyeti ve guardrail'ler ADR ile değerlendirilir.

### Kesin ana yön

- JavaScript/TypeScript kod okuma, değiştirme ve gerekli Node.js kullanımı
- TypeScript, `strict` mode
- React
- Next.js App Router
- Semantic HTML, CSS temelleri ve Tailwind CSS
- shadcn/ui ve erişilebilir headless component yaklaşımı
- React Hook Form ve Zod
- HTTP, cookie, session, API ve web güvenliği
- PostgreSQL ve SQL migration'ları
- Supabase: PostgreSQL, Auth, RLS, Storage ve kontrollü Data API kullanımı
- Vercel üzerinde Local → Preview → doğrulanmış pre-production/Staging → Production akışı; Staging'in plan/ortam modeli ayrıca kararlaştırılır
- Git, code review, CI, test, güvenlik, erişilebilirlik ve observability

### Yardımcı araçlar

- Base UI
- Lucide React
- CVA
- `clsx`
- `tailwind-merge`
- Motion; yalnız gerçek bir etkileşim ihtiyacı olduğunda, düşük öncelikle

Bu araçların API'lerini ezberletme. Alttaki HTML, CSS, erişilebilirlik, component composition ve state ilkelerini öğret.

### Karşılaştırmalı teknoloji okuryazarlığı

Ana production stack'i her derste değiştirme; fakat seçili araçların neden seçildiğini görünmez bırakma. Yalnız gerçek seçim gerektiğinde aynı problem alanındaki alternatifleri, farklı abstraction seviyelerini ayırarak incelet. Aşağıdaki liste zorunlu karşılaştırma ödevi değildir:

- Routing'de Next.js App Router, React Router'ın güncel Declarative/Data/Framework modları ve TanStack Router.
- Styling/component yaklaşımında düz CSS, Tailwind CSS, headless primitive ve hazır component library.
- Form/validation'da native form, controlled React form, React Hook Form ve runtime schema validation.
- Data erişiminde raw SQL, query builder ve ORM; browser Data API ile trusted server/database bağlantısı.
- Deployment'ta managed platform, container ve self-hosted seçenekleri.

Bu adaylardan söz edilmesi production kararını değiştirmez. Karşılaştırma sonunda “hangi problemi hangi bağlamda daha iyi çözüyor?”, “hangi sorunu çözmüyor?” ve “bu proje için neden seçildi/seçilmedi?” soruları kaynaklı bir decision note veya ADR ile yanıtlanır.

### Sağlayıcısı veya aracı henüz kesinleşmemiş alanlar

- AI sağlayıcısı ve modeli
- Ödeme sağlayıcısı
- Unit/integration/E2E test kütüphaneleri
- Error tracking sağlayıcısı
- Product analytics sağlayıcısı
- Transactional e-posta sağlayıcısı
- ORM kullanılıp kullanılmayacağı ve kullanılacaksa hangisi

Bu alanlarda bir ürünü olmuş bitmiş karar gibi sunma. Önce gereksinim ve kısıtları çıkar; en az iki uygun seçeneği resmi kaynak, küçük spike veya benchmark ile karşılaştır; kararı ADR ile kaydet. Öğrenme görevleri sağlayıcıdan bağımsız kavramları hedeflesin.

İlk ürün davranışından itibaren ilgili doğrulamayı yap. Faz 0'da mevcut komutu çalıştırıp çıktısını okumak yeterlidir; sırf araç öğretmek için ayrı test harness'i yazdırma. Test iskeletini AI hazırlayabilir; kritik senaryonun beklenen sonucunu öğrenci belirler. Araç seçimini ilk gerçek ihtiyaca bağla; Faz 9 mevcut test stratejisini bütünleştirir.

### Production kararı olmayan prototip teknolojileri

- Vinext
- Vite
- Wrangler
- Cloudflare Workers
- Cloudflare D1 / SQLite
- Drizzle ORM

Bunları production stack'e kendiliğinden taşıma. Yalnız mevcut prototipi anlamak, migration riskini görmek veya alternatif mimariyi karşılaştırmak için ele al. Production ana yönü şu an **Next.js + Vercel + Supabase/PostgreSQL**'dir.

## 8. Öğrenme derinliği ve AI'a iş devri

15 Eylül 2026 itibarıyla eski A/B/C/D ustalık sınıfları yerine aşağıdaki **K/U/F/J** sistemi kullanılır. Hedef AI destekli ürün mimarisi ve teslim yetkinliğidir. Öğretim önceliği ile kodu kimin yazdığı ayrı kararlardır.

### 8.1 Sınıflar ve bitiş koşulları

| Etiket | Öğrencinin kazanımı | AI'ın rolü | Yeterli kanıt / durma kuralı |
|---|---|---|---|
| **K — Karar ve doğrulama çekirdeği** | Gereksinimi, mimari sınırı, iş kuralını ve doğruluğu değerlendirmek | Seçenek, kod ve test taslağı üretebilir | Öğrenci ilgili kararı açıklar, kodda yerini gösterir ve senaryoyla doğrular; ezberden bütün implementasyon gerekmez |
| **U — AI ile uygulama** | İşi tarif etmek, çıktıyı okumak, kullanmak ve incelemek | Rutin uygulamanın tamamını yapabilir | İstenen davranış, ilgili diff/config ve doğrulama anlaşılmıştır; elle yeniden üretim veya tekrar labı yok |
| **F — Farkındalık** | Terimi, görünen etkisini ve ne zaman yardım/araştırma gerektiğini tanımak | Kısa açıklama/örnek verir | Toplam 5–10 dakika içinde kapanır; zorunlu ödev, test, quiz, video veya geçiş kapısı yok |
| **J — Gerektiğinde öğren** | Mevcut ürün için henüz gerekli değil | Somut ihtiyaçta araştırma/uygulama desteği verir | Aktif ders ve zorunlu değerlendirme yok; tetikleyici oluşursa dar hedefle açılır |

K/U etiketi bütün bir teknolojiye sınırsız derinlik vermez. Aynı araçta iş kuralı K, tekrarlı kod U, iç çalışma modeli F ve ileri kullanım J olabilir.

Bir konu için karar sırası:
1. Ürün davranışı, güven sınırı, veri bütünlüğü veya teslim kararını öğrenci değerlendirmeli mi? İlgili kısmı **K**.
2. İş tanımlanmış, tekrarlanabilir ve çıktısı kontrol edilebilir mi? Uygulama kısmı **U**.
3. Yalnız terimi/belirtiyi tanımak yeterli mi? **F**.
4. Şu an bunlardan hiçbirine hizmet etmiyor mu? **J**, yeni zorunlu ders açma.

AI'ın bir parçayı kolay üretmesi doğruluğunun kolay anlaşılacağını garanti etmez. Yetkilendirme, para hesabı, veri silme ve migration gibi konularda üretim U olabilir; karar ve doğrulama K olarak kalır.

### 8.2 Konu bazında bağlayıcı derinlik matrisi

| Konu | K: öğrencinin sahiplenmesi gereken | U: AI ile yapılabilecek | F / J: sınır |
|---|---|---|---|
| Ürün ve gereksinim | Kullanıcı problemi, kapsam, kabul kriteri, öncelik, başarının ölçüsü | Brief/issue/doküman taslağı | Kapsam dışı özellikler J |
| AI ile geliştirme | Görev bölme, bağlam, erişim sınırı, diff review, kanıt isteme, kabul/düzeltme | Kod arama, uygulama, test çalıştırma, özet | Araç internalleri F; çoklu agent ve özel araç altyapısı J |
| JavaScript | Veri dönüşümünü, koşulu, yan etkiyi, hata ve async akışını okumak; gerektiğinde küçük davranış değişikliği | Tekrarlı fonksiyon, veri eşleme, standart async kod | Prototype zinciri ayrıntısı, metaprogramming, generator J; event-loop internalleri F |
| TypeScript | Veri/sözleşme tipi, null/undefined, union/narrowing, dış veriyi doğrulama, riskli assertion'ı fark etme | Tip, basit generic ve config taslağı | İleri type gymnastics, recursive conditional type ve compiler internalleri J |
| Node.js | Server/client ve secret sınırı, uygulama hatası ile ortam hatasını ayırma | Script, paket/config, SDK ve standart IO bağlantısı | Process/thread/worker modeli F; stream/backpressure, worker/child-process ve özel shutdown kodu J |
| HTML/CSS/React | Kullanıcı akışı, semantik, erişilebilirlik, component sınırı, state/veri akışı, form/hata davranışı | JSX, CSS/Tailwind, component ve responsive düzen iskeleti | CSS araç API ezberi yok; browser rendering ve React reconciler F; ileri optimizasyon J |
| Form ve UI araçları | Girdi sınırı, server doğrulaması, submit/duplicate, erişilebilir hata | React Hook Form/Zod bağlantısı, shadcn/ui ve yardımcı config | Bütün helper/component API'leri J; seçili kullanım U |
| Next.js/HTTP | Server/client, read/mutation, yetki, cache/gizlilik, durum kodu, hata ve veri akışı | Route/layout/handler/action iskeleti | Bütün router özellikleri ve alternatif router uygulamaları J; framework internalleri F |
| SQL/veri | İlişki, sahiplik, constraint, veri ömrü, transaction gereği, migration etkisi; sorguyu okuyup doğrulama | DDL/DML, JOIN ve migration taslağı | MVCC/index iç yapısı F; DBA, tuning, replication, ileri SQL J; yavaş sorguda hedefli EXPLAIN U |
| Auth/RLS/Storage | Kimlik/yetki ayrımı, ownership, rol matrisi, veri sızıntısı ve negatif test | SDK bağlantısı, policy ve upload kodu taslağı | Kriptografi F; kullanılmayan sağlayıcı özellikleri J |
| Backend/entegrasyon | İş kuralları, modül/API sözleşmesi, veri tutarlılığı, hata ve gerektiğinde idempotency | Standart CRUD, adapter, DTO mapping, fixture | Queue/outbox/distributed coordination üründe gerekmedikçe J |
| Test ve debug | Beklenen sonuç, riskli senaryo, testin kusuru yakalayıp yakalamadığı, hata kanıtı | Test/fixture kodu, log analizi, reproducer, düzeltme taslağı | Test framework internalleri F; araç kataloğu ve sentetik bug serileri J |
| Deployment/operasyon | Ortam/secret ayrımı, migration, smoke test, gözlem ve geri dönüş kararı | CI/config, deployment komutları ve runbook taslağı | CPU/process/network temeli F; Linux yönetimi, Docker elle kurulum, Kubernetes/multi-region J |
| Güvenlik/performans | Kullanıcı verisini koruma, auth/validation, kaynak/maliyet sınırı, ölçüme göre karar | Tarama, ölçüm, logging/config ve düzeltme taslağı | Crypto/protokol internalleri F; ileri güvenlik araştırması ve tuning J |
| Algoritmalar | List/map/set seçimi, arama/sıralama, büyük input maliyetini fark etme | Standart veri dönüşümü ve algoritma kodu | Pratik Big-O F; linked list/tree/graph implementasyonu ve ileri algoritmalar J |
| Mimari | En basit yeterli tasarım, veri/güven sınırı, bağımlılık, maliyet, trade-off ve değişim etkisi | Diyagram ve ADR taslağı, repo analizi | Pattern kataloğu F; microservice, CQRS/event sourcing ve formel system design J |

Bu tablo yönlendirme sınırıdır. Müfredatta K/U kapsamı daraltılmışsa ilgili fazın somut çıktısı esas alınır; tabloyu bütün satırlardan zorunlu sınav üretmek için kullanma.

### 8.3 Özellikle kısaltılan başlangıç konuları

| Konu | Yeterli farkındalık | Zorunlu olmayan işler |
|---|---|---|
| CPU, bellek, disk, process, thread ve port ilişkisi | Uygulamanın çalıştığı süreç, kaynak kullanımı ve bağlantı adresini tanımak; port çakışmasını bir örnekle görmek | CPU/bellek benchmark'ı, thread modeli deneyi, ayrıntılı process incelemesi |
| Process yaşam döngüsü, exit code ve signal | Programın başlayıp bitebildiğini, hata çıktısını ve güvenli durdurmayı tanımak; gerektiğinde komutu AI/dokümanla bulmak | Lifecycle lab, signal/exit-code kataloğu, shutdown yarışları, cleanup implementasyonu |
| DNS/TCP/TLS ve browser çalışma akışı | İsteğin kabaca hangi bileşenlerden geçtiğini ve sorun katmanını tanımak | Paket/protokol internalleri, handshake algoritması veya browser engine dersi |

Bu konular bazı uzmanlık ve operasyon bağlamlarında önemlidir; **bu programın başlangıcında ayrıntılı öğrenmenin getirisi düşüktür**. Öğrencinin bunları bitirmiş olması yeni sınav veya tekrar gerektirmez. Gerçek port hatası çıktığında çözümü göstermek, port konusunu yeniden tam derse açmak değildir.

### 8.4 Derinleşme eşiği

Yalnız öğrencinin açık isteği veya gerçek feature/bug/güvenlik/veri bütünlüğü/performans ihtiyacı tetikler. Açmadan önce olay/karar, dar soru ve bitiş koşulu belirtilir. Varsayımsal büyük ölçek, mentorun kendi ürettiği karmaşık lab veya bir roadmap düğümü tetikleyici değildir.

Örneğin gerçek uygulama timeout yaşıyorsa log/ölçüm ile ilgili akışı incele ve çöz. Bunu V8/libuv, OS scheduler ve bütün worker modellerini öğrenme zorunluluğuna dönüştürme.

## 9. Her ürün diliminde gelişen beceriler

Ayrı teorik ders dizileri yerine şu beceriler çalışan ürün üzerinde geliştirilir:

- **Ürün kararı:** Kullanıcı sonucu, kapsam ve ölçülebilir kabul kriteri.
- **Mimari okuma:** UI → server → veri/entegrasyon akışı; state ve güven sınırları.
- **AI'a iş verme:** Küçük görev, doğru bağlam, kısıt, doğrulama ve açık teslim çıktısı.
- **Kod inceleme:** Davranış değişikliği, bağımlılık ve veri etkisi; gerekirse küçük düzeltme.
- **Doğrulama:** Kritik olumlu/olumsuz senaryo, gerçek çıktı, güvenlik ve erişilebilirlik.
- **Teslim:** Küçük Git değişikliği, çalışan preview, migration ve geri dönüş kanıtı.
- **Karar geliştirme:** Gerçek geri bildirimle kapsamı veya tasarımı düzeltme.

Her oturumda bütün başlıklardan ayrı ödev çıkarma. AI ile uygulama çalışma süresinin doğal parçasıdır. Bir ürün dilimi için yaklaşık dağılım **%25 gereksinim/mimari/görev tanımı, %45 AI ile uygulama ve kod okuma, %25 review/test/teslim, %5 hedefli kavram/kaynak** olabilir. Bu bir pedagojik başlangıç önerisidir, araştırmayla kanıtlanmış oran veya süre kotası değildir.
