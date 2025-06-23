
//impotando las opreaciones sobre las que vamos a hacer testing
// {nombre de lo importado} = requiere("ruta del archivo sin extension")
const { add, substract, multiply, divide, residuo } = require("../operaciones");


//1. DEscribir que es lo que va hacer el test
describe("probando la funcion suma", () => {
    //test()
    test("probando que en la funcion add 2 + 2 = 4", () => {
        //escribimos que es lo que esperamos de la funcion 
        expect(add(2, 2)).toBe(4); //expec() es una funcion para declarar lo que se espera suceda
        // dentro de expect() colocamos nuestra funcion que queremos probar en ese caso es: expect(add(parametros));
        // y luego agreagamos .toBe() para verificar que el resultado sea igual a 4. expect(add(2,2)).toBe(4);
    })

    test("probando que retorne undefined si ingresamos un string", () => {
        //toBeUndefined evalua que la salida de la funcion sea undefined
        expect(add("4", 2)).toBeUndefined();
    })

    test("probando que retorne un valor falsy", () => {
        //toBefalsy evalua que la salida de la funcion sea un valor falsy
        expect(add(true, 4)).toBeFalsy();
    })
});

/*
1. Hacer minimo 4 test por function faltante
2. Probar en la function divide que el mensaje si poner divide(0,0) sea correcto
 */

//funcion resta
describe("Pruebas sobre la funcion substract", () => {
    test("Probando que una resta de numeros positivos sea mayor que 0", () => {
        expect(substract(10, 5)).toBeGreaterThan(0);
    })

    test("Probando que una resta de (-2) - 2 = -4", () => {
        expect(substract(-2, 2)).toBe(-4);
    })

    test("Probando que una resta de 40 - 30 = 10", () => {
        expect(substract(40, 30)).toBe(10);
    })

    test("Probando que retorne undefined si ingresamos un string", () => {
        expect(substract("10", 6)).toBeUndefined();
    })
});


//funcion multiply
describe("Probando la funcion muliply", () => {
    test("Probando que 5 x 10 = 50", () => {
        expect(multiply(5, 10)).toBe(50);
    })
    test("Probando que de como resultado un numero negativo 10 x -9 = -90", () => {
        expect(multiply(10, -9)).toBe(-90);
    })
    test("Probando que retorne un valor falsy", () => {
        expect(multiply(false, 6)).toBeFalsy();
    })
    test("Probando que retorne una multiplicacion mayor a cero", () => {
        expect(multiply(2, 6)).toBeGreaterThan(0);
    })
});


//funcion divide 
describe("Probando la funcion divide", () => {
    test("Probando que 10 / 2 = 5", () => {
        expect(divide(10, 2)).toBe(5);
    });

    test("Probando que una división entre número negativo y positivo sea negativa", () => {
        expect(divide(-20, 4)).toBe(-5);
    });

    test("Probando que retorne undefined si el divisor es 0", () => {
        expect(divide(5, 0)).toBeUndefined();
    });

    test("Probando que divida 0 entre 0 devuelva el mensaje correcto", () => {
        expect(divide(0, 0)).toBe("No se puede dividir 0 entre 0");
    });
});

//funcion residuo
describe("Probando la funcion residuo", () => {
    test("Probando que 10 % 3 = 1", () => {
        expect(residuo(10, 3)).toBe(1);
    });

    test("Probando que 15 % 5 = 0", () => {
        expect(residuo(15, 5)).toBe(0);
    });

    test("Probando que retorne undefined si el segundo número es 0", () => {
        expect(residuo(10, 0)).toBeUndefined();
    });

    test("Probando que retorne un valor negativo si el dividendo es negativo", () => {
        expect(residuo(-10, 3)).toBe(-1);
    });
});
