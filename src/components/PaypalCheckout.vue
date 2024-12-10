<script setup>
import { ref, onMounted } from "vue";
import { loadScript } from "@paypal/paypal-js";

onMounted(async() => {
    try {
      const paypal = await loadScript({
        "client-id":
          "AfYXwzdA45JeQ0BQdmptnOLBi01qoZ-CzooPxnmh7WD56ufGdgNZzSzVHthz2C-zTgMMOc49gaLSaBA3",
      });
      await paypal
        .Buttons({
          fundingSource: paypal.FUNDING.PAYPAL,
          style: {
            layout: "vertical",
            color: "black",
            shape: "rect",
            label: "checkout",
          },
        })
        .render("#paypal-button-container");
    } catch (error) {
      console.log(error);
    }
});

</script>
<template>
  <div id="paypal-button-container"></div>
</template>

<style scoped></style>
