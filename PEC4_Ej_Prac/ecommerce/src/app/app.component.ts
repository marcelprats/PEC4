import { Component } from '@angular/core';
import { ArticleItemComponent } from './article-item/article-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleItemComponent, CommonModule], // <-- Aquí importem CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  articles = [
    {
      name: 'Guitarra',
      imageUrl: 'https://st2.depositphotos.com/1020091/12531/v/950/depositphotos_125310552-stock-illustration-electric-guitar-icon.jpg',
      price: 150,
      isOnSale: true,
      quantityInCart: 1,
      selected: false,
    },
    {
      name: 'Micròfon',
      imageUrl: 'https://media.istockphoto.com/id/1298266863/es/vector/signo-vectorial-de-micr%C3%B3fono-retro.jpg?s=612x612&w=0&k=20&c=EwH1qLk3kIpBvCDXEni4xQ3X9yd5xEi30WOaUBacUNc=',
      price: 80,
      isOnSale: false,
      quantityInCart: 0,
      selected: false,
    },
    {
      name: 'Piano',
      imageUrl: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjExNDEtMzEucG5n.png',
      price: 300,
      isOnSale: true,
      quantityInCart: 2,
      selected: false,
    }
  ];

  selectArticle(selectedArticle: any): void {
    this.articles.forEach((article) => (article.selected = false));
    selectedArticle.selected = true;
  }
}
