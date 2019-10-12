import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    ) { }

  @HostListener('click') onClick() {
    this.highLight(this.color);
  }

  private highLight(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
  }

}
