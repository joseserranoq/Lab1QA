import { Food } from './food';
import { Restaurant } from './restaurant';
import { SortedListOfImmutables } from './sorted-list-of-immutables';
import { Listable } from './listable';

 

//CASOS DE PRUEBA DE addShipmentToInventory
describe("SE AGREGA UNA LISTA A LA FUNCION addShipmentToInventory", function() {
    let restaurante : Restaurant;
    let listaComida: Listable[];
    let lista2 = new SortedListOfImmutables(null);
    beforeEach(function() {
        restaurante = new Restaurant("Test", 500);
        listaComida = [new Food("Bacon", 89, 185, "Bacon.jpg"),new Food("Waffle", 178, 350, "Waffle.jpg"),
        new Food("Egg", 47, 89, "Egg.jpg"),
        new Food("Orange Juice", 77, 199, "OrangeJuice.jpg"),
        new Food("Milk", 52, 179, "Milk.jpg"),
        new Food("Toast", 66, 125, "Toast.jpg"),
        new Food("Hashbrowns", 127, 195, "Hashbrowns.jpg")];
    
        listaComida.map((comida)=> {
            lista2.add(comida);
        });
    });

    
    it("1.Debe de retornar falso", function() {   
        expect(restaurante.addShipmentToInventory(lista2)).toBeFalsy();

    });

    it("2.Ver la cantidad de elementos de la lista debe de haber 7", function() {
        //expect(restaurante.addShipmentToInventory(lista2)).toBeTruthy();
        expect(restaurante.getInventory().getSize()).toBe(7);
    });
});

