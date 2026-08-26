import { openSync, writeSync } from "node:fs";
import { createServer } from "node:http";
import { performance } from "node:perf_hooks";
import process from "node:process";

const memoryChunks = [];
const logFd = openSync("./os-lab-output.log", "a");

function toMiB(bytes) {
  return (bytes / 1024 / 1024).toFixed(1);
}

const server = createServer((request, response) => {
  writeSync(
    logFd,
    `${new Date().toISOString()} ${request.method} ${request.url}\n`,
  );

  if (request.url === "/memory") {
    memoryChunks.push(Buffer.alloc(16 * 1024 * 1024, 1));

    response.end(
      `RSS: ${toMiB(process.memoryUsage().rss)} MiB\n`,
    );
    return;
  }

  if (request.url === "/cpu") {
    const finishAt = performance.now() + 5_000;
    let result = 0;

    while (performance.now() < finishAt) {
      result += Math.sqrt(Math.random());
    }

    response.end(`CPU çalışması bitti: ${result}\n`);
    return;
  }

  response.end("OS laboratuvarı çalışıyor.\n");
});

server.listen(3000, "127.0.0.1", () => {
  const memory = process.memoryUsage();

  console.log(`PID: ${process.pid}`);
  console.log(`Port: 127.0.0.1:3000`);
  console.log(`Başlangıç RSS: ${toMiB(memory.rss)} MiB`);
});

/*
Buradaki parçalar şunları görünür hâle getiriyor:
- Node ve dosyan: disk
- Çalışan node örneği: process
- Buffer nesneleri ve runtime verileri: bellek
- /cpu hesaplaması: CPU
- Node runtime’ın kullandığı yürütme akışları: thread
- HTTP sunucusu: socket ve port
- os-lab-output.log: açık ve yazılan dosya 
*/