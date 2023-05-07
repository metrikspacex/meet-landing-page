import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  imports: [CommonModule],
  selector: "app-gallery",
  standalone: true,
  styleUrls: ["./gallery.component.scss"],
  templateUrl: "./gallery.component.html",
})
export class GalleryComponent {}
