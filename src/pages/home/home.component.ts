import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GalleryComponent } from "src/components/gallery/gallery.component";
import { HeroComponent } from "src/components/hero/hero.component";

@Component({
  imports: [CommonModule, HeroComponent, GalleryComponent],
  selector: "app-home",
  standalone: true,
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})
export class HomeComponent {}
