// app/api/gtm/route.ts
import Error from 'next/error';
import { connectDB } from '../../lib/mongoose';
import Data from '../../models/data';
import { Parser } from '@json2csv/plainjs';

import { NextResponse } from 'next/server';

export async function GET() {


  const collectionName = 'Data'; // Reemplaza con el nombre de tu colección
  const camposAExportar = ['email', 'cedula', 'fglid', 'gclid', 'pagina_de_entrada', 'UTM_Source', 'UTM_Medium', 'UTM_Campaign', 'Pagina_de_salida', 'Codigo_de_retorno']; // Define tus campos


  try {
    
    await connectDB();

    const documentos = await Data.find({}, '-_id').lean().exec();

    if (!documentos || documentos.length === 0) {
      return NextResponse.json(
        { mensaje: 'No se encontraron datos para exportar.' },
        { status: 200 }
      );
    }

    const json2csvParser = new Parser({ fields: camposAExportar });
    const csvData = json2csvParser.parse(documentos);

    return new NextResponse(csvData, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="exportacion.csv"',
      },
    });


  } catch (error) {
    console.error('Error al exportar a CSV:', error);
    return NextResponse.json(
      { error: 'Error al obtener o procesar los datos para la exportación.' },
      { status: 500 }
    );
  } finally {
    // No desconectes Mongoose aquí si lo estás reutilizando en otras partes de tu aplicación
    // mongoose.disconnect();
  }

  return NextResponse.json({ mensaje: 'Endpoint funcionando correctamente' });
}

export async function POST(request: Request) {
  try {

    await connectDB();

    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');

    // Manejar solicitudes OPTIONS (preflight)
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers });
    }


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