import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { SlugPipePipe } from './pipe/slug-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    SlugPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[SlugPipePipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
