import 'mocha';
import { expect } from 'chai';
import TipoPago from "../src/enums/tipo-pago";
import Order from "../src/order";
import Visa from '../src/factory/tipos/Visa';
import Mastercard from '../src/factory/tipos/Mastercard';
import Paypal from '../src/factory/tipos/Paypal';

//Creamos 3 órdenes de compra con distintos métodos de pago y le enviamos el mismo monto de Orden
let orden1 = new Order(TipoPago.Mastercard, 100),
    orden2 = new Order(TipoPago.Visa, 100),
    orden3 = new Order(TipoPago.Paypal, 100);

orden1.create();
orden2.create();
orden3.create();

describe("Probando Orden de Compra con Mastercard", () => {
    it('La Orden debe ser pagada por Mastercard', () => {
        expect(true).to.equal(orden1.metodoPago instanceof Mastercard);
    });

    it('Comisión de la orden debe ser 4', ()=> {
        expect(4).to.equal(orden1.comision)
    });
});


describe("Probando Orden de Compra con Visa", () => {
    it('La Orden debe ser pagada por Visa', () => {
        expect(true).to.equal(orden2.metodoPago instanceof Visa);
    });

    it('Comisión de la orden debe ser 5', ()=> {
        expect(5).to.equal(orden2.comision)
    });
});


describe("Probando Orden de Compra con Paypal", () => {
    it('La Orden debe ser pagada por Paypal', () => {
        expect(true).to.equal(orden3.metodoPago instanceof Paypal);
    });

    it('Comisión de la orden debe ser 6', ()=> {
        expect(6).to.equal(orden3.comision)
    });
});