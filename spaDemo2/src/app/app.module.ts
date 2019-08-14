import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './index.component';
import { PageoneComponent } from './pageone.component';
import { lazyRoutes } from './ap.routes';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageoneComponent
  ],
  imports: [
    BrowserModule,
    lazyRoutes
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
