// app/api/gtm/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parseamos el cuerpo de la solicitud
    console.log('Datos recibidos:', body);

    // Aquí podrías añadir lógica, como guardar los datos en una base de datos
    const respuesta = { mensaje: 'Datos procesados exitosamente', datos: body };

    return NextResponse.json(respuesta, { status: 200 });
  } catch (error) {
    console.error('Error procesando los datos:', error);
    return NextResponse.json(
      { mensaje: 'Hubo un error procesando los datos' },
      { status: 500 }
    );
  }
}