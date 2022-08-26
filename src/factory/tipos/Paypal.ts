import IMetodoPago from "../metodo-pago-interface";


export default class Paypal implements IMetodoPago{
    //Aplica una comisión del 6%
    get comision():number{
        return 0.06;
    }
}