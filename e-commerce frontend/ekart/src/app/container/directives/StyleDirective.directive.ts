import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[style-directive]'
})

export class StyleDirective implements OnInit{

constructor(private elementRef: ElementRef,private renderer:Renderer2){
}

@Input() set StyleDirective(object:Object){  // we can bind this input field and it recieves object of css classes: {'class':true,...}
    let entries = Object.entries(object)
    for(let item of entries){
        console.log(item[0],item[1]);
        if(item[1])
            this.renderer.addClass(this.elementRef.nativeElement,item[0])
    }
}
ngOnInit(): void {
}




}