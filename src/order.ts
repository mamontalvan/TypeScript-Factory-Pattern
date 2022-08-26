import IMetodoPago from './factory/metodo-pago-interface';
import TipoPago from './enums/tipo-pago';
import MetodoPagoFactory from './factory/metodo-pago-factory';

//Clase para gestionar las órdenes de compra
export default class Order {
    public metodoPago?: IMetodoPago;
    public comision: number = 0;

    constructor(
        private tipo: TipoPago,
        public totalOrden: number)
    { }

    public create(): void {
        //Llamamos a la fábrica de creación de métodos de pago
        this.metodoPago = MetodoPagoFactory.creaMetodoPago(this.tipo);
        //Calculamos la comisión
        this.comision = this.metodoPago.comision * this.totalOrden;
    }
}