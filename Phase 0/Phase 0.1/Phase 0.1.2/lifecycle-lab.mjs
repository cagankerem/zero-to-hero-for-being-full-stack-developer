import { appendFile } from "node:fs/promises";
import process from "node:process";

const logUrl = new URL("./shutdown.log", import.meta.url);

let shuttingDown = false;

const heartbeat = setInterval(() => {
  console.log(`[heartbeat] uptime=${process.uptime().toFixed(1)}s`);
}, 2_000);

process.on("beforeExit", (code) => {
  console.log(`[beforeExit] code=${code}`);
});

process.on("exit", (code) => {
  console.log(`[exit] code=${code}`);
});

async function shutdown(signal) {
  if (shuttingDown) {
    console.log(`[shutdown] zaten devam ediyor; signal=${signal}`);
    return;
  }

  shuttingDown = true;

  console.log(`[shutdown] alındı: ${signal}`);
  console.log("[shutdown] yeni iş kabulü durduruluyor");

  clearInterval(heartbeat);

  try {
    await appendFile(
      logUrl,
      `${new Date().toISOString()} signal=${signal}\n`,
    );

    console.log("[shutdown] cleanup tamamlandı");
    process.exitCode = 0;
  } catch (error) {
    console.error("[shutdown] cleanup başarısız", error);
    process.exitCode = 1;
  }
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

console.log(`[start] PID=${process.pid}`);

/* Buradaki kritik nokta: Node’da SIGINT veya SIGTERM listener’ı eklediğinde varsayılan otomatik sonlanma davranışı kaldırılır.
 Dolayısıyla handler’ın aktif kaynakları kapatması gerekir; bizim örneğimizde clearInterval() bunu yapıyor.
 SIGKILL ise dinlenemez. Bu davranış kurulu Node sürümünün signal dokümantasyonunda açıklanıyor. */