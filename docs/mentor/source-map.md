# Mentor-AGENT — Kaynaklar ve Programın Araştırma Dayanağı

## 21. Kaynak kullanma ilkesi

**AI ile çalışma ve program tasarımı araştırması: 15 Eylül 2026.** Bölüm 21.0'daki bağlantılar bu tarihte açılıp ilgili bulgular incelendi. Diğer teknik bağlantılar önceki kaynak haritasından korunmuştur; hepsinin güncelliği bu tarihte yeniden doğrulanmış sayılmaz. Derste önce repodaki sürüm ve o sürümün ilgili resmi bölümü kontrol edilir.

Kaynak listesi okuma ödevi veya zorunlu konu envanteri değildir. Önce aktif ürün çıktısı ve K/U/F/J seviyesi belirlenir; ancak sonra kaynak seçilir. Araştırma bulgusu, sağlayıcının ürün tavsiyesi ve bu programa özel eğitim tercihi ayrı tutulur.

### 21.0 AI ile geliştirmenin güncel pratiği ve eğitim kararı

Bütün full-stack geliştiricilerin aynı biçimde çalıştığı veya AI'ın belirli işleri hatasız yaptığı varsayılmaz. Aşağıdaki farklı kanıt türleri programın yönünü destekler; süre sınırlarını veya K/U/F/J sınıflarını bilimsel olarak doğrulamaz.

| Kaynak ve tarih | İncelenen bulgu / kaynak sınırı | Bu program için çıkarım |
|---|---|---|
| [DORA — State of AI-assisted Software Development 2025](https://dora.dev/research/2025/dora-report/) | AI mevcut organizasyonun güçlü ve zayıf yanlarını büyütebilir; araç kadar çalışma sistemi önemlidir. Google Cloud araştırma programının rapor özetidir; tek öğrenci için nedensel eğitim deneyi değildir. | Görev tanımı, küçük teslim, kontrol ve geri bildirim akışını ilk günden öğret. |
| [Anthropic — Agentic coding and persistent returns to expertise, 16 Haziran 2026](https://www.anthropic.com/research/claude-code-expertise) | Yaklaşık 400 bin oturumda planlama kararları daha çok insanda, uygulama kararları daha çok agent'tadır; konu bilgisi başarılı oturumlarla ilişkilidir. Sağlayıcının kendi aracına ait gözlemsel/model sınıflandırmalı veridir; gerçek production kalitesi veya nedensellik ölçümü değildir. | Öğrencinin önceliği problem, bağlam, görev verme ve kritik çıktı incelemesi; rutin uygulama AI'a devredilebilir. |
| [GitHub — Best practices for using GitHub Copilot to work on tasks](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results) — 15 Eylül 2026 erişimi | Resmi kullanım rehberi açık kapsam, kabul kriterleri, repo talimatları ve build/test ortamını vurgular; karmaşık veya hassas görevleri ayrıca ele alır. Ürün rehberidir, bağımsız verimlilik araştırması değildir. | Öğrenci küçük görev ve beklenen kanıtı tanımlar; AI'a sınırsız, belirsiz ürün işi bırakılmaz. |
| [Anthropic — How AI assistance impacts the formation of coding skills, 29 Ocak 2026](https://www.anthropic.com/research/AI-assistance-coding-skills) | Yeni bir Python kütüphanesini öğrenen geliştiricilerle yapılan deneyde AI grubunun kavrayış sonuçları daha düşüktür; etkileşim biçimleri arasında fark görülür. Dar öğrenme görevi ve küçük alt gruplar bütün ürün geliştirmeye genellenemez; sağlayıcı araştırmasıdır. | Kodu okuma, hedefli açıklama isteme ve kritik kararı doğrulama korunur; çalışan AI çıktısı otomatik öğrenme sayılmaz. |
| [METR — Developer productivity experiment update, 24 Şubat 2026](https://metr.org/blog/2026-02-24-uplift-update/) | Daha güncel deneyi katılımcı/görev seçimi ve ölçüm sorunları nedeniyle güvenilir hız tahmini olarak sunmuyor. | "AI her işi kesin hızlandırır" varsayma; bu projedeki inceleme/düzeltme maliyetini de gözle. |
| [METR — Self-reported impact of early-2026 AI, 11 Mayıs 2026](https://metr.org/blog/2026-05-11-ai-usage-survey/) | Teknik çalışan anketi algılanan hız ile üretilen değeri ayırıyor; yanıtların büyüklüğü ve öz bildirimin güvenilirliği için sınırlar belirtiyor. | Daha fazla kod veya hızlı tamamlanmayı tek başına başarı sayma; kullanıcının işini çözen doğrulanmış çıktıyı değerlendir. |

**Program tasarım kararı:** Öğrencinin hedefi doğrultusunda rutin implementasyon yükü azaltılır; gereksinim, mimari sınır, kod okuma, review, testin anlamı ve teslim kararı öne alınır. F için 5–10 dakika ve önerilen zaman dağılımı bu programa özel başlangıç tercihidir. Gerçek öğrenme/ürün çıktısına göre uyarlanır; araştırmadan türetilmiş optimum oran iddiası yoktur.

### Dokümantasyon önerme derinliği

- **Şimdi oku:** K/U görevinin kararını, ilgili kodunu veya kontrolünü anlamak için **0–2** resmi bölüm. Her bağlantıda "hangi karar/çıktı için?" açıklaması olsun. AI uygulama ayrıntısını araştırıp özetleyebilir; öğrencinin bütün dokümanı okuması gerekmez.
- **İhtiyaç olunca derinleş:** F/J internalleri, tarihçe, alternatifler ve ileri kullanım. Aktif ödev veya geçiş koşulu değildir.
- **F:** Mevcut kısa açıklama yetiyorsa kaynak arama/okuma yükü ekleme. Öğrenci kaynak isterse dar bölüm ver.
- **J:** Gerçek tetikleyici veya açık istek olmadan araştırma dersi açma.

Sürüme bağlı API/güvenlik davranışında resmi doküman ve gerekirse çalışan deney esas alınır. Kaynağın uzun ana sayfasını okuma görevi yapma; ilgili alt başlığı seç. Bu ilke CPU/process/signal, event loop, MVCC ve cryptography gibi konularda da geçerlidir.

### Video önerme protokolü

Video yalnız kullanıcı istediğinde veya bir K/U görevini belirgin biçimde kolaylaştırdığında önerilir. F/J konularında kendiliğinden video listesi açılmaz. Hiç video önermemek normaldir; her ders sonunda video kategorileri doldurulmaz.

**Opsiyonel katmanlar:**
- **Mutlaka izle — 0 veya 1:** Etiket korunsa da bir eğitim önkoşulu değildir; yalnız mevcut işe doğrudan katkısı olan hedefli bölüm. Kaynak istenmiş fakat uygun aday yoksa `Bu konu için zorunlu video yok` de.
- **İzlenebilir — 0 veya 1:** Pekiştirme veya alternatif anlatım.
- **Meraklısına — 0 veya 1:** Talep edilen ileri kullanım/tarihçe; mevcut görevi geciktirmez.

**Öneri anında doğrulama:**
1. Doğrudan video sayfasını aç; erişilebilirlik durumunu kontrol et.
2. Başlık, üretici, yayın tarihi, yaklaşık süre ve bilinen dil/altyazı bilgisini belirle.
3. Transcript, chapter veya eşdeğer içerik kanıtıyla ilgili bölümü incele; yalnız başlık/thumbnail yeterli değildir.
4. API içeriğinde sürüm uyumunu resmi dokümanla kontrol et; yalnız izlenecek timestamp'i seç.
5. Sponsorlu/sağlayıcıya ait veya karşılaştırmada taraflı içerik için kısa not düş.
6. İncelemediğin içeriği "izledim" diye sunma; erişim veya içerik belirsizse kesin önerme.

Resmi maintainer/ürün kanalı ve birincil konferans/eğitmen içeriğine öncelik ver. İzlenme sayısı kalite kanıtı değildir.

Sunum: **doğrudan URL, başlık/üretici, süre, dil/altyazı, ilgili timestamp, seçilme nedeni ve mevcut göreve katkısı**. K/U için katkı mevcut kod/review göreviyle birleşir; video başına ayrı ödev açılmaz. Kullanıcının istediği F videosuna kod yazma görevi eklenmez. İzlenmiş olması kazanım veya geçiş kanıtı değildir.

### 21.1 Roadmap ve katalog sınırı

[Full-stack](https://roadmap.sh/full-stack), [frontend](https://roadmap.sh/frontend), [backend](https://roadmap.sh/backend) ve [software architect](https://roadmap.sh/software-architect) haritaları yalnız ihtiyaç olduğunda eksik konuya bakmak için kullanılabilir. Bu katalog bağlantıları bu revizyonda teknik doğruluk veya güncellik kanıtı olarak kullanılmadı.

Roadmap'in bütün düğümlerini müfredata taşıma. Karar sırası aktif ürün → K/U/F/J seviyesi → gerekirse kaynak şeklindedir. Geçiş ölçütü `curriculum.md` ve `delivery-and-assessment.md` içindedir.

### Teknik referans kataloğunun kullanımı

Aşağıdaki bağlantılar aranacak kaynağı bulmayı kolaylaştırır; her sayfa yalnız ilgili ihtiyaçta açılır. İleri PostgreSQL, alternatif router, container, sistem tasarımı ve entegrasyon sayfaları çoğunlukla J kapsamındadır. Bağlantının burada bulunması o aracı seçmez veya konuyu zorunlu yapmaz.

### 21.2 Dil, web ve framework resmi kaynakları

- MDN Learn Web Development: <https://developer.mozilla.org/en-US/docs/Learn_web_development>
- MDN JavaScript Guide: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>
- HTML Living Standard: <https://html.spec.whatwg.org/>
- CSS specifications ve çalışma grubu taslakları: <https://www.w3.org/Style/CSS/>
- TypeScript Handbook: <https://www.typescriptlang.org/docs/handbook/intro.html>
- TypeScript TSConfig Reference: <https://www.typescriptlang.org/tsconfig/>
- Node.js API documentation: <https://nodejs.org/api/>
- Node.js event loop/blocking rehberi; F düzeyinde kısa farkındalık; gerçek blocking sorunu olmadıkça zorunlu okuma yok, faz/worker-pool ayrıntıları J: <https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop>
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

1. Tek ürün çıktısını ve öğrencinin vereceği kararı belirle.
2. K/U/F/J etiketi ile bitiş koşulunu seç. F'yi kısa kapat; J'de tetikleyici yoksa dur.
3. K/U için gerekli sürüm ve resmi bölümü doğrula; yalnız öğrencinin incelemesi gereken 0–2 bölümü sun.
4. U uygulamasını AI yapabilir. Öğrenci ilgili kod/karar ve beklenen sonucu inceler.
5. İlgili test veya gözlemle doğrula; yalnız hata/eksik varsa hedefli debug/tekrar yap.
6. Anlamlı teknik kararın kaynağını, erişim tarihini ve sınırını kısa kaydet.
7. Dokümanla gözlem çelişirse varsayımı açıkça işaretle ve dar deneyle çöz.

Her konuya video, kasıtlı bug, karşılaştırma veya bağımsız implementasyon görevi ekleme.

### 21.8 Teknoloji karşılaştırma çıktısı

Yalnız gerçek seçimde kısa karar notu kullan:
- Ürün ihtiyacı ve kısıt.
- Aynı problemi çözen uygun seçenekler; sürüm/mod ve uyumluluk.
- Seçim gerekçesi, maliyet, güvenlik/bakım ve geri dönüş etkisi.
- Reddedilen alternatif ve yeniden değerlendirme koşulu.
- Kararı destekleyen resmi kaynak veya küçük deney.

AI araştırma ve not taslağını hazırlayabilir; öğrenci önemli kararı değerlendirir. Tarihçe, bütün özellikler, benchmark ve migration rehberi yalnız karar için gerekliyse açılır. Kaynak tüketimi yerine öğrencinin AI ile ürün geliştirme ve doğrulama katkısı değerlendirilir.
