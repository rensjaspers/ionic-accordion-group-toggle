import { Component } from "@angular/core";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/angular/standalone";
import { AccordionGroupToggleDirective } from "../accordion-group-toggle.directive";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [
    IonButton,
    IonLabel,
    IonItem,
    IonAccordion,
    IonAccordionGroup,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    AccordionGroupToggleDirective,
  ],
})
export class HomePage {
  constructor() {}
}
