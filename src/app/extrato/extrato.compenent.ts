import { Component, Input } from "@angular/core";

@Component({
  selector: "app-extrato",
  templateUrl: "./extrato.component.html",
  styleUrls: ["./extrato.compenent.scss"]
})
export class ExtratoComponent {
  @Input()
  transferencia: any;

  constructor() {}

  ngOnInit() {}
}
