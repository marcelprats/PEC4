## 1. Quins són els **style encapsulation** dels components? Poseu un exemple d'ús de cadascun.

Angular permet tres tipus d'encapsulació d'estils per als components:

- **Emulated** (per defecte):
  L'encapsulació simula el comportament del shadow DOM, però sense utilitzar-lo realment. Els estils només s'apliquen al component i no afecten altres parts de l'aplicació.

  ```typescript
  @Component({
    selector: 'app-emulated',
    template: `<p>Estil emulat</p>`,
    styles: [`p { color: blue; }`],
    encapsulation: ViewEncapsulation.Emulated
  })
  export class EmulatedComponent {}
  ```

- **Shadow DOM (Native/ShadowDom)**:
  Utilitza el shadow DOM real. Els estils queden encapsulats i no afecten altres components, però només funciona en navegadors compatibles amb shadow DOM.

  ```typescript
  @Component({
    selector: 'app-shadow-dom',
    template: `<p>Estil Shadow DOM</p>`,
    styles: [`p { color: green; }`],
    encapsulation: ViewEncapsulation.ShadowDom
  })
  export class ShadowDomComponent {}
  ```

- **None**:
  Els estils són globals i s'apliquen a tota l'aplicació. No hi ha encapsulació.

  ```typescript
  @Component({
    selector: 'app-none',
    template: `<p>Estil sense encapsulació</p>`,
    styles: [`p { color: red; }`],
    encapsulation: ViewEncapsulation.None
  })
  export class NoneComponent {}
  ```

---

## 2. Què és el **shadow DOM**?

El **shadow DOM** és una tecnologia que permet encapsular la estructura HTML, estils i funcionalitats d'un component dins del navegador. Això significa que els estils i comportaments definits en un shadow DOM no afecten altres parts de la pàgina, i viceversa.

**Exemple:**
Un `<video>` o un `<input>` utilitzen el shadow DOM per encapsular els seus estils i funcionalitats.

---

## 3. Què és el **changeDetection**?

El **changeDetection** és el mecanisme d'Angular que detecta i actualitza automàticament els canvis en les dades del component i el DOM. Angular utilitza la biblioteca **zone.js** per interceptar esdeveniments com clics, peticions HTTP o temporitzadors, i així actualitzar la interfície gràfica de l'usuari.

---

## 4. Quines diferències hi ha entre les estratègies **Default** i **OnPush**? Quan has d'usar una i altra? Avantatges i inconvenients.

- **Default**:
  Angular verifica tots els components cada vegada que es detecta un canvi, independentment de si el canvi afecta el component o no.

  **Avantatges**:
  - Simple i fàcil d'usar.
  - No requereix configuració addicional.

  **Inconvenients**:
  - Pot ser menys eficient en aplicacions grans perquè comprova tots els components.

- **OnPush**:
  Només actualitza el component si el seu input ha canviat (dades primitives o referències d'objectes).

  ```typescript
  @Component({
    selector: 'app-onpush',
    templateUrl: './onpush.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class OnPushComponent {}
  ```

  **Avantatges**:
  - Millor rendiment en aplicacions grans.
  - Evita actualitzacions innecessàries.

  **Inconvenients**:
  - Requereix més cura per garantir que els inputs es modifiquen correctament.

**Quan utilitzar cada estratègia?**
- **Default**: Per aplicacions senzilles o quan els canvis són freqüents i complexos.
- **OnPush**: Quan vulguis optimitzar el rendiment en aplicacions grans amb components ben definits.

---

## 5. Explica detalladament el cicle de vida dels components.

Els components d'Angular tenen un conjunt de **hooks** que es poden utilitzar per executar codi en diferents moments del seu cicle de vida.

### Hooks principals:
- **`OnChanges`**:
  - Es crida cada vegada que canvien els inputs del component.
  - Ideal per reaccionar als canvis en les dades externes.
  ```typescript
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Canvis detectats:', changes);
  }
  ```

- **`OnInit`**:
  - S'executa una vegada després de la inicialització del component.
  - Perfecte per inicialitzar dades.
  ```typescript
  ngOnInit(): void {
    console.log('Component inicialitzat');
  }
  ```

- **`AfterViewInit`**:
  - S'executa després que la vista del component i les seves vistes fills estiguin renderitzades.
  ```typescript
  ngAfterViewInit(): void {
    console.log('Vista inicialitzada');
  }
  ```

- **`OnDestroy`**:
  - S'executa just abans que el component sigui destruït.
  - S'utilitza per netejar recursos o eliminar subscripcions.
  ```typescript
  ngOnDestroy(): void {
    console.log('Component destruït');
  }
  ```

**Resum del cicle de vida:**
1. **Creació del component**: `OnChanges`, `OnInit`.
2. **Renderització de la vista**: `AfterViewInit`.
3. **Destrucció del component**: `OnDestroy`.
