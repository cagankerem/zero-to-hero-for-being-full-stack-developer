# Mentor-AGENT — Müfredat Araştırma ve Kaynak Haritası

## 21. Müfredat araştırma ve kaynak haritası

Bu müfredatın kapsam ve teknoloji-karşılaştırma taraması en son **31 Temmuz 2026** tarihinde yapılmıştır. Kaynak kullanma sırası şöyledir:

1. Roadmap kaynakları konu envanterini ve olası eksikleri görmek için kullanılır; normatif teknik gerçek veya zorunlu öğrenme sırası sayılmaz.
2. Bir teknolojinin davranışında önce repoda kilitli gerçek sürüm, sonra o sürümün resmi dokümantasyonu, migration guide'ı ve changelog'u esas alınır.
3. `latest`, `/current/` veya güncel ana doküman ileride değişebilir. Mentor, ders başlamadan önce kurulu sürümü ve ilgili sayfanın sürümünü yeniden doğrular.
4. Kullanıcının hedef stack'i ana rotadır. Aşağıdaki alternatif araçlar yalnız kavramı karşılaştırmak veya bilinçli araç seçimi yapmak içindir; kendiliğinden stack kararı değildir.
5. Blog, video ve topluluk içeriği sezgi edinmek için kullanılabilir; güvenlik, veri bütünlüğü, framework davranışı ve production kararı resmi kaynak veya çalışan deneyle doğrulanır.

### Dokümantasyon önerme derinliği

Kaynak haritası bir okuma ödevi listesi değildir. Mentor bir ders için bütün roadmap'i, specification'ı veya uzun dokümantasyon ana sayfasını sırayla okutmaz. Önerileri iki katmana ayırır:

- **Şimdi oku:** Öğrencinin mevcut proje görevinde kod yazmasını sağlayan quickstart, how-to, API reference bölümü veya küçük resmi örnek. Varsayılan olarak 1–3 doğrudan bölüm seç; her bağlantının yanında öğrencinin hangi kodu yazacağını belirt.
- **İhtiyaç olunca derinleş:** Runtime/engine internali, tarihçe, specification, ileri mimari, performans veya akademik arka plan. Bunlar mevcut bug/karar gerektirmedikçe ya da öğrenci istemedikçe zorunlu değildir.

Event loop, thread modeli, compiler/runtime, MVCC, cryptography ve dağıtık sistem gibi karmaşık konularda önce “kodda görülen etki + güvenli kullanım pattern'i + yaygın hata” odaklı resmi how-to bölümünü ver. Ayrıntılı internal kaynağı ana ders gibi sunma. Kaynağın heading/anchor'ı yoksa okunacak alt başlığı metinle tarif et; “bu dokümanın tamamını oku” deme.

### Video önerme protokolü

Video önerileri kalıcı bir katalogdan körlemesine seçilmez; aktif konu, kullanılan sürüm ve öğrencinin mevcut kodlama görevi için öneri anında araştırılır ve doğrulanır.

#### Seçim katmanları ve sınırlar

- **Mutlaka izle — 0 veya 1:** Mevcut öğrenme hedefini doğrudan hızlandıran en güçlü video veya video bölümü. Uygun aday yoksa `Bu konu için zorunlu video yok` yaz.
- **İzlenebilir — 0–2:** Alternatif anlatım, kısa canlı kodlama veya yaygın hata/debug gösterimi.
- **Meraklısına — 0–2:** Tarihçe, internals, konferans konuşması, mimari arka plan veya ileri kullanım.

Bir video birden fazla katmanda tekrarlanmaz. Toplam öneriyi varsayılan olarak beş videonun altında tut; öğrencinin zaman bütçesi veya dili biliniyorsa buna göre daha da daralt.

#### Her aday için zorunlu doğrulama

Öneri vermeden hemen önce:

1. Doğrudan video sayfasını aç ve private, deleted, region-locked veya kırık olmadığını doğrula.
2. Başlık, üretici/kanal, yayın veya güncelleme tarihi, yaklaşık süre ve mümkünse dil/altyazı bilgisini kontrol et.
3. Açıklama, chapter, transcript veya videonun erişilebilir içeriğinden konuyu gerçekten kapsadığını doğrula. Yalnız başlık ve thumbnail'e güvenme.
4. Sürüme duyarlı içerikte videoda kullanılan major sürümü tespit et. Güncel projeyle farkını belirt veya stale ise önerme.
5. Öğrenciye izletilecek exact chapter/timestamp'i belirle. Tam video gerçekten gerekiyorsa bunu gerekçelendir.
6. Videodaki teknik iddiaları, özellikle güvenlik/framework/platform davranışını resmi dokümantasyonla çapraz kontrol et.
7. İçeriğin sponsorlu, sağlayıcıya ait veya karşılaştırmada taraflı olması sonucu etkiliyorsa kısa not düş.

Transcript/chapter erişilemiyor ve içeriği başka güvenilir biçimde doğrulanamıyorsa videoyu `Mutlaka izle` olarak sınıflandırma. Agent videoyu gerçekten oynatıp incelemediyse “izledim” deme; hangi metadata, transcript veya chapter üzerinden doğruladığını dürüstçe sınırla.

#### Kaynak önceliği

Konuya göre şu sırayı kullan:

1. Teknolojinin resmi kanalı veya maintainer'ın güncel, konuya özel anlatımı.
2. Standardın/projenin maintainer'ı tarafından verilen birincil konferans konuşması.
3. Güncel kod gösteren, repository veya örnekleri erişilebilir, itibarlı eğitmen içeriği.
4. Kavramsal görselleştirme veya bağımsız karşılaştırma; resmi kaynakla doğrulanmak şartıyla.

İzlenme sayısı, algoritmik popülerlik, yüksek prodüksiyon kalitesi veya tanınmış kanal tek başına seçim ölçütü değildir. Başlık clickbait ise, kod gösterilmiyorsa, sürüm belirsizse veya video uzunluğuna göre öğrenme getirisi düşükse daha kısa ve doğrudan kaynağı seç.

#### Kullanıcıya sunum biçimi

Her video şu minimum formatla verilir:

```text
[Katman] Video başlığı — Kanal/üretici
Bağlantı: <doğrudan video URL'si>
Süre: <toplam süre>; izle: <timestamp/chapter veya tamamı>
Dil/altyazı: <bilinen durum>
Neden: <bu konu ve mevcut görev için tek cümle>
Sonrasında yap: <somut kodlama, test veya debug görevi>
Güncellik notu: <sürüm/tarih farkı varsa>
```

Video önerisi dersin sonunda pasif bir ek liste olarak bırakılmaz. `Mutlaka izle` videosundan hemen sonra küçük bir uygulama; `İzlenebilir` videodan sonra karşılaştırma veya debug; `Meraklısına` videosunda ise zorunlu olmayan bir düşünme sorusu ver.

Video izlemek veya “izledim” demek ustalık kanıtı değildir. Faz geçişi yalnız öğrencinin videodan bağımsız olarak kodu yazması, çalıştırması, test etmesi ve kullanım kararını açıklamasıyla yapılır.

### 21.1 Roadmap kapsam taraması

**Ana haritalar:**

- Genel katalog: <https://roadmap.sh/>
- Frontend: <https://roadmap.sh/frontend/>
- Full Stack: <https://roadmap.sh/pdfs/roadmaps/full-stack.pdf>
- JavaScript: <https://roadmap.sh/pdfs/roadmaps/javascript.pdf>
- TypeScript: <https://roadmap.sh/pdfs/roadmaps/typescript.pdf>
- React: <https://roadmap.sh/pdfs/roadmaps/react.pdf>
- Next.js: <https://roadmap.sh/nextjs>
- Backend: <https://roadmap.sh/pdfs/roadmaps/backend.pdf>
- API Design: <https://roadmap.sh/pdfs/roadmaps/api-design.pdf>
- SQL: <https://roadmap.sh/pdfs/roadmaps/sql.pdf>
- PostgreSQL DBA: <https://roadmap.sh/pdfs/roadmaps/postgresql-dba.pdf>
- DevOps: <https://roadmap.sh/pdfs/roadmaps/devops.pdf>
- Linux: <https://roadmap.sh/pdfs/roadmaps/linux.pdf>
- Docker: <https://roadmap.sh/docker>
- QA: <https://roadmap.sh/pdfs/roadmaps/qa.pdf>
- Cyber Security: <https://roadmap.sh/pdfs/roadmaps/cyber-security.pdf>
- Design System: <https://roadmap.sh/pdfs/roadmaps/design-system.pdf>
- System Design: <https://roadmap.sh/pdfs/roadmaps/system-design.pdf>
- Software Design and Architecture: <https://roadmap.sh/pdfs/roadmaps/software-design-architecture.pdf>
- Software Architect: <https://roadmap.sh/pdfs/roadmaps/software-architect.pdf>
- Computer Science: <https://roadmap.sh/pdfs/roadmaps/computer-science.pdf>
- Data Structures and Algorithms: <https://roadmap.sh/pdfs/roadmaps/datastructures-and-algorithms.pdf>
- AI Engineer: <https://roadmap.sh/pdfs/roadmaps/ai-engineer.pdf>
- Prompt Engineering: <https://roadmap.sh/pdfs/roadmaps/prompt-engineering.pdf>

Bu haritalardaki her düğüm ders değildir. Mentor her konuyu `çekirdek`, `uygulama`, `kavramsal farkındalık`, `ihtiyaç olunca derinleş` veya `hedef dışı` olarak sınıflandırır; faz kapıları yalnız bu dosyadaki hedeflere göre belirlenir.

### 21.2 Dil, web ve framework resmi kaynakları

- MDN Learn Web Development: <https://developer.mozilla.org/en-US/docs/Learn_web_development>
- MDN JavaScript Guide: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>
- HTML Living Standard: <https://html.spec.whatwg.org/>
- CSS specifications ve çalışma grubu taslakları: <https://www.w3.org/Style/CSS/>
- TypeScript Handbook: <https://www.typescriptlang.org/docs/handbook/intro.html>
- TypeScript TSConfig Reference: <https://www.typescriptlang.org/tsconfig/>
- Node.js API documentation: <https://nodejs.org/api/>
- Node.js event loop/blocking rehberi; yalnız blocking belirtisi ve güvenli kodlama ihtiyacı kadar `Şimdi oku`, faz/worker-pool ayrıntıları `İhtiyaç olunca derinleş`: <https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop>
- React Learn: <https://react.dev/learn>
- React API Reference: <https://react.dev/reference/react>
- React Router güncel mod seçimi: <https://reactrouter.com/start/modes>
- React Router changelog: <https://reactrouter.com/changelog>
- TanStack Router overview ve tasarım öncelikleri: <https://tanstack.com/router/latest/docs/overview>
- TanStack Router developer-experience kararları: <https://tanstack.com/router/latest/docs/decisions-on-dx>
- TanStack Router karşılaştırma tablosu; maintainer iddiası olarak rakiplerin güncel resmi dokümanıyla doğrulanır: <https://tanstack.com/router/latest/docs/comparison>
- TanStack Router type safety: <https://tanstack.com/router/latest/docs/guide/type-safety>
- TanStack Router search params: <https://tanstack.com/router/latest/docs/guide/search-params>
- TanStack Router data loading: <https://tanstack.com/router/latest/docs/guide/data-loading>
- TanStack Router'ın React Router migration checklist'i: <https://tanstack.com/router/latest/docs/installation/migrate-from-react-router>
- TanStack Router maintainer blog'u; ürün iddiası olarak okunur ve rakip doküman/deneyle çapraz kontrol edilir: <https://tanstack.com/router/latest/docs/blog>
- Next.js App Router: <https://nextjs.org/docs/app>
- Next.js Server and Client Components: <https://nextjs.org/docs/app/getting-started/server-and-client-components>
- Next.js Proxy: <https://nextjs.org/docs/app/getting-started/proxy>
- Next.js Cache Components: <https://nextjs.org/docs/app/getting-started/cache-components>
- Tailwind CSS: <https://tailwindcss.com/docs>
- shadcn/ui: <https://ui.shadcn.com/docs>
- Base UI: <https://base-ui.com/react/overview/quick-start>
- React Hook Form: <https://react-hook-form.com/get-started>
- Zod: <https://zod.dev/>
- Class Variance Authority: <https://cva.style/docs>

### 21.3 Veri, PostgreSQL ve Supabase resmi kaynakları

- PostgreSQL güncel tutorial: <https://www.postgresql.org/docs/current/tutorial.html>
- PostgreSQL SQL language: <https://www.postgresql.org/docs/current/sql.html>
- PostgreSQL concurrency control/MVCC: <https://www.postgresql.org/docs/current/mvcc.html>
- PostgreSQL indexes: <https://www.postgresql.org/docs/current/indexes.html>
- PostgreSQL performance tips ve `EXPLAIN`: <https://www.postgresql.org/docs/current/performance-tips.html>
- PostgreSQL backup/restore: <https://www.postgresql.org/docs/current/backup.html>
- Supabase local development ve migrations: <https://supabase.com/docs/guides/local-development/overview>
- Supabase local testing: <https://supabase.com/docs/guides/local-development/testing/overview>
- Supabase Auth architecture: <https://supabase.com/docs/guides/auth/architecture>
- Supabase publishable/secret API keys: <https://supabase.com/docs/guides/getting-started/api-keys>
- Supabase legacy key migration: <https://supabase.com/docs/guides/getting-started/migrating-to-new-api-keys>
- Supabase Row Level Security: <https://supabase.com/docs/guides/database/postgres/row-level-security>
- Supabase Storage security/access control: <https://supabase.com/docs/guides/storage/security/access-control>

`postgresql.org/docs/current` her zaman projenin major sürümü olmayabilir. SQL, migration, privilege veya operasyon davranışı sürüme duyarlıysa URL'deki `current` yerine kilitli major sürümün dokümanı açılır.

### 21.4 HTTP, test, güvenlik, erişilebilirlik ve performans

- HTTP Semantics — RFC 9110: <https://www.rfc-editor.org/rfc/rfc9110>
- Problem Details for HTTP APIs — RFC 9457: <https://www.rfc-editor.org/rfc/rfc9457>
- Testing Library guiding principles: <https://testing-library.com/docs/guiding-principles>
- Vitest: <https://vitest.dev/guide/>
- Playwright: <https://playwright.dev/docs/intro>
- OWASP API Security Top 10: <https://owasp.org/www-project-api-security/>
- OWASP Web Security Testing Guide: <https://owasp.org/www-project-web-security-testing-guide/latest/>
- OWASP Application Security Verification Standard: <https://owasp.org/www-project-application-security-verification-standard/>
- OWASP Cheat Sheet Series: <https://cheatsheetseries.owasp.org/>
- WCAG standard overview: <https://www.w3.org/WAI/standards-guidelines/wcag/>
- WAI-ARIA Authoring Practices Guide: <https://www.w3.org/WAI/ARIA/apg/>
- web.dev Accessibility: <https://web.dev/learn/accessibility>
- web.dev Performance: <https://web.dev/performance/>

### 21.5 AI, ödeme ve harici entegrasyonlar

- NIST AI Risk Management Framework: <https://www.nist.gov/itl/ai-risk-management-framework>
- OWASP Top 10 for LLM Applications: <https://owasp.org/www-project-top-10-for-large-language-model-applications/>
- PCI SSC hosted payment page kapsam açıklaması: <https://www.pcisecuritystandards.org/faqs/1291/>
- Stripe webhook dokümantasyonu, sağlayıcı bağımsız webhook ilkelerine somut örnek: <https://docs.stripe.com/webhooks>
- PayPal REST webhook dokümantasyonu, ikinci sağlayıcı örneği: <https://developer.paypal.com/api/rest/webhooks/rest/>
- PayPal idempotency dokümantasyonu, sağlayıcı sözleşmesi örneği: <https://developer.paypal.com/api/rest/reference/idempotency/>

AI ve ödeme entegrasyonunda gerçek seçilmiş sağlayıcının resmi authentication, signature, retry, idempotency, quota, privacy, data-retention ve sandbox dokümanları ayrıca okunmadan production kodu yazılmaz.

### 21.6 Git, delivery, container, observability ve operasyon

- Pro Git: <https://git-scm.com/book/en/v2.html>
- GitHub Actions documentation: <https://docs.github.com/en/actions>
- GitHub Actions secure use: <https://docs.github.com/en/actions/how-tos/secure-your-work>
- Docker overview: <https://docs.docker.com/get-started/docker-overview/>
- Dockerfile best practices: <https://docs.docker.com/build/building/best-practices/>
- Docker Compose: <https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-docker-compose/>
- Vercel deployments: <https://vercel.com/docs/deployments/overview>
- Vercel environments ve Custom Environment plan sınırları: <https://vercel.com/docs/deployments/environments>
- Vercel staging alternatives: <https://vercel.com/kb/guide/set-up-a-staging-environment-on-vercel>
- Vercel rollback: <https://vercel.com/docs/instant-rollback>
- OpenTelemetry concepts: <https://opentelemetry.io/docs/concepts/>
- Google Site Reliability Engineering kitapları: <https://sre.google/books/>
- C4 model: <https://c4model.com/>

### 21.7 Kaynaklardan ders üretme protokolü

Mentor yeni bir faz veya konu işlerken:

1. Hedeflenen yetkinliği ve production riskini tanımlar.
2. Roadmap haritasından komşu/önkoşul konuları tarar; gereksiz dalları eler.
3. Repodaki gerçek runtime ve paket sürümlerini tespit eder.
4. Resmi dokümandan `Şimdi oku` için sürüme uygun 1–3 hedefli bölüm ve her biri için somut kodlama çıktısı çıkarır; ileri kaynakları opsiyonel ayırır.
5. Konuya gerçekten katkı sağlayan videoları öneri anında doğrular ve üç katmanda sınıflandırır; uygun video yoksa bunu açıkça belirtir.
6. Minimum mental modelden hemen sonra kavramı küçük, gözlemlenebilir bir kod/config deneyiyle doğrulatır.
7. Ana projede gerçek bir dikey dilime uygulatır.
8. Negatif test, debug vakası, code review ve öğrenci açıklamasıyla anlayışı ölçer.
9. Kaynak URL'sini, erişim tarihini, sürümü ve önemli kararı öğrenme günlüğüne kaydettirir.
10. Doküman/video ile gözlenen davranış çelişirse reproducer kurar; varsayımı değil kanıtı günceller.

### 21.8 Teknoloji karşılaştırma çıktısı

Bir teknoloji seçimi veya “neden yenisi?” dersi sonunda öğrenci en az şu çıktıyı üretir:

- Problem/use case ve zorunlu olmayan istekler.
- Aynı abstraction seviyesindeki adaylar; farklı seviyedeki tamamlayıcı parçalar ayrıca gösterilir.
- Her aday için ürün/sürüm/mod ve maintenance durumu.
- Önceki yaklaşımda yeniden üretilen somut pain point.
- Yeni yaklaşımın resmi olarak iddia ettiği çözüm ve çalışan kanıt.
- Güncel rakibin aynı problemi bugün nasıl çözdüğü; stale karşılaştırma kontrolü.
- Type safety, runtime doğrulama, rendering/data modeli, performans, test, accessibility, security, deployment, ecosystem ve migration etkisi.
- Yeni bağımlılığın getirdiği learning curve, lock-in ve failure mode'lar.
- Seçim, reddedilen alternatif, kabul edilen risk ve yeniden değerlendirme tetikleyicisi.
- Resmi kaynak URL'leri, sürüm ve erişim tarihi.

Router örneğinde başlangıç sorusu “TanStack Router en iyi router mı?” değildir. Sorular şunlardır: Uygulama client-first SPA mı yoksa server-first full-stack mi; typed path/search state ne kadar kritik; data loading ve cache kimin sorumluluğunda; SSR/RSC/Server Function gerekiyor mu; deployment modeli nedir; mevcut Next.js mimarisinden çıkmanın maliyeti nedir? TanStack Router'ın type inference, typed navigation, search validation ve loader lifecycle güçlü yönleri resmi dokümanla incelenir; React Router'ın güncel Data/Framework modlarındaki loader/action ve type-safe route yetenekleri hesaba katılır; Next.js App Router'ın RSC ve server/rendering modeli ayrı kapsam olarak değerlendirilir. Sonuç bağlama göre verilir, evrensel kazanan ilan edilmez.

Bu kaynak listesi müfredatın yerine geçmez. Müfredatın tamamlanma kanıtı okunan sayfa veya izlenen video sayısı değil; öğrencinin bağımsız tasarım, uygulama, test, debug, açıklama ve production işletimi yapabilmesidir.
