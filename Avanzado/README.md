# openwebinar

~ Ejemplos de:
    - Arrays set y sus funciones
    - Arrays map y sus funciones
    - Pilas (LIFO):
        Last In First Out => Eso quiere decir que el último elemento que se ha añadido a la pila serà el primero en salir
    - Cola (FIFO):
        First In First Out => Eso quiere decir que el primer elemento que se ha añadido a la cola serà el primero en salir
    - Listas enlazadas:
        Las listas enlazadas son estructuras de datos donde cada elemento de la lista tiene una referencia del elemento siguiente. Da igual en que orden este la lista que el elemento seguirà teniendo la misma referencia al siguiente

~ Promesas
    - Como JavaScript es un lenguaje de hilo único, y por lo tanto síncrono, que gestiona la asincronía mediante el ciclo de eventos y las promesas
    - Una promesa es un objeto que define una tarea asíncrona que puede ejecutarse en cualquier momento
    - Es posible crear nuestras promesas para realizar tareas asíncronas, e incluso es posible gestionar varias promesads al unísono

    - Un callback es una función como parámetro llamada por la función por la función objetivo al completar su tarea con éxito siempre que haya finalizado el bucle de eventos
    - El uso del manejador then ejecuta el callback dado e implícita o explícitamente devuelve una promesa que el resto de manejadores esperarán a ver resuelta
    - Los manejadores then i catch actúan como un bloque try...catch que abarca a todo el encadenamiento que quiera hacerse en la promesa