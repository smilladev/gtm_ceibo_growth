// app/api/gtm/route.ts
import Error from 'next/error';
import { connectDB } from '../../lib/mongoose';
import Data from '../../models/data';

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ mensaje: 'Endpoint funcionando correctamente' });
}



export async function POST(request: Request) {
  try {

    await connectDB();

    const body = await request.json(); // Parseamos el cuerpo de la solicitud
    console.log('Datos recibidos:', body);

    const nuevoDato = new Data(body);
    await nuevoDato.save().then((doc:any) => console.log('Documento guardado:', doc)).catch((err:Error) => console.error('Error al guardar:', err));;


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