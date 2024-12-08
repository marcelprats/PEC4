import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ArticleItemComponent, Article } from './article-item/article-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent], // Afegeix CommonModule i ArticleItemComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [
    {
      name: 'Guitarra Acústica',
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
      isOnSale: true,
      quantityInCart: 0,
      selected: false,
    },
  ];

  selectArticle(selectedArticle: Article): void {
    this.articles.forEach(article => {
      article.selected = article === selectedArticle;
    });
  }
}
