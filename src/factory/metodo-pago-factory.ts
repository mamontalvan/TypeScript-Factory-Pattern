import TipoPago from "../enums/tipo-pago";
import IMetodoPago from "./metodo-pago-interface";
import Mastercard from './tipos/Mastercard';
import Paypal from './tipos/Paypal';
import Visa from './tipos/Visa';

//Esta clase se convierte en una fábrica de tipos de métodos de pago
export default class MetodoPagoFactory {
    //Se crea un método estático, así que no hace falta instanciarlo
    public static creaMetodoPago(tipo: TipoPago): IMetodoPago{
        if( tipo === TipoPago.Mastercard){
            return new Mastercard();
        }
        
        if( tipo === TipoPago.Visa){
            return new Visa();
        }

        if( tipo === TipoPago.Paypal){
            return new Paypal();
        }

        throw new Error("Tipo de pago inválido");
        
    }

}