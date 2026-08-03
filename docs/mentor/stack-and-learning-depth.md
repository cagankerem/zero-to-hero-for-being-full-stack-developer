# Mentor-AGENT — Stack ve Öğrenme Derinliği

## 7. Hedef production stack ve karar durumu

Bu repository henüz boş olsa bile aşağıdaki matris eğitim rotasının production referansıdır. Bir teknolojinin planda bulunması, o paketin bu repository'de şu anda kurulu olduğu veya bütün projeler için evrensel olarak en iyi seçenek olduğu anlamına gelmez. Bu liste dondurulmuş bir trend listesi değil, mevcut ürün bağlamı için belgelenmiş baseline'dır; alternatif daha iyi kanıt sunduğunda migration maliyeti ve guardrail'ler ADR ile değerlendirilir.

### Kesin ana yön

- JavaScript ve Node.js çalışma modeli
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

Ana production stack'i her derste değiştirme; fakat seçili araçların neden seçildiğini görünmez bırakma. İlgili fazlarda aynı problem alanındaki güncel alternatifleri, farklı abstraction seviyelerini ayırarak incelet:

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

Test pratiğini production test araçlarının seçimine kadar erteleme. Faz 0'da dilin/platformun yerleşik imkânları veya en küçük geçici test harness'i ile test yazmaya başla; bunun eğitim amaçlı geçici seçim olduğunu kaydet. Production unit/integration/E2E araçlarını ihtiyaçlar görünür olduğunda kanıtla seç ve Faz 9'da test mimarisi ile CI entegrasyonunu derinleştir.

### Production kararı olmayan prototip teknolojileri

- Vinext
- Vite
- Wrangler
- Cloudflare Workers
- Cloudflare D1 / SQLite
- Drizzle ORM

Bunları production stack'e kendiliğinden taşıma. Yalnız mevcut prototipi anlamak, migration riskini görmek veya alternatif mimariyi karşılaştırmak için ele al. Production ana yönü şu an **Next.js + Vercel + Supabase/PostgreSQL**'dir.

## 8. Öğrenme derinliği

Her teknolojiyi aynı derinlikte öğretme. Aşağıdaki sınıflandırmayı kullan.

### A — Kodda derin ustalık

Öğrenci bu alanlarda sıfırdan kod yazabilmeli, test edebilmeli, debug yapabilmeli ve tasarım kararını açıklayabilmelidir:

- JavaScript: scope, closure, object/array modeli, module sistemi, hata yönetimi, promise, async/await ve event loop.
- TypeScript strict: narrowing, union, generic, utility type, type inference, `unknown`, boundary typing ve hatalı type assertion riskleri.
- Node.js ve web runtime sınırları; package manager, `package.json`, semver ve lockfile davranışı.
- Semantic HTML, temel CSS, responsive layout ve browser DevTools.
- React: component composition, props, state, render modeli, controlled input, effect, context ve state yerleşimi.
- Next.js App Router: routing, layout, Server/Client Component sınırı, Server Action, Route Handler, SSR, caching ve error/loading sınırları.
- HTTP: method, status, header, cookie, cache, CORS, request/response yaşam döngüsü ve idempotency.
- Zod ve runtime boundary validation.
- React form mantığı ve React Hook Form.
- SQL/PostgreSQL: modelleme, JOIN, constraint, transaction, isolation, index, query plan ve migration.
- Authentication ile authorization ayrımı; session/JWT ve Supabase RLS policy yazımı/testi.
- Test tasarımı, debugging, Git ve terminal kullanımı.
- Güvenli kodlama: input/output sınırları, XSS, CSRF, SQL injection, secret yönetimi, least privilege ve güvenli dosya yükleme.
- Temel veri yapıları, algoritmik karmaşıklık, refactoring ve kod okunabilirliği.

### B — Uygulama yeterliliği

Öğrenci bunları production'da güvenle yapılandırabilmeli, kullanabilmeli ve yaygın hatalarını teşhis edebilmelidir; araç internallerini ezberlemesi gerekmez:

- Tailwind CSS, shadcn/ui, Base UI, Lucide, CVA, `clsx`, `tailwind-merge`.
- Supabase browser/server client'ları, Auth, Storage, signed URL ve local development.
- Vercel deployment, environment ayrımı ve preview akışı.
- CI pipeline, lint, format, type-check, build ve test kapıları.
- Structured logging, correlation ID, health check, metric ve alarm temelleri.
- Accessibility testleri ve web performans ölçümü.
- Backup/restore, migration rollout ve runbook uygulaması.
- Docker/container temelleri; image, process, port, network ve volume kullanımı. Container kullanımı production mimarisi için otomatik karar değildir.

### C — Önce konsept, sonra temsili uygulama

Öğrenci bu alanlarda mimariyi, riskleri ve sağlayıcı bağımsız sözleşmeyi derinlemesine anlamalı; sağlayıcı API'sini ancak karar verildiğinde uygulamalıdır:

- AI provider adapter, structured output, prompt versioning, Zod doğrulaması, kota, maliyet ve fallback.
- Hosted checkout, imzalı webhook, subscription lifecycle, entitlement, idempotency ve reconciliation.
- Error tracking ve product analytics sağlayıcıları.
- CDN, WAF, DNS, HTTPS, rate limiting ve incident response.
- KVKK, veri minimizasyonu, retention ve profesyonel hukuk incelemesi gerektiren sınırlar.
- Managed platform operasyonları ve ileri ölçekleme seçenekleri.

### D — Farkındalık ve karşılaştırma

Alternatif framework, router, runtime, ORM, database veya cloud ürünlerini ana kavramı netleştiriyor, mevcut seçimin kökenini açıklıyor ya da gerçek bir kararı destekliyorsa karşılaştır. Öğrenci en azından abstraction seviyesi, çözülen önceki problem, güncel alternatifin yetenekleri, migration maliyeti ve yanlış kullanım bağlamını açıklayabilmelidir. Teknoloji listesi ezberletme ve sırf yeni veya popüler olduğu için müfredata araç ekleme.

Kriptografik primitive, kart işleme altyapısı, React reconciler veya Tailwind compiler gibi internalleri sıfırdan yazdırma. Bunların güvenlik ve çalışma sınırını anlat; battle-tested implementation kullanmayı öğret.

## 9. Sürekli gelişim eksenleri

Aşağıdaki eksenler ayrı bir “son bölüm” değildir; her fazda uygun ölçüde uygulanır.

### 9.1 Profesyonel geliştirme alışkanlıkları

- Terminalde yön bulma, komut yardımını okuma ve güvenli komut çalıştırma.
- Git'te küçük ve anlamlı commit, branch, merge/rebase farkı, conflict çözme ve geçmiş okuma.
- `README`, changelog, API sözleşmesi, migration notu ve runbook yazma.
- Resmi dokümantasyonda sürüm, önkoşul, uyarı, örnek ve changelog okuma.
- Bir teknolojinin overview/design, release note, migration guide ve rakip ürünün güncel dokümanını birlikte okuyarak tarihsel iddia ile bugünkü durumu ayırma.
- Başkasının kodunu okumak; çağrı zinciri, veri akışı ve yan etki haritası çıkarmak.
- Code review'da doğruluk, güvenlik, test, okunabilirlik ve kapsam üzerinden kanıtlı geri bildirim vermek.
- İş gereksinimini acceptance criteria, edge case ve teknik görevlere dönüştürmek.
- Bilinmeyeni açıkça işaretlemek; varsayım, karar ve riskleri birbirinden ayırmak.
- Teknik İngilizce terimleri tanımak ve exact hata mesajıyla etkili arama yapabilmek.

### 9.2 Kalite ve bağımsız problem çözme

- Her fazda test yazmak ve test çıktısını yorumlamak.
- Her fazda en az bir kasıtlı bug, minimal reproduction ve regression testi çözmek.
- Debug günlüğünde gözlem, hipotez, deney, sonuç ve kök nedeni ayırmak.
- Linter, formatter, type checker, test runner ve build çıktısını ezbere düzeltmek yerine anlamak.
- Refactoring öncesinde davranışı testle sabitlemek.
- Happy path kadar invalid input, boş durum, sınır değer, timeout, concurrency ve yetki reddini düşünmek.
- Kopyalanan veya AI tarafından önerilen kodun her satırını açıklamak ve bağımsız test etmek.
- Gecikmeli tekrar, aralıklı hatırlama ve önceki konuları yeni bağlamda yeniden kullanmak.

### 9.3 Güvenlik, veri ve kullanıcı kalitesi

- Input boundary, authentication, authorization, output encoding ve secret sınırını her özellikte göstermek.
- En az ayrıcalık, veri minimizasyonu, retention ve log redaction uygulamak.
- Erişilebilirliği semantic HTML'den başlayarak her UI görevinin acceptance criteria'sına koymak.
- Performansı tahminle değil ölçüm, profiler, query plan veya gerçek metrikle değerlendirmek.
- Kullanıcı hata durumlarını, loading/empty/retry akışlarını ve veri kaybı riskini tasarımın parçası saymak.
- Güvenlik veya hukuki iddiayı sağlayıcı pazarlama metniyle değil resmi rehber ve uzman sınırıyla ele almak.

### 9.4 Bilgisayar bilimi ve DSA paralel şeridi

Bu şerit ana ürün geliştirmesinden kopuk LeetCode ezberine dönüşmez. Konular JavaScript/TypeScript ile uygulanır; gerçek uygulamadaki veri yapısı, performans ve veritabanı kararlarına bağlanır.

**Temel matematik ve hesaplama modeli:**

- Boolean mantığı, kümeler, ilişkiler ve fonksiyonlar.
- İkili/onaltılı gösterim, bit/byte, signed/unsigned sayı ve Unicode/UTF-8.
- IEEE 754 floating-point sınırları ve para hesabına etkisi.
- CPU, bellek, stack/heap zihinsel modeli; process, thread ve I/O ayrımı.
- File descriptor, buffer, stream, blocking/non-blocking I/O ve backpressure'in yüksek seviyeli modeli.
- Shared state, race condition, critical section, atomicity, mutex, semaphore, deadlock ve starvation kavramları; JavaScript tek-thread varsayımının worker/database/dağıtık sistem yarışlarını ortadan kaldırmadığı.
- Deterministik algoritma, invariant, precondition ve postcondition.
- Zaman/alan karmaşıklığı; Big-O, Big-Theta ve amortized analysis farkındalığı.

**Temel veri yapıları ve algoritmalar:**

- Array, string, object/hash map, set, stack, queue ve linked list.
- Linear/binary search; stable/unstable sorting ve temel sorting trade-off'ları.
- Recursion ile iteration; call stack ve base case.
- Tree, binary search tree, heap/priority queue ve trie zihinsel modeli.
- Graph gösterimleri; breadth-first search ve depth-first search.
- Hashing, collision, equality ve identity kavramları.

**Problem çözme kalıpları:**

- Two pointers, sliding window, prefix sum ve frequency map.
- Divide and conquer, greedy yaklaşım, backtracking ve dynamic programming temelleri.
- Topological ordering, shortest path ve union-find farkındalığı.
- Veri yapısını operasyon maliyetine göre seçme; “hangi yapı daha popüler?” yerine read/write/search gereksinimini sorma.
- Çözüm öncesi örnek yürütme, brute-force baseline, optimizasyon ve correctness gerekçesi.

**Production bağlantıları:**

- Indexlerin tree/hash yapılarıyla ilişkisi.
- Queue, retry ve idempotency'nin dağıtık iş akışlarıyla ilişkisi.
- Cache eviction ve bounded-memory düşüncesi.
- Pagination, sorting ve arama maliyetleri.
- Büyük input'un event loop, bellek ve denial-of-service riskine etkisi.

### 9.5 Tasarım ve mimari paralel şeridi

- Cohesion, coupling, dependency direction ve information hiding.
- Pure function, side effect, command/query ayrımı ve state ownership.
- YAGNI, KISS, DRY'nin bağlama bağlı kullanımı; yanlış abstraction maliyeti.
- Composition over inheritance ve interface/contract düşüncesi.
- Domain language, entity, value object, invariant, DTO ve persistence model ayrımı.
- ADR, C4 bağlam/container görünümü, sequence diagram, data-flow ve threat-model diyagramları.
- Functional/non-functional requirement, capacity tahmini ve failure-mode analizi.
- Build-versus-buy, managed-versus-self-hosted ve reversible-versus-irreversible karar ayrımı.

Önerilen öğrenme dağılımı, öğrencinin zamanına göre uyarlanmak üzere yaklaşık olarak şöyledir: %60 kodlama/debug, %20 test ve code review, %10 mimari/dokümantasyon, %10 kavram tekrarı. Takvim baskısı uğruna ustalık kapısını kaldırma.

