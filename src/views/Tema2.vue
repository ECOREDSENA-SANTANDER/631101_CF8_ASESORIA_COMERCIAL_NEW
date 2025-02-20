<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Herramientas postventa
  
      p.mb-4 Para que la estructura del servicio postventa funcione de manera eficaz, Pérez (2013) propone que la empresa cuente con las siguientes herramientas para poder implantar una acción de postventa:
  
      .row.justify-content-center.align-items-center
        .col-sm-12.col-md-12.col-lg-12
          TabsA.color-acento-botones
            .tarjeta.color-secundario--borde.p-4(titulo="Base de datos de los clientes")
              .row.align-items-center.justify-content-center
                .col-auto
                  img(src='@/assets/curso/temas/tema2/tab1-1.png', alt='')
                .col-8
                  p Tener listado de los clientes con su información básica, especialmente el teléfono para realizar #[em telemarketing], y de esta manera comunicarse con los clientes vía telefónica. 
            .tarjeta.color-secundario--borde.p-4(titulo="Correspondencia")
              .row.align-items-center.justify-content-center
                .col-auto
                  img(src='@/assets/curso/temas/tema2/tab1-2.png', alt='')
                .col-8
                  p Puede utilizar cualquier medio, el usado comúnmente es el correo electrónico, donde pueda comunicar como van las incidencias u otros envíos como catálogos, revistas, u otras invitaciones. 
            .tarjeta.color-secundario--borde.p-4(titulo="Página web y correo electrónico")
              .row.align-items-center.justify-content-center
                .col-auto
                  img(src='@/assets/curso/temas/tema2/tab1-3.png', alt='')
                .col-8
                  p Contar con una página web es hasta hoy el mejor modo más económico y rápido para comunicarse con el cliente.  
            .tarjeta.color-secundario--borde.p-4(titulo="Visita personal")
              .row.align-items-center.justify-content-center
                .col-auto
                  img(src='@/assets/curso/temas/tema2/tab1-4.png', alt='')
                .col-8
                  p Es el mejor servicio de postventa, pero también el más costoso. 
  
      separador
  
      .row.justify-content-center.align-items-center
        .col-sm-12.col-md-12.col-lg-9
          #t_2_1.titulo-segundo.mb-4
            h2 2.1 Importancia del servicio postventa    
          p.mt-5 Cuando un cliente compra un producto o servicio, está cubriendo una necesidad y obteniendo una experiencia que de ser altamente satisfecha traería de vuelta a ese cliente en una recompra. Por tanto, tener un servicio postventa le permite a la empresa conocer esas experiencias y adoptar acciones de mejora que mantengan una relación duradera con el cliente y se cuantifique en rentabilidad.
          p.mb-4 Es por eso, que el servicio postventa tiene como propósito fidelizar clientes y que su compra sea más seguida, se debe procurar:
        .col-12.col-md-6.col-lg-3
          img(src='@/assets/curso/temas/tema2/img1.png', alt='')
  
      .row
        .col-lg-5.col-sm-12.col-md-12
          ul.lista-ul--color.fa-al
            li.mb-2
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 La atención al cliente sea motivo de diferenciación. 
            li.mb-2.surrayar
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 Que los clientes estén satisfechos.
            li.mb-2.surrayar
        .col-lg-6.col-sm-12.col-md-12
          ul.lista-ul--color.fa-al
            li.mb-2
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 Que recomienden la empresa.
            li.mb-2.surrayar
              i.fas.fa-check-circle.mt-3
              span.mb-2.mt-3 Identificar reacciones de los clientes con los productos o servicios.
            li.mb-2.surrayar
  
      separador
      #t_2_2.titulo-segundo.mb-4
        h2 2.2 Tipos de servicios postventa
  
      p.mb-4 Entre los servicios postventa que debe adoptar la empresa, ya sea para productos de larga duración con garantía de fábrica o para compras menos exigentes, Martínez (2021) propone los siguientes tipos de servicios postventa:
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.col-12.col-md-12.bgmorado100.borde-redondo-izquierdo.p-0
          .row.justify-content-center.align-items-center.p-5
            .col-6.col-md-6.col-lg-3
              img.mt-4(src='@/assets/curso/temas/tema2/tar1-1.png', alt='')
            .col-sm-12.col-md-12.col-lg-8.bgmoradomedio.mt-5
              h3.mt-2 Los servicios técnicos que se llevan sobre los productos
          .row.justify-content-center.align-items-center
            .col-sm-12.col-md-12.col-lg-9
              p.text-white #[b Instalación:] dependiendo del producto, generalmente se realiza en la vivienda del cliente.
              p.text-white #[b Mantenimiento:] consiste en la revisión y puesta a punto del producto, que incluye limpieza, cambio de piezas y lubricación, de acuerdo con el uso del producto.
              p.mb-5.text-white #[b Reparaciones:] implica la sustitución de piezas defectuosas que impiden el funcionamiento del producto. Si el producto aún está bajo garantía, las reparaciones se realizarán sin costo adicional; sin embargo, si la garantía ha vencido, el cliente deberá cubrir los costos.
        .col-lg-6.col-12.col-md-12.bgmoradomedio.borde-redondo-derecho.p-0
          .row.justify-content-center.align-items-center.p-5
            .col-6.col-md-6.col-lg-3
              img.mt-4(src='@/assets/curso/temas/tema2/tar1-1.png', alt='')
            .col-sm-12.col-md-12.col-lg-8.bgmorado100.mt-5
              h3.mt-2.text-white Los servicios que se prestan a quien adquiere el producto o servicio
          .row.justify-content-center.align-items-center.mb-2.mt-5
            .col-sm-12.col-md-12.col-lg-9.mb-5
              p.mb-5 #[b Adiestramiento para el uso del producto:] orientaciones que ofrece la empresa al cliente para su uso eficaz.
              p.mb-5 #[b Manejo de quejas y reclamaciones:] establecer canales de comunicación para que el cliente manifieste a la empresa sobre sus inconformidades.
  
      p.mb-4 Los aportes que hace Pérez (2013) sobre los tipos de servicios son los siguientes, como se detalla en la tabla 4:
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.col-md-12.col-sm-12
  
          .titulo-sexto.color-secundario.mb-4
            h5 Tabla 4. 
            | Tipos de servicios postventas en las empresas
  
          .tabla-a.color-acento-contenido
            table
              caption.mt-0 Nota. Pérez  (2013).
              thead
                tr
                  th.bgmorado100.text-white Usuario
                  th.bgmorado100.text-white Cliente
              tbody
                tr
                  td.bggristabla2.text-center #[b Promocionales]
                  td.bggristabla2 Promover descuentos especiales a los clientes, tarjetas de puntos para realizar compras, llamadas de invitación a promociones y concursos.
                tr
                  td.text-center #[b Psicológicos] 
                  td Servicios ligados a la motivación del cliente, felicitaciones en el cumpleaños, llamar al cliente para preguntarle sobre la satisfacción de su compra.
                tr
                  td.bggristabla2.text-center #[b De seguridad]
                  td.bggristabla2 Dar garantías, devoluciones del dinero sino está satisfecho por su compra.
                tr
                  td.text-center #[b De mantenimiento]
                  td Son los servicios de mantenimiento o de soporte técnico. Este servicio es muy agradecido por los clientes y sirve para fidelizar.
  
      p.mb-5 Luego de realizarse la venta de los productos y servicios, la empresa puede hacer distintas actividades dirigidas según Pérez (2013) a:
  
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-md-12.col-sm-12
  
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/fig1.png', alt='Texto que describa la imagen')
            .tarjeta.bggristabla2.p-4(x="69%" y="14%" numero="+")
              p Luego de haber tomado la decisión de realizar la compra, mientras llega el producto, si toca entregar la mercancía en el domicilio, bien sea #[em off-line] u #[em on-line] informarle al cliente la trazabilidad del producto para la entrega.
            .tarjeta.bggristabla2.p-4(x="87%" y="44%" numero="+")
              p Este es el servicio más conocido por los clientes y adoptado por las empresas, puede incluir reparación hasta el cambio del producto. De ofrecer además la garantía extendida que incluye más tiempo y otros agregados.
            .tarjeta.bggristabla2.p-4(x="68%" y="79%" numero="+")
              p Dependiendo el producto puede prestar apoyo técnico sobre cuidados o manejos del producto.
            .tarjeta.bggristabla2.p-4(x="32%" y="79%" numero="+")
              p Busca la manera que los clientes interactúen con la empresa sobre sus productos y servicios, bien sea a través de llamadas telefónicas o encuestas.
            .tarjeta.bggristabla2.p-4(x="11%" y="47%" numero="+")
              p A todo cliente le gustan las ofertas y las promociones, y los clientes se sienten más comprometidos cuando se les comunican esas promociones por teléfono o #[em email].
            .tarjeta.bggristabla2.p-4(x="28%" y="14%" numero="+")
              p Este es un tema que genera inconvenientes con los clientes cuando por cualquier razón procuran hacer devolución de los productos que compran, la empresa debe tener claras los términos y condiciones para realizar este servicio inverso, además comunicarlo.
      
  
      separador
      #t_2_3.titulo-segundo.mb-4
        h2 2.3 Fases del servicio postventa
  
      p.mb-4 En el desarrollo del servicio postventa luego que el cliente ha realizado su compra, la empresa debe incorporar a sus protocolos acciones que dan fortaleza al seguimiento de clientes y este lo agradece. Al respecto Douglas (2020) sostiene aspectos a tener en cuenta.
  
      figure
        .video
          iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/quSRRImn6k8?si=JylV_DElXucspEpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: Fases del servicio postventa.
  
  
  </template>

<script>
export default {
  name: 'Tema2',
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
