<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
  
      p.mb-4 El servicio postventa es una fase clave en el proceso de venta, ya que permite atraer, captar y fidelizar clientes a través de una gestión eficiente y estratégica, con este componente es posible analizar las etapas fundamentales del servicio postventa, sus elementos esenciales y la evaluación de la calidad del servicio para garantizar la satisfacción del cliente y fortalecer su lealtad. Además, se exploran las estrategias para estructurarlo adecuadamente en la empresa, el uso de herramientas eficaces y la diversidad de servicios postventa disponibles, resaltando su importancia en la experiencia del consumidor.
  
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-10
          figure
            .video
              iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/c2PD39QIU2Y?si=PIp8MwKUugquQSLB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
            figcaption Video: La posventa.
  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
