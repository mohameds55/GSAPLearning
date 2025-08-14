import { keyframes } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Directive({
  selector: '[appAnimationDirective]',
})
export class AnimationDirectiveDirective {
  @ViewChild('animation') animation!: ElementRef<HTMLElement>;
  @ViewChild('wrapper') wrapper!: ElementRef<HTMLElement>;
  @ViewChild('logo') logo!: ElementRef<HTMLElement>;
  @ViewChild('shield') shield!: ElementRef<HTMLElement>;
  @ViewChild('shield_middle') shield_middle!: ElementRef<HTMLElement>;
  @ViewChildren('letter') letters!: QueryList<ElementRef>;
  @ViewChild('scalabilityWrapper') scalabilityWrapper!: ElementRef<HTMLElement>;
  @ViewChild('starWrapper') starsWrapper!: ElementRef<HTMLElement>;
  @ViewChild('lovedWrapper') lovedWrapper!: ElementRef<HTMLElement>;
  @ViewChild('buildForEveryoneWrapper')
  buildForEveryoneWrapper!: ElementRef<HTMLElement>;
  @ViewChild('buildForEveryone') buildForEveryone!: ElementRef<HTMLElement>;
  @ViewChildren('star') stars!: QueryList<ElementRef>;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log(this.stars.toArray().at(6)?.nativeElement);
      gsap.set(this.logo.nativeElement, {
        yPercent: 50, // move up by 50% of its own height
        xPercent: 50, // move right by 50% of its own width (center horizontally)
        scale: 0.5,
        transformOrigin: '-50% -50%',
        opacity: 1,
      });
      gsap.set(this.shield.nativeElement, {
        transformOrigin: '50% 50%',
      });
      gsap.set(this.shield_middle.nativeElement, {
        transformOrigin: '50% 50%',
      });
      gsap.set(this.starsWrapper.nativeElement, {
        scale: 1.3,
        transformOrigin: '50% 50%',
      });
      gsap.set(
        [
          this.scalabilityWrapper.nativeElement,
          this.lovedWrapper.nativeElement,
          this.buildForEveryoneWrapper.nativeElement,
        ],
        {
          opacity: 0,
          scale: 0.5,
          transformOrigin: '50% 50%',
        }
      );

      /* Master Timeline with ScrollTrigger */
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: this.animation.nativeElement,
          start: 'center center',
          end: '+=4300', // Extended for both timelines
          scrub: 2.5,
          markers: true,
          pin: true,
          pinSpacing: false,
        },
      });

      /* First Timeline (your existing animation) */
      const tl1 = gsap.timeline();
      tl1
        .to(this.wrapper.nativeElement, {
          duration: 2.5,
          xPercent: 20,
          ease: 'power2.out',
        })
        .to(
          this.letters.map((letter) => letter.nativeElement),
          {
            opacity: 0,
            stagger: -0.3,
            ease: 'power2.out',
          },
          0.2
        )
        .to(this.shield.nativeElement, {
          scale: 25,
          duration: 2,
          rotate: -70,
          opacity: 0,
        })
        .to(
          this.shield_middle.nativeElement,
          {
            scale: 0,
            opacity: 0,
            duration: 0.3,
          },
          '<'
        )
        .to(
          this.scalabilityWrapper.nativeElement,
          {
            opacity: 1,
            scale: 2,
            duration: 1,
            delay: 0.8,
          },
          '<'
        )
        .to(
          this.stars.toArray().at(1)?.nativeElement,
          {
            opacity: 1,
            duration: 1.5,
            scale: 1,
            ease: 'power2.out',
            x: 40,
            y: 40,
          },
          '>-0.5'
        )
        .to(
          this.stars.toArray().at(3)?.nativeElement,
          {
            opacity: 1,
            duration: 1.5,
            scale: 1,
            ease: 'power2.out',
            x: 40,
            y: 40,
          },
          '>-0.5'
        )
        .to(
          this.stars.toArray().at(9)?.nativeElement,
          {
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            x: 40,
            y: 40,
          },
          '<+0.5'
        )
        .to(
          this.stars.toArray().at(2)?.nativeElement,
          {
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            x: 40,
            y: 40,
          },
          '<+0.5'
        )
        .to(this.scalabilityWrapper.nativeElement, {
          opacity: 0,
          scale: 3,
          duration: 1,
          ease: 'power2.out',
        })
        .to(
          [
            this.stars.toArray().at(20)?.nativeElement,
            this.stars.toArray().at(21)?.nativeElement,
            this.stars.toArray().at(22)?.nativeElement,
            this.stars.toArray().at(23)?.nativeElement,
            this.stars.toArray().at(24)?.nativeElement,
            this.stars.toArray().at(25)?.nativeElement,
          ],
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            x: 40,
            y: 40,
            ease: 'power2.out',
            stagger: 0.2,
          },
          '<-0.8'
        )
        .to(
          [
            this.stars.toArray().at(13)?.nativeElement,
            this.stars.toArray().at(14)?.nativeElement,
            this.stars.toArray().at(15)?.nativeElement,
            this.stars.toArray().at(16)?.nativeElement,
            this.stars.toArray().at(17)?.nativeElement,
            this.stars.toArray().at(18)?.nativeElement,
            this.stars.toArray().at(19)?.nativeElement,
          ],
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            x: 40,
            y: 40,
            ease: 'power2.out',
            stagger: 0.2,
          }
        )
        .to(
          this.lovedWrapper.nativeElement,
          {
            opacity: 2.5,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
          },
          '>-1.2'
        )
        .to(
          [
            this.stars.toArray().at(6)?.nativeElement,
            this.stars.toArray().at(7)?.nativeElement,
            this.stars.toArray().at(8)?.nativeElement,
            this.stars.toArray().at(10)?.nativeElement,
            this.stars.toArray().at(11)?.nativeElement,
            this.stars.toArray().at(12)?.nativeElement,
          ],
          {
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            x: 40,
            y: 40,
            stagger: 0.2,
          },
          '>-0.5'
        )
        .to(
          [
            this.stars.toArray().at(5)?.nativeElement,
            this.stars.toArray().at(26)?.nativeElement,
            this.stars.toArray().at(27)?.nativeElement,
            this.stars.toArray().at(28)?.nativeElement,
            this.stars.toArray().at(29)?.nativeElement,
          ],
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            x: 40,
            y: 40,
            ease: 'power2.out',
            stagger: 0.2,
          }
        )
        .to(
          [
            this.stars.toArray().at(0)?.nativeElement,
            this.stars.toArray().at(4)?.nativeElement,
            this.stars.toArray().at(30)?.nativeElement,
            this.stars.toArray().at(31)?.nativeElement,
            this.stars.toArray().at(32)?.nativeElement,
            this.stars.toArray().at(33)?.nativeElement,
            this.stars.toArray().at(34)?.nativeElement,
            this.stars.toArray().at(35)?.nativeElement,
          ],
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            x: 40,
            y: 40,
            ease: 'power2.out',
          }
        )
        .to(
          this.stars.map((star) => star.nativeElement),
          {
            keyframes: [
              {
                x: 10,
                y: 10,
                duration: 1,
                ease: 'power2.out',
              },
              {
                opacity: 0,
                duration: 1,
                delay: -0.9,
                x: -20,
                y: -20,
                ease: 'power2.out',
              },
            ],
          }
        )
        .to(
          this.lovedWrapper.nativeElement,
          {
            opacity: 0,
            scale: 2,
            duration: 1.5,
            ease: 'power2.out',
          },
          '<+0.1'
        )
        .to(this.buildForEveryoneWrapper.nativeElement, {
          opacity: 1,
          scale: 1,
          duration: 3,
          ease: 'power2.out',
        })
        .to(
          this.buildForEveryone.nativeElement,
          {
            backgroundPositionX: '30%',
            duration: 3,
          },
          '<+0.5'
        );

      /* Second Timeline */
      // const tl2 = gsap.timeline();
      // tl2
      const children = tl1.getChildren();

      // Find the tweens you care about
      const startTween = children.find((t) =>
        t.targets().includes(this.stars.toArray().at(1)?.nativeElement)
      );
      const endTween = children.find(
        (t) =>
          t.targets().includes(this.stars.toArray().at(0)?.nativeElement) ||
          t.targets().includes(this.stars.toArray().at(4)?.nativeElement)
      );
      const startTime = startTween!.startTime();
      const endTime = endTween!.endTime();

      const starsWrapperDuration = endTime - startTime;

      tl1.add(
        gsap.to(this.starsWrapper.nativeElement, {
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          // marginTop: 0,
          // marginLeft: 0,
          duration: starsWrapperDuration,
        }),
        startTime
      );
      console.log(tl1.duration());
      masterTL.add(tl1, 0); // First timeline starts immediately
    }
  }
}
