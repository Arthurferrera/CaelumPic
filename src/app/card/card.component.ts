import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl:'./card.component.html',
    styles:[]
})
export class CardComponent{
    @Input() foto;
}