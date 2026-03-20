import { FadeIn } from './FadeIn';

const logos = [
  {
    name: 'Tuki',
    imgSrc: '/tuki.png'
  },
  {
    name: 'AVNG',
    imgSrc: '/avng.png'
  },
  {
    name: 'emtez',
    imgSrc: 'https://picsum.photos/seed/emtez/160/60'
  },
  {
    name: 'Hitachi',
    imgSrc: 'https://picsum.photos/seed/hitachi/160/60'
  },
  {
    name: 'Raidiam',
    imgSrc: 'https://picsum.photos/seed/raidiam/160/60'
  },
  {
    name: 'Touch Stay',
    imgSrc: 'https://picsum.photos/seed/touchstay/160/60'
  }
];

export function Logos() {
  // Render 4 sets to ensure it covers ultra-wide screens
  const sets = [0, 1, 2, 3];

  return (
    <section className="py-24 bg-black relative border-t border-neutral-900 overflow-hidden">
      <FadeIn>
        <div className="relative flex overflow-hidden group">
          {/* Gradient masks for smooth fade-in/fade-out at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee">
            {sets.map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
                {logos.map((logo, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="shrink-0 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale"
                  >
                    <img
                      src={logo.imgSrc}
                      alt={logo.name}
                      className="h-8 md:h-10 w-auto object-contain"
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
