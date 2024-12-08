import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent, // Declara el componente hijo
  ],
  imports: [
    BrowserModule,
    CommonModule, // Asegúrate de importar esto
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
