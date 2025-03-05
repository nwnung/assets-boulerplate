import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen py-16 flex items-center justify-center">
      <Card className="max-w-3xl w-full shadow-xl rounded-2xl">
        <CardContent className="p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center ">
            Términos y Condiciones
          </h1>
          <p className="text-gray-600 text-sm text-center">
            Última actualización: Febrero 2025
          </p>
          <div className="space-y-4  text-sm leading-relaxed">
            <h2 className="text-lg font-semibold">1. Introducción</h2>
            <p>
              Estos términos y condiciones regulan el uso de nuestro servicio en
              Perú. Al utilizar nuestra plataforma, aceptas cumplir con estos
              términos.
            </p>

            <h2 className="text-lg font-semibold">2. Uso del Servicio</h2>
            <p>
              El usuario debe ser mayor de 18 años o contar con la autorización
              de sus padres o tutores. El uso indebido de la plataforma está
              estrictamente prohibido.
            </p>

            <h2 className="text-lg font-semibold">3. Privacidad</h2>
            <p>
              Respetamos tu privacidad y protegemos tus datos personales de
              acuerdo con la legislación peruana (Ley N° 29733).
            </p>

            <h2 className="text-lg font-semibold">4. Pagos</h2>
            <p>
              Los pagos realizados a través de nuestra plataforma son seguros y
              están sujetos a las políticas de la pasarela de pago seleccionada.
            </p>

            <h2 className="text-lg font-semibold">5. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos de la plataforma son propiedad exclusiva de
              nuestra empresa o se utilizan con licencia adecuada.
            </p>

            <h2 className="text-lg font-semibold">6. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. Los cambios serán notificados con antelación a través de
              la plataforma.
            </p>

            <h2 className="text-lg font-semibold">7. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos términos, contáctanos a través de
              nuestro correo electrónico de soporte.
            </p>
          </div>
          <p className="text-xs text-center text-gray-500">
            Al utilizar nuestro servicio, aceptas estos términos y condiciones.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Terms;
