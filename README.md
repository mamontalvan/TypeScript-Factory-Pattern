## Patrón Factory:
- Es un patrón que nos permite crear objetos a partir de una clase cuyo propósito es la fabricación de nuevos objetos, los cuáles comparten una interfaz o son objetos similares pero pueden tener un comportamiento diferente.



### Ventajas:
- Evita un acoplamiento fuerte entre la clase creadora (fábrica) de objetos y los objetos concretos.
- Se puede crear nuevos tipos de objetos concretos sin descomponer el código de la clase creadora de objetos o de los otros objetos concretos.

### Ejemplo:
- Se requiere procesar las órdenes de compra y calcular la comisión según el método de pago: Visa, Mastercad o Paypal.

### Reconstruimos los paquetes:
```
npm install
```

### Ejecutamos los test unitarios:
```
npm run test
```
