import './globals.css';

export const metadata = {
  title: 'Anderson Ramos | Software Developer',
  description: 'Portafolio de Anderson Ramos, estudiante de Diseño y Desarrollo de Software en TECSUP.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
