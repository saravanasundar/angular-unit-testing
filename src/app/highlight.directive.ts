import { Directive, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  color = 'yellow';
  @Input('highlight') bgColor = '';
  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
   }

   ngOnChanges() {
     this.el.nativeElement.style.backgroundColor = this.bgColor || this.color;
   }

  
}
