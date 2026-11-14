/**
 * Recibe las respuestas de la guía de entrevista y las agrega como filas
 * en la hoja de cálculo de Google donde se instala este script.
 * Instrucciones en README.md.
 */
var NOMBRE_HOJA = "Respuestas";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var datos = JSON.parse(e.postData.contents);
    var libro = SpreadsheetApp.getActiveSpreadsheet();
    var hoja = libro.getSheetByName(NOMBRE_HOJA) || libro.insertSheet(NOMBRE_HOJA);

    var claves = Object.keys(datos);
    var encabezados;
    if (hoja.getLastRow() === 0) {
      encabezados = ["recibido_en"].concat(claves);
      hoja.appendRow(encabezados);
      hoja.setFrozenRows(1);
    } else {
      encabezados = hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0];
      // Agrega columnas nuevas si la guía cambió
      claves.forEach(function (k) {
        if (encabezados.indexOf(k) === -1) {
          encabezados.push(k);
          hoja.getRange(1, encabezados.length).setValue(k);
        }
      });
    }

    var fila = encabezados.map(function (h) {
      if (h === "recibido_en") return new Date();
      return datos[h] != null ? datos[h] : "";
    });
    hoja.appendRow(fila);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
