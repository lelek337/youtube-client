import { Directive, ElementRef, HostBinding, HostListener, AfterViewInit } from '@angular/core';
import { MoreService } from '../services/more.service';

@Directive({
  selector: '[appMore]'
})
export class MoreDirective implements AfterViewInit{

  constructor(private element:ElementRef, private moreService:MoreService) { }


  @HostListener('click') ngAfterViewInit() {
    const id = this.element.nativeElement.id
    this.moreService.moreClick(+id);
    console.log(this.element.nativeElement.id)

  }
}
