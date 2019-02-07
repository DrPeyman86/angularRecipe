import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  //instead of renderer, you could use @HostBinding to define element attributes and set them dynamically within this directive. 
  //nothing wrong with using renderer, just @HostBinding is shorter typing
  //as arguments, type out the attribute of the DOM element you want to set in this directive. Most elements would have 'style.backgroundColor' so we used that
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;//set an inital value of what the element should have for this attribute

  //it is a better practice to use the renderer to access DOM elements than normal way of accessing the nativeElement in basic.highlight.directive.ts
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  //if you want to react to the element the directive sits on. @HostListener will listen to events on that element. 
  //mouseOver is the method you want to execute when "mouseEnter" is triggered on that element
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    //using @HostBinding here
    this.backgroundColor = this.highlightColor;
  }

  //when mouseleaves the element, run this method
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
