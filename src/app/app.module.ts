import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { ParticlesComponent } from './components/image-container/components/particles/particles.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ImageContainerComponent,
    ParticlesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
