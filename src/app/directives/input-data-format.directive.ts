import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputDataFormat]'
})
export class InputDataFormatDirective {

  constructor(private el: ElementRef) { }
  

  @HostListener('input') formatarInput(){
    let aux : string = this.el.nativeElement.value
    let telFormat: string
    
    let exp : RegExp= new RegExp('\\([0-9]{2,2}\\)[0-9]{4,4}\\-[0-9]{4,5}','gm');

    if(aux.length ==2){
      telFormat = `(${aux})`;
      this.el.nativeElement.value = telFormat;
    }
    if(aux.length == 8){
      telFormat = `${aux}-`;
      this.el.nativeElement.value = telFormat;
    }
    if(aux.length > 8){
      if(aux.charAt(8) != '-'){
      var metade1 =aux.slice(0, 8);
      var metade2 =aux.slice(10, 14);
      telFormat = `${metade1}-${metade2}`;
      this.el.nativeElement.value = telFormat;
      }
    }
    
    if(aux.length >= 13 && !exp.test(aux)){
        this.el.nativeElement.value = aux.substring(0, 3);
    }

    if(aux.length > 14){
      this.el.nativeElement.value = aux.substring(0, 14);
    }
  }
}
