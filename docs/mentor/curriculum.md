# Mentor-AGENT — Ana Eğitim Rotası

## 10. Ana eğitim rotası

Fazlar doğrusal bir omurgadır; eksik önkoşul varsa kısa iyileştirme döngüsü eklenir. Öğrenci kanıt sunduğunda bildiği bölüm hızlandırılabilir, fakat yalnız “daha önce kullandım” beyanıyla atlanmaz.

Bu dosyadaki maddeler bir kapsam envanteridir; her madde eşit teorik derinlikte ders veya faz kapısı değildir. Öğretim `stack-and-learning-depth.md` içindeki uygulama-merkezli sınıflandırmaya uyar. Her konuda önce projede ne işe yaradığı, nasıl kodlandığı/yapılandırıldığı, nasıl test-debug edildiği ve ne zaman kullanılacağı öğretilir. Runtime/OS internalleri, formel teori, ileri dağıtık sistemler, compiler ayrıntıları ve benzeri yüksek bilişsel yük taşıyan kısımlar gerçek bir feature/bug/güvenlik ihtiyacı yoksa sade farkındalık olarak kalır; öğrenci bunların bütün iç işleyişinden sorumlu tutulmaz.

### Faz 0 — Seviye tespiti ve çalışma sistemi

**Amaç:** Öğrencinin araç ezberinden bağımsız çalışabileceği geliştirme ortamını, temel internet mental modelini ve başlangıç beceri haritasını kurmak.

**Bilgisayar ve işletim sistemi temelleri:**

- CPU, bellek, disk, process, thread, port ve environment kavramlarının yüksek seviyeli ilişkisi.
- Absolute/relative path, çalışma dizini, dosya/klasör, uzantı, gizli dosya ve symlink farkındalığı.
- Kullanıcı, grup, dosya izinleri ve executable bit'in anlamı.
- Process listeleme, foreground/background çalışma, exit code, signal ve güvenli process sonlandırma.
- `stdin`, `stdout`, `stderr`; pipe ve redirection mental modeli.
- Environment variable, `PATH`, shell profile ve process'e miras kalma davranışı.
- Local makine, container, remote server ve cloud runtime farkı.

**Terminal ve shell:**

- `pwd`, `ls`, `cd`, `mkdir`, `touch`, `cp`, `mv`, güvenli silme yaklaşımı ve komut yardımını okuma.
- `rg`, `find`, `head`, `tail`, `less`, `wc`, `sort`, `uniq`, `cut` gibi arama ve metin inceleme araçları.
- Quoting, escaping, glob, pipe, redirect ve exit status.
- Command history, autocomplete ve exact komut/çıktı kaydetme.
- Geniş veya destructive komutlardan önce hedefi salt-okunur doğrulama.

**Git ve repository modeli:**

- Working tree, staging area/index, commit, branch, tag ve `HEAD`.
- `status`, `diff`, `add`, `commit`, `log`, `show` ve `.gitignore`.
- Küçük atomik commit ve neden-sonuç anlatan commit mesajı.
- Branch oluşturma/değiştirme; merge, rebase ve cherry-pick'in amaç farkı.
- Merge conflict'i işaretleri okuyarak çözme ve sonucu test etme.
- Remote, clone, fetch, pull ve push farkı; upstream kavramı.
- Revert ile geçmişi koruyarak geri alma; reset/restore/reflog risklerinin farkındalığı.
- Pull request ve code review yaşam döngüsünün yüksek seviyeli modeli.

**İnternet ve web temeli:**

- URL'nin scheme, host, port, path, query ve fragment parçaları.
- Domain, DNS lookup, IP, TCP bağlantısı, TLS handshake ve HTTPS'in yüksek seviyeli akışı.
- Client, server, proxy, reverse proxy, CDN, hosting ve browser rolleri.
- HTTP request/response; method, status code, header, body ve content type.
- Cookie, session, cache ve redirect için ilk mental model.
- Browser'ın HTML, CSS ve JavaScript'i alıp sayfaya dönüştürmesinin yüksek seviyeli akışı.
- Localhost, loopback, port çakışması ve process-listening ilişkisi.

**Geliştirme araç zinciri:**

- Editor navigation, symbol search, rename, format ve source-control görünümü.
- Browser DevTools: Elements, Console, Sources, Network, Application ve temel Performance paneli.
- Breakpoint, step over/into/out, watch expression ve call stack.
- Runtime, compiler/transpiler, package manager, linter, formatter, type checker, test runner ve bundler farkı.
- Node.js ve package manager sürümünü doğrulama; `package.json`, script ve lockfile'a ilk bakış.
- Production seçimi sayılmayan minimum geçici test harness'i.
- Secret içermeyen `.env.example`; gerçek secret'ın Git'e girmemesi.

**Seviye tespit kapsamı:**

- Küçük JavaScript okuma/yazma ve basit promise/`async`/`await` akışını takip etme.
- Basit TypeScript hata düzeltme ve type narrowing.
- Semantic HTML/CSS ve küçük React state görevi.
- Basit SQL sorgusu ve veri ilişkisi açıklaması.
- HTTP request inceleme, Git conflict ve kasıtlı bug teşhisi.
- Öğrencinin çözümü sözlü/yazılı açıklaması; yalnız sonuca göre seviye atamama.

**Faz görevi:**

- Küçük bir CLI “environment checker” oluştur; gerekli runtime/environment adlarını değerleri sızdırmadan kontrol et, test ekle, Git'te atomik commit'lerle ilerle ve seed edilmiş bir hatayı debug günlüğüyle çöz.

**Çıkış kapısı:**

- Öğrenci komutun ne yaptığını açıklayarak repository'yi yönetebilir.
- Bir web isteğinin temel yolunu ve geliştirme araçlarının farklı rollerini çizebilir.
- Exact hata/çıktı toplayıp ilk debug hipotezini kurabilir.
- Seviye tespit kanıtlarından kişiselleştirilmiş açıklar ve tekrar planı çıkarılmıştır.

### Faz 1 — JavaScript temeli ve çalışma modeli

**Amaç:** Framework olmadan JavaScript kodunu okuyabilmek, yazabilmek, çalışma anındaki davranışı tahmin edebilmek ve debug edebilmek.

**Dil ve runtime ayrımı:**

- ECMAScript dili; browser, Node.js ve diğer runtime API'lerinin ayrımı.
- Source code → parse → execute mental modeli; strict mode.
- Console/REPL, script dosyası ve ES module olarak kod çalıştırma.
- JavaScript sürümleri ve syntax desteğini resmi compatibility verisinden kontrol etme.

**Değerler ve tipler:**

- `undefined`, `null`, boolean, number, bigint, string ve symbol primitive'leri.
- Object, array ve function'ın referans davranışı.
- `typeof` tuhaflıkları, truthy/falsy ve nullish değerler.
- Explicit conversion ile coercion farkı.
- `==`, `===`, `Object.is` ve `SameValueZero` kullanım bağlamı.
- IEEE 754, `NaN`, infinity, precision ve para hesabında number riski.
- String, Unicode code point/grapheme ve temel encoding farkındalığı.

**Değişken, ifade ve kontrol akışı:**

- `const`, `let`; `var` ve hoisting'i legacy kodu okuyacak düzeyde bilmek.
- Lexical scope, block/function/global scope ve temporal dead zone.
- Arithmetic, comparison, logical, nullish coalescing, optional chaining ve ternary operatörler.
- `if/else`, `switch`, early return ve guard clause.
- `for`, `while`, `for...of`; `for...in` kullanım sınırı; `break` ve `continue`.
- Expression ile statement ayrımı; operator precedence'i ezberlemek yerine parantezle niyeti açıklaştırma.

**Fonksiyonlar ve çalışma bağlamı:**

- Function declaration/expression, arrow function ve callback.
- Parametre, default/rest parametre ve spread syntax.
- Return değeri, pure/impure function ve side effect.
- Lexical scope, closure ve closure kaynaklı state/memory davranışı.
- `this` bağlama kuralları; method call, explicit `call/apply/bind` ve arrow function farkı.
- Recursion, base case ve call stack.
- Higher-order function, composition ve functional programming temelleri.

**Object, collection ve veri işleme:**

- Object literal, property access, computed key, destructuring ve spread/shallow copy.
- Property existence, ownership ve enumerable kavramları.
- Prototype chain ve prototypal inheritance; class syntax'ın bunun üzerindeki rolü.
- Encapsulation, composition ve inheritance trade-off'u.
- Array oluşturma, mutation/non-mutation ve `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`.
- Stable sorting, comparator yazımı ve mutation tuzakları.
- `Map`, `Set`, `WeakMap`, `WeakSet` kullanım gerekçeleri.
- Iterator, iterable ve generator farkındalığı.
- `Date`, `Intl`, `RegExp`, typed array ve binary data için ihtiyaç temelli temel.

**Module, JSON ve API biçimli veri:**

- ES module `import`/`export`, named/default export ve module scope.
- Dependency graph, circular dependency ve side-effect import farkındalığı.
- JSON'un desteklediği tipler; parse/stringify ve kayıplı dönüşümler.
- Serialization, deep clone varsayımları ve dış veriye güvenmeme.
- API response'u domain nesnesi sanmama; validation sınırına hazırlık.

**Hata yönetimi ve debugging:**

- Syntax, reference, type, range ve custom error sınıfları.
- `throw`, `try/catch/finally`; yalnız çözebileceğin hatayı yakalama.
- Error propagation, cause ve kullanıcı mesajı/teknik detay ayrımı.
- Assertion, invariant ve defensive programming.
- Console spam yerine breakpoint, watch, call stack ve minimal reproduction.
- Memory lifecycle, garbage collection ve temel memory-leak işaretleri.
- `eval`/dinamik kod çalıştırmanın güvenlik riski.

**Asenkron JavaScript:**

- Senkron kodun önce çalıştığı, `await` sonrasının daha sonra devam ettiği ve uzun senkron işin diğer işi geciktirdiği minimum mental model.
- Callback, promise state/chaining, rejection ve `finally`.
- `async/await`'in promise modeli; sequential ve concurrent bekleme farkı.
- Event loop'u bir “bekleyen asenkron işlerin uygun olduğunda devam etmesi” modeliyle, birkaç küçük kod örneği üzerinden ele alma; task/microtask fazlarını ve bütün ordering istisnalarını ezberletmeme.
- Timer'ların garanti edilen kesin zaman olmadığı.
- `Promise.all`, `allSettled`, `race`, `any` ve hata davranışları.
- Timeout, cancellation/`AbortController`, retry ve exponential backoff temeli.
- Race condition, stale response ve unhandled rejection.

**Temel algoritmik pratik:**

- Array/string/object üzerinde arama, sayma, gruplama ve dönüşüm.
- Stack, queue, hash map ve set'i küçük problemlerle uygulama/kullanma.
- Linear ve binary search; temel sort karşılaştırmaları.
- Bir çözümün zaman ve alan maliyetini input büyüklüğüne göre açıklama.

**Faz görevi:**

- Harici framework olmadan asenkron veri işleyen teklif hesaplama modülü yaz. Decimal yaklaşımını açıkla, input'u normalize et, edge case testleri ekle ve kasıtlı stale-response/rejection hatasını debug raporuyla çöz.

**Çıkış kapısı:**

- Öğrenci callback/promise/`async`/`await` ile gerçek bir veri akışını yazabilir; sequential/concurrent kullanım, stale response ve rejection hatalarını testle ayırabilir.
- Closure, mutation, equality ve reference kaynaklı bug'ları teşhis edebilir.
- Küçük modülü boş dosyadan, testleriyle ve `any` benzeri kaçış olmadan yazabilir.

### Faz 2 — Strict TypeScript ve Node.js

**Amaç:** JavaScript runtime davranışını strict type system ile güvenli modellemek ve Node.js süreç/IO sınırlarını anlayarak küçük server/CLI programları geliştirmek.

**TypeScript araç zinciri:**

- TypeScript'in JavaScript'e ne eklediği ve runtime'da neyin kalmadığı.
- `tsc`, type checking, emit ve source map.
- `tsconfig.json`; `strict`, target, module, module resolution, lib, include/exclude ve no-emit yaklaşımı.
- `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` ve `noImplicitOverride` gibi ek sıkılaştırmaları proje etkisini ölçerek değerlendirme; açıldığında üretilen hataları kör assertion ile susturmama.
- Runtime hedefi ile DOM/Node type library ayrımı.
- Type-only import/export ve ESM uyumluluğu.
- Editor language service, compiler diagnostic ve hata kodu okuma.

**Temel type model:**

- Type inference, annotation ve contextual typing.
- Primitive, array, tuple, object, function ve readonly types.
- Optional property ile `undefined` değerinin farkı.
- Literal type, union, intersection ve discriminated union.
- Type alias ile interface farkları; declaration merging'i ihtiyaç kadar bilmek.
- Structural typing, excess-property check ve assignability.
- Top types `unknown`/`any`, bottom type `never` ve `void`.
- `null`/`undefined` güvenliği ve non-null assertion riskleri.
- `as const`, `satisfies` ve güvenli literal koruma.

**Narrowing ve boundary typing:**

- `typeof`, `instanceof`, `in`, equality ve truthiness narrowing.
- User-defined type predicate ve assertion function.
- Exhaustive switch ve `never` ile eksik durum yakalama.
- `unknown` dış veri, parse/validate/map akışı.
- Type assertion'ın doğrulama olmadığı; double assertion ve `any` kaçışının riski.
- Compile-time type ile runtime schema arasındaki zorunlu ayrım.

**Fonksiyon, generic ve ileri type araçları:**

- Function signature, optional/default/rest parametre ve callback tipi.
- Overload ile union/generic arasında seçim.
- Generic function/type/interface ve constraint.
- `keyof`, indexed access ve `typeof` type operator.
- `Partial`, `Required`, `Pick`, `Omit`, `Readonly`, `Record`, `Exclude`, `Extract`, `ReturnType`, `Parameters`, `Awaited`.
- Mapped, conditional ve template-literal type'ları okuyup gerektiğinde yazmak.
- Recursive/çok karmaşık type programlamasını gerçek fayda yoksa kullanmamak.
- Nominal ihtiyaçlarda branded/opaque type yaklaşımı farkındalığı.

**Domain modelleme:**

- DTO, input, command, domain entity, value object ve persistence row ayrımı.
- Illegal state'i union/invariant ile temsil edilemez kılma.
- Optional, nullable ve absent veriyi bilinçli modelleme.
- Para, currency, ID, timestamp ve durum geçişlerini type-safe temsil etme.
- API/database generated type'larını domain contract yerine körlemesine kullanmama.

**Node.js runtime:**

- Node process'i, V8, event loop ve worker pool ilişkisini yalnız “I/O beklerken süreç başka işe devam edebilir; uzun CPU işi isteği geciktirebilir” sonucunu destekleyen sade modelle anlatma.
- ESM ve CommonJS; `package.json` `type`, import resolution ve interoperability.
- `process.argv`, exit code, signal, environment ve graceful shutdown.
- `path`, URL ve filesystem API'leri; sync/async operasyon farkı.
- Buffer, encoding ve stream zihinsel modeli; readable/writable/transform ve backpressure.
- EventEmitter; listener lifecycle ve `error` event'i.
- Timer, promise ve I/O callback'lerinin asenkron devam ettiğini küçük kodla gözleme; kesin sıra ayrıntısını yalnız gerçek bug gerektiriyorsa araştırma.
- CPU-bound işin event loop'u bloklaması; worker/queue/başka runtime kararına hazırlık.
- Node hata modelleri: throw, rejected promise, callback error ve emitter error.
- Native `fetch`, HTTP client/server ve AbortSignal temelleri.
- Child process/worker thread'i yalnız ihtiyaç ve güvenlik sınırıyla kullanma.

**Package ve dependency yönetimi:**

- `package.json`: name/version/type, scripts, dependencies/devDependencies, engines.
- SemVer'i okuyup caret/tilde/range etkisini anlamak.
- Lockfile'ın reproducibility ve supply-chain rolü; lockfile commit etme.
- Install, clean install, script çalıştırma ve transient dependency farkı.
- Package seçerken bakım, license, boyut, güvenlik, API stability ve gereklilik değerlendirmesi.
- Lifecycle script ve bilinmeyen paketi çalıştırmanın riski.
- Dependency update, changelog, deprecation ve vulnerability değerlendirmesi.

**Node uygulama kalitesi:**

- Config'i environment'tan almak ve startup'ta doğrulamak.
- Structured error, exit code ve redakte edilmiş log.
- Temp/file cleanup, resource closure ve partial failure.
- Built-in veya geçici harness ile unit/integration test.
- CLI ergonomisi: help, invalid input, deterministic output ve signal handling.

**Faz görevi:**

- Güvensiz JSON girdisini `unknown` alan strict TypeScript CLI geliştir. Bu fazda elle type guard ile doğrula, domain modeline map et, streaming veya büyük dosya senaryosunda bellek davranışını gözle ve graceful error/exit code testleri ekle. Faz 4'te validation sınırını Zod ile karşılaştır.

**Çıkış kapısı:**

- Öğrenci type error ile runtime validation error'ı ayırabilir.
- `any`, non-null assertion veya aşırı generic kullanmadan sınırı güvenli modeller.
- Yavaşlayan bir Node akışında uzun senkron/CPU işini veya kapanmayan resource'u timing, log ve uygun araçla fark edip güvenli kodlama seçeneğini uygulayabilir; V8/libuv internallerini açıklaması gerekmez.

### Faz 3 — Web platformu, React ve component düşüncesi

**Amaç:** React abstraction'ından önce browser platformunu anlamak; ardından UI'yi declarative, erişilebilir ve test edilebilir component'lere ayırmak.

**HTML ve document semantiği:**

- Doctype, document tree, head/body, metadata, title ve language.
- Heading hiyerarşisi, landmark'lar, sectioning ve semantic element seçimi.
- Link ile button'ın davranış farkı; navigation ve action semantiği.
- List, table, figure, image, audio/video ve uygun fallback/alt text.
- Native form: label, input type, textarea, select, fieldset/legend, button ve autocomplete.
- Native constraint validation, required/pattern/min/max ve hata erişilebilirliği.
- Data attribute; ARIA'yı native semantic yerine gereksiz kullanmama.
- SEO'nun temel metadata, semantic content, crawl/index ve canonical kavramları.

**CSS temelleri ve layout:**

- Cascade, origin, specificity, inheritance ve source order.
- Box model, sizing, margin collapse, overflow ve formatting context.
- Selector, combinator, pseudo-class ve pseudo-element.
- Display türleri, normal flow, position ve stacking context/z-index.
- Flexbox eksenleri, sizing ve alignment.
- Grid tracks, areas, auto-placement ve responsive grid.
- Length unit'leri; `%`, `rem`, viewport unit, `min/max/clamp`.
- Responsive/mobile-first yaklaşım, media query ve container query farkındalığı.
- Typography, font loading, line length, color ve contrast.
- CSS custom property, design token ve cascade layer farkındalığı.
- Transition/animation ve `prefers-reduced-motion`.
- DevTools computed style/layout paneliyle CSS debug.

**Browser çalışma modeli ve Web API'leri:**

- HTML parse → DOM, CSS parse → CSSOM, render tree, layout, paint ve composite mental modeli.
- Script loading; `defer`, module ve render blocking farkındalığı.
- DOM query/create/update; text ile HTML injection farkı.
- Event propagation: capture, target, bubble; default action ve delegation.
- Form submit, `FormData`, URL/SearchParams ve browser validation.
- Fetch request/response, JSON parse, non-2xx davranışı, timeout/cancellation.
- Cookie, local/session storage ve IndexedDB'nin güvenlik/ömür farkları.
- Same-origin, CORS, CSP ve browser sandbox için ilk güvenlik modeli.
- History/navigation, focus, visibility ve temel browser lifecycle.

**React temeli:**

- Declarative UI, component, JSX ve element mental modeli.
- Functional component, props, children ve composition.
- Render purity; render ile event/effect ayrımı.
- Conditional rendering, list ve kararlı key seçimi.
- Event handler ve state update; batching ve updater function.
- Props versus state; state'i en yakın doğru sahibinde tutma.
- Derived/redundant state'ten kaçınma ve single source of truth.
- Controlled/uncontrolled form element ve lifting state up.
- Component identity; tree position ve key'in state preserve/reset davranışı.
- Immutable object/array update ve mutation kaynaklı bug'lar.

**React hooks ve state ölçekleme:**

- Hooks kuralları ve call-order nedeni.
- `useState`, `useReducer`, `useContext`, `useRef`.
- Effect'in yalnız external system synchronization için kullanılması.
- Effect dependency, cleanup, stale closure ve development double-run davranışı.
- “Effect gerekmeyebilir” durumlarını ayırt etme; event içinde yapılacak işi effect'e taşımama.
- Custom hook ile davranış paylaşımı; component/utility/hook ayrımı.
- Memoization (`memo`, `useMemo`, `useCallback`) ancak ölçülen ihtiyaçla.
- Context'in global-state çözümü olmadığı; provider kapsamı ve re-render etkisi.
- External server state ile local UI state ayrımı.

**İleri React farkındalığı:**

- Error boundary'nin kapsadığı/kapsamadığı hatalar.
- Suspense, transition ve deferred UI'nin mental modeli.
- Portal, focus yönetimi ve modal katmanı.
- Hydration ve server-rendered markup uyumsuzluğuna hazırlık.
- Legacy class component'i okuyacak kadar lifecycle bilgisi; yeni kodda varsayılan yapmama.
- Global state veya data-fetching kütüphanesini problem kanıtlanmadan eklememe.

**Test ve debugging:**

- UI'yi implementation detail yerine kullanıcı davranışı üzerinden test etme.
- Keyboard, form validation, loading, empty, error ve retry durumları.
- React DevTools component tree/profiler; re-render nedenini ölçme.
- Network request, event propagation, stale closure ve key bug'larını teşhis etme.

**Faz görevi:**

- Önce vanilla HTML/CSS/JavaScript, sonra React ile erişilebilir teklif kalemi editörü geliştir. Klavye/form davranışını koru; derived total'i gereksiz state yapma; stale closure veya yanlış key bug'ını debug edip iki yaklaşımın veri akışı farkını açıkla.

**Çıkış kapısı:**

- Öğrenci native HTML davranışını React olmadan kurabilir.
- State/effect/ref seçimlerini render modeliyle gerekçelendirir.
- Layout, network veya render sorununu doğru DevTools panelinde daraltabilir.

### Faz 4 — UI sistemi, form ve doğrulama

**Amaç:** CSS/React temellerini kaybetmeden tutarlı bir design system, büyük form akışı, runtime validation ve ölçülebilir erişilebilirlik kurmak.

**Design system temelleri:**

- Visual foundation: color, typography, spacing, radius, shadow ve motion token'ları.
- Semantic token ile ham renk/ölçü değerini ayırma.
- Component anatomy, slot, variant, size, state ve composition.
- Controlled/uncontrolled API, default değer ve ref forwarding ihtiyacı.
- Public component contract; DOM prop, event ve accessible-name davranışı.
- Story/example üzerinden normal, hover, focus, disabled, invalid, loading ve empty state.
- Breaking UI değişikliği, deprecation ve reusable component sorumluluğu.

**Tailwind CSS:**

- Utility-first yaklaşım ile CSS property bilgisini eşleştirme.
- Responsive, state, group/peer, dark-mode ve arbitrary variant kullanımı.
- Theme/design token entegrasyonu; tekrar eden magic value'ları sınırlama.
- Layout, typography, color ve spacing utility'lerini semantic HTML üzerinde kullanma.
- Class sırası ve conflict; `clsx` ile koşul, `tailwind-merge` ile kontrollü çözüm.
- Aşırı uzun/tekrarlı class setini component veya token'a çıkarma kriteri.
- Dynamic class string üretiminin build/discovery riski.
- CSS gerektiğinde normal stylesheet/custom property kullanabilme.

**shadcn/ui, Base UI ve yardımcılar:**

- shadcn/ui'nin sahip olunan kaynak kod yaklaşımı; dependency ile copy-owned code farkı.
- Headless primitive'in state/keyboard/ARIA davranışı ile görsel stilin ayrımı.
- Base UI primitive'lerini composition ve accessible contract bozulmadan özelleştirme.
- CVA ile type-safe variant; compound/default variant.
- Lucide icon'da decorative/meaningful ayrımı, accessible label ve tutarlı boyut.
- Dialog, popover, menu, tooltip, tabs, checkbox ve select için focus/keyboard davranışı.
- Üçüncü taraf component güncellemesi, local değişiklik ve regression riski.
- Motion'ı anlamı güçlendirdiğinde kullanmak; reduced-motion fallback.

**Form mimarisi:**

- Field, field group, section, wizard ve submit boundary.
- Form state: value, dirty, touched, valid, submitting ve server error.
- Controlled/uncontrolled trade-off; büyük formda render maliyeti.
- React Hook Form `register`, `Controller`, `watch/useWatch`, form state ve reset.
- Field array; kararlı kimlik, ekleme/silme/sıralama ve nested alanlar.
- Default value, edit form hydration ve draft/unsaved-change davranışı.
- Client validation ile server validation'ın aynı güven sınırı olmadığı.
- Field-level, form-level ve cross-field hata; focus/error summary.
- Async validation, duplicate submit, optimistic UI ve yarış koşulları.
- Server hata kodunu doğru alana map etme; form verisini hata halinde koruma.
- Çok adımlı form, autosave/debounce ve recovery yalnız gerçek ihtiyaçta.

**Zod ve runtime validation:**

- Schema, `parse`/`safeParse`, issue ve error formatting.
- Primitive, object, array, enum/literal, union ve discriminated union.
- Optional, nullable, default, preprocess, coerce ve transform farkı.
- Refinement/superRefine ile cross-field invariant.
- Strict object/unknown key politikası.
- Input/output type farkı ve `z.infer` kullanım sınırı.
- Client form, Server Action, Route Handler, environment ve AI output boundary'leri.
- Database constraint ile Zod kuralının farklı sorumlulukları.
- Schema composition/reuse; domain kuralını aşırı UI bağımlı hale getirmeme.
- Güvenli hata mesajı; internal schema ayrıntısını public API'ye sızdırmama.

**Erişilebilirlik ve inclusive UI:**

- WCAG 2.2'nin perceivable, operable, understandable ve robust ilkeleri.
- Native semantic first; ARIA only when necessary ve “no ARIA is better than bad ARIA”.
- Accessible name/description, label, help text ve error association.
- Mantıklı tab order, görünür focus, focus trap ve focus return.
- Keyboard interaction pattern'leri; mouse-only davranıştan kaçınma.
- Screen-reader announcement, live region ve dinamik hata/başarı mesajı.
- Color contrast, status'u yalnız renkle vermeme ve zoom/reflow.
- Touch target, responsive form ve motor/cognitive yük.
- Reduced motion ve prefers-color-scheme gibi kullanıcı tercihleri.
- Otomatik testin sınırı; keyboard ve en az temel screen-reader manuel kontrolü.

**Test ve bakım:**

- Schema unit testleri; valid/invalid/boundary/cross-field örnekleri.
- Component interaction ve keyboard testleri.
- Submit success, server validation, timeout, retry ve double-submit testleri.
- Visual/responsive manuel kontrol ve accessibility audit.
- Form performansını re-render ölçümüyle değerlendirme.

**Faz görevi:**

- Dinamik hizmet kalemleri içeren çok alanlı teklif formu ve küçük component library geliştir. RHF/Zod sınırını kur; keyboard/focus/error summary davranışlarını, framework-independent sahte server adapter'ı üzerinden server error mapping'ini, double-submit'i ve en az bir screen-reader akışını test et. Gerçek Server Action/Route Handler sınırını Faz 5'e bırak.

**Çıkış kapısı:**

- Öğrenci CSS temeli üzerinden Tailwind class'ını açıklayabilir ve gerektiğinde düz CSS'e çevirebilir.
- Form state, runtime validation ve database invariant sorumluluklarını ayırabilir.
- Headless component'i accessible contract'ı bozmadan özelleştirebilir.

### Faz 5 — Next.js App Router ve full-stack web sınırları

**Amaç:** Next.js'i “React projesi oluşturan sihirli araç” olarak değil; routing, rendering, data access, mutation ve deployment sınırları olan full-stack framework olarak kullanmak.

**Kurulum ve proje anatomisi:**

- Güncel kararlı Next.js sürümünü, Node desteğini ve App Router dokümantasyonunu doğrulama.
- Proje oluşturma, strict TypeScript, lint, import alias ve environment yapılandırması.
- `app` dizini, route segment, `page`, `layout`, `template`, `loading`, `error`, `not-found` ve global error rolleri.
- Static, dynamic ve catch-all segment; route group ile URL üretmeyen organizasyon.
- Colocation, private folder ve feature/domain bazlı kod organizasyonu.
- Public asset, font, image ve metadata dosya konvansiyonları.
- Parallel/intercepting route gibi ileri routing'i yalnız gerçek UX ihtiyacında kullanma.

**Navigation ve route davranışı:**

- `Link`, programmatic navigation ve browser history.
- Prefetch, client-side transition ve hard navigation farkı.
- Path/search parametreleri; URL'yi filtre/sayfalama state'i olarak kullanma.
- Redirect, permanent redirect, 404 ve authorization failure ayrımı.
- Route-level loading, error recovery ve retry UX.
- Son kapsam incelemesindeki Next.js 16 terminolojisinde `proxy.ts`; eski sürüm ve içeriklerdeki `middleware.ts` adının aynı request-interception problem alanına ait olduğunu bilme, kurulu sürüm dokümanını doğrulama ve bunu tam authorization yerine koymama.

**Router evrimi ve güncel alternatifler:**

- Browser History API, URL/path/search state ve route matching problemini framework API'lerinden önce anlama.
- Router library ile full-stack framework'ü ayırma: TanStack Router ve React Router'ın uygun modları bağımsız routing/data katmanı olarak kullanılabilir; TanStack Start ve React Router Framework Mode kapsamı büyütür. Next.js App Router ise routing'i Server Components, Server Functions, rendering, caching ve deployment modeliyle birlikte sunar.
- React Router'ın yalnız eski `<BrowserRouter>`/declarative kullanımından ibaret olmadığını bilme; güncel Declarative, Data ve Framework modlarını ayrı ayrı inceleme. Data Mode loader/action/pending davranışları, Framework Mode ise type-safe route module/href, code splitting ve SPA/SSR/static rendering yetenekleri sunar.
- TanStack Router'ın öne çıkardığı uçtan uca TypeScript inference, type-safe navigation, path/search-param schema validation, JSON-first search state, route loader/cache lifecycle, preloading ve TanStack Query gibi client data cache'leriyle entegrasyonu çalışan örnekle inceleme.
- “TanStack Router, React Router'ın type safety eksikliğini giderdi” gibi tarih ve sürümden bağımsız cümle kurmama. TanStack'ın tasarım önceliklerini, React Router'ın **güncel modlarıyla** aynı use case üzerinde karşılaştırma; historical motivation ile bugünkü capability'yi ayırma.
- Next.js App Router'ı yalnız client router gibi değerlendirmeme. TanStack Router'a geçişin Next.js router paketini değiştirmekten ibaret olmadığını; RSC, server data access, mutation, cache, metadata ve deployment mimarisini de yeniden kararlaştırabileceğini açıklama.
- TanStack Router'ı client-first SPA, güçlü typed URL/search state veya TanStack ekosistemiyle sıkı data lifecycle gereken bağlamlarda aday olarak; Next.js App Router'ı mevcut server-first full-stack hedefte baseline olarak değerlendirme. Son kararı “yeni/popüler” etiketine değil ürün ve runtime gereksinimine bağlama.
- Aynı `/clients?page=&sort=&filter=` akışını resmi doküman ve küçük spike üzerinden karşılaştırma: invalid URL input, type inference, pending/error state, data loader, code splitting, SSR/server sınırı, test ergonomisi, bundle/build etkisi ve migration maliyeti.

**Rendering mental modeli:**

- CSR, SSR, static generation/prerender ve streaming farkları.
- React Server Component payload, HTML preview ve hydration'ın yüksek seviyeli akışı.
- Page/layout'ların varsayılan Server Component olması ve bunun güvenlik garantisi olmaması.
- Client boundary'nin `"use client"` ile module graph'a etkisi.
- Event, state ve browser API gerektiren en küçük parçayı Client Component yapma.
- Server → Client prop'larında serialization sınırı; secret veya raw DB row taşımama.
- Server ve Client Component composition pattern'leri; provider'ı mümkün olduğunca derine koyma.
- Hydration mismatch nedenleri: zaman, random değer, browser-only API ve farklı markup.

**Veri okuma ve cache:**

- Server Component'te veri okuma, request-time auth/authorization ve DTO mapping.
- `fetch`/database client lifecycle ve duplicate request davranışı.
- Static/dynamic rendering kararını verinin tazelik ve gizlilik ihtiyacına göre verme.
- Framework sürümündeki cache default'larını resmi dokümandan kontrol etme; ezbere güvenmeme.
- Request memoization/deduplication, data cache ve client router cache gibi farklı cache katmanlarını kavramsal ayırma.
- Güncel Cache Components modelini ve `use cache`, `cacheLife`, `cacheTag`, `updateTag`, `revalidateTag`/`revalidatePath` gibi API'leri yalnız kurulu Next.js sürümünde doğrulayarak kullanma; eski sürümlerin cache davranışını yeni sürüme taşımama.
- Revalidation, tag/path invalidation, read-your-own-writes beklentisi ve stale-data riski.
- User-specific/hassas veriyi shared cache'e koymama.
- Suspense ve streaming boundary; waterfall'ı ölçme ve paralel veri okuma.
- Pagination/filtering'i server-side ve URL-driven tasarlama.

**Mutation ve server sınırları:**

- Server Function/Server Action'ın progressive enhancement ve form action modeli.
- Her action'da authentication, authorization, Zod validation ve güvenli hata sözleşmesi.
- Action'ın network üzerinden çağrılabilir mutation yüzeyi olduğunu kabul etme.
- Form state, pending state, optimistic update ve rollback trade-off'u.
- Duplicate submit, idempotency ve cache invalidation.
- Route Handler method, request/response, status, header, cookie, streaming ve raw body.
- Public mutation, webhook ve external API için Route Handler seçimi.
- Server Action ile Route Handler'ı syntax'a değil istemci/sözleşme/idempotency ihtiyacına göre seçme.
- Server-only module boundary ve accidental client import kontrolü.

**Auth, cookie ve güvenlik:**

- Cookie read/write, secure/httpOnly/sameSite/scope ve session refresh mental modeli.
- Layout/UI gizlemenin authorization olmadığı; her data access/mutation'da yeniden kontrol.
- Open redirect, CSRF/origin, CORS ve rate-limit tehditleri.
- Environment variable'ın public/client prefix ile server secret farkı.
- Error mesajı, stack trace ve framework response'unda bilgi sızıntısı.
- Security header ve CSP'ye hazırlık.

**UI, metadata ve production davranışı:**

- Metadata API; title, description, canonical, robots ve social metadata.
- Public/indexlenebilir ile auth/noindex route ayrımı.
- Image/font/script optimizasyonlarının kullanım ve güvenlik sınırları.
- Responsive server-first sayfa; public route'a gereksiz dashboard bundle'ı taşımama.
- Runtime seçimi: Node ile Edge benzeri runtime'ın API/latency/compatibility trade-off'u.
- Instrumentation, correlation ID ve framework log entegrasyonuna hazırlık.

**Test ve debugging:**

- Server/Client boundary ve accidental client bundle testi.
- Loading/error/not-found/redirect davranışları.
- Route Handler contract ve Server Action authorization negatif testleri.
- Hydration mismatch, stale cache, request waterfall ve bundle analizini araçlarla teşhis.
- Production build'i local dev davranışından ayrı doğrulama.

**Faz görevi:**

- Korumalı teklif listeleme + yeni taslak oluşturma dikey dilimi geliştir. Bu fazda in-memory/fake auth ve data adapter kullanarak framework sınırlarına odaklan; bunun production authorization veya persistence kanıtı olmadığını ADR'ye yaz. Hangi parçanın Server Component, Client Component, Server Action veya Route Handler olduğunu gerekçelendir; loading/error/empty, invalid input, other-user ve duplicate-submit testlerini ekle. Aynı liste/filter routing ihtiyacı için Next.js App Router, güncel React Router modu ve TanStack Router'ı resmi kaynaklarla karşılaştıran kısa decision note hazırla; yalnız belirsiz kalan iki iddia için bounded spike kullan. Fake adapter'ı Faz 6–7'de PostgreSQL, Supabase Auth ve RLS ile değiştir.

**Çıkış kapısı:**

- Öğrenci server/client sınırını yalnız `"use client"` syntax'ıyla değil veri, secret, interactivity ve bundle etkisiyle açıklayabilir.
- Cache/tazelik davranışını ölçüp hassas veriyi yanlış cache'lemez.
- Her read/mutation'da authorization ve runtime validation uygular.
- Next.js App Router, React Router ve TanStack Router'ı aynı kategoriye sıkıştırmadan; çözdükleri problem, type/data/rendering modeli, maliyet ve bu proje için seçim gerekçesiyle karşılaştırabilir.

### Faz 6 — SQL ve PostgreSQL

**Amaç:** ORM'den önce ilişkisel modeli ve PostgreSQL'in veri bütünlüğü/concurrency davranışını öğrenmek; doğru şema, sorgu, migration ve index yazabilmek.

**İlişkisel model ve PostgreSQL temeli:**

- Database, schema, table, row/tuple, column/attribute ve relation.
- Primary key, candidate key, foreign key ve referential integrity.
- Entity, relationship ve cardinality: one-to-one, one-to-many, many-to-many.
- PostgreSQL server/client, connection, session ve transaction ayrımı.
- `psql` ile bağlanma, yardım, describe ve güvenli sorgu çalıştırma.
- SQL'in declarative doğası ve logical query processing sırası.

**Veri tipleri ve modelleme:**

- Integer türleri, `numeric/decimal`, boolean ve text/varchar trade-off'u.
- UUID, enum/check, array ve `jsonb` kullanım sınırları.
- `date`, `time`, `timestamp`, `timestamptz`, timezone ve UTC politikası.
- NULL'un “bilinmiyor/yok” semantiği; three-valued logic.
- Default, generated/identity column ve sequence.
- Para için `numeric` + currency; API'de decimal string.
- Snapshot alan ile canlı foreign-key referansı arasında ürün trade-off'u.
- Mutable/immutable veri, audit timestamp ve optimistic `lock_version`.

**DDL ve constraint:**

- `create/alter/drop table`; şema-qualified isim.
- `not null`, `unique`, `primary key`, `foreign key`, `check`, `exclude` farkındalığı.
- `on delete/on update` cascade, restrict ve set null etkileri.
- Composite key/unique ve partial uniqueness ihtiyacı.
- Constraint'in application validation'dan daha son güvenlik/bütünlük katmanı olması.
- Constraint adı ve database error'ını güvenli domain hatasına map etme.
- View/materialized view ve security davranışı farkındalığı.

**DML ve sorgu dili:**

- `select`, `insert`, `update`, `delete`, `returning`.
- Projection, alias, expression, `where`, `order by`, `limit` ve offset.
- Inner/left/right/full/cross/self join; yanlış join ile row multiplication.
- `group by`, `having`, aggregate ve NULL davranışı.
- `case`, `coalesce`, `nullif`, string/date/numeric fonksiyonları.
- Subquery, correlated subquery, `exists` ve set operations.
- CTE ve recursive CTE farkındalığı; CTE'yi otomatik performans çözümü sanmama.
- Window function: partition/order/frame, row number, rank, lead/lag ve running total.
- Upsert/`on conflict` ve unique constraint ilişkisi.
- Safe parameterization; string concatenation ile SQL üretmeme.

**Şema tasarımı:**

- Functional dependency ve normalization: 1NF, 2NF, 3NF/BCNF sezgisi.
- Denormalization'ı yalnız ölçülmüş read/performance ihtiyacında değerlendirme.
- Domain invariant'ı doğru katmana yerleştirme.
- Surrogate versus natural key.
- Polymorphic association ve generic JSON blob antipattern'leri.
- Soft delete, hard delete, archive ve retention trade-off'u.
- State machine'i tek string alan yerine tutarlı invariant'larla modelleme.
- Append-only event/audit tablo ile mutable aggregate ayrımı.

**Transaction, MVCC ve concurrency:**

- ACID'i kullanıcıya yarım kalmış veya çelişkili veri göstermeme gibi pratik sonuçlarla açıklama.
- `begin`, `commit`, `rollback` ve gerektiğinde savepoint'i gerçek mutation kodunda kullanma.
- PostgreSQL MVCC/snapshot modelini “aynı anda çalışan işlemler farklı veri görünümü görebilir” sonucunu anlayacak kadar sade tutma; tuple/version internallerine girmeme.
- Read Committed, Repeatable Read ve Serializable seviyelerini yalnız proje senaryosu ve gözlenen davranış üzerinden seçme.
- Lost update'i kod/test ile gösterme; write skew, dirty/non-repeatable/phantom read terimlerini tanıma ve gerektiğinde resmi kaynağa yönelme.
- `select ... for update`, lock scope ve tutarlı lock sırasını ihtiyaç olan mutation'da uygulama.
- Deadlock belirtisini tanıma, transaction'ı kısa tutma, tutarlı sıra ve güvenli retry uygulama; lock-manager internallerini öğretmeme.
- Optimistic concurrency ile pessimistic lock trade-off'u.
- Atomic counter, quota reservation ve first-terminal-decision gibi yarışlar.
- Transaction içinde external network çağrısı yapmanın riski.

**Index ve query performance:**

- Index'in read hızına karşı write/storage maliyeti.
- B-tree; hash, GIN, GiST ve BRIN'i kullanım alanı düzeyinde tanıma.
- Single/multicolumn index; leftmost prefix ve column order.
- Unique, partial, expression ve covering/index-only yaklaşımı.
- Foreign key ve RLS predicate kolonlarını indeksleme.
- Sargability, selective predicate ve function-on-column tuzakları.
- `EXPLAIN` ile plan tahmini; güvenli test verisinde `EXPLAIN (ANALYZE, BUFFERS)` ile gerçek süre, row farkı, buffer hit/read, scan, join ve cost okuma.
- Planner statistics, `ANALYZE`, slow query ve N+1 problemi.
- Offset ile keyset/cursor pagination trade-off'u.
- Index eklemeden önce gerçek query ve plan ölçme.

**PostgreSQL operasyon farkındalığı:**

- WAL, checkpoint, vacuum/autovacuum ve table bloat'ın yüksek seviyeli modeli.
- Role, ownership, grant/revoke, default privilege ve connection limit.
- Connection pool ve transaction-pooling sınırlamaları.
- Backup ile restore'un farklı olduğu; restore provası gereği.
- Replication, read replica, partitioning ve sharding'i ihtiyaç tetikleyicileri düzeyinde bilmek.
- DBA derinlikleri (Patroni, kernel tuning, physical replication) production ihtiyacı oluşana kadar stretch'tir.

**Migration:**

- Version-controlled, ileri doğru ve yeniden oynatılabilir migration.
- Clean database üzerinde migration + seed testi.
- Expand → backfill → switch → contract sırası.
- Büyük tabloda lock/scan/rewrite etkisi; nullable/backfill/not-null geçişi.
- Transactional ve non-transactional migration farkı.
- PostgreSQL'de `CREATE INDEX CONCURRENTLY` gibi operasyonların transaction-block sınırını ve başarısız/invalid index temizliğini bilme; migration aracının transaction varsayımını doğrulama.
- Data migration'da batch, resumability ve idempotency.
- Destructive değişiklikte backup, verification ve forward-fix/rollback kararı.
- Schema drift'i önleme; production'da elle değişiklik yapmama.

**Faz görevi:**

- Teklif, bölüm, kalem, view ve response çekirdek şemasını raw SQL migration olarak yaz. Constraint negatifleri, concurrent accept/reject yarışı, duplicate event, para/toplam ve keyset pagination testleri ekle; kritik sorgular için `EXPLAIN ANALYZE` raporu çıkar.

**Çıkış kapısı:**

- Öğrenci şemayı normalization, invariant ve sorgu ihtiyacıyla savunabilir.
- Transaction/isolation/lock seçimini gerçek yarış senaryosunda test edebilir.
- Index önerisini query plan kanıtıyla yapar; ORM olmadan sorguyu anlayabilir.

### Faz 7 — Supabase, Auth, RLS ve Storage

**Amaç:** Managed backend kolaylığının güven sınırlarını anlayarak Auth, PostgreSQL RLS, Storage ve migration'ları least-privilege biçimde uygulamak.

**Platform ve local workflow:**

- Supabase'in PostgreSQL, Auth, Data API, Storage, Realtime ve Edge Functions parçaları.
- Managed hizmet ile self-hosted PostgreSQL sorumluluk farkı.
- CLI kurulumu, Docker-compatible local stack, `supabase init/start/stop/status`.
- `config.toml`, migration, seed ve local-only geçici dosyaların repository rolleri.
- `db reset`, `migration new/up/list`, `db diff/pull/push` ve hedef local/linked ayrımı.
- Generated migration'ı review etme; dashboard değişikliğini migration'a yakalama.
- Generated TypeScript types ve bunların domain model olmadığı.
- Local/preview/staging/production proje ve secret izolasyonu.

**Client ve environment sınırları:**

- Browser client, user-session taşıyan server client ve ayrı privileged admin client'ın farklı yetkileri.
- Varsayılan olarak public ortamlarda kullanılabilen publishable key (`sb_publishable_...`) ile yalnız güvenilir server'da tutulabilen secret key (`sb_secret_...`) ayrımı.
- Legacy `anon`/`service_role` API key adlarını yalnız mevcut proje migration'ı ve eski içerikleri okuyabilmek için tanıma; bunları built-in PostgreSQL `anon`, `authenticated` ve `service_role` rollerinin adlarıyla karıştırmama.
- Cookie tabanlı SSR session; request başına doğru client lifecycle.
- Server Component/Action/Route Handler içinde doğrulanmış user/claims kullanma.
- Client'tan gelen user ID veya plan bilgisini authorization kaynağı saymama.
- Connection string, Data API ve direct database connection kullanım farkı.

**Authentication:**

- Sign-up, email confirmation, login, logout ve password reset.
- Session, access token, refresh token, expiry, refresh ve revoke.
- JWT header/payload/signature mental modeli; payload'ın gizli olmadığı.
- User identity ile public profile verisinin ayrımı.
- Cookie flag, redirect allowlist ve auth callback güvenliği.
- Password policy, brute-force/rate-limit ve email enumeration riskleri.
- Session fixation/hijack, logout-all-sessions ve account deletion senaryoları.
- MFA, social login ve SSO'yu ihtiyaç/ürün kararı düzeyinde tanıma.

**Authorization, grants ve RLS:**

- Authentication ile authorization'ı her akışta ayrı soru olarak sorma.
- PostgreSQL role/privilege (`GRANT/REVOKE`) ile RLS row filter'ın iki ayrı katman olması.
- Platform sürümü/proje oluşturma tarihine göre default grant davranışını resmi dokümandan doğrulama; varsayıma güvenmeme.
- Exposed schema ve dedicated/private schema trade-off'u.
- `enable row level security`; policy `TO`, command, `USING` ve `WITH CHECK`.
- Birden çok policy'de permissive policy'lerin `OR`, restrictive policy'lerin `AND` ile birleştiğini doğrulama; karmaşık birleşimleri truth table ve negatif testle kanıtlama.
- Table owner bypass davranışı ve gerektiğinde `FORCE ROW LEVEL SECURITY`; service/superuser istisnalarını açıkça modelleme.
- SELECT, INSERT, UPDATE ve DELETE policy davranışları; UPDATE için gereken read erişimi.
- PostgreSQL `anon` rolü ile Supabase Auth içindeki anonim kullanıcının aynı şey olmadığını bilme; actor test matrisinde role ve claim'i ayrı gösterme.
- Owner, other authenticated user, unauthenticated request (`anon` database role), privileged secret-key/service actor, webhook ve AI actor matrisi.
- Parent ownership üzerinden child-table policy ve performance etkisi.
- RLS'in column-level authorization olmadığı; kritik kolonda grant/safe server operation.
- `auth.uid()`, trusted claims ve değiştirilebilir user metadata riski.
- View'da invoker/owner davranışı; function execute privilege ve `search_path`.
- `SECURITY DEFINER` fonksiyonunu yalnız zorunlu durumda, explicit auth ve dar grant ile kullanma.
- Secret-key ile yetkilenen `service_role` actor'ünün RLS bypass etkisi; purpose-scoped client/module ve minimum veri erişimi.

**RLS tasarımı ve test:**

- Önce reddedilmesi gereken case'leri yazma: cross-tenant read/write, forged owner ID, anon direct access.
- Her tablo ve command için actor × operation matrisi.
- JWT claim simülasyonu ve database-level RLS testi.
- pgTAP veya seçilen eşdeğerle table/constraint/policy testleri.
- Policy query planı, predicate/FK index ve recursive policy riskleri.
- Data API'de raw table yerine gerektiğinde minimum RPC/DTO boundary.
- Schema/grant/RLS değişikliğinin temiz migration'dan test edilmesi.

**Storage ve dosya güvenliği:**

- Bucket, object metadata ve actual object ayrımı.
- Public/private bucket ve owner path convention.
- Storage RLS; INSERT/SELECT/UPDATE/DELETE operasyonlarının ayrı gereksinimleri.
- Signed upload/download URL, TTL, replay ve revoke beklentisi.
- Uzantı/MIME'a kör güvenmeme; magic byte, allowlist, byte ve image dimension sınırı.
- SVG/HTML/polyglot, decompression bomb ve active-content riski.
- Filename normalizasyonu; path traversal ve overwrite önleme.
- Metadata/EXIF temizliği ve PII minimizasyonu.
- Upload → verify → DB path swap → old-object cleanup akışı.
- Partial failure, orphan cleanup, concurrent upload ve account-delete testleri.

**Supabase ürün farkındalığı:**

- Edge Function'ın server-side kullanım alanı ve runtime farkı.
- Realtime, database webhook, cron/queue ve extension'ları yalnız kanıtlanmış ihtiyaçta ekleme.
- Auth/Storage/Database backup kapsamlarının farklı olabileceğini doğrulama.
- Platform quota, connection limit, breaking change ve changelog kontrolü.

**Faz görevi:**

- Profiles/clients/proposals için migration + explicit grant + RLS matrisi kur. İki kullanıcı, anon ve dar server actor'la negatif testleri geçir; SSR auth/session akışı ve private logo upload/signed URL/cleanup senaryosunu uygula.

**Çıkış kapısı:**

- Öğrenci publishable key'in neden secret olmadığını; secret key'in neden yalnız server'da kalması gerektiğini ve legacy key adlarıyla database rollerinin neden farklı kavramlar olduğunu açıklayabilir.
- Grant, RLS, server authorization ve UI görünürlüğünü ayrı katmanlar olarak test eder.
- Cross-user erişimi ve Storage ownership açığını bağımsız teşhis edebilir.

### Faz 8 — Backend sözleşmeleri ve ürün çekirdeği

**Amaç:** Framework route'larından bağımsız domain sınırları, güvenli API sözleşmeleri, tutarlı mutation'lar ve failure-aware backend tasarlamak.

**Gereksinimden domain modeline:**

- User story/use case, acceptance criteria ve invariant çıkarma.
- CRUD endpoint ile “publish proposal”, “accept proposal” gibi domain operation farkı.
- Entity, value object, aggregate, service ve policy kavramlarını ihtiyaç kadar kullanma.
- Lifecycle/state machine; allowed transition, guard ve terminal state.
- Command ile query ayrımı; side effect ve transaction boundary.
- Domain model, persistence row, input DTO, public DTO ve view-model mapping.
- Business rule'u yalnız UI veya database trigger'a gizlememe.

**Modül ve katman sınırları:**

- Route/UI, application/use-case, domain ve infrastructure sorumlulukları.
- High cohesion, low coupling ve dependency direction.
- Repository/adapter pattern'i yalnız testability veya provider sınırı sağlıyorsa kullanma.
- Framework/database tiplerini domain'in her yerine sızdırmama.
- Server-only module ve public export yüzeyi.
- Transaction script ile zengin domain model arasında karmaşıklığa uygun seçim.
- Modular monolith içinde feature/domain bazlı ownership.

**HTTP ve API tasarımı:**

- Resource/operation isimlendirme; method safety ve idempotency semantiği.
- Status code sınıfları; 200/201/202/204, 400/401/403/404/409/422/429 ve 5xx ayrımı.
- Request/response content type, header, cookie ve cache davranışı.
- Stable error code, kullanıcı mesajı, field error ve correlation ID sözleşmesi; HTTP API'lerinde uygun olduğunda RFC 9457 Problem Details biçimini değerlendirme.
- Input allowlist, mass-assignment koruması ve output DTO allowlist.
- Pagination: offset/cursor; deterministic sort ve tie-breaker.
- Filtering, sorting, search ve query validation.
- API versioning/compatibility ve additive/deprecating değişiklik.
- OpenAPI benzeri machine-readable contract'ı ihtiyaç halinde değerlendirme.
- REST dışı GraphQL/gRPC/SSE/WebSocket'i kullanım problemi düzeyinde tanıma; varsayılan eklememe.

**Mutation tutarlılığı:**

- Runtime validation → authentication → authorization → invariant → transaction → side effect sırası.
- Optimistic concurrency/version check ve conflict response.
- HTTP tabanlı optimistic concurrency için `ETag`/`If-Match` ve `412 Precondition Failed` semantiğini farkındalık düzeyinden uygulama düzeyine taşıma.
- Row lock, unique constraint ve compare-and-set.
- Idempotency key'in actor/operation scope'u, canonical request fingerprint'i, payload binding'i, atomic storage'ı, response replay'i ve expiry davranışı; aynı anahtar-farklı payload durumunu açık conflict olarak reddetme.
- Aynı isteğin retry edilmesi ile farklı isteğin duplicate olması ayrımı.
- At-least-once delivery ve inbox/event table.
- External API çağrısında timeout, retry budget, exponential backoff ve jitter.
- Retry edilebilir/edilemez hata sınıfları; retry storm riski.
- Outbox, background job, saga/compensation'ı yalnız cross-boundary ihtiyaçta kullanma.

**Public token ve trust boundary:**

- Capability token'ın taşıdığı yetki ve paylaşılma riski.
- Cryptographic randomness, selector/verifier, hash/HMAC ve constant-time comparison kavramları.
- Token'ı plaintext log/database'de tutmama; key version/rotation.
- Expiry, revoke, regeneration ve replay davranışı.
- Public resolver'ın status, token, rate-limit ve minimum DTO doğrulaması.
- Enumeration, timing, referer/cache/search-index ve screenshot/share riski.
- Public response/mesajda nonce/idempotency ve first-terminal-decision.

**Data access ve query davranışı:**

- N+1 sorgu, over-fetching ve raw row leakage.
- Transaction'a ait tüm read/write'ları aynı consistency sınırında tutma.
- Pagination/filter için index contract.
- Derived total, aggregate counter ve event log tutarlılığı.
- Cache-aside, invalidation ve stale read'i ancak ölçülen ihtiyaçta ele alma.
- DTO mapping sırasında PII/secret/internal status redaction.

**Transactional e-posta ve bildirim teslimi:**

- Transactional e-posta ile marketing/bulk iletişimin amaç, consent ve unsubscribe yükümlülüklerini ayırma; hukuki ayrıntıda ilgili uzman incelemesi isteme.
- Domain event/use-case ile sağlayıcı SDK'sı arasına dar bir message-delivery adapter'ı koyma; sağlayıcı seçimini delivery, region/data handling, maliyet, API/SDK kalitesi ve exit cost ile ADR'ye bağlama.
- From, reply-to, envelope sender, verified domain ve SPF/DKIM/DMARC'ın deliverability/anti-spoofing rollerini kavramsal olarak anlama; DNS değişikliğini resmi sağlayıcı rehberiyle doğrulama.
- Version-controlled subject/plain-text/HTML template, localization, escaping, accessible markup ve absolute-link üretimi.
- E-posta içeriğinde PII minimizasyonu; secret, raw token ve hassas teklif içeriğini gereksiz taşımama. Paylaşım linkinin capability riskini ürün kararına dahil etme.
- Database transaction içinde senkron e-posta göndermeme; outbox/job, at-least-once delivery, stable message idempotency key, timeout, bounded retry, exponential backoff ve dead-letter/manual recovery.
- Accepted/delivered/deferred/bounced/complained durumlarının farklı olduğu; provider webhook imzası, duplicate/out-of-order event ve suppression list davranışı.
- Bounce, complaint, delivery latency, failure rate ve queue age metric'leri; alarm ve runbook.
- Local/Preview ortamında provider sandbox, fake inbox veya sink kullanma; gerçek müşteriye test e-postası göndermeme.
- Template snapshot/render testi, malicious input/escaping testi, adapter contract testi ve retry/webhook state-machine testi.

**Resilience ve hata modeli:**

- Timeout, cancellation, partial failure ve graceful degradation.
- Bulkhead/circuit-breaker kavramları; gereksiz library eklememe.
- Manual fallback ve feature degradation.
- Health check ile business transaction başarısını ayırma.
- Dependency failure'ın public page'i gereksiz yere düşürmemesi.
- Güvenli log ve metric için operation/error taxonomy.

**Faz görevi:**

- Draft → publish → revoke ve pending → accepted/rejected state machine'ini application service içinde uygula. Token resolver, minimum public DTO, cursor pagination, optimistic lock ve idempotent public response ekle. Teklif daveti için fake e-posta adapter'ı + outbox/retry modeli kur; forged token, duplicate/concurrent terminal karar ve duplicate delivery testlerini geçir.

**Çıkış kapısı:**

- Öğrenci route handler'dan bağımsız use-case ve invariant yazabilir.
- Duplicate/retry/concurrency durumunda database-backed doğruluk sağlayabilir.
- Public/internal veri yüzeyini DTO ve threat boundary üzerinden ayırır.
- Transactional e-postayı database transaction'ından ayırır; duplicate, bounce ve provider outage davranışını açıklayıp test eder.

### Faz 9 — İleri test, debugging ve CI mühendisliği

**Amaç:** Testi coverage yüzdesi değil risk geri bildirimi olarak tasarlamak; frontend, backend, database ve CI hatalarını sistematik biçimde teşhis etmek.

**Test stratejisi:**

- Test piramidi/trophy modellerini dogma değil feedback speed ve risk üzerinden değerlendirme.
- Unit, component, integration, contract, E2E ve production smoke sınırları.
- Database/RLS, migration, security, accessibility, performance ve load testlerinin özel amaçları.
- Hangi davranışın hangi katmanda en ucuz ve güvenilir test edileceği.
- Kritik kullanıcı yolculuğu, trust boundary ve data-loss riskinden test matrisi çıkarma.
- Positive, negative, boundary, empty, malformed, unauthorized, timeout ve concurrency case'leri.
- Risk-based test önceliği; düşük değerli snapshot/implementation-detail testinden kaçınma.

**Test case tasarımı:**

- Arrange–Act–Assert ve Given–When–Then.
- Equivalence partitioning, boundary-value analysis ve decision table.
- State-transition ve actor × operation matrisi.
- Table-driven/parameterized test.
- Property-based/fuzz/mutation testing'i ihtiyaç ve risk düzeyinde tanıma.
- Regression testini bug düzeltmesinden önce kırmızı hale getirme.
- Deterministic clock, random, locale, timezone ve ID kontrolü.
- Assertion mesajı ve başarısızlık çıktısının teşhis edilebilirliği.

**Test isolation ve doubles:**

- Dummy, stub, spy, mock ve fake farkı.
- Contract sahibi olmayan third-party detayını aşırı mock'lamama.
- In-memory fake'in gerçek PostgreSQL/RLS davranışını temsil etmediği.
- Fixture, factory, builder ve seed data; testler arası data izolasyonu.
- Network virtualization veya fake provider ile error/timeout/rate-limit senaryosu.
- Test cleanup, transaction rollback ve paralel test çakışması.
- Brittle selector, fixed sleep ve global mutable state antipattern'leri.

**Katmanlara göre kapsam:**

- JavaScript/TypeScript unit: validation, money, state machine, token ve redaction.
- React component: kullanıcı rolü, label, keyboard, focus ve async state.
- Next integration: Server Action/Route Handler auth, validation, cache invalidation ve error mapping.
- PostgreSQL/Supabase: constraint, transaction, migration ve tam RLS actor matrisi.
- E2E: auth → onboarding → teklif → publish → public response; gerçek browser davranışı.
- AI/payment adapter contract ve sandbox/fake-provider failure senaryoları.
- Deployment smoke: auth, public resolver, critical mutation ve degraded dependency.

**Production test araçlarını seçme:**

- Node/TypeScript/React/Next/PostgreSQL uyumluluğu.
- Watch speed, isolation, coverage, ESM ve source-map desteği.
- Browser engine, trace/video/screenshot ve parallelization.
- RLS/database desteği ve local stack entegrasyonu.
- Maintainer health, release stability, documentation ve CI maliyeti.
- En az iki adayla küçük spike; kararın ADR'ye yazılması.

**Debugging araçları ve katmanları:**

- Reproduce, minimize, hypothesize, experiment ve root-cause protokolü.
- Stack trace'i ilk uygulama frame'ine kadar okuma; error cause chain.
- Source map, breakpoint, conditional breakpoint, watch ve call stack.
- Browser Console/Network/Storage/Performance/Memory ve accessibility tree.
- React DevTools profiler ve render nedenleri.
- Node inspector, heap snapshot, CPU profile, event-loop delay ve open handle.
- PostgreSQL log, constraint code, `EXPLAIN ANALYZE`, `pg_stat_activity`, lock/deadlock görünümü.
- Git `log`, `show`, `diff`, `blame` ve `bisect` ile regression arama.
- Environment/config drift ve “local works, CI fails” teşhisi.
- Production issue'da correlation ID, structured log ve metric üzerinden iz sürme.

**Flaky test teşhisi:**

- Race, leaked state, order dependence, time/random, network ve resource starvation.
- Fixed sleep yerine observable condition bekleme.
- Retry'nin semptomu maskeleyebileceği; quarantine + owner + fix planı.
- CI ile local runtime/version/environment farkını yeniden üretme.
- Test süresi, shard/parallelism ve shared database kaynak çakışması.

**CI ve quality gate:**

- Trigger, job, step, runner, dependency cache ve artifact kavramları.
- Reproducible clean install; pinned runtime ve lockfile.
- Format/lint, strict type-check, unit, integration, migration, build ve E2E sırası.
- Fail-fast ile teşhis edilebilir artifact/log dengesi.
- Secret/permission minimizasyonu; untrusted pull request ve dependency script riski.
- Database service/local Supabase, migration + synthetic seed.
- Test report, coverage, trace/screenshot ve build artifact saklama.
- Branch protection ve required checks.
- Coverage'ı hedef değil risk sinyali saymak; critical path/branch boşluğunu incelemek.
- Dependency/secret scanning ve supply-chain kontrolleri.

**Faz görevi:**

- Production test araçları için iki adaylı spike ve ADR hazırla. Teklif akışının risk-based test matrisini kur; seed edilmiş frontend state, async Node, RLS/concurrency ve cache bug'larını bul. Her biri için kırmızıdan yeşile regression testi, root-cause raporu ve CI artifact'i üret.

**Çıkış kapısı:**

- Öğrenci test türünü ezbere değil failure riskine göre seçer.
- Flaky/slow testin kök nedenini izole edebilir.
- CI ile local arasındaki farkı reproducible kanıtla açıklayabilir.

### Faz 10 — Güvenlik, observability, performans ve erişilebilirlik

**Amaç:** Güvenlik, gözlemlenebilirlik, performans ve erişilebilirliği sonradan eklenen polish değil; production doğruluğunun ölçülen parçaları haline getirmek.

**Threat modeling:**

- Asset, actor, entry point, data flow, trust boundary ve abuse case.
- Authentication boundary, authorization decision ve privileged component.
- Data classification: public, internal, personal/PII, secret ve payment-sensitive.
- STRIDE gibi tehdit kategorilerini checklist değil soru üretme aracı olarak kullanma.
- Attack surface ve least privilege.
- Risk = olasılık × etki; severity, exploitability ve remediation priority.
- Mitigation, detective control, residual risk ve risk acceptance.
- Yeni feature/data flow için threat model güncelleme.

**Web ve API güvenliği:**

- OWASP web/API riskleri: broken object-level/function/property authorization, broken authentication, resource consumption, misconfiguration, injection ve unsafe API consumption.
- OWASP ASVS gibi doğrulanabilir kontrol kataloglarını güvenlik kabul kriteri ve review checklist'i üretmek için kullanma; bunu tehdit modelinin yerine koymama.
- IDOR/BOLA: her object ID erişiminde owner/tenant/role kontrolü.
- Mass assignment ve excessive data exposure; explicit input/output allowlist.
- SQL injection ve parameterized query; dynamic identifier allowlist.
- XSS türleri; React escaping sınırı, unsafe HTML, URL ve DOM sink'leri.
- Output encoding ile sanitization farkı; rich-text ihtiyacında vetted sanitizer.
- CSRF threat model; same-site cookie, Origin/Referer ve anti-CSRF yaklaşımı.
- CORS'un authorization olmadığı; origin/method/header allowlist.
- CSP, security header, clickjacking/frame ve MIME sniffing koruması.
- SSRF, open redirect, path traversal, command injection ve unsafe deserialization.
- Request smuggling/proxy-header trust risklerini farkındalık düzeyinde tanıma.
- Error/stack/constraint detayını client'a sızdırmama.

**Authentication ve session güvenliği:**

- Password işini managed Auth'a bırakırken password policy, reset ve enumeration riskini anlamak.
- Session/token generation, storage, expiry, refresh, rotation, revoke ve logout.
- Cookie `Secure`, `HttpOnly`, `SameSite`, path/domain scope.
- JWT payload'ın şifreli olmadığı; signature/issuer/audience/expiry validation.
- Session fixation, hijacking, replay ve concurrent-session kararları.
- Brute force, credential stuffing, rate limit ve step-up/MFA farkındalığı.
- Authentication başarısının authorization veya current entitlement garantisi olmadığı.

**Token, cryptography ve secret güvenliği:**

- Entropy, cryptographically secure random ve tahmin edilemez token.
- Hash ile HMAC farkı; salt/key ve rotation kavramları.
- Constant-time comparison; kendi crypto primitive'ini yazmama.
- Secret inventory, scope, owner, environment, rotation ve revoke.
- Secret'ı source, client bundle, URL, log, analytics veya error tracking'e koymama.
- `.env.example`, secret manager ve short-lived credential.
- Dependency/lifecycle script, typosquatting, compromised package ve lockfile supply-chain riski.
- Secret scanning, dependency advisory, SBOM/provenance farkındalığı.

**Abuse, rate limit ve dosya güvenliği:**

- User, IP-derived privacy-safe key, token, endpoint ve maliyet bazlı limit farkı.
- Fixed/sliding window, token/leaky bucket kavramları.
- Distributed rate limit'te atomicity ve fail-open/fail-closed kararı.
- Bot, enumeration, scraping, spam ve cost-amplification abuse case'leri.
- Upload byte/type/dimension doğrulaması; decompression/polyglot/active-content riski.
- Private object, signed URL, TTL ve authorization tekrar kontrolü.

**Privacy ve veri sorumluluğu:**

- Data inventory, amaç sınırlaması, minimization, consent/lawful-basis sınırı ve retention.
- Data processor/subprocessor ve yurtdışı aktarım gibi konularda profesyonel hukuk incelemesi gereği.
- Account deletion, export, backup TTL ve legal hold kararları.
- Analytics/error tool'a minimum event/PII gönderme.
- IP, user-agent, AI prompt/output ve customer message gibi veriler için açık politika.
- KVKK metni yazmakla teknik uyumun tamamlanmadığını bilmek.

**Structured logging:**

- Log level, timestamp, environment, service/version, operation ve outcome.
- Correlation/request ID; aynı akışı katmanlar arasında izleme.
- Stable error code; stack trace ile kullanıcı mesajı ayrımı.
- Pseudonymous user/entity identifier ve allowlist metadata.
- Token, secret, email, teklif metni, müşteri mesajı, ham IP ve payment payload redaction.
- JSON/structured log ve searchable field; free-text log sınırı.
- Log injection ve untrusted string sanitization.
- Retention, access control ve sampling.

**Metrics, traces ve health:**

- Log, metric, trace ve event'in farklı soruları cevaplaması.
- Counter, gauge, histogram ve percentile.
- Traffic, error, latency ve saturation/golden signals.
- p50/p95/p99; average'ın tail latency'yi saklaması.
- SLI, SLO, error budget ve kullanıcı etkisine bağlı alarm.
- Trace/span, context propagation ve external dependency segmentleri.
- High-cardinality label ve PII riski.
- Liveness/readiness/dependency health; public endpoint'te detay sızdırmama.
- Actionable alarm, owner, threshold, runbook ve alert fatigue.

**Frontend performance:**

- Lab versus field/RUM ölçümü.
- Core Web Vitals: LCP, INP ve CLS; metric'in kullanıcı deneyimi anlamı.
- Network waterfall, critical request, compression, cache ve CDN.
- JavaScript bundle, code splitting, lazy loading ve third-party script maliyeti.
- Server-first rendering ve hydration/client-JS bütçesi.
- Image format/size/srcset/dimension; font loading ve layout shift.
- Render, style, layout, paint ve composite maliyeti.
- Long task, event handler ve unnecessary re-render.
- Performance budget ve regression measurement.

**Backend/database performance:**

- Throughput, concurrency, latency ve saturation.
- Event-loop blocking, connection pool exhaustion ve memory leak.
- Query count, N+1, slow query, missing/unused index ve lock wait.
- Cache adayını read pattern/staleness/invalidation üzerinden değerlendirme.
- Pagination, payload size, compression ve serialization maliyeti.
- Load, stress, spike ve soak test farkı.
- Backpressure, timeout budget ve graceful degradation.
- Optimize etmeden önce profile/measure; değişim sonrası yeniden ölçme.

**Erişilebilirlik doğrulaması:**

- WCAG 2.2 AA acceptance criteria ve POUR ilkeleri.
- Automated scan + keyboard + screen reader/assistive-technology test birleşimi.
- Accessibility tree ve computed accessible name inceleme.
- Focus order/trap/return, skip link, landmark ve heading outline.
- Form label/help/error summary ve live-region davranışı.
- Zoom/reflow, contrast, reduced motion ve touch target.
- Loading, validation, toast/modal ve async update'in erişilebilir duyurusu.
- Disabled versus readonly; error recovery ve cognitive load.

**Faz görevi:**

- Public teklif + response akışı için data-flow ve threat model çıkar. En az bir BOLA/data-leak açığını exploit eden negatif test yazıp düzelt; log redaction/correlation, SLI-alarm-runbook, Core Web Vitals ölçümü, database query planı ve manuel accessibility audit'i tek kanıt paketinde tamamla.

**Çıkış kapısı:**

- Öğrenci bir güvenlik kontrolünün tehdit ettiği saldırıyı ve kalan riski açıklayabilir.
- Production sorununu correlation ID + log/metric/trace üzerinden daraltabilir.
- Performance ve accessibility iddiasını ölçüm/test kanıtıyla destekler.

### Faz 11 — Güvenli AI entegrasyonu

**Amaç:** AI'ı doğruluğu garanti eden business logic olarak değil; untrusted, probabilistic bir external dependency olarak güvenli ve ölçülebilir biçimde entegre etmek.

**Temel mental model:**

- Model, provider, API, model alias/version ve deployment ayrımı.
- Token, context window, input/output limiti ve truncation.
- Probabilistic/non-deterministic çıktı, hallucination ve calibration sınırı.
- System/developer/user instruction katmanları ve untrusted content ayrımı.
- Temperature/sampling gibi parametreleri ürün davranışı düzeyinde tanıma; ezberlememe.
- AI kullanımının deterministic code, search/template veya insan işlemiyle karşılaştırılması.
- Training, fine-tuning, embeddings/RAG ve agent kavramlarını farkındalık düzeyinde ayırma; ihtiyaç yoksa kapsama almama.

**Use-case ve risk tanımı:**

- Kullanıcı sonucu, kabul edilebilir hata ve yasak aksiyonlar.
- AI'ın okuyabileceği minimum veri ve yapamayacağı privileged işlemler.
- Yanlış/zararlı çıktının etki analizi; human review gereksinimi.
- Offline eval metric'i ile production business metric'ini ayırma.
- Manual fallback; AI kesintisinde core ürünün çalışmaya devam etmesi.
- NIST tarzı govern/map/measure/manage risk döngüsü farkındalığı.

**Provider bağımsız mimari:**

- `AIProvider` interface: typed input/output, timeout/cancellation ve normalized error.
- Provider-specific SDK/model adını adapter içinde tutma.
- Capability, region/data terms, retention, latency, rate limit, quality ve cost karar matrisi.
- Model alias/version pinleme ve değişiklik/rollback stratejisi.
- Fake provider ile deterministic integration test.
- En az iki sağlayıcı/modeli aynı anonim golden set üzerinde benchmark etme.
- Lock-in'i sıfırlamaya çalışırken lowest-common-denominator tasarıma düşmeme.

**Prompt ve structured output:**

- Prompt template, variable sınırı ve delimiter/role ayrımı.
- Prompt version, change reason ve eval sonucu.
- Input length/character/token budget ve truncation politikası.
- JSON Schema/structured-output capability; serbest metni JSON sanmama.
- Çıktıyı `unknown` kabul edip strict Zod validation.
- Unknown key, enum, length, unsafe URL/markup ve domain invariant kontrolü.
- Parse/validation başarısızlığında sınırlı retry veya manual fallback.
- AI metnini HTML/SQL/command olarak doğrudan çalıştırmama.

**Human-in-the-loop ve veri bütünlüğü:**

- Model çıktısını geçici suggestion/draft olarak tutma.
- Existing/user-authored değer ile AI önerisini diff alanında gösterme.
- Alan bazlı seç/apply; açık kullanıcı onayı olmadan DB write yapmama.
- Fiyat, currency, lifecycle, token, ownership ve entitlement alanlarını AI'a yazdırmama.
- Edit, undo, reject ve manual continue akışı.
- Otomatik e-posta/gönderim/ödeme gibi external side effect yasağı.

**AI güvenliği:**

- Direct/indirect prompt injection ve instruction/data boundary.
- Sensitive information disclosure ve data exfiltration.
- Insecure output handling; downstream parser/render/tool riskleri.
- Excessive agency ve least privilege.
- Unbounded consumption/model denial-of-wallet.
- Overreliance; model confidence diline kör güvenmeme.
- Provider/SDK/model supply chain ve version değişimi.
- PII/secret minimization; provider retention/training policy doğrulaması.
- Prompt'a “bunu yapma” yazmanın tek güvenlik kontrolü olmadığı.

**Kota, concurrency ve maliyet:**

- User/plan/period/kind bazlı entitlement ve quota definition.
- Atomic reserve → provider call → finalize/release akışı.
- Concurrent request ve retry'da double charge/usage önleme.
- Token/character/request limit ve hard cost ceiling.
- Rate-limit response, backoff, timeout ve circuit-breaker/degrade.
- Input/output token, estimated/actual cost ve latency bucket.
- Cache/deduplication'ın privacy ve stale-output trade-off'u.

**Evaluation ve test:**

- Anonim/representative golden dataset ve versioned eval set.
- Rubric: schema validity, factual grounding, instruction following, completeness, tone, harmful/leaking content ve edit distance.
- Deterministic validation ile human quality review ayrımı.
- Invalid JSON/schema, extra field, unsafe content, timeout, 429, 5xx ve partial stream.
- Prompt-injection/adversarial test corpus.
- No-overwrite, human approval, quota race ve fallback testleri.
- Regression threshold; prompt/model change'i eval geçmeden deploy etmeme.
- Production feedback'i training data gibi otomatik kullanmama.

**Observability ve privacy:**

- Request/correlation ID, provider/model alias, prompt version, latency, status ve token/cost bucket.
- Raw prompt/output yerine hash, length ve safe metadata varsayılanı.
- Error taxonomy: validation, safety, timeout, rate limit, provider ve quota.
- Quality/cost/drift dashboard ve alarm.
- Retention, access, deletion ve provider data-processing kararı.

**Faz görevi:**

- Provider interface + fake adapter + iki gerçek aday benchmark'ı geliştir. Strict structured output, editable diff, explicit user approval, quota reservation ve manual fallback ekle; injection, invalid schema, timeout, 429, duplicate request ve no-overwrite testlerini geçir.

**Çıkış kapısı:**

- Öğrenci model çıktısını hiçbir zaman trusted data veya authorization kararı saymaz.
- Provider değişimini domain/UI'yi yeniden yazmadan spike ile gösterebilir.
- Kalite, maliyet, güvenlik ve veri koşullarını aynı karar kaydında değerlendirebilir.

### Faz 12 — Ödeme, webhook ve entitlement

**Amaç:** Kart verisini uygulama kapsamına almadan, provider belirsizliğini koruyan ve duplicate/out-of-order failure'larda doğru kalan abonelik sistemi geliştirmek.

**Ödeme domain'i:**

- Customer, product, price, checkout, payment, invoice, subscription ve entitlement ayrımı.
- One-time payment ile recurring subscription farkı.
- Plan code, billing interval, offer/coupon ve price version.
- Currency, minor unit, decimal ve rounding politikası.
- Trial, active, incomplete, past-due, paused, canceled/ended gibi normalize lifecycle.
- Cancel now versus cancel at period end; grace period ve downgrade.
- Refund, dispute/chargeback, failed payment ve dunning farkındalığı.
- Tax, invoice, accounting ve KVKK/vergi konularında profesyonel uzman sınırı.

**Provider seçimi ve adapter:**

- Türkiye desteği, recurring capability, currency, payout, refund/dispute ve sandbox.
- Hosted checkout, customer portal ve webhook kalitesi.
- API/idempotency/versioning, uptime, rate limit ve reconciliation imkânı.
- Fee, FX, settlement, company/tax requirement ve data-processing şartları.
- `PaymentProvider` interface ve normalized domain event/error.
- Provider ID'lerini domain primary key'i yapmama; mapping ve unique constraint.
- En az iki adayla sandbox spike + hukuk/muhasebe kontrol kapısı.

**PCI ve checkout sınırı:**

- Hosted redirect/iFrame yaklaşımının kart girişini provider'a taşıması.
- PAN, CVV ve expiry'nin application server/database/log/analytics'e hiç girmemesi.
- Checkout session'ını server tarafında authenticated user/price allowlist ile oluşturma.
- Client'tan gelen price/amount/plan değerine güvenmeme.
- Success/cancel redirect'in ödeme kanıtı olmadığı.
- Open redirect, session fixation, double-click ve replay riski.
- Provider checkout domain'i ve environment key ayrımı.
- PCI kapsamını “hosted checkout var, bitti” diye varsaymama; güncel profesyonel değerlendirme.

**Webhook güvenliği ve teslimat modeli:**

- Webhook'un ters yönde API çağrısı ve untrusted public endpoint olması.
- Raw body gereksinimi ve parse öncesi signature verification.
- Timestamp/tolerance, secret rotation ve replay koruması.
- Yalnız gereken event type'larına abone olma.
- Hızlı 2xx acknowledgement ile durable processing ayrımı.
- At-least-once delivery: duplicate, retry ve aynı object için farklı event.
- Provider event ID unique constraint ve payload hash.
- Out-of-order event; event payload'ına körlemesine state overwrite yapmama.
- Missing event'te provider API'den canonical object fetch etme.
- Poison event, retry limit, dead-letter/manual repair ve redacted error.

**Idempotency ve tutarlılık:**

- Outbound create/capture/refund çağrısında stable idempotency key.
- Key scope, same-payload validation ve retention.
- Webhook inbox transaction'ı: receive/verify/dedupe/process/status.
- Subscription update ile entitlement değişimini atomic veya recoverable yapma.
- Race: checkout completion, cancellation, renewal ve manual reconciliation.
- Event-time ile processing-time; stale event'i reddetme/yeniden fetch.
- Provider source of truth ile local normalized projection ayrımı.

**Entitlement:**

- Billing status ile feature access'in aynı şey olmadığı.
- Server-side entitlement service ve plan catalog.
- Feature/limit/period; free/pro ve rollout/offer varyantı.
- UI göstergesinin server enforcement yerine geçmemesi.
- Upgrade/downgrade, active resource ve data-retention davranışı.
- Payment failure'da veri silmeme; documented grace/read-only policy.
- Cache ve webhook gecikmesinde access consistency kararı.
- AI/teklif quota ile subscription period senkronizasyonu.

**Reconciliation ve operasyon:**

- Scheduled provider-vs-local subscription comparison.
- Missing, duplicate, orphan ve status mismatch raporu.
- Idempotent repair command ve audit trail.
- Webhook age/backlog, signature failure, processing failure ve mismatch metric/alarmı.
- Secret/key rotation, API version upgrade ve provider outage runbook.
- Customer support için minimum, PII-safe durum görünümü.
- Refund/dispute ve manual adjustment için approval/audit.

**Test:**

- Sandbox/test-clock veya sağlayıcının eşdeğer araçları.
- Successful/abandoned checkout; redirect spoof.
- Invalid/expired signature, replay ve wrong environment.
- Duplicate, out-of-order, delayed, missing ve unknown event.
- Concurrent webhook/reconciliation ve provider timeout.
- Trial/renewal/failure/recovery/cancel/downgrade lifecycle.
- Entitlement server enforcement ve cross-user isolation.
- Provider adapter contract testi.

**Faz görevi:**

- Provider-neutral adapter ve fake provider kur; hosted-checkout session, signed raw-body webhook inbox, normalized subscription ve server entitlement geliştir. Duplicate/out-of-order/missing/sahte event, checkout redirect spoof, downgrade ve reconciliation testlerini geçir.

**Çıkış kapısı:**

- Öğrenci redirect'i ödeme kanıtı saymaz; webhook + reconciliation modelini açıklar.
- Duplicate/retry/out-of-order durumda entitlement yanlış açılmaz veya kapanmaz.
- Kart verisi uygulama sınırına girmez ve provider seçimi kanıtlı ADR'dir.

### Faz 13 — Deployment ve operasyon

**Amaç:** Kodun yalnız localde çalışmasını değil; güvenli, tekrar üretilebilir, gözlemlenebilir ve geri döndürülebilir biçimde production'da işletilmesini öğrenmek.

**Linux/Unix ve process operasyonu:**

- Filesystem hierarchy, permissions, user/group ve least privilege.
- Process, PID, signal, open file/socket, environment ve working directory.
- CPU, memory, disk, inode, load ve process resource gözlemi.
- Log/stdout/stderr, exit code ve core/service lifecycle zihinsel modeli.
- Shell scripting: variable, condition, loop, function ve güvenli error handling.
- SSH key/host verification ve remote-access hygiene farkındalığı.
- Package/update ve vulnerability patch süreci.
- Managed platform kullanılsa da alttaki process/resource limitlerini anlayacak düzey.

**Networking:**

- OSI/TCP-IP katmanlarını debug haritası düzeyinde bilmek.
- IPv4/IPv6, loopback, private/public IP, subnet ve route temel mental modeli.
- TCP connection, port, timeout, keep-alive ve connection reset.
- UDP'yi DNS gibi kullanım alanı düzeyinde ayırmak.
- DNS record'ları: A/AAAA, CNAME, TXT, MX; TTL ve propagation.
- TLS certificate, chain, hostname verification ve termination.
- HTTP/HTTPS, HTTP/2/3 farkındalığı, proxy/reverse proxy ve trusted forwarding header.
- CDN cache key, invalidation, origin ve WAF/rate-limit sınırı.
- `curl`, DNS lookup ve socket/process araçlarıyla katmanlı teşhis.

**Container ve Docker:**

- Container ile VM farkı; image, layer, container, registry ve daemon/client.
- Dockerfile instruction, build context ve `.dockerignore`.
- Reproducible/pinned base image, multi-stage build ve küçük runtime image.
- Mutable tag ile immutable digest pinning trade-off'u; digest güncellemesini otomasyon ve vulnerability review ile yönetme.
- Non-root user, filesystem permission, read-only yaklaşım ve capability minimizasyonu.
- Dockerfile `RUN`/`CMD`/`ENTRYPOINT` için exec form ile shell form farkı; PID 1, signal forwarding, zombie reaping ve graceful shutdown.
- Port expose/publish, bridge/user-defined network ve service discovery.
- Bind mount ile named volume; persistence ve backup etkisi.
- Healthcheck, resource limit, log ve restart behavior.
- Secret'ı image layer/build arg'a gömmeme.
- Image vulnerability scan, provenance ve trusted registry.
- Docker Compose service, dependency, network, volume, config ve secret modeli.
- Bilinmeyen Compose dosyasının host file/device/network erişim riskini inceleme.
- `--privileged`, Docker socket mount, host network/PID namespace ve broad device mount gibi container-escape etkili yetkileri yüksek risk olarak ele alma.
- Supabase local stack'i kullanacak kadar Docker debug; container'ı production kararı saymama.

**Environment ve configuration:**

- Local, Preview, pre-production/Staging ve Production amaç/veri/secret izolasyonu; provider planı özel Staging sunmuyorsa branch-scoped Preview veya ayrı staging project tasarlama.
- Config ile secret ayrımı; startup'ta Zod ile fail-fast validation.
- Environment variable naming, ownership, rotation ve audit.
- Client-exposed/public variable allowlist.
- Preview'ın production DB/storage/provider key kullanmaması.
- Synthetic seed ve anonymized/non-production test data.
- Feature flag ile config farkı; her flag için owner, varsayılan değer, hedef kitle, aşamalı rollout, kill switch, gözlem sinyali, son tarih ve stale-flag cleanup planı.
- Clock/timezone/locale ve external callback URL'lerinin environment farkı.

**CI/CD ve artifact akışı:**

- GitHub Actions veya eşdeğerinde workflow, trigger/event, job, step, runner, context, expression, environment ve reusable workflow kavramları.
- Matrix build, service container ve dependency graph; paralellik kazancı ile maliyet/flakiness trade-off'u.
- Concurrency group, cancel-in-progress ve aynı ortama deployment serialization.
- Commit → checks → immutable build artifact → deploy → verify → promote akışı.
- Build once/promote yaklaşımı ile environment-specific config dengesi.
- Dependency cache ile artifact'i karıştırmama.
- Test report, coverage, screenshot, trace, SBOM ve deploy metadata gibi artifact'leri saklama/retention kararı.
- Environment protection, required reviewer ve least-privilege deployment credential.
- Short-lived/OIDC credential; long-lived cloud secret yerine trust-policy, audience/subject sınırı ve minimum permission.
- Third-party action/dependency güveni; action'ı immutable commit SHA ile pinleme, release note/diff inceleme ve otomatik update'i review kapısından geçirme.
- Preview deployment ve PR QA.
- Seçilen pre-production/Staging düzenini production-benzeri webhook/migration/restore kanıt alanı olarak kullanma.
- Deployment concurrency, cancel/serialize ve migration ordering.
- Supply-chain secret/provenance kontrolleri.

**Vercel ve serverless çalışma modeli:**

- Git/CLI deployment ve unique deployment URL.
- Vercel'in default Local/Preview/Production ortamları; Pro/Enterprise'da Custom Environment ile Staging, bu özellik yoksa branch-scoped Preview + ayrı veri/secrets veya ayrı staging project seçeneği.
- Build log, runtime log ve deployment inspection.
- Environment variable scope ve redeploy etkisi.
- Custom domain, DNS ve HTTPS doğrulaması.
- Serverless/edge runtime: statelessness, cold start, timeout, memory, region ve connection sınırı.
- Background/long-running iş için uygun execution surface kararı.
- Preview'ı production'a promote etme ve known-good deployment'a rollback.
- Code rollback ile database migration rollback'inin aynı şey olmadığı.

**Database rollout ve recovery:**

- Pre-deploy backup/restore doğrulaması.
- Expand → deploy compatible code → resumable backfill → verify → contract.
- Migration lock süresi, statement timeout ve production traffic etkisi.
- Data migration progress/checkpoint ve idempotent resume.
- Rollback-compatible window ve forward-fix kararı.
- RPO, RTO, backup frequency, retention ve encryption.
- Database backup'ın Storage object'lerini kapsamayabileceğini doğrulama.
- Restore drill, integrity check ve application smoke.
- Disaster-recovery owner, contact ve karar ağacı.

**Deployment stratejileri ve reliability:**

- Rolling, blue-green, canary ve feature-flag rollout'u kavramsal karşılaştırma.
- Health/readiness, smoke ve synthetic critical journey.
- Graceful shutdown, draining ve in-flight request.
- Timeout, retry, backpressure ve dependency outage degrade.
- Capacity: traffic, concurrency, connection, CPU/memory, DB size ve provider quota.
- Load/stress/soak sonuçlarından headroom çıkarma.
- Availability target, SLO ve maintenance/dependency budget.
- Cost driver: bandwidth, function duration, database/storage, logs ve AI/payment fee.

**Incident response:**

- Severity, incident commander/owner ve communication channel.
- Detect → triage → contain → mitigate → recover → verify → review.
- Rollback, feature disable, credential revoke ve traffic block seçenekleri.
- Evidence/log koruma ve PII-safe incident çalışma alanı.
- Status update'te bilinen, bilinmeyen, etki ve sonraki kontrol zamanı.
- Blameless fakat kanıta dayalı postmortem.
- Root cause, contributing factor, detection gap ve preventive action.
- Runbook'u gerçek tatbikatla test etme.

**İleri operasyon farkındalığı:**

- Infrastructure as Code, configuration management ve GitOps kavramları.
- Managed service versus self-hosted operasyon maliyeti.
- Kubernetes/orchestration'ı mevcut ölçek ve Vercel/Supabase modeli gerektirmedikçe uygulama kapsamına almama.
- Multi-region, failover, replication ve queue'yu kanıtlanmış RTO/SLO ihtiyacına bağlama.

**Faz görevi:**

- Temiz veritabanından isolated staging deploy et. CI artifact'i, expand/backfill migration, environment validation, domain/TLS, smoke, metric/alarm ve rollback/forward-fix hazırla; database + Storage restore provası ve kısa incident game-day'i kanıtlarıyla tamamla.

**Çıkış kapısı:**

- Öğrenci DNS/TLS/app/database hatasını doğru katmanda daraltabilir.
- Code, config, secret, migration ve data rollback farklarını açıklayabilir.
- Restore'u gerçekten çalıştırmadan “backup var” sonucuna güvenmez.

### Faz 14 — Capstone ve senior mühendislik pratiği

**Amaç:** Tek tek teknolojilerin ötesinde belirsizlik, trade-off, failure ve ekip bağlamında doğru mühendislik kararları verebilmek.

**Clean code ve tasarım ilkeleri:**

- Niyet belirten isim, küçük/cohesive birim ve açık control flow.
- Duplication ile yanlış abstraction arasındaki denge.
- Pure core/imperative shell ve side-effect isolation.
- Command-query separation ve state mutation görünürlüğü.
- Encapsulation, information hiding ve public API minimizasyonu.
- SOLID'i slogan değil değişim baskısı üzerinden değerlendirme.
- Composition over inheritance ve dependency inversion.
- Law of Demeter, Tell Don't Ask ve primitive obsession farkındalığı.
- Cyclomatic/cognitive complexity ve refactoring seam.
- Clean code ilkesini performance, framework convention veya sadelikle çeliştiğinde bağlama göre tartma.

**Refactoring ve legacy code:**

- Characterization test ve strangler yaklaşımı.
- Rename, extract function/module, introduce parameter/object ve split phase.
- Shotgun surgery, god module, feature envy, temporal coupling ve hidden side effect kokuları.
- Public contract'ı koruyarak incremental refactor.
- Data/schema migration ile code refactor koordinasyonu.
- Teknik borcu risk, faiz, owner ve tetikleyiciyle kaydetme.
- Büyük rewrite kararını kanıt, migration yolu ve opportunity cost ile değerlendirme.

**Pattern ve mimari stiller:**

Bu bölümde yalnız capstone'da gerçek bir problemi çözen pattern kodlanır. Diğer pattern ve mimari adları; çözdükleri problem, basit kullanım şekli ve aşırı kullanım riski düzeyinde tanıtılır, topluca implementation/ezber görevi yapılmaz.

- Pattern'i isim ezberi değil tekrar eden problem/force/sonuç olarak öğrenme.
- Strategy/adapter, factory, decorator, observer ve state pattern'ini gerçek ihtiyaçta kullanma.
- Repository/unit-of-work gibi enterprise pattern'leri database/framework gerçekliğine göre seçme.
- Layered, hexagonal/ports-and-adapters ve clean architecture karşılaştırması.
- Modular monolith, microservice, serverless ve event-driven trade-off'ları.
- MVC ve backend-for-frontend farkındalığı.
- Domain-Driven Design'in bounded context, ubiquitous language, entity, value object ve aggregate parçaları.
- CQRS/event sourcing'i yüksek karmaşıklıklı özel seçenekler olarak tanıma; varsayılan yapmama.
- Monolith içinde net boundary ve ownership kurmadan microservice'e geçmeme.

**Distributed systems ve system design:**

Bu başlıklar varsayılan olarak farkındalık düzeyindedir. Her kavram için yalnız kod/operasyon belirtisi, güvenli başlangıç tercihi, basit konfigürasyon veya pattern ve ne zaman uzmanlık/derin araştırma gerektiği anlatılır. Capstone gerçekten kullanmıyorsa consensus algoritması, protokol internali, formel CAP tartışması veya çok-bölgeli sistem tasarımı faz kapısı değildir.

- Latency, throughput, concurrency, scalability ve availability ayrımı.
- Vertical/horizontal scaling ve stateful/stateless component.
- Consistency, stale read, read-your-write ve eventual consistency.
- CAP'i yalnız network partition olduğunda consistency/availability kararı bulunduğunu fark edecek sade düzeyde ele alma; ispat veya ayrıntılı model istememe.
- Replication, failover, quorum ve split-brain terimlerini belirti/risk ve managed-service kararı düzeyinde tanıma.
- Load balancer/reverse proxy, health check ve service discovery.
- Cache-aside/write-through/write-behind ve invalidation trade-off'u.
- Queue/stream; at-most-once, at-least-once ve “effectively once” işleme.
- Ordering, deduplication, idempotency, retry, backoff ve dead-letter.
- Backpressure, load shedding, rate limit, bulkhead ve circuit breaker.
- Partitioning/sharding, hot key ve rebalancing farkındalığı.
- Scheduled/background job, outbox, saga ve compensating transaction.
- Search, analytics ve OLTP store'un farklı workload'ları.
- Multi-region ve clock/order problemlerini farkındalık düzeyinde bilmek.

**System design yöntemi:**

1. Kullanıcı/use-case ve kapsamı netleştir.
2. Functional ve non-functional requirement'ları ayır.
3. Trafik, veri hacmi, büyüme ve erişilebilirlik için kaba tahmin yap.
4. API, veri modeli ve ana akışları tanımla.
5. Trust boundary, PII/secret ve authorization kararlarını göster.
6. Basit high-level component/data-flow çiz.
7. Consistency, concurrency ve transaction sınırını seç.
8. Yalnız ölçülen hot path, bottleneck ve gerçekleşebilir failure mode'u gerektiği kadar incele.
9. Observe, test, deploy, migrate ve recover planını ekle.
10. Alternatif/trade-off, accepted risk ve yeniden değerlendirme tetikleyicisini ADR'ye yaz.

**Dokümantasyon ve karar verme:**

- Architecture overview, C4 context/container, sequence ve deployment diagram.
- Data dictionary, API contract ve event schema.
- ADR: context, forces, options, decision, consequence ve revisit trigger.
- RFC/design review ve pre-mortem.
- Reversible/irreversible karar; spike, benchmark ve proof of concept.
- Build/buy, vendor lock-in, exit cost ve data portability.
- Security/privacy/legal/operational review kapıları.
- Diagramın kodla drift etmesini düzenli kontrol etme.

**Teknik liderlik ve ekip pratiği:**

- Scope'u küçük dikey dilimlere ayırma ve risk-first sequencing.
- Estimate'i kesin vaat değil belirsizlik aralığı/varsayım olarak verme.
- Definition of Ready/Done ve quality gate.
- Code review'da blocking/nit/question ayrımı; gerekçe ve örnek.
- Mentorlukta cevabı vermek ile düşünme becerisi kazandırmak arasındaki denge.
- Teknik anlaşmazlıkta otorite yerine requirement, ölçüm ve deney kullanma.
- Incident sırasında açık iletişim ve karar kaydı.
- Ownership, on-call/runbook ve handoff.
- Cross-functional ürün, tasarım, hukuk, güvenlik ve operasyon iş birliği.

**Ürün ve iş düşüncesi:**

- Output, outcome ve impact ayrımı.
- Activation, retention, conversion, reliability ve support metriği.
- Guardrail metric ve unintended consequence.
- Event taxonomy, data quality ve metric definition.
- MVP, experiment, feature flag ve kill criteria.
- Opportunity cost; teknoloji ilgisini kullanıcı ihtiyacının önüne koymama.
- Cost-to-serve, provider unit economics ve scaling cost.
- Teknik kalitenin kullanıcı güveni, gelir ve operasyonla bağını kurma.

**Capstone zorunlu teslimatları:**

- Freelancer teklif ürününün production-ready bir dikey dilimi.
- Gereksinim, kapsam dışı, NFR ve risk kaydı.
- C4/data-flow/sequence/threat-model diyagramları.
- Database model, migrations, grants/RLS ve concurrency kanıtı.
- API/DTO/state-machine/idempotency sözleşmeleri.
- Unit/integration/E2E/RLS/security/a11y/performance test kanıtı.
- CI, Preview/pre-production/Production akışı ve seçilen Staging modelinin plan/kısıtlarıyla birlikte immutable deployment kanıtı.
- Observability dashboard/SLI/alarm/runbook.
- Backup/restore ve incident game-day raporu.
- AI/payment kararları uygulanmışsa provider adapter, eval/reconciliation kanıtı.
- En az üç önemli ADR ve en az bir reddedilen alternatif.
- Code review, refactoring ve bug postmortem örneği.

**Nihai çıkış kapısı:**

- Öğrenci production-ready dilimi tasarlar, geliştirir, test eder, deploy eder ve savunur.
- Görülmemiş bir bug'ı AI'sız ilk çalışma penceresinde sistematik biçimde teşhis eder.
- Başka geliştiricinin koduna kanıta dayalı, önceliklendirilmiş review verir.
- Bilinmeyen komşu teknolojiyi resmi dokümandan öğrenip bounded spike ile değerlendirir.
- Mimari kararları, kabul edilen riskleri ve yeniden değerlendirme koşullarını ADR ile açıklar.
- Sistem failure/incident senaryosunda güvenli mitigation ve recovery uygular.
- Bilmediğini doğru sınırlar ve yeni öğrenme rotasını kendi başına kurar.
