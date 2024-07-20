import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposDeCarta ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspecialesCarta ejemplo ['A','J','Q','K']
 * @returns {Array<String>} retorna un deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspecialesCarta) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if(!tiposEspecialesCarta || tiposEspecialesCarta.length === 0)
        throw new Error('tiposEspecialesCarta es obligatorio como un arreglo de string ');


    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspecialesCarta ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
