import { Directive, ElementRef, OnInit ,Renderer2} from "@angular/core";

@Directive({
    selector:'[whishList]'
})
export class WhishListMessage implements OnInit{

constructor(private ele:ElementRef,private renderer:Renderer2){}

ngOnInit(){
   // this.ele.nativeElement.style.backgroundColor='yellow'

this.renderer.setStyle(this.ele.nativeElement,'background-color','red')
this.renderer.setStyle(this.ele.nativeElement,'display','inline-block')
this.renderer.setStyle(this.ele.nativeElement,'color','white')
this.renderer.setStyle(this.ele.nativeElement,'padding','2px')
this.renderer.setStyle(this.ele.nativeElement,'font-size','small')
this.renderer.setStyle(this.ele.nativeElement,'transform','translateX(-50%)')
this.renderer.setStyle(this.ele.nativeElement,'top','-20px')
this.renderer.setStyle(this.ele.nativeElement,'right','110px')
this.renderer.setStyle(this.ele.nativeElement,'z-index','1000')
this.renderer.setStyle(this.ele.nativeElement,'margin','10px')
this.renderer.setStyle(this.ele.nativeElement,'position','fixed')
}

}