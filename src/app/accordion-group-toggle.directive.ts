import { ContentChildren, Directive, QueryList } from "@angular/core";
import { IonAccordion, IonAccordionGroup } from "@ionic/angular/standalone";

@Directive({
  selector: "[appAccordionGroupToggle]",
  exportAs: "appAccordionGroupToggle",
  standalone: true,
})
export class AccordionGroupToggleDirective {
  @ContentChildren(IonAccordion) accordions!: QueryList<IonAccordion>;

  constructor(private host: IonAccordionGroup) {}

  toggle() {
    const isCompletelyOpen = this.isEveryAccordionOpen();
    if (isCompletelyOpen) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  expand() {
    this.host.multiple = true;
    this.host.value = this.accordions.map((accordion) => accordion.value);
  }

  collapse() {
    this.host.multiple = true;
    this.host.value = [];
  }

  private isEveryAccordionOpen() {
    const groupValue = this.host.value;
    return (
      Array.isArray(groupValue) && groupValue?.length === this.accordions.length
    );
  }
}
