import { EMBEDDED_APARTMENTS } from "./generated/character-collage";
import { CollageImage } from "./CollageImage";

const assessorImage = (pin: string) => `/apartment-images/${pin}.webp`;
const assessorPage = (pin: string) => `https://www.cookcountyassessoril.gov/pin/${pin}`;

export const metadata = {
  title: "The Character of Oak Park",
  description: "A collage of embedded apartment buildings woven into Oak Park's residential blocks.",
  openGraph: {
    title: "The Character of Oak Park",
    description: "Embedded apartment buildings are already part of Oak Park's residential fabric.",
    url: "/",
    images: ["/character-og.webp"],
  },
};

function pinLabel(pin: string) {
  return `${pin.slice(0, 2)}-${pin.slice(2, 4)}-${pin.slice(4, 7)}-${pin.slice(7, 10)}-${pin.slice(10)}`;
}

export default function CharacterPage() {
  const heroImages = EMBEDDED_APARTMENTS.slice(0, 18);

  return (
    <main className="character-page">
      <section className="character-hero">
        <div className="character-hero-grid" aria-hidden="true">
          {heroImages.map((building) => (
            <CollageImage
              key={building.pin}
              src={assessorImage(building.pin)}
              alt=""
            />
          ))}
        </div>
        <div>
          <h1>The character of Oak Park</h1>
          <p>
            The character of Oak Park has always included apartments: two-flats, courtyard
            buildings, smaller apartment buildings, embedded in quiet, leafy neighborhoods.
          </p>
        </div>
      </section>

      <section className="character-intro">
        <p>
          Here’s a visual sampling of over 500 of them, fitting right in. Most of them have been
          here longer than we have.
        </p>
      </section>

      <section className="photo-collage" aria-label="Collage of embedded apartment buildings in Oak Park">
        {EMBEDDED_APARTMENTS.map((building) => (
          <a
            className={`collage-tile size-${building.size}`}
            href={assessorPage(building.pin)}
            key={building.pin}
            target="_blank"
            rel="noreferrer"
          >
            <CollageImage
              src={assessorImage(building.pin)}
              alt={`${building.address}, Oak Park`}
            />
            <i aria-hidden="true" />
            <span>
              <strong>{building.address}</strong>
              <em>{pinLabel(building.pin)} · class {building.classCode}</em>
            </span>
          </a>
        ))}
      </section>
    </main>
  );
}
