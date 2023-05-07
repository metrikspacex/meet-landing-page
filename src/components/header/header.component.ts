import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { LogoComponent } from "../logo/logo.component";

@Component({
  imports: [CommonModule, LogoComponent],
  selector: "app-header",
  standalone: true,
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {}
