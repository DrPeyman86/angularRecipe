import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //putting set in front of a property makes the unless a method. it is still a property. it's just a setter property that runs when the property changes whenever a condition
  //outside of this directive changes. 
  //set the argument this argument expects and what type of argument it is expecting. here condition is argument and it's a boolean type
  //***IMPORTANT the name of the property has to be same as the selector which would be the name of the structural directive in the DOM */
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      //createEmbeddedView creates a view in the container. pass the template you want to view as an argument to the createEmbeddedView
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //clear() will clear everything from the DOM.
      this.vcRef.clear();
    }

  }
  //pass the template element as a type into the constructor which runs when this directive is initilized. TemplateRef is of type generic type so just do <any>
  //vcRef is where do you want to display the Template. The templateRef is the template you want to render, vcRef is where do you want to render the template
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
