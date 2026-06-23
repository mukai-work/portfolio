import Image from "next/image";
import type { DemoConfig } from "@/data/demos";

export function DemoGallery({ config }: { config: DemoConfig }) {
  return (
    <section
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: config.colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-display tracking-[0.3em] uppercase text-sm mb-4"
            style={{ color: config.colors.accent }}
          >
            Gallery
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-wide"
            style={{ color: config.colors.text }}
          >
            ギャラリー
          </h2>
          <div
            className="w-16 h-px mx-auto mt-6"
            style={{ backgroundColor: config.colors.accent }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {config.gallery.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
