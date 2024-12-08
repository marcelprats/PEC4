# Respostes a l'Exercici 1: Opcions d'Angular CLI

## `ng new`
- **Descripció**: Aquesta comanda crea un nou projecte Angular amb una estructura predefinida.
- **Exemple**:
  ```bash
  ng new ecommerce --style css --routing
  ```
  Això crea un projecte Angular amb suport per al routing i estil CSS.

---

## `ng generate`
- **Descripció**: Aquesta comanda genera nous elements Angular com components, serveis, directrius, etc.
- **Subcomandes**:
  - **`ng generate component [nom_component]`**:
    - Crea un nou component Angular amb els fitxers HTML, CSS i TypeScript.
    - Exemple:
      ```bash
      ng generate component user-profile
      ```

  - **`ng generate directive [nom_directive]`**:
    - Crea una directiva personalitzada per afegir funcionalitats als elements HTML.
    - Exemple:
      ```bash
      ng generate directive highlight
      ```

  - **`ng generate enum [nom_enum]`**:
    - Crea un tipus `enum` de TypeScript.
    - Exemple:
      ```bash
      ng generate enum user-role
      ```

  - **`ng generate guard [nom_guard]`**:
    - Crea una funció de seguretat (guard) per protegir rutes de l’aplicació.
    - Exemple:
      ```bash
      ng generate guard auth
      ```

  - **`ng generate interface [nom_interface]`**:
    - Crea una interfície TypeScript.
    - Exemple:
      ```bash
      ng generate interface user
      ```

  - **`ng generate pipe [nom_pipe]`**:
    - Crea un pipe per transformar dades en les plantilles Angular.
    - Exemple:
      ```bash
      ng generate pipe formatDate
      ```

  - **`ng generate service [nom_service]`**:
    - Crea un servei per encapsular la lògica de negoci.
    - Exemple:
      ```bash
      ng generate service user
      ```

---

## `ng serve`
- **Descripció**: Llança un servidor de desenvolupament per executar l'aplicació Angular.
- **Exemple**:
  ```bash
  ng serve --open
  ```
  Obre l'aplicació al navegador automàticament.

---

## `ng test`
- **Descripció**: Executa els tests de l'aplicació Angular.
- **Exemple**:
  ```bash
  ng test
  ```

---

## `ng version`
- **Descripció**: Mostra informació sobre la versió actual d’Angular CLI i altres paquets Angular instal·lats.
- **Exemple**:
  ```bash
  ng version
  ```