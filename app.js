(function () {
  "use strict";

  // ---------------------------------------------------------------
  // Contenido de la guía
  // ---------------------------------------------------------------
  var SECCIONES = [
    {
      id: "A",
      titulo: "Proceso actual y desempeño del recaudo",
      objetivo: "Objetivo específico 1",
      preguntas: [
        { n: 1, t: "Describa, paso a paso, cómo gestiona una cuenta con mora de 90 o 120 días desde que le es asignada hasta que se registra el resultado de la acción de cobro.",
          s: ["¿Qué personas o unidades intervienen en cada paso?"] },
        { n: 2, t: "¿Qué indicadores utiliza para dar seguimiento al recaudo y con qué frecuencia los consulta?",
          s: ["¿Cómo conoce la meta institucional?"] },
        { n: 3, t: "¿Cómo describiría el comportamiento del Índice de Efectividad de Recaudo (%ER) del sector en los últimos meses?",
          s: ["¿Qué aspectos de su trabajo diario le parecen relacionados con ese comportamiento, si identifica alguno?"] },
        { n: 4, t: "Desde la ampliación del plazo de pago a 28 días, ¿qué cambios ha observado en el comportamiento de pago de los clientes y en su trabajo de cobro?",
          s: ["¿Puede dar un ejemplo concreto?"] },
        { n: 5, g: true, t: "¿Cuántas cuentas tiene asignadas habitualmente en cada ciclo de gestión?",
          s: ["¿Con qué criterios organiza su trabajo con esas cuentas?"] },
        { n: 6, t: "¿Con qué frecuencia se reasignan cuentas entre gestores?",
          s: ["¿En qué situaciones ocurre?"] },
        { n: 7, t: "¿Qué acciones de cobro utiliza (llamada, mensaje, visita, solicitud de suspensión del servicio u otras)?",
          s: ["¿Cómo registra el resultado de cada una?", "¿Cuál de estas acciones obtiene mejores resultados y por qué?"] },
        { n: 8, t: "¿En qué casos y con qué criterio se solicita la suspensión del servicio en la cartera de 90 y 120 días?",
          s: ["¿Cuánto tiempo suele transcurrir entre la visita y la solicitud de suspensión?"] }
      ]
    },
    {
      id: "B",
      titulo: "Sistemas de información y procesos de apoyo",
      objetivo: "Objetivo específico 2",
      preguntas: [
        { n: 9, t: "¿Qué información obtiene del SOE InCMS y del Portal de Cobro y Recaudo para su gestión?",
          s: ["¿Qué información adicional le sería útil y no está disponible o es difícil de obtener?"] },
        { n: 10, t: "¿Cada cuánto tiempo se actualiza la información de la cartera que usted consulta?",
          s: ["¿Cómo organiza su trabajo entre una actualización y otra?"] },
        { n: 11, t: "¿Qué funciones ofrecen los sistemas para identificar cuentas próximas a pasar a un tramo de mora mayor o para generar alertas tempranas?",
          s: ["Si existe esa función, ¿cómo la utiliza y con qué frecuencia?"] },
        { n: 12, t: "¿Qué opciones de filtro, clasificación o indicadores existen en los sistemas para priorizar cuentas (por monto, antigüedad, contacto u otro criterio)?",
          s: ["¿Cuáles utiliza?"] },
        { n: 13, t: "¿Cómo registra y consulta el historial de acciones de una cuenta (llamadas, visitas, compromisos de pago, resultados)?",
          s: ["¿Qué facilidades o dificultades encuentra al hacerlo?"] },
        { n: 14, t: "¿Cuánto tiempo transcurre habitualmente entre que se genera la cartera a gestionar y su disponibilidad efectiva para usted?",
          s: ["¿Cómo se entera de que ya está disponible?"] },
        { n: 15, t: "¿Cómo se identifican y reportan las cuentas candidatas a depuración (viviendas abandonadas, en ruinas o sin localización)?",
          s: ["¿Con qué frecuencia se retiran de las asignaciones?",
              "¿Las cuentas ya identificadas para depuración vuelven a aparecer en la cartera asignada? ¿Qué efecto tiene eso en su trabajo?"] }
      ]
    },
    {
      id: "C",
      titulo: "Centralización, seguridad y recursos humanos",
      objetivo: "Objetivo específico 3",
      preguntas: [
        { n: 16, t: "¿Cómo se solicita, recibe y distribuye la cartera que se asigna desde la oficina central?",
          s: ["¿Cada cuánto tiempo ocurre?",
              "¿Qué decisiones puede tomar el equipo local y cuáles se definen en la oficina central?",
              "¿Cómo se coordina con las campañas del centro de llamadas?",
              "¿Qué ocurre con las cuentas que ya gestionó el centro de llamadas? ¿Cómo afecta eso al número de cuentas que puede gestionar el equipo local?"] },
        { n: 17, t: "¿Cómo se gestionan las cuentas ubicadas en zonas de difícil gestión (ZDG) o de maras y pandillas (ZMP)?",
          s: ["¿Qué porcentaje aproximado de su cartera se encuentra en esas zonas? (No indique ubicaciones específicas. Es una estimación; el dato exacto se obtiene del análisis documental.)"] },
        { n: 18, g: true, t: "¿Con qué frecuencia cambia de funciones (por ejemplo, de gestión de campo a apoyo administrativo)?",
          s: ["¿Cómo organiza su trabajo cuando eso ocurre?"] }
      ]
    },
    {
      id: "D",
      titulo: "Necesidades para la propuesta de mejora",
      objetivo: "Objetivo específico 4: insumos para el diseño de la propuesta, Capítulo VI",
      preguntas: [
        { n: 19, t: "¿Qué criterios considera prioritarios para clasificar las cuentas morosas de 90 y 120 días y decidir cuáles gestionar primero?",
          s: ["¿Cómo consideraría la antigüedad, el monto, el historial de contacto, la depuración y las restricciones de visita?"] },
        { n: 20, t: "¿Qué modificaciones del proceso actual facilitarían la planificación y ejecución del cobro a nivel local?",
          s: ["¿Qué actividades deberían mantenerse, simplificarse o coordinarse de otra manera con la oficina central?"] },
        { n: 21, t: "¿Qué información o indicadores necesitaría visualizar en una herramienta de seguimiento de cobranza para apoyar sus decisiones?",
          s: ["¿Qué alertas, filtros y datos serían más útiles en su trabajo cotidiano?"] },
        { n: 22, t: "¿Qué condiciones, recursos o apoyos serían necesarios para adoptar y mantener las mejoras propuestas?",
          s: ["¿Qué dificultades de capacitación, acceso a datos, disponibilidad de personal o coordinación prevé?"] },
        { n: 23, t: "¿Qué resultados esperaría de una mejora del proceso y cómo sugeriría darles seguimiento?",
          s: ["¿Qué indicadores permitirían observar cambios en la organización del trabajo, la cobertura de la cartera o la efectividad del recaudo?"] }
      ]
    }
  ];

  var STORAGE_KEY = "guia-entrevista-cobranza-sps-v1";
  var TOTAL = 23;

  var form = document.getElementById("entrevista");
  var cont = document.getElementById("preguntas");

  // ---------------------------------------------------------------
  // Render de preguntas
  // ---------------------------------------------------------------
  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "class") e.className = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }

  var titulo = el("h2", { class: "section-title" });
  titulo.innerHTML = '<span class="num">II</span> Preguntas de la entrevista';
  cont.appendChild(titulo);

  SECCIONES.forEach(function (sec) {
    var card = el("section", { class: "card", id: "sec-" + sec.id });
    card.appendChild(el("h2", null, [
      el("span", { class: "num", text: sec.id }),
      document.createTextNode(" " + sec.titulo)
    ]));
    card.appendChild(el("p", { class: "objetivo", text: sec.objetivo }));

    sec.preguntas.forEach(function (p) {
      var qid = "p" + p.n;
      var head = el("div", { class: "q-head" }, [
        el("span", { class: "q-num", text: String(p.n) }),
        el("p", { class: "q-text", text: p.t })
      ]);
      if (p.g) head.appendChild(el("span", { class: "badge", title: "Pregunta marcada (G) en la guía", text: "(G) Gestores" }));

      var seg = el("ul", { class: "seguimiento" });
      p.s.forEach(function (s) {
        seg.appendChild(el("li", null, [el("strong", { text: "Seguimiento: " }), document.createTextNode(s)]));
      });

      var omitLabel = el("label", { class: "omit" }, [
        el("input", { type: "checkbox", name: qid + "_omitida", value: "Sí" }),
        document.createTextNode(" El participante omitió esta pregunta")
      ]);

      var ta = el("textarea", { name: qid, rows: "5", "aria-label": "Notas / respuesta, pregunta " + p.n, placeholder: "Notas / respuesta…" });

      card.appendChild(el("div", { class: "question" + (p.g ? " g" : ""), id: "q-" + p.n }, [
        head, seg, ta, omitLabel
      ]));
    });
    cont.appendChild(card);
  });

  // ---------------------------------------------------------------
  // Datos: leer / escribir formulario
  // ---------------------------------------------------------------
  function campos() {
    var orden = ["codigo", "fecha", "entrevistador", "cargo", "grupo_analisis", "antiguedad", "modalidad",
      "hora_inicio", "hora_fin", "acepta", "grabacion"];
    for (var i = 1; i <= TOTAL; i++) { orden.push("p" + i); orden.push("p" + i + "_omitida"); }
    orden.push("cierre_adicional", "observaciones");
    return orden;
  }

  function leer() {
    var d = {};
    Array.prototype.forEach.call(form.elements, function (f) {
      if (!f.name) return;
      if (f.type === "radio") { if (f.checked) d[f.name] = f.value; else if (!(f.name in d)) d[f.name] = ""; }
      else if (f.type === "checkbox") d[f.name] = f.checked ? "Sí" : "";
      else d[f.name] = f.value.trim();
    });
    d.grupo_analisis = d.cargo === "Gestor de campo" ? "Gestor de campo" : (d.cargo ? "Personal de coordinación" : "");
    var out = { guardado_en: new Date().toISOString() };
    campos().forEach(function (k) { out[k] = d[k] != null ? d[k] : ""; });
    return out;
  }

  function escribir(d) {
    form.reset();
    Object.keys(d || {}).forEach(function (k) {
      var nodes = form.querySelectorAll('[name="' + k + '"]');
      Array.prototype.forEach.call(nodes, function (f) {
        if (f.type === "radio") f.checked = f.value === d[k];
        else if (f.type === "checkbox") f.checked = d[k] === "Sí" || d[k] === true;
        else f.value = d[k];
      });
    });
    actualizarUI();
  }

  // ---------------------------------------------------------------
  // Autoguardado local (borrador en este navegador)
  // ---------------------------------------------------------------
  var saveStatus = document.getElementById("save-status");
  var timer;
  function guardarLocal() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(leer()));
      saveStatus.textContent = "Borrador guardado " + new Date().toLocaleTimeString("es-HN", { hour: "2-digit", minute: "2-digit" });
    } catch (e) {
      saveStatus.textContent = "Sin autoguardado (descargue el .json)";
    }
  }
  function cargarLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) { escribir(JSON.parse(raw)); saveStatus.textContent = "Borrador recuperado"; }
    } catch (e) { /* sin almacenamiento disponible */ }
  }

  form.addEventListener("input", function () {
    actualizarUI();
    saveStatus.textContent = "Guardando…";
    clearTimeout(timer);
    timer = setTimeout(guardarLocal, 600);
  });
  form.addEventListener("change", function () { actualizarUI(); guardarLocal(); });
  form.addEventListener("submit", function (e) { e.preventDefault(); });

  // ---------------------------------------------------------------
  // UI: progreso, consentimiento
  // ---------------------------------------------------------------
  function actualizarUI() {
    var n = 0;
    for (var i = 1; i <= TOTAL; i++) {
      var ta = form.elements["p" + i];
      var om = form.elements["p" + i + "_omitida"];
      var q = document.getElementById("q-" + i);
      var done = (ta && ta.value.trim()) || (om && om.checked);
      if (done) n++;
      if (q) { q.classList.toggle("done", !!done); q.classList.toggle("omitted", !!(om && om.checked)); }
    }
    document.getElementById("progress-text").textContent = n + " / " + TOTAL + " respondidas";
    document.getElementById("progress-bar").style.width = Math.round((n / TOTAL) * 100) + "%";

    var acepta = form.querySelector('input[name="acepta"]:checked');
    var noAcepta = acepta && acepta.value === "No";
    document.getElementById("no-consent").hidden = !noAcepta;
    document.body.classList.toggle("sin-consentimiento", !!noAcepta);
    Array.prototype.forEach.call(document.querySelectorAll("#preguntas textarea, #preguntas input, #sec-cierre textarea"), function (f) {
      f.disabled = !!noAcepta;
    });
  }

  // ---------------------------------------------------------------
  // Validación
  // ---------------------------------------------------------------
  function validar() {
    var d = leer();
    if (!d.codigo) { aviso("Indique el código anónimo del participante."); form.elements.codigo.focus(); return null; }
    if (!d.acepta) { aviso("Registre si el participante acepta participar."); document.getElementById("sec-datos").scrollIntoView({ behavior: "smooth" }); return null; }
    return d;
  }

  // ---------------------------------------------------------------
  // Exportaciones
  // ---------------------------------------------------------------
  function nombreArchivo(d, ext) {
    var c = (d.codigo || "sin-codigo").replace(/[^\w-]+/g, "_");
    return "entrevista_" + c + "_" + (d.fecha || new Date().toISOString().slice(0, 10)) + "." + ext;
  }
  function descargar(contenido, nombre, tipo) {
    var blob = new Blob([contenido], { type: tipo });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function csvCell(v) {
    v = String(v == null ? "" : v);
    return '"' + v.replace(/"/g, '""') + '"';
  }
  function aCSV(d) {
    var keys = Object.keys(d);
    // BOM para que Excel reconozca los acentos
    return "﻿" + keys.map(csvCell).join(",") + "\r\n" + keys.map(function (k) { return csvCell(d[k]); }).join(",") + "\r\n";
  }

  document.getElementById("btn-json").addEventListener("click", function () {
    var d = validar(); if (!d) return;
    descargar(JSON.stringify(d, null, 2), nombreArchivo(d, "json"), "application/json");
    aviso("Archivo .json descargado.");
  });
  document.getElementById("btn-csv").addEventListener("click", function () {
    var d = validar(); if (!d) return;
    descargar(aCSV(d), nombreArchivo(d, "csv"), "text/csv;charset=utf-8");
    aviso("Archivo .csv descargado.");
  });
  document.getElementById("btn-imprimir").addEventListener("click", function () { window.print(); });

  document.getElementById("btn-importar").addEventListener("change", function (e) {
    var file = e.target.files && e.target.files[0];
    if (!file) return;
    var r = new FileReader();
    r.onload = function () {
      try { escribir(JSON.parse(r.result)); guardarLocal(); aviso("Entrevista cargada."); }
      catch (err) { aviso("El archivo no es una entrevista válida (.json)."); }
      e.target.value = "";
    };
    r.readAsText(file, "utf-8");
  });

  document.getElementById("btn-nueva").addEventListener("click", function () {
    if (!confirm("¿Borrar el formulario e iniciar una nueva entrevista? Descargue antes las respuestas si aún no las envió.")) return;
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* nada */ }
    form.reset();
    actualizarUI();
    saveStatus.textContent = "Formulario vacío";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ---------------------------------------------------------------
  // Envío a Google Sheets (opcional)
  // ---------------------------------------------------------------
  var btnEnviar = document.getElementById("btn-enviar");
  var URL_ENVIO = (window.APP_CONFIG && window.APP_CONFIG.ENDPOINT_URL) || "";
  if (!URL_ENVIO) {
    btnEnviar.textContent = "Guardar respuestas (.json)";
    document.getElementById("btn-json").hidden = true; // haría lo mismo
  }

  btnEnviar.addEventListener("click", function () {
    var d = validar(); if (!d) return;
    if (!URL_ENVIO) {
      descargar(JSON.stringify(d, null, 2), nombreArchivo(d, "json"), "application/json");
      aviso("No hay servidor configurado: se descargó el archivo .json.");
      return;
    }
    btnEnviar.disabled = true;
    btnEnviar.textContent = "Enviando…";
    // text/plain evita la verificación CORS previa con Google Apps Script
    fetch(URL_ENVIO, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(d) })
      .then(function () {
        aviso("Respuestas enviadas. Verifique la fila nueva en la hoja de cálculo.");
        saveStatus.textContent = "Enviado " + new Date().toLocaleTimeString("es-HN", { hour: "2-digit", minute: "2-digit" });
      })
      .catch(function () {
        descargar(JSON.stringify(d, null, 2), nombreArchivo(d, "json"), "application/json");
        aviso("No se pudo enviar (¿sin conexión?). Se descargó una copia .json.");
      })
      .then(function () { btnEnviar.disabled = false; btnEnviar.textContent = "Enviar respuestas"; });
  });

  // ---------------------------------------------------------------
  // Aviso
  // ---------------------------------------------------------------
  var toast = document.getElementById("toast"), toastTimer;
  function aviso(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 3800);
  }

  // Inicio
  cargarLocal();
  if (!form.elements.fecha.value) form.elements.fecha.value = new Date().toISOString().slice(0, 10);
  actualizarUI();
})();
