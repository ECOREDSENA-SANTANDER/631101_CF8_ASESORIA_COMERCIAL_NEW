<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Este componente analiza el servicio postventa en el contexto del proceso de venta, abarcando varias etapas cruciales para atraer, captar y fidelizar clientes. Incluye el reconocimiento de los elementos fundamentales del servicio postventa, el proceso de calidad necesario para asegurar la satisfacción y el regreso del cliente, y la estructura organizacional adecuada para implementar un servicio postventa efectivo en la empresa. También aborda las herramientas esenciales para ofrecer el servicio, su importancia y los diferentes tipos de servicios postventa que pueden ser adoptados.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="El servicio postventa es clave para atraer y fidelizar clientes, asegurando su satisfacción y lealtad. Este análisis aborda las etapas esenciales del servicio, su estructuración en la empresa, las herramientas para implementarlo y los distintos tipos de servicios disponibles, con el objetivo de ofrecer una experiencia de calidad y duradera.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
