import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/descargas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar NFD FormData
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div>
          Ceibo Digital 2025 
        </div>
      </footer>
    </div>
  );
}
