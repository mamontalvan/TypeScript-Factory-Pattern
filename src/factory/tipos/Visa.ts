import IMetodoPago from "../metodo-pago-interface";

export default class Visa implements IMetodoPago{
    //Aplica una comisión del 5%
    get comision(): number{
        return 0.05;
    };
}