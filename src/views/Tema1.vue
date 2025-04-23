<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Postventa
  
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-10.col-lg-4
          img(src='@/assets/curso/temas/tema1/img1.png', alt='')(data-aos="fade-right")
        .col-sm-12.col-md-12.col-lg-8
          p La postventa, según Sale Forje (2018), es “la parte de la atención al cliente que reúne todas las estrategias pensadas para mejorar la experiencia después de la compra y mantener una relación duradera con los clientes, siempre correspondiendo a sus expectativas y necesidades”.
          p El servicio postventa para Pérez (2013) es “el conjunto de mecanismos y tareas que emplea la organización para, una vez efectuada la venta, lograr la satisfacción total del cliente con el objetivo de que se repita la compra, recomiende la marca o el producto, entre otras” (p. 184).
          .row.bgmoradoclaro(data-aos="fade-left")
            p.p-5 Es recomendable que el vendedor le de claridad al cliente, sobre todo cuando se hacen ventas por transacciones, “todos los detalles sobre el servicio, los pagos, transportes y organización” (Artal, 2010, p. 326).
  
      p.mt-5 Como actividades de postventa o seguimiento a la venta, Artal (2010) señala:
      .row.justify-content-center.mb-5
        .col-sm-12.col-md-12.col-lg-5(data-aos="fade-right")
          ul.lista-ul--color.fa-al
            li.mb-2
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 La atención en los cobros.
            li.mb-2.surrayar
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 La gestión de impagados.
            li.mb-2.surrayar 
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 El cumplimiento correcto de la entrega de pedidos.
            li.mb-0.surrayar
        .col-sm-12.col-md-12.col-lg-5(data-aos="fade-left")
          ul.lista-ul--color.fa-al
            li.mb-2 
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 La solución de las quejas. 
            li.mb-2.surrayar 
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 Las reclamaciones.
            li.mb-2.surrayar 
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 Los servicios de reparación y mantenimiento (p. 327).
            li.mb-0.surrayar

      p.mt-4.mb-5 Según Pérez (2013), las ventajas e inconvenientes del servicio postventa son las siguientes:   
  
      .row.justify-content-center.align-items-center.mb-2
        .col-12.col-md-12.col-lg-10
  
          .titulo-sexto.color-secundario.mb-4
            h5 Tabla 1. 
            | Ventajas e inconvenientes del servicio postventa en la empresa
  
          .tabla-a.color-primario(data-aos="zoom-in")
            table
              caption Nota. Adaptado de Pérez (2013).
              thead
                tr
                  th.bgazulclaro Ventajas
                  th.bgazulclaro Inconvenientes
              tbody
                tr
                  td.bggristabla Produce una mayor satisfacción del cliente.
                  td.bggristabla Implica ciertos gastos.
                tr
                  td Mejora la imagen de la empresa y del producto.
                  td Necesita de control.
                tr
                  td.bggristabla Mejora el conocimiento directo del mercado.
                  td.bggristabla Produce un posible aumento del número de reclamaciones.
                tr
                  td Implica la posible fidelización del cliente.
                  td Supone mayores exigencias de servicio y calidad.
                tr
                  td.bggristabla Supone un probable incremento de las ventas.
                  td.bggristabla Provoca mayores necesidades de personal.
  
      separador
      #t_1_1.titulo-segundo.mb-4
        h2 1.1 Etapas de la postventa
      p La venta debe considerarse un ciclo dinámico con el cliente, de modo que la venta realizada hoy debe repetirse mañana y así sucesivamente. En los productos de consumo masivo, esto es fundamental con los mismos productos. Sin embargo, en productos y servicios que no son de compra habitual, se pueden ofrecer productos y servicios complementarios. Por ejemplo, a una persona que compra un vehículo familiar se le pueden vender repuestos, garantías de mantenimiento, reparaciones, entre otros.
      p.mb-4 Para lograr que el cliente regrese se debe montar un programa de fidelización que según Escamilla (2020) “consiste en desarrollar una relación positiva entre los consumidores y la empresa, para que regresen a comprar tus productos o servicios”. La postventa debe seguir unas etapas y acciones que lleve al cliente a regresar al negocio, esto es:
  
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10.col-md-12.col-sm-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Atraer")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p Con estas acciones se puede atraer nuevos clientes:
                  ol.lista-ol.fa-ol
                    li 
                      span a. 
                      span.mb-0 Repartir volantes: folletos o material P.O.P. que sirve para promocionar o dar a conocer algo. Acción muy económica acercarse al público objetivo y con volantes dar a conocer el negocio.
                    li 
                      span b. 
                      span.mb-0 Ofrecer muestras gratis: producto en dimensiones mas pequeñas para que el cliente conozca sus beneficios y atributos. En caso de un producto la muestra es efectiva para dar a conocerlo, en el caso de un servicio, se puede ofrecer una prueba.
                    li 
                      span c. 
                      span.mb-0 Entregar descuentos: es realizar disminuciones en el precio o servicio. Promociones especiales por 20 o 30 días para dar tiempo a que visiten el negocio.
                    li 
                      span d. 
                      span.mb-0 Asistir a encuentros de negocios: asistir a eventos, ferias y exposiciones a través de Cámaras de Comercio, vinculaciones a gremios.
                    li 
                      span e. 
                      span.mb-0 Las referencias comerciales son recomendaciones de clientes u organizaciones del mismo sector que validan la calidad de un negocio, y pueden obtenerse a través de gremios, cámaras de comercio o clientes satisfechos.
                    li 
                      span f. 
                      span.mb-0 Crear un guion de 30 segundos: escribir lo que se va a decir o sustentar.  Definir la comunicación que se le quiere dar a los clientes, medios de comunicación e incluso posibles inversionistas.
                    li 
                      span g. 
                      span.mb-0 Dar a conocer el negocio: se puede hacer por medio de redes sociales, emails, llamadas a amigos y conocidos, compartir información de objeto del negocio y su propuesta de valor.
                    li 
                      span h. 
                      span.mb-0 Aprovechar las redes sociales: estructuras compuestas por personas en internet. Busca presencia en la web, crea #[em blogs], anuncios en Instagram, Facebook y Twitter.
                    li 
                      span i. 
                      span.mb-0 Intercambiar tarjetas de presentación: son pequeñas impresiones en papel que da información comercial de una persona o entidad. Aunque un poco obsoleto, pero sigue siendo efectiva, es una manera de recordación cuando se presente la necesidad.
            .row.col-xl-11.m-auto(titulo="Captar")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p Para las empresas que se dedican a vender al cliente final (B2C), se pueden adoptar acciones para que esos clientes que muestren interés en los productos o servicios de la empresa realicen la principal acción: COMPRAR. Para Da Silva (2020), estas son acciones que ayudan a captar clientes:
                  ol.lista-ol.fa-ol
                    li 
                      span a. 
                      span.mb-0 #[em Blog] corporativo: es un sitio web donde se publica información o contenido del interés de los propietarios. La forma de presentarse la empresa con contenidos atractivos de su propuesta de valor.
                    li 
                      span b. 
                      span.mb-0 Redes sociales: son estructuras que se desarrollan en la internet y persiguen fines comunes. Esta con contenidos en las principales redes sociales que comparten su público objetivo.
                    li 
                      span c. 
                      span.mb-0 Dar muestras gratis: producto en dimensiones más pequeñas para que el cliente conozca sus beneficios y atributos.
                    li 
                      span d. 
                      span.mb-0 En todas las etapas de la postventa dar muestras gratis es relevante y cumple una función más acentuada en la medida en que pasan las etapas. Puede servir para obtener datos del cliente o que continúe comprando.
                    li 
                      span e. 
                      span.mb-0 Correo electrónico: es un servicio de internet que permite enviar mensajes a personas u organizaciones. La utilización del correo en esta etapa debe procurar la personalización del cliente, dirigirse de manera personalizada y puntual a lo que necesita el cliente.
                    li 
                      span f. 
                      span.mb-0 Crear programas de fidelización: es un programa que realiza la empresa y ofrece premios por comprar. Crear membresías, cupones con descuento, mimos exclusivos, entre otros.
                    li 
                      span g. 
                      span.mb-0 Crear comunidades virtuales: son aquellas personas que se unen a través de internet en grupo con intereses similares. Crear grupos en Facebook haciendo Lives, canales en YouTube.
            .row.col-xl-11.m-auto(titulo="Fidelizar")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p Estas acciones logran una relación duradera con los clientes en el tiempo:
                  ol.lista-ol.fa-ol
                    li 
                      span a. 
                      span.mb-0 Tarjetas de fidelización: se trata de premiar el consumo con premios. Este tipo de tarjetas ofrecen a los titulares una serie de ventajas adicionales como descuentos, puntos canjeables por regalos e incluso la devolución de un tanto por ciento de sus compras.
                    li 
                      span b. 
                      span.mb-0 Cupones descuento: donde el usuario puede recortar un cupón y obtendrá una rebaja en el precio de algún producto o servicio del establecimiento. 
                    li 
                      span c. 
                      span.mb-0 Regalos: el cliente recibe un regalo, vinculado o no a la actividad de la empresa, éste es ofrecido bien en agradecimiento a la compra o uso de un producto o servicio del establecimiento. 
                    li 
                      span d. 
                      span.mb-0 Puntos por compra: son promociones que dan entidades comerciales y financieras por la compra de sus productos y servicios. Permiten obtener una serie de beneficios en tiempo real.  Como la estrategia de los Almacenes Éxito “Puntos Colombia”. Cada punto obtenido equivale a 7 pesos y el cliente puede llevarlo como pago de su compra.
                    li 
                      span e. 
                      span.mb-0 Gestionar clientes a través de Apps: es una aplicación en el móvil para interactuar con los clientes. Estas aplicaciones pueden incorporar diversas funcionalidades, como una herramienta para buscar clientes y mantener toda la información organizada y clasificada según categorías o intereses.
                    li 
                      span f. 
                      span.mb-0 Comunicación personalizada: envío directo al cliente de ofertas con descuento exclusivo personalizados.
                    li 
                      span g. 
                      span.mb-0 Regalos: en ocasiones darán regalo al cliente por su volumen de compra, generalmente en fechas especiales.
                    li 
                      span h. 
                      span.mb-0 C.R.M. #[em (Customer Relationship Management)]: gestión de la relación con el cliente. Es una serie de actividades dirigidas al cliente como una estrategia de fidelización y de relación con el cliente a largo plazo apoyadas en tecnologías. Es montado para tener comunicaciones más fluidas y directas con los clientes.
                    li 
                      span.text-bold i. 
                      span.mb-0 Club de clientes: también conocidos como Clubes de fidelización son aquellos que premian a los clientes por sus compras repetidas. Puede ser por gustos, hábitos o labores que se realicen en la casa.
            .row.col-xl-11.m-auto(titulo="Retener")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p Retener clientes es la labor del día a día del asesor comercial, cada vez que un cliente visita el punto de venta o realiza una compra por otro medio, la empresa debe asegurarse que la experiencia de ese cliente sea única. Un cliente puede o no repetir la compra porque no tiene otro lugar donde comprar, en cuanto tenga otra opción deja de comprar. Es por eso que la empresa debe hacer esfuerzos por mantener esa relación por largo plazo.
  
      p Por tanto, el vendedor debe tener en cuenta estas etapas y la empresa considerar llevar a cabo programas de atención de servicio al cliente y servicio de postventa, para las MiPymes se debe considerar unir estos programas en la medida de sus recursos. 
  
      separador
      #t_1_2.titulo-segundo.mb-4
        h2 1.2 Elementos de la postventa
  
      p.mb-4 La postventa incluye una serie de acciones cuya finalidad es garantizar la satisfacción del cliente, con el objetivo de que quede encantado y regrese. Según Ramírez (2018), estas acciones deben estar acompañadas de ciertos elementos esenciales en la postventa. El cliente debe sentir que la empresa lo comprende, resuelve sus quejas y atiende sus dudas. Por tanto, los tres elementos que constituyen la postventa, según Ramírez (2018), son:
  
      .row
        SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-4
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema1/ico1-2.png' alt='AvatarTop')
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-1(data-aos="fade-right") La atención al cliente
            .row.justify-content-center.p-4
              p.text-center(data-aos="fade-right") Por este medio se le comunica los beneficios y ventajas del producto o servicio y se recibe las quejas, peticiones y se les da solución a los clientes.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-8
                img(src='@/assets/curso/temas/tema1/ico1-3.png' alt='AvatarTop')
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-1(data-aos="fade-right") El seguimiento de la venta
            .row.justify-content-center.p-4
              p.text-center(data-aos="fade-right") Los vendedores deben estar pendientes de cómo se recibió la mercancía, o que los clientes retroalimenten de su experiencia en la compra.
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema1/ico1-4.png' alt='AvatarTop')
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-1(data-aos="fade-right") Las devoluciones
            .row.justify-content-center.p-4
              p.text-center(data-aos="fade-right") Debe ir unida a la garantía que ofrece el producto o a las políticas de la empresa al respecto. 
          .tarjeta.colorazulclaro.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema1/ico1-1.png' alt='AvatarTop')
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-1(data-aos="fade-right") La recompra
            .row.justify-content-center.p-4
              p.text-center(data-aos="fade-right") Finalidad de lo anterior es que el cliente regrese y continúe haciéndolo. 




      p Cualquier acción que respecto a un programa de postventa tenga la empresa debe tener en cuenta estos elementos anteriormente mencionados que componen la postventa.
  
      separador
      #t_1_3.titulo-segundo.mb-4
        h2 1.3 Proceso de la calidad del servicio postventa
  
      p Lo importante de llevar a cabo un servicio postventa es conocer los efectos que los esfuerzos de la empresa tienen en los clientes para lograr fidelizarlos; esto se traduce en la calidad que perciben los clientes. Según Kotler y Armstrong (2012), la calidad es el “grado en el que el desempeño percibido de un producto coincide con las expectativas del consumidor” (p. 41).
      p.mb-5 Para que la empresa gestione la calidad en el servicio postventa Pérez (2013) propone el siguiente proceso: 
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        .col-sm-12.col-md-12.col-lg-8
          .titulo-sexto.color-secundario.mb-4
            h5 Figura 1. 
            | Proceso para la gestión de la calidad del servicio postventa 
          img(src='@/assets/curso/temas/tema1/fig1.png', alt='El proceso para gestionar la calidad del servicio postventa se compone de cuatro etapas clave: planificación, implementación, control y mejora continua. Primero, es esencial planificar las estrategias y procedimientos necesarios para asegurar un servicio postventa de alta calidad. A continuación, se debe implementar estos planes de manera efectiva. Luego, es crucial controlar y supervisar el desempeño del servicio para asegurar que se mantenga dentro de los estándares establecidos. Finalmente, se debe buscar constantemente la mejora del servicio, ajustando y optimizando los procesos según sea necesario para satisfacer y superar las expectativas de los clientes.')
          p.small-text.mt-4 Nota: adaptado de Pérez (2013). 

      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/temas/icono.svg', alt='')
          h3.mb-0.ms-2 Planificación de la actividad postventa
  
      p.mb-4 Se debe decidir qué hacer, cómo hacerlo y con qué hacerlo en referencia al proceso del servicio postventa. Es importante considerar características como el objetivo, la duración del proyecto, las personas responsables e intervinientes en el proceso, los recursos disponibles, las actividades a realizar y los indicadores para medir la actividad. Ejemplos sugeridos por Pérez (2013) se presentan en la tabla 2.
  
      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
        .col-12.col-md-12.col-lg-12
  
          .titulo-sexto.color-secundario.mb-4
            h5 Tabla 2. 
            | Ejemplo planificación de la actividad postventa
  
          .tabla-b
            .tabla-b__header
              h4.mb-0 Planificación de la actividad
            table
              caption Nota. SENA (2021).
              thead
                tr
                  th.bordeizquierdoabajo.bordederecho
                    h3 Objetivo
                  th.bordeizquierdoabajo 
                    h3 Actividad
                  th.bordeizquierdoabajo
                    h3 Tarea
                  th.bordeizquierdoabajo
                    h3 Responsable
                  th.bordeizquierdoabajo 
                    h3 Duración
                  th.bordeizquierdoabajo
                    h3 Presupuesto
                  th.bordeizquierdoabajo 
                    h3 Indicador
              tbody
                tr
                  th.bordederecho
                  td.bordeizquierdoabajo Instalación
                  td.bordeizquierdoabajo Visitar tres (3) clientes para instalar equipos.
                  td.bordeizquierdoabajo Nombre
                  td.bordeizquierdoabajo 6 horas
                  td.bordeizquierdoabajo $150.000
                  td.bordeizquierdoabajo Tiempo de respuesta
                tr
                  th.bgblanco.bordederecho 
                    h3 Implantar el servicio de postventa
                  td.bgblanco.bordeizquierdoabajo Mantenimiento
                  td.bgblanco.bordeizquierdoabajo Cambiar repuestos a equipo de cliente.
                  td.bgblanco.bordeizquierdoabajo Nombre
                  td.bgblanco.bordeizquierdoabajo 2 horas
                  td.bgblanco.bordeizquierdoabajo $100.000
                  td.bgblanco.bordeizquierdoabajo Cumplimiento
                tr
                  th.bordederecho.bordeabajo
                  td.bordeizquierdoabajo Reparación
                  td.bordeizquierdoabajo Visitar cliente reparación equipo.
                  td.bordeizquierdoabajo Nombre
                  td.bordeizquierdoabajo 4 horas
                  td.bordeizquierdoabajo $250.000
                  td.bordeizquierdoabajo Tiempo de respuesta
  
      p.mb-4 A continuación, se presentan algunos indicadores que se utilizan con frecuencia. La empresa, según la actividad, puede aportar otros indicadores adicionales, los cuales están detallados en la tabla 3.
  
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        .col-12.col-md-12.col-lg-8
  
          .titulo-sexto.color-secundario.mb-4
            h5 Tabla 3. 
            | Indicadores del servicio postventa
  
          .tabla-b
            table
              caption Nota. Adaptado de Pérez (2013).
              thead.bordearribamorado
                tr
                  th.bggristabla2(style="width:30%;")
                    h3.text-center Tipo de servicio
                  th.bggristabla2(style="width:70%;")
                    h3.text-center Indicadores
              tbody
                tr
                  th.bordederecho.bordeabajo.text-center 
                    h3 Instalación
                  td.bordeizquierdoabajo 
                    ul.lista-ul--color.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Tiempo de respuesta.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Número de quejas.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Indicadores financieros.
                tr
                  th.bgblanco.bordederecho.bordeabajo.text-center 
                    h3 Mantenimiento 
                  td.bgblanco.bordeizquierdoabajo 
                    ul.lista-ul--color.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Cumplimiento del plan.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Tiempo de respuesta.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Número de quejas.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Indicadores financieros.
                tr
                  th.bordederecho.bordeabajo.text-center 
                    h3 Reparación
                  td.bordeizquierdoabajo 
                    ul.lista-ul--color.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Tiempo de respuesta.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Porcentaje de casos solucionados.
                      li.d-flex.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Porcentaje de averías técnicas solucionadas.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Índice de devoluciones.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Valor (económico) de las devoluciones.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Número de quejas.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Tasa de fallos (casos no solucionados).
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Indicadores financieros.
                tr
                  th.bgblanco.bordederecho.bordeabajo.text-center 
                    h3 Manejo de quejas
                  td.bgblanco.bordeizquierdoabajo 
                    ul.lista-ul--color.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Tiempo de respuesta.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Índice de solución.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Valor (económico) de la inconformidad.
                tr
                  th.bordederecho.bordeabajo.text-center 
                    h3 Adiestramiento al cliente
                  td.bordeizquierdoabajo
                    ul.lista-ul--color.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Averías por una mala operación.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Reclamaciones originadas por 
                         p desconocimiento del cliente.


      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/temas/icono.svg', alt='')
          h3.mb-0.ms-2 Implementación de la actividad postventa
  
      p.mb-4 En esta etapa de la postventa la empresa llevará a cabo lo planificado, para esto tendrá en cuenta de acuerdo con Pérez (2013):
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.col-md-12.col-sm-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Capacitación al equipo de postventa")
              .row.justify-content-center.align-items-center
                .col-auto
                  img(src='@/assets/curso/temas/tema1/tar1-1.png', alt='')
                .col-10
                  p.mt-3 Al igual que el equipo de atención al cliente, este equipo deber ser entrenado en las tareas a realizar con respecto a los elementos o partes de la postventa, cada una de las etapas, además de los protocolos de atención y comunicación de la organización. 
            .row.col-xl-11.m-auto(titulo="Alistar los recursos que en cada actividad se necesitan")
              .row.justify-content-center.align-items-center
                .col-auto
                  img(src='@/assets/curso/temas/tema1/tar1-2.png', alt='')
                .col-10
                  p.mt-3 De acuerdo con lo expuesto en la planificación, revisar los recursos humanos, técnicos y financieros que son necesarios para llevar a cabo el plan. 
            .row.col-xl-11.m-auto(titulo="Realizar el plan")
              .row.justify-content-center.align-items-center
                .col-auto
                  img(src='@/assets/curso/temas/tema1/tar1-3.png', alt='')
                .col-10
                  p.mt-3 Es el momento de llevar a cabo la operación en cada uno de sus componentes. 
            .row.col-xl-11.m-auto(titulo="Realizar los informes de servicio")
              .row.justify-content-center.align-items-center
                .col-auto
                  img(src='@/assets/curso/temas/tema1/tar1-4.png', alt='').img95
                .col-10
                  p.mt-3 La manera de tener la información necesaria para dar explicación del cumplimiento de los indicadores de gestión de la actividad de postventa.
  
      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/temas/icono.svg', alt='')
          h3.mb-0.ms-2 Control de la actividad postventa
  
      .row(data-aos="zoom-in")
        p.mb-2 Una manera de controlar las actividades de postventa incluyendo el resultado final, es según Pérez (2013):

        ul.lista-ul--color.fa-al
            li.mb-0
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 En la planificación, es fundamental seguir de cerca los indicadores propuestos. Es necesario verificar que los resultados coincidan con los indicadores establecidos y, en función de estos resultados, tomar las acciones adecuadas para implementar mejoras.
            li.mb-2.surrayar
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 Registrar cada procedimiento en una lista de verificación, que permita compararlo con lo establecido en el protocolo correspondiente. 
            li.mb-2.surrayar
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 Registrar medidas tomadas.
            li.mb-2.surrayar
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 Corregir lo que no esté según los procedimientos de la empresa.
            li.mb-4.surrayar
  
      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/temas/icono.svg', alt='')
          h3.mb-0.ms-2 Mejora de la actividad postventa
  
      p.mb-4 Las acciones de mejora en la postventa deben estar alineadas tanto con lo planificado y ejecutado como con los PQR (quejas, peticiones y reclamos) de los clientes. La empresa debe identificar y redefinir las fallas en los procesos, ya que una gestión efectiva de esta tarea contribuye a elevar la calidad del servicio postventa.
  
      .row.justify-content-center
        .col-sm-12.col-md-10.col-lg-4.p-0
          img(src='@/assets/curso/temas/tema1/img2.png', alt='')(data-aos="fade-right")
        .col-sm-12.col-md-12.col-lg-6.bgazulclaro.mb-5(data-aos="fade-left")
          .row.align-items-center.justify-content-center.mt-5.mb-5
            .col-sm-12.col-md-12.col-lg-9.mb-5.mt-5
              h3.mt-4.mb-4 Un ejemplo de una situación de mejora puede ser que el 10 % de los clientes, se queje que los mantenimientos no se están cumpliendo, en este caso debe identificar que ocasiona esa situación y darle solución.
  
      separador
      #t_1_4.titulo-segundo.mb-4
        h2 1.4 Procedimiento para estructurar un servicio postventa
  
      .row
        p A continuación, se presentan unas actividades que corresponden a un servicio postventa, cada una de ellas tiene una serie de actividades con secuencias definidas para realizarlas de manera correcta, e incluso a su interior demanda otras actividades. 
        p El servicio postventa tiene una funcionalidad muy parecida al servicio al cliente y se deben trabajar en conjunto, puesto que tienen alto grado de dependencia la una de la otra. Las grandes organizaciones montan estos servicios por separados, pero las MiPymes puede integrar estos servicios o subcontratarlos.  
        p.mb-5 Entonces, ¿cómo estructurar un servicio postventa? Según Pérez (2013), se deben considerar tanto la estructura como las funciones del servicio, tal como se detalla a continuación:
  
      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/temas/icono.svg', alt='')
          h3.mb-0.ms-2 Recepción y atención de incidencias
  
      p Este es el punto en el que el cliente presenta su solicitud, queja o reclamo. El empleado, siguiendo procedimientos establecidos, debe proporcionar respuestas y tratar las incidencias de manera adecuada, de acuerdo con la gestión de calidad de la empresa.
      p.mb-4 Las funciones asociadas a esta estructura incluyen:
  
      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.borde-redondo-abajo(data-aos="flip-left")
            .crd_hover_txt--img
              img(src="@/assets/curso/temas/tema1/tan1-1.png", alt="alt")
            .crd_hover_txt--body.borde-redondo-abajo
              h3.mb-3.text-center Atención a las incidencias
              p.mb-0.text-center Una persona con perfil comunicativo y protocolos para atender y recoger las solicitudes del cliente.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.borde-redondo-abajo(data-aos="flip-left")
            .crd_hover_txt--img
              img(src="@/assets/curso/temas/tema1/tan1-2.png", alt="alt")
            .crd_hover_txt--body.borde-redondo-abajo
              h3.mb-3.text-center Distribución de las incidencias
              p.mb-0.text-center Una persona encargada de canalizar las incidencias hacia el área correspondiente. Por ejemplo, si el problema está relacionado con facturas, lo escalará al departamento de facturación; si se trata de daños, lo dirigirá al área de reparaciones, y así sucesivamente.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.borde-redondo-abajo(data-aos="flip-left")
            .crd_hover_txt--img
              img(src="@/assets/curso/temas/tema1/tan1-3.png", alt="alt")
            .crd_hover_txt--body.borde-redondo-abajo
              h3.mb-3.text-center Gestión de las incidencias
              p.mb-0.text-center La persona encargada debe tener capacidad dependiendo de la solicitud de dar solución desde su rol, pero si el caso tiene mayor complejidad, escalarlo a la unidad correspondiente. Debe estar atento a si se le solucionó el problema y en lo posible hacer seguimiento para conocer si su solicitud o problema tuvo solución.
  
      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/temas/icono.svg', alt='')
          h3.mb-0.ms-2 Servicio de asistencia técnica
  
      p.mb-4 El primer proceso debe estar coordinado con un servicio de asistencia técnica especializado en el producto o servicio para llevar a cabo mantenimientos y reparaciones. Dependiendo del producto, el fabricante puede proporcionar apoyo técnico a través de la garantía. Este servicio puede ofrecerse de diversas maneras, tales como:
  
      .row.justify-content-center.justify-content-center
        .col-sm-12.col-lg-4.col-md-12.mb-4(data-aos="fade-right")
          .overflow-hidden.h-100.p-3
            .row.align-items-center.justify-content-center.bgfondotema1.p-4
              .col-5
                img(src='@/assets/curso/temas/tema1/ico2-1.png', alt='').img95.mb-4
              .row.justify-content-center.mb-3
                .col-12
                  .bgmoradomedio.p-1 
                    h3.text-center.mb-0 Autoreparación asistida
              p.text-center.p-3 Ayudar al cliente a realizar la reparación apoyado por un técnico de manera telefónica, virtual, mensajes, entre otras.
        .col-sm-12.col-lg-4.col-md-12.mb-4(data-aos="fade-right")
          .overflow-hidden.h-100.p-3
            .row.align-items-center.justify-content-center.bgfondotema1.p-4
              .col-5
                img(src='@/assets/curso/temas/tema1/ico2-2.png', alt='').mb-4
              .row.justify-content-center.mb-3
                .col-12
                  .bgmoradomedio.p-1 
                    h3.text-center.mb-0 Reparación en el sitio del cliente
              p.text-center.p-3 El técnico debe trasladarse al sitio donde se encuentre el producto o servicio.
        .col-sm-12.col-lg-4.col-md-12.mb-4(data-aos="fade-right")
          .overflow-hidden.h-100.p-3
            .row.align-items-center.justify-content-center.bgfondotema1.p-4
              .col-5
                img(src='@/assets/curso/temas/tema1/ico2-3.png', alt='').mb-4
              .row.justify-content-center.mb-3
                .col-12
                  .bgmoradomedio.p-1 
                    h3.text-center.mb-0 Reparación en el taller
              p.text-center.p-1 El cliente lleva el producto a reparación al sitio donde compró o donde se le indique para el cumplimiento de la garantía o si no la tiene, pagar por el servicio. 
  
      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/temas/icono.svg', alt='')
          h3.mb-0.ms-2 Otros servicios implicados en la postventa
  
      p.mb-4 Servicios que son un apoyo a la labor de la postventa y que dependen de otros departamentos de la organización como transporte, almacén y el seguimiento al finalizar la prestación del servicio postventa.
  
      .subt.mb-4(data-aos="fade-right")
        .d-flex.align-items-center.mb-1
          img(src='@/assets/curso/temas/icono.svg', alt='')
          h3.mb-0.ms-2 Caso práctico: procedimiento para estructurar un servicio postventa
  
      p.mb-4 La empresa Computer Working se dedica a la venta de computadores de mesa, todo en uno y portátiles. Una de las funciones de su servicio postventa es el mantenimiento y reparación de los computadores. En una incidencia, estos serían los posibles desarrollos:
  
      .row
        SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-4
          .tarjeta.moradaclara.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema1/ico3-1.png' alt='AvatarTop').img95
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-2(data-aos="fade-right") Recepción y atención de incidencias
            .row.justify-content-center.p-2
              p.text-center(data-aos="fade-right") #[b Atención de la llamada:] se recibe la llamada de un cliente con problemas en su computador que aún tiene garantía. 
              p.text-center(data-aos="fade-right") #[b Gestión de la llamada:] se le pide ciertas instrucciones, como, si está instalado a la energía, si la batería está cargada, entre otras. 
          .tarjeta.moradaclara.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema1/ico3-2.png' alt='AvatarTop')
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-2(data-aos="fade-right") Gestión de la llamada
            .row.justify-content-center.p-2
              p.text-center(data-aos="fade-right") Si no está enchufado y lo enchufa y enciende correctamente, fin de la llamada.
              p.text-center(data-aos="fade-right") Si estaba encendido y no funciona, entonces se reporta al Servicio de Asistencia Técnica.
          .tarjeta.moradaclara.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema1/ico3-3.png' alt='AvatarTop')
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-2(data-aos="fade-right") Servicio de Asistencia Técnica
            .row.justify-content-center.p-2
              p.text-center(data-aos="fade-right") El Servicio de Asistencia Técnica reconoce fallos amparados en la garantía y recomienda un cambio de computador.
              p.text-center(data-aos="fade-right") Se registra el dictamen de la incidencia y se pasa a recoger el computador al sitio donde se encuentra el cliente o recibe el PC en el punto de venta.
          .tarjeta.moradaclara.p-4
            .row.justify-content-center.p-4
              .col-7
                img(src='@/assets/curso/temas/tema1/ico3-4.png' alt='AvatarTop')
            .row.justify-content-center
              .col-10
                h3.bgblanco.text-center.p-2(data-aos="fade-right") Gestión final
            .row.justify-content-center.p-2
              p.text-center(data-aos="fade-right") Se realiza el cambio del PC averiado por uno nuevo.
              p.text-center(data-aos="fade-right") Se llama posteriormente a preguntar cómo se siente con el servicio prestado y su nuevo PC.
  
  
  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
