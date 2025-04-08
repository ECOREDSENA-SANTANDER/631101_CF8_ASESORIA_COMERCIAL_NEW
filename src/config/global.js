export default {
  global: {
    Name: 'La postventa',
    Description:
      'Este componente examina el servicio postventa como una fase clave del proceso de venta. Analiza cómo atraer, captar y fidelizar clientes a través del reconocimiento de las etapas del servicio postventa, así como los elementos esenciales que lo constituyen. Incluye la evaluación del proceso de calidad del servicio postventa para asegurar la satisfacción del cliente y fomentar su lealtad. También aborda la manera de estructurar adecuadamente el servicio postventa en la empresa, las herramientas necesarias para ofrecerlo eficazmente, su importancia y los diferentes tipos de servicios postventa disponibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Postventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Etapas de la postventa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos de la postventa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de la calidad del servicio postventa',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Procedimiento para estructurar un servicio postventa',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas postventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia del servicio postventa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de servicios postventas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fases del servicio postventa',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF8_631101_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Postventa',
      referencia:
        'Zendesk. (2023). <i>¿Cómo captar clientes potenciales?: las 7 estrategias más sencillas</i>. https://www.zendesk.com.mx/blog/estrategias-captar-clientes-potenciales/',
      tipo: 'Página web',
      link:
        'https://www.zendesk.com.mx/blog/estrategias-captar-clientes-potenciales/',
    },
    {
      tema: 'Postventa',
      referencia:
        'Sales Force Latinoamérica. (2018). <i>Postventa: qué es y cómo realizarla</i>. https://www.salesforce.com/mx/blog/2018/3/Postventa-que-es-y-como-hacer.html',
      tipo: 'Página web',
      link:
        'https://www.salesforce.com/mx/blog/2018/3/Postventa-que-es-y-como-hacer.html',
      /*descarga: '/downloads/prueba.pdf',*/
    },
    {
      tema: 'Elementos de la postventa',
      referencia:
        'Ramírez, A. (2018). <i>¿Qué elementos componen la posventa?</i>. https://www.informabtl.com/que-elementos-componen-la-posventa/ ',
      tipo: 'Página web',
      link: 'https://www.informabtl.com/que-elementos-componen-la-posventa/ ',
    },
    {
      tema: 'Proceso de la calidad del servicio postventa',
      referencia:
        'Da Silva, D. (2020). <i>¿Qué es el seguimiento postventa? fases y tips para el mantenimiento de un cliente satisfecho</i>. https://www.zendesk.com.mx/blog/seguimiento-postventa/ ',
      tipo: 'Página web',
      link: 'https://www.zendesk.com.mx/blog/seguimiento-postventa/',
    },
    {
      tema: 'Tipos de servicios postventas',
      referencia:
        '<i>Servicio posventa: qué es, cómo implementarlo con éxito y ejemplos</i>. (2024, 17 junio). https://blog.hubspot.es/service/servicio-post-venta',
      tipo: 'Página web',
      link: 'https://blog.hubspot.es/service/servicio-post-venta',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        '“El servicio al cliente, conocido también como servicio de atención al cliente es una herramienta de <i>marketing</i>, que se encarga de establecer puntos de contacto con los clientes, a través de diferentes canales, para establecer relaciones con ellos, antes, durante y después de la venta” (Douglas, 2020).',
    },
    {
      termino: 'Calidad del servicio',
      significado:
        'La calidad es el “Grado en el que el desempeño percibido de un producto coincide con las expectativas del consumidor” (Kotler & Armstrong, 2012).',
    },
    {
      termino: 'Indicadores',
      significado:
        '“Los indicadores son unidades de medición que permiten evaluar el rendimiento de los procesos internos de la firma, ya sea para medir la rentabilidad, productividad, calidad de servicio, gestión del tiempo, entre otros” (Cuartin, A. 2020).',
    },
    {
      termino: 'Postventa',
      significado:
        ' “Es la parte de la atención al cliente que reúne todas las estrategias pensadas para mejorar la experiencia después de la compra y mantener una relación duradera con los clientes, siempre correspondiendo a sus expectativas y necesidades” (Sale Forje, 2018).',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        '“El significado de servicio al cliente o <i>customer service</i> engloba elementos como el asesoramiento, los elementos tangibles (tienda física, <i>web</i>), la capacidad de respuesta, personalización, la fiabilidad o la calidad del producto, las condiciones de pago etc. En definitiva, las estrategias de servicio están relacionado con la atención global y facilidades que prestas a tus clientes” (El viaje del cliente, 2021).',
    },
  ],
  referencias: [
    {
      referencia:
        'Artal Castells, M. (2010). <i>Dirección de ventas</i>. Organización del departamento de ventas y gestión de vendedores. ESIC Alfaomega. 9ª edición.',
      link: '',
    },
    {
      referencia:
        'Cuartin, A. (2020). <i>¿Qué son los indicadores de medición?</i>',
      link:
        'https://blog.lemontech.com/que-son-indicadores-y-cuantos-tipos-existen-ejemplos/',
    },
    {
      referencia:
        'Da Silva, D. (2020).  <i>¿Qué es atención al cliente? Guía introductoria con infografía</i>.',
      link: 'https://www.zendesk.com.mx/blog/que-es-atencion-al-cliente/',
    },
    {
      referencia:
        'Zendesk, (2023). <i>¿Cómo captar clientes potenciales?: las 7 estrategias más sencillas</i>.',
      link:
        'https://www.zendesk.com.mx/blog/estrategias-captar-clientes-potenciales/',
    },
    {
      referencia:
        'El viaje del cliente (2021). <i>¿Qué es la atención al Cliente? Definición y características</i>.',
      link:
        'https://elviajedelcliente.com/academia/servicio-al-cliente-customer-service/',
    },
    {
      referencia:
        'Pérez Feijoo, H., Pérez Hernández, Jorge M., López González, L. y Caballero Bravo, C. (2013). <i>Comunicación y atención al cliente</i>. McGraw Hill Education.',
      link: '',
    },
    {
      referencia:
        'Kotler, P.  y Armstrong, G. (2012). <i>Marketing</i>. Editorial Pearson.',
      link: '',
    },
    {
      referencia:
        'Ramírez, Al. (2018). <i>¿Qué elementos componen la posventa?</i>',
      link: 'https://www.informabtl.com/que-elementos-componen-la-posventa/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johana Gómez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier del Carmen Martínez Pérez',
          cargo: 'Instructor',
          centro: 'Centro de Comercio y Servicios - Regional Bolívar',
        },
        {
          nombre: 'Zenith Chinchilla Ruedas',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisión metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y producción audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
