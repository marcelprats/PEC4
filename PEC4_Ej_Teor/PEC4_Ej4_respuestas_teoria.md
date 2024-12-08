# Respostes a l'Exercici 4: Directives d'atribut i directives estructurals

## **1. Variables locals de la directiva estructural `NgFor`**

### **`index`**
- **Descripció**: Retorna la posició de l'element actual dins del conjunt iterat, començant per `0`.
- **Quan utilitzar-la**: Per mostrar la posició dels elements o realitzar operacions basades en l'índex.
- **Exemple**:
  ```html
  <ul>
    <li *ngFor="let item of items; let i = index">Element {{ i + 1 }}: {{ item }}</li>
  </ul>
  ```

### **`even`**
- **Descripció**: Retorna `true` si l'índex de l'element és parell.
- **Quan utilitzar-la**: Per aplicar estils diferents als elements en posicions parells.
- **Exemple**:
  ```html
  <ul>
    <li *ngFor="let item of items; let isEven = even" [class.parell]="isEven">
      {{ item }}
    </li>
  </ul>
  ```

### **`odd`**
- **Descripció**: Retorna `true` si l'índex de l'element és imparell.
- **Quan utilitzar-la**: Per aplicar estils diferents als elements en posicions imparells.
- **Exemple**:
  ```html
  <ul>
    <li *ngFor="let item of items; let isOdd = odd" [class.imparell]="isOdd">
      {{ item }}
    </li>
  </ul>
  ```

### **`first`**
- **Descripció**: Retorna `true` si l'element actual és el primer del conjunt iterat.
- **Quan utilitzar-la**: Per destacar o realçar el primer element.
- **Exemple**:
  ```html
  <ul>
    <li *ngFor="let item of items; let isFirst = first" [class.primer]="isFirst">
      {{ item }}
    </li>
  </ul>
  ```

### **`last`**
- **Descripció**: Retorna `true` si l'element actual és l'últim del conjunt iterat.
- **Quan utilitzar-la**: Per destacar o realçar l'últim element.
- **Exemple**:
  ```html
  <ul>
    <li *ngFor="let item of items; let isLast = last" [class.ultim]="isLast">
      {{ item }}
    </li>
  </ul>
  ```

---

## **2. L'opció `trackBy` de la directiva `NgFor`**

### **Descripció**
- L'opció `trackBy` s'utilitza per millorar el rendiment en iteracions amb `NgFor`.
- Permet identificar únicament cada element dins de l'iteració mitjançant una funció personalitzada.

### **Per què és útil?**
- Redueix el nombre d'actualitzacions de l'HTML quan els elements canvien o s'actualitzen.
- Angular només re-renderitza els elements que han canviat, en lloc de recrear tota la llista.

### **Exemple**:
```typescript
trackByFn(index: number, item: any): any {
  return item.id; // Suposem que cada element té un camp 'id' únic
}
```

```html
<ul>
  <li *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</li>
</ul>
```

---

## **3. Execució simultània de directives estructurals**

### **És possible?**
- **No**, no és possible aplicar dues directives estructurals (com `*ngIf` i `*ngFor`) al mateix element directament.
- Això es deu a que Angular espera controlar completament el DOM amb una sola directiva estructural.

### **Raó**
- Cada directiva estructural gestiona la creació i destrucció d'elements DOM.
- Aplicar més d'una directiva al mateix element causaria conflictes.

### **Alternativa**
- Utilitzar un contenidor com un `<ng-container>`:
  ```html
  <ng-container *ngIf="showItems">
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  </ng-container>
  ```
