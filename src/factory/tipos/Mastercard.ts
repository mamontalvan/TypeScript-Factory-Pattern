import IMetodoPago from "../metodo-pago-interface";


export default class Mastercard implements IMetodoPago{
    //Aplica una comisión del 4%
    get comision(): number {
        return 0.04;
    }
}