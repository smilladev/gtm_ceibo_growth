import { NextResponse } from 'next/server'
import { connectDB } from '../../lib/mongoose'
import Utm from '../../models/utm'

export async function GET(request: Request) {
  try {
    await connectDB()

    // Obtener la URL completa del request
    const url = new URL(request.url)

    // Extraer los parámetros del querystring
    const queryParams = url.searchParams

    const utmSource = queryParams.get('utm_source')
    const utmMedium = queryParams.get('utm_medium')
    const utmCampaign = queryParams.get('utm_campaign')
    const utmContent = queryParams.get('utm_content')
    const Gclid = queryParams.get('Gclid')

    // Armar una respuesta con los parámetros recibidos
    const params = {
      utmSource: utmSource || 'No especificado',
      utmMedium: utmMedium || 'No especificado',
      utmCampaign: utmCampaign || 'No especificado',
      utmContent: utmContent || 'No especificado',
      Gclid: Gclid || 'No especificado',
    }

    //guardar info
    const nuevoUtm = new Utm(params)
    await nuevoUtm
      .save()
      .then((vars: any) => console.log('Variables guardadas:', vars))
      .catch((err: Error) => console.error('Error al guardar:', err))

    const urlRedirect =
      'https://api.whatsapp.com/send/?phone=595974565858&text=Hola, vi tu anuncio en Google y tengo una consulta..&type=phone_number&app_absent=0'

    //return NextResponse.redirect(urlRedirect);
    return NextResponse.json({ urlRedirect: urlRedirect }, { status: 200 })

    //return NextResponse.json(params, { status: 200 });
  } catch (error) {
    console.error('Error procesando los datos:', error)
    return NextResponse.json({ mensaje: 'Hubo un error procesando los datos' }, { status: 500 })
  }
}
