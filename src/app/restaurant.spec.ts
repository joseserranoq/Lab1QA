import { Food } from './food';
import { Restaurant } from './restaurant';
import { SortedListOfImmutables } from './sorted-list-of-immutables';
import { Listable } from './listable';
import { Entree } from './entree';

 

//CASOS DE PRUEBA DE addShipmentToInventory
describe("SE PRUEBA addShipmentToInventory Y SE VERIFICA MEDIANTE UN BOOLEANO", function() {
    let restaurante : Restaurant;
    beforeEach(function() {
        restaurante = new Restaurant("Test", 700);
    });

    it("1.Debe de retornar True", function() {   
        let listaComida: Listable[];
        let lista2 = new SortedListOfImmutables(null);
        listaComida = [new Food("Bacon", 89, 185, "Bacon.jpg"),new Food("Waffle", 178, 350, "Waffle.jpg"),
        new Food("Egg", 47, 89, "Egg.jpg"),
        new Food("Orange Juice", 77, 199, "OrangeJuice.jpg"),
        new Food("Milk", 52, 179, "Milk.jpg"),
        new Food("Toast", 66, 125, "Toast.jpg"),
        new Food("Hashbrowns", 127, 195, "Hashbrowns.jpg")];
    
        listaComida.map((comida)=> {
            lista2.add(comida);
        });
        
        expect(restaurante.addShipmentToInventory(lista2)).toBeTruthy();
    });

    it("2.Debe retornar False", function() {
        let listaComida: Listable[];
        let lista2 = new SortedListOfImmutables(null);
        listaComida = [new Food("Bacon", 89, 185, "Bacon.jpg"),new Food("Waffle", 178, 350, "Waffle.jpg"),
        new Food("Egg", 47, 89, "Egg.jpg"),
        new Food("Orange Juice", 77, 199, "OrangeJuice.jpg"),
        new Food("Milk", 52, 179, "Milk.jpg"),
        new Food("Toast", 66, 125, "Toast.jpg"),
        new Food("Hashbrowns", 127, 195, "Hashbrowns.jpg"),new Food("Pie", 195, 275, "Pie.jpg")];
    
        listaComida.map((comida)=> {
            lista2.add(comida);
        });
        // restaurante.addShipmentToInventory(lista2);
        // expect(restaurante.getInventory().getSize()).toBe(7);
        expect(restaurante.addShipmentToInventory(lista2)).toBeFalsy();
    });

});

describe("SE PRUEBA placeOrder Y SE VERIFICA MEDIANTE UN BOOLEANO", function() {
    let restaurante : Restaurant;
    let listaComida : Listable[];
    let listaComida2 : Listable[];
    let entree: Entree;
    let lista2 : SortedListOfImmutables;
    let lista3 : SortedListOfImmutables;

    beforeEach(function() {
        lista2 = new SortedListOfImmutables(null);
        lista3 = new SortedListOfImmutables(null);
    });
    it("3.DEBE RETORNAR true", function() {
        restaurante = new Restaurant("Test", 700);
        listaComida = [new Food("Bacon", 89, 185, "Bacon.jpg"),new Food("Waffle", 178, 350, "Waffle.jpg"),
        new Food("Egg", 47, 89, "Egg.jpg")];
    
        listaComida.map((comida)=> {
            lista2.add(comida);
        });
        restaurante.addShipmentToInventory(lista2);
        listaComida2 = [new Food("Bacon", 89, 185, "Bacon.jpg"),new Food("Waffle", 178, 350, "Waffle.jpg")]
        listaComida2.map((comida2)=> {
            lista3.add(comida2);
        });
        entree = new Entree('tests', lista3);
        console.log(entree.getFoodList());
        expect(restaurante.placeOrder(entree)).toBeTruthy();
    });
    it("4.DEBE DE RETORNAR false", function() {
        restaurante = new Restaurant("Test", 700);
        listaComida = [new Food("Bacon", 89, 185, "Bacon.jpg"),new Food("Waffle", 178, 350, "Waffle.jpg"),
        new Food("Egg", 47, 89, "Egg.jpg")];    
        listaComida.map((comida)=> {
            lista2.add(comida);
        });
        restaurante.addShipmentToInventory(lista2);
        listaComida2 = [new Food("Pie", 195, 275, "Pie.jpg"),
        new Food("Croissant", 106, 125, "Croissant.jpg")];
        listaComida2.map((comida2)=> {
            lista3.add(comida2);
        });
        entree = new Entree('tests', lista3);
        console.log(entree.getFoodList());
        expect(restaurante.placeOrder(entree)).toBeFalsy();
    });
    });