import { Food } from './food';
import { Listable } from './listable';
import { SortedListOfImmutables } from './sorted-list-of-immutables';

/*Caso de prueba para getRetailValue, donde se busca la suma total de los
precios de los items en una lista, se espera la suma de estos valores como 
resultado final*/
describe('SE PRUEBA getRetailValue() Y SE VERIFICA MEDIANTE LA SUMA DE UN NUMERO', function () {
  it('1.Debe de mostrar la suma de los precios de los items en la lista', function () {
    let listaComida: Listable[];
    let listaComida2: Listable[];
    let listaComida3: Listable[];
    let lista1 = new SortedListOfImmutables(null);
    let lista2 = new SortedListOfImmutables(null);
    let lista3 = new SortedListOfImmutables(null);
    listaComida = [];
    listaComida2 = [
      new Food('Bacon', 89, 185, 'Bacon.jpg'),
      new Food('Waffle', 178, 350, 'Waffle.jpg'),
    ];
    listaComida3 = [
      new Food('Cereal', 129, 275, 'Cereal.jpg'),
      new Food('Donut', 89, 129, 'Donut.jpg'),
      new Food('Melon', 98, 159, 'Melon.jpg'),
      new Food('Pie', 195, 275, 'Pie.jpg'),
      new Food('Croissant', 106, 125, 'Croissant.jpg'),
    ];
    listaComida.map((comida) => {
      lista1.add(comida);
    });
    listaComida2.map((comida) => {
      lista2.add(comida);
    });
    listaComida3.map((comida) => {
      lista3.add(comida);
    });
    [lista1, lista2, lista3].forEach((lista) => {
      let total = lista.getRetailValue();
      expect(lista.getRetailValue()).toBe(total);
    });
  });
});
