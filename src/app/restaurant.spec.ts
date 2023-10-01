import { Food } from './food';
import { Restaurant } from './restaurant';
import { SortedListOfImmutables } from './sorted-list-of-immutables';
import { Listable } from './listable';
import { Entree } from './entree';

/*Casos de prueba para addShipmentToInventory, en el caso 1, se espera que
se pueda añadir una lista de items al inventario del restaurante si la suma 
de los precios de los items no es mayor al dinero disponible en el restaurante, 
se probara utilizando una lista de comidas y se espera que retorne True, 
para el caso 2, es similar al primero pero en este el monto de la suma excede
el dinero del restaurante, por lo que se espera que retorne false.*/
describe('SE PRUEBA addShipmentToInventory Y SE VERIFICA MEDIANTE UN BOOLEANO', function () {
  let restaurante: Restaurant;
  let listaComida: Listable[];
  let lista2: Listable[];
  beforeEach(function () {
    restaurante = new Restaurant('Test', 700);
  });
  afterEach(function () {
    listaComida = [];
    lista2 = [];
  });

  it('1.Debe de retornar True', function () {
    let listaComida: Listable[];
    let lista2 = new SortedListOfImmutables(null);
    listaComida = [
      new Food('Bacon', 89, 185, 'Bacon.jpg'),
      new Food('Waffle', 178, 350, 'Waffle.jpg'),
      new Food('Egg', 47, 89, 'Egg.jpg'),
      new Food('Orange Juice', 77, 199, 'OrangeJuice.jpg'),
      new Food('Milk', 52, 179, 'Milk.jpg'),
      new Food('Toast', 66, 125, 'Toast.jpg'),
      new Food('Hashbrowns', 127, 195, 'Hashbrowns.jpg'),
    ];

    listaComida.map((comida) => {
      lista2.add(comida);
    });

    expect(restaurante.addShipmentToInventory(lista2)).toBeTruthy();
  });

  it('2.Debe retornar False', function () {
    let listaComida: Listable[];
    let lista2 = new SortedListOfImmutables(null);
    listaComida = [
      new Food('Bacon', 89, 185, 'Bacon.jpg'),
      new Food('Waffle', 178, 350, 'Waffle.jpg'),
      new Food('Egg', 47, 89, 'Egg.jpg'),
      new Food('Orange Juice', 77, 199, 'OrangeJuice.jpg'),
      new Food('Milk', 52, 179, 'Milk.jpg'),
      new Food('Toast', 66, 125, 'Toast.jpg'),
      new Food('Hashbrowns', 127, 195, 'Hashbrowns.jpg'),
      new Food('Pie', 195, 275, 'Pie.jpg'),
    ];

    listaComida.map((comida) => {
      lista2.add(comida);
    });
    expect(restaurante.addShipmentToInventory(lista2)).toBeFalsy();
  });
});

/*Casos de prueba para placeOrder, en el caso 3, se espera que
se pueda realizar el pedido de una entree tomando en cuenta el inventario
disponible en el restaurante, se espera que retorne True, ya que el pedido 
si existe en el inventario, para el caso 4 , es similar al tercero pero 
en este parte del entree, no existe en el restaurante por lo que se espera 
que retorne false.*/
describe('SE PRUEBA placeOrder Y SE VERIFICA MEDIANTE UN BOOLEANO', function () {
  let restaurante: Restaurant;
  let listaComida: Listable[];
  let listaComida2: Listable[];
  let entree: Entree;
  let lista2: SortedListOfImmutables;
  let lista3: SortedListOfImmutables;

  beforeEach(function () {
    lista2 = new SortedListOfImmutables(null);
    lista3 = new SortedListOfImmutables(null);
  });
  afterEach(function () {
    listaComida = [];
    listaComida2 = [];
  });
  it('3.Debe retornar True', function () {
    restaurante = new Restaurant('Test', 700);
    listaComida = [
      new Food('Bacon', 89, 185, 'Bacon.jpg'),
      new Food('Waffle', 178, 350, 'Waffle.jpg'),
      new Food('Egg', 47, 89, 'Egg.jpg'),
    ];

    listaComida.map((comida) => {
      lista2.add(comida);
    });
    restaurante.addShipmentToInventory(lista2);
    listaComida2 = [
      new Food('Bacon', 89, 185, 'Bacon.jpg'),
      new Food('Waffle', 178, 350, 'Waffle.jpg'),
    ];
    listaComida2.map((comida2) => {
      lista3.add(comida2);
    });
    entree = new Entree('tests', lista3);
    expect(restaurante.placeOrder(entree)).toBeTruthy();
  });
  it('4.Debe retornar False', function () {
    restaurante = new Restaurant('Test', 700);
    listaComida = [
      new Food('Bacon', 89, 185, 'Bacon.jpg'),
      new Food('Waffle', 178, 350, 'Waffle.jpg'),
      new Food('Egg', 47, 89, 'Egg.jpg'),
    ];
    listaComida.map((comida) => {
      lista2.add(comida);
    });
    restaurante.addShipmentToInventory(lista2);
    listaComida2 = [
      new Food('Pie', 195, 275, 'Pie.jpg'),
      new Food('Croissant', 106, 125, 'Croissant.jpg'),
    ];
    listaComida2.map((comida2) => {
      lista3.add(comida2);
    });
    entree = new Entree('tests', lista3);
    expect(restaurante.placeOrder(entree)).toBeFalsy();
  });
});
