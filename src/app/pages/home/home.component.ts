import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('wrapper') wrapper!: ElementRef<HTMLElement>;
  @ViewChild('logo') logo!: ElementRef<HTMLElement>;
  @ViewChild('shield') shield!: ElementRef<HTMLElement>;
  @ViewChild('shield_middle') shield_middle!: ElementRef<HTMLElement>;
  @ViewChild('scalabilityWrapper') scalabilityWrapper!: ElementRef<HTMLElement>;
  @ViewChildren('letter') letters!: QueryList<ElementRef>;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin();
  }

  ngAfterViewInit() {
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
    gsap.set(this.scalabilityWrapper.nativeElement, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: '50% 50%',
    });

    /* Master Timeline with ScrollTrigger */
    const masterTL = gsap.timeline({
      scrollTrigger: {
        trigger: this.wrapper.nativeElement,
        start: 'center center',
        end: '+=3500', // Extended for both timelines
        scrub: 1,
        markers: false,
        pin: true,
      },
    });

    /* First Timeline (your existing animation) */
    const tl1 = gsap.timeline();
    tl1.to(this.wrapper.nativeElement, {
      duration: 2,
      xPercent: 20,
      ease: 'power2.out',
    });

    tl1
      .to(
        this.letters.map((letter) => letter.nativeElement),
        {
          opacity: 0,
          stagger: -0.3,
          ease: 'power2.out',
        },
        0.1
      )
      .to(this.shield.nativeElement, {
        scale: 30,
        duration: 1,
        rotate: -50,
        opacity: 0,
      })
      .to(
        this.shield_middle.nativeElement,
        {
          opacity: 0,
          duration: 0.3,
        },
        2.3
      );

    /* Second Timeline */
    const tl2 = gsap.timeline();
    tl2.to(
      this.scalabilityWrapper.nativeElement,
      {
        opacity: 1,
        scale: 2,
        duration: 1,
      },
      -0.5
    );

    /* Add both timelines to master timeline */
    masterTL
      .add(tl1, 0) // First timeline starts immediately
      .add(tl2, '+=0.0000000001'); // Second timeline starts 0.1 seconds after first ends
  }
}
