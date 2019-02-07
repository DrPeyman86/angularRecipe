import { Directive, ElementRef, OnInit } from "@angular/core";

//when adding attribute directives, you also have to add this to the app.module.ts file

//
//putting brackets around the selector makes this an ATTRIBUTE directive. without the brackets, this would make this directive an element selector, like how components are elements
//you can now add appBasicHighlight as an attribute to any element
@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
    //when this directive is initialized, run the constructor. The type of "ElementRef" is just the reference of the element this attribute directive was placed on
    //putting private in front also makes this a property that can be used within this component
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        //access the style and background color of the element that this directive was placed on. then overwrite the style of the element
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}