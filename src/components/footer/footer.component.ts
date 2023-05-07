import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  imports: [CommonModule],
  selector: "app-footer",
  standalone: true,
  styleUrls: ["./footer.component.scss"],
  templateUrl: "./footer.component.html",
})
export class FooterComponent {}
