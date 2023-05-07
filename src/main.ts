/// <reference types="@angular/localize" />

import { Component, isDevMode } from "@angular/core";
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideServiceWorker } from "@angular/service-worker";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import routeConfig from "./route";

@Component({
  imports: [FooterComponent, HeaderComponent, MainComponent],
  selector: "app-root",
  standalone: true,
  styleUrls: ["./styles/root.scss"],
  template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  `,
})
export class RootComponent {}

bootstrapApplication(RootComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
}).catch((err) => console.error(err));
