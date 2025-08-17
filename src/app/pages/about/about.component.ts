import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { DrawSVGPlugin, ScrollTrigger } from 'gsap/all';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @ViewChild('DrawSVG') DrawSVG!: ElementRef<HTMLElement>;
  @ViewChild('wrapper') wrapper!: ElementRef<HTMLElement>;
  constructor() {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(ScrollTrigger);
  }
  ngAfterViewInit(): void {
    gsap.set(this.DrawSVG.nativeElement, { visibility: 'visible' });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.wrapper.nativeElement,
        start: 'center center',
        end: '+=4500',
        scrub: true,
        pin: true,
        markers: true,
      },
    });
    tl.to(this.DrawSVG.nativeElement, {
      drawSVG: '50% 50%',
      duration: 1.5,
      ease: 'power2.out',
    });
  }
}
