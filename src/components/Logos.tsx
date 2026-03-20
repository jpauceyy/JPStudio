import { FadeIn } from './FadeIn';

const logos = [
  { name: 'LF', imgSrc: '/lf-logo.png' },
  { name: 'Gamer Gear Shop', imgSrc: '/ggs.png' },
  { name: 'AVNG', imgSrc: '/avng.png' },
  { name: 'Tuki', imgSrc: '/tuki.png' },
  { name: 'IXO', imgSrc: '/ixo-logo.png' },
  { name: 'OBN', imgSrc: '/obn-logo.png' }
];

export function Logos() {
  const sets = [0, 1, 2, 3];

  return (
    <section className="py-24 bg-black relative border-t border-neutral-900 overflow-hidden">
      <FadeIn>
        <div className="relative flex overflow-hidden group">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee">
            {sets.map((setIndex) => (
              <div
                key={setIndex}
                className="flex items-center gap-20 md:gap-32 pr-20 md:pr-32"
              >
                {logos.map((logo, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="shrink-0 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale"
                  >
                    <img
                      src={logo.imgSrc}
                      alt={logo.name}
                      className="h-10 md:h-15 lg:h-20 w-auto object-contain max-w-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}