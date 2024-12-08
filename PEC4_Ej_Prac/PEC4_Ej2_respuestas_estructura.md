# Respostes a l'Exercici 2: Estructura d'un projecte Angular

## **1. Creació d'un projecte Angular amb Angular CLI**
Per crear un projecte Angular, s’utilitza la comanda següent:
```bash
ng new ecommerce
```

### **Estructura del projecte generada**
Angular CLI genera una estructura bàsica amb els fitxers següents:

### **Fitxers de configuració a l'arrel del projecte**:
- **`tsconfig.app.json`**:
  Conté la configuració de TypeScript per a l'aplicació Angular.
- **`angular.json`**:
  Configuració general del projecte Angular, inclou configuracions de compilació, servidors i estils.
- **`package.json`**:
  Llista de dependències npm utilitzades al projecte.
- **`.editorconfig`**:
  Configura estils de codi com la indentació.
- **`.gitignore`**:
  Indica els fitxers i carpetes que git ha d’ignorar.

### **Directori node_modules**:
Aquest directori conté totes les dependències npm necessàries per executar l’aplicació.

### **Directori src**:
Aquest és el directori principal del codi font de l’aplicació.
- **`index.html`**:
  Conté la plantilla HTML principal de l’aplicació.
- **`main.ts`**:
  Punt d’entrada principal de l’aplicació.
- **`styles.css`**:
  Fitxer principal d’estils CSS de l’aplicació.
- **Directori `assets`**:
  Per guardar recursos com imatges o arxius estàtics.
- **Directori `app`**:
  - **`app.component.html`**:
    Conté el HTML del component principal.
  - **`app.component.css`**:
    Conté els estils associats al component principal.
  - **`app.component.ts`**:
    Conté la lògica del component principal.
  - **`app.module.ts`**:
    Defineix el mòdul principal de l’aplicació.

---

## **2. Decoradors generats per Angular CLI**
### **Fitxer `app.module.ts`:**
#### Decorador `@NgModule`
Defineix un mòdul Angular.
- **`declarations`**: Llista de components, directrius i pipes que pertanyen al mòdul.
- **`imports`**: Altres mòduls Angular necessaris per a l'aplicació.
- **`providers`**: Serveis disponibles per a la injecció de dependències.
- **`bootstrap`**: Component principal que inicialitza l'aplicació.

### **Fitxer `app.component.ts`:**
#### Decorador `@Component`
Defineix un component Angular.
- **`selector`**: El nom del component utilitzat a les plantilles HTML.
- **`templateUrl`**: Ruta al fitxer HTML associat al component.
- **`styleUrls`**: Ruta al fitxer d’estils CSS associat al component.

---

## **3. Template i estils en línia**
És possible injectar plantilles i estils directament en línia utilitzant les propietats `template` i `styles` al decorador `@Component`.

### **Exemple**:
```typescript
@Component({
  selector: 'app-root',
  template: `<h1>Hola Món</h1>`,
  styles: [`h1 { color: blue; }`]
})
```
