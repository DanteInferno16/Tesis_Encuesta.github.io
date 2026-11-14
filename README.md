# Guía de entrevista: proceso de cobranza, sector San Pedro Sula

Página web estática (sin servidor propio) para aplicar y registrar la guía de entrevista semiestructurada.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página (datos generales, consentimiento, 23 preguntas, cierre) |
| `styles.css` | Estilos (incluye formato para imprimir / guardar en PDF) |
| `app.js` | Preguntas, autoguardado, progreso y exportaciones |
| `config.js` | Aquí se pega la URL de Google Sheets (opcional) |
| `google-apps-script.gs` | Código para recibir las respuestas en una hoja de Google (opcional) |

## Qué hace la página

- Registra datos generales y consentimiento. Si el participante responde **No**, las preguntas se bloquean.
- Agrega la columna `grupo_analisis`: «Gestor de campo» o «Personal de coordinación», según el cargo.
- Guarda un borrador en el navegador mientras se escribe (si se cierra la pestaña, se recupera).
- Muestra el avance (x / 23) y permite marcar una pregunta como omitida.
- Exporta a **.json** (para volver a abrirla con «Abrir guardada») y a **.csv** (para Excel).
- Imprime o guarda en PDF con formato limpio.
- **Enviar respuestas**: si `config.js` tiene una URL, agrega una fila en Google Sheets; si no, descarga el .json.

## Subirla a internet (gratis)

Cualquiera de estas opciones funciona; solo hay que subir los cinco archivos juntos (el `.gs` y este README no se usan en la web, pero no estorban).

- **Netlify Drop**: entre a app.netlify.com/drop y arrastre la carpeta completa. Le da un enlace al instante.
- **GitHub Pages**: cree un repositorio, suba los archivos y active *Settings → Pages* con la rama `main`.
- **Hosting propio / cPanel**: suba los archivos a `public_html` (o a una subcarpeta).

## Guardar respuestas en Google Sheets (opcional, recomendado)

1. Cree una hoja de cálculo nueva en Google Drive (por ejemplo «Entrevistas cobranza SPS»).
2. Menú **Extensiones → Apps Script**. Borre el contenido y pegue `google-apps-script.gs`. Guarde.
3. **Implementar → Nueva implementación → Tipo: Aplicación web**.
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
4. Autorice los permisos y copie la URL que termina en `/exec`.
5. Péguela en `config.js`:
   ```js
   window.APP_CONFIG = { ENDPOINT_URL: "https://script.google.com/macros/s/.../exec" };
   ```
6. Vuelva a subir `config.js`. Haga una prueba y verifique que aparezca la fila en la pestaña «Respuestas».

> La página no puede confirmar la respuesta de Google (restricción del navegador), así que después de enviar conviene revisar la hoja. Si no hay conexión, se descarga una copia .json automáticamente.

## Confidencialidad

- La página tiene `noindex` para que los buscadores no la muestren, pero quien tenga el enlace puede abrirla: compártalo solo con el equipo entrevistador.
- No se piden nombres; use solo el código anónimo del participante.
- El borrador queda en el navegador del equipo usado. En una computadora compartida, use «Nueva entrevista» al terminar para borrarlo.
- Las preguntas marcadas **(G)** (5 y 18) llevan la etiqueta «(G) Gestores», como en la guía original.
