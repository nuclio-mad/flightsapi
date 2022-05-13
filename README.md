# Flights API

Vamos a crear una API RESTful completa, en la que los usuarios puedan reservar asientos de vuelos.

## Recursos:

Los `recursos` en REST son los modelos que expone el API. En nuestro caso podemos intuir los siguientes recursos:

### Pasajero

Un pasajero representa una persona.

```
{
  id: number
  name: string
  surname: string
}
```

### Flight

Un vuelo representa un viaje en avión desde un aeropuerto a otro

```
{
  id: number
  departure: string
  arrival: string
  seats: number
}
```

### Seat

Representa un asiento en un vuelo asociado a un pasajero

```
{
  id: number
  number: number
  flight_id: number
  passenger_id: number
}
```

## Routes

Estas son las rutas que nuestra api va a exponer para que los usuarios puedan interactuar con los vuelos

### /passenger

  - `GET` devuelve todos los pasajeros
  - `POST` crea un pasajero y lo devuelve

### /passenger/:passengerId

Representa un solo pasajero

  - `GET` devuelve el pasajero
  - `PUT` actualiza el pasajero completo
  - `PATCH` actualiza sólo los campos recibidos
  - `DELETE` elimina el pasajero

### /flight

  - `GET` devuelve todos los vuelos

### /flight/:flightId

  - `GET` devuelve toda la información del vuelo

### /flight/:flightId/seat

  - `GET` devuelve los asientos reservados de ese avión
  - `POST` asigna un asiento a un pasajero

### /flight/:flightId/seat/:seatId

  - `GET` devuelve la información de ese asiento
  - `DELETE` elimina la reserva del asiento