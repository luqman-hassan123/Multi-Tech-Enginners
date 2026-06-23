import ImageWithFallback from "../ImageWithFallback";
import { SITE_IMAGES } from "../../data/images";
import { GALLERY_ITEMS } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";

export default function GallerySection() {
  const banners = GALLERY_ITEMS.map((item, index) => ({
    ...item,
    src: SITE_IMAGES[item.key].src,
    fallback: SITE_IMAGES[item.key].fallback,
    wide: index === 0,
  }));

  return (
    <section className="section construction-gallery section--divider" aria-label="Construction gallery">
      <div className="container">
        <SectionHeader
          tag="Our Work"
          title={
            <>
              Construction in <span className="text-accent">Action</span>
            </>
          }
          subtitle="Large-format site photography — replace these images with your own project photos."
        />
        <div className="construction-gallery__grid">
          {banners.map((banner) => (
            <article
              key={banner.key}
              className={`construction-gallery__item hover-image-card ${banner.wide ? "construction-gallery__item--wide" : ""}`}
            >
              <ImageWithFallback
                src={banner.src}
                fallback={banner.fallback}
                alt={banner.title}
                className="construction-gallery__img"
              />
              <div className="construction-gallery__caption">
                <strong>{banner.title}</strong>
                <span>{banner.caption}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
