import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { AboutHeroContent } from "@/types/site-content.types";

interface AboutHeroSectionProps {
  hero: AboutHeroContent;
}

/**
 * About Us page's first section — intro copy with two CTAs and the hero
 * photograph. Stacks to a single column below `lg`.
 */
export function AboutHeroSection({ hero }: AboutHeroSectionProps) {
  return (
    <section className="relative bg-background">
      <Container className="py-12 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-left">
            <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              {hero.badge}
            </span>
            <h1 className="max-w-lg font-serif text-4xl leading-[1.15] font-bold tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
              {hero.heading}
            </h1>
            <p className="max-w-lg text-sm text-text-primary/75 sm:text-base">{hero.description}</p>

            <div className="mt-6 flex flex-row items-center justify-center gap-2 sm:gap-4 lg:justify-start">
              <Button
                href={hero.primaryCta.href}
                className="bg-accent-purple hover:bg-accent-purple/90 !min-h-9 !px-3 !py-2 !text-xs sm:!min-h-11 sm:!px-5 sm:!py-2.5 sm:!text-sm"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                className="!min-h-9 !px-3 !py-2 !text-xs sm:!min-h-11 sm:!px-5 sm:!py-2.5 sm:!text-sm"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-2xl shadow-xl lg:order-2">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width ?? 1280}
              height={hero.image.height ?? 700}
              sizes="(min-width: 1024px) 560px, 100vw"
              priority
              className="aspect-[1280/700] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
