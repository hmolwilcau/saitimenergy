// buscador-datos.js
const baseDatosBuscador = [
  
    {
        titulo: "Proyecto Automoción: Konsberg Automotive",
        url: "auto-detalle.html",
        contenido: "Proyecto del sector automoción completado en 2018 para Konsberg Automotive en Epila (Zaragoza, España). Trabajo a realizar: Sistema de etiquetado. Servicios prestados: Estudios de prediseño AT y MT, Ingeniería de la propiedad, Automatización de PLC y SCADA, y Gestión del proceso de conexión. Destacados: Conexión de 225 kV, referente en economía circular y ahorro energético del 35% en la planta."
    },
    {
        titulo: "Contacto",
        url: "contacto.html",
        contenido: "Contacta con Saitim Energy S.L. Estamos ubicados en Plataforma Logística Plaza, C/ Castillo de Capua Nº 10 Nave 2 (50197 Zaragoza). Teléfono: +34 876 246 161. Correo electrónico: saitim@saitim.com. Envíanos tus consultas sobre energías renovables, sector agroalimentario, automoción o software a medida."
    },
    {
        titulo: "Inicio",
        url: "index.html",
        contenido: "Saitim Energy S.L. Pioneros en sistemas de monitorización para fotovoltaica. Ofrecemos automatización y proyectos eléctricos llaves en mano para agroalimentación, automoción, alimentación, medio ambiente, cerámicas, áridos, elevación, reciclaje y RCV."
    },
    {
        titulo: "Proyectos Fotovoltaicos: Escalabis y Garreenleen",
        url: "foto-detalle.html",
        contenido: "Proyectos de energía solar fotovoltaica. Escalabis Solar Project (Santarém, Portugal): Planta de 210 MWp para Enipt Construction con evaluación de sitio, licencias y desarrollo. Garreenleen Solar Farm (Carlow, Irlanda): Planta de 128 MW para Voltalia, abarcando la puesta en marcha de cuadros de baja tensión, hardware de monitorización, fibra óptica, ciberseguridad (VPN, firewalls) y desarrollo de software SCADA. Ambos proyectos utilizan nuestro software Piensa Solar."
    },
    {
        titulo: "Nuestro Equipo",
        url: "equipo.html",
        contenido: "Conoce al equipo de profesionales de Saitim Energy S.L. Directivos (CEO): Eduardo Marco García (Director de sistemas) y Fernando Laínez Salvo (Director de operaciones). Nuestro equipo: Adrian Alonso, Beatriz Ballesteros, Bryan David Alomoto, David Guijarro, Dorin Radu Barna, Ionut Darius Barna, Javier Belsué, Javier Huerta, Jorge Williams Molina, Marcos García, Nelson Logedi, Oscar Gallego, Roberto Rodriguez, Roberto Valero, Sebastian Garces, Sergio Diaz, Susana Garcia, Victor Da Lima y Yeraldo Jose Garrido."
    },
    {
        titulo: "Proyecto Agroalimentario: Cooperativa D'Ivars",
        url: "fabpi-detalle.html",
        contenido: "Proyecto del sector agroalimentario para la Cooperativa D'Ivars en Ivars d'Urgell (Lleida, España). Trabajo a realizar: Elaboración de cuadros eléctricos. Servicios prestados: Estudios de prediseño AT y MT, Ingeniería de la propiedad, Automatización de PLC y SCADA, y Gestión del proceso de conexión. Destacados: Conexión de 225 kV, referente en economía circular, y ahorro energético del 35% en la planta. Incluye integración con el software Piensa."
    },
   {
        titulo: "Proyecto Medio Ambiente: Planta de compostaje Los Hornillos",
        url: "meda-detalle.html",
        contenido: "Proyecto de Medio Ambiente completado en 2019: Planta de compostaje Los Hornillos para TAIM WESER en Quart de Poblet (Valencia, España). Trabajo a realizar: Fabricación de armarios de potencia y control e instalación eléctrica. Automatización completa del sistema de tratamiento de residuos, programación y puesta en marcha del proceso de compostaje. Servicios prestados: Estudios de prediseño AT y MT, Ingeniería de la propiedad, Automatización de PLC y SCADA, y Gestión del proceso de conexión. Destacados: Conexión de 225 kV, referente en economía circular y ahorro energético del 35% en planta."
    },
    {
        titulo: "Software Piensa: Sistema de Trazabilidad",
        url: "piensa.html",
        contenido: "Piensa es nuestro software de trazabilidad y diagnóstico para control de calidad y procesos de fabricación. Ofrece control bidireccional (del campo a la granja), conexión directa con PLC sin intermediarios para registrar errores, gestión modular para evitar fallos humanos y análisis de OEE (rendimiento y disponibilidad) integrándose con equipos de laboratorio."
    },
    {
        titulo: "Software Piensa Solar: Monitorización Fotovoltaica",
        url: "piensa-solar.html",
        contenido: "Piensa Solar es nuestro software dedicado a la monitorización y análisis de rendimiento de plantas fotovoltaicas. Captura datos de todos los dispositivos para visualizar su estado, gestionar alarmas y programar mantenimientos. Incluye control integral de strings e inversores, herramientas de análisis gráfico con exportación (XML, CSV), y total movilidad gracias a su aplicación para iOS y Android para el seguimiento de la planta en tiempo real."
    },
    {
        titulo: "Nuestros Proyectos",
        url: "proyectos.html",
        contenido: "Conoce los proyectos de Saitim Energy S.L. Estamos orgullosos de nuestro trabajo en múltiples sectores. Proyectos destacados: Control de procesos en Medio Ambiente (transformación de materia orgánica), automatización de líneas de ensamblaje en Automoción, proyectos eléctricos llaves en mano en el sector Agroalimentario, y monitorización e infraestructura eléctrica para plantas Fotovoltaicas."
    },
    {
        titulo: "Sectores",
        url: "sectores.html",
        contenido: "Descubre todos los sectores en los que opera Saitim Energy S.L. Implementamos soluciones tecnológicas y automatización en: Energías Renovables (software Piensa Solar), Reciclaje y RCV (sistemas SCADA, basuras, depuración y purines), Medio Ambiente, Agroalimentación y Alimentación (fábricas de piensos, Piensa Traceability System), Cerámicas y Áridos (automatización de ladrillos, mortero y hormigón), Automoción (trazabilidad en líneas de producción) y Elevación y bienes de equipo (proyectos eléctricos para maquinaria compleja y grúas industriales).Trabajamos en sectores como Energías renovables, Reciclaje y RCV, Medio ambiente, Agroalimentación, Alimentación, Cerámicas y Áridos, Automoción, y Elevación."
    },
    
    {
        titulo: "Nuestros Servicios",
        url: "servicios.html",
        contenido: "Descubre los servicios de Saitim Energy S.L. Ofrecemos: 1. Instalaciones eléctricas en baja tensión (BT) con proyectos llaves en mano. 2. Programación PLC y sistemas SCADA para el control integral de líneas de fabricación, depuración de aguas y fábricas de pienso. 3. Montaje y fabricación de cuadros eléctricos de control, potencia (CCM) y distribución. 4. Desarrollo de software industrial a medida para gestión, producción, trazabilidad y calidad. 5. Ingeniería electrónica con diagnósticos avanzados, inspecciones termográficas, análisis de armónicos y optimización energética."
    }
    
];