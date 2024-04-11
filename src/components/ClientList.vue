<template>
  <div>
    <FormDialog @addClient="addClient"></FormDialog>
    <pre>{{  }}</pre>
    <CustomButton class="default">Новый клиент</CustomButton>
  </div>
</template>
<script>
import CustomButton from '@/ui/CustomButton.vue';
import FormDialog from '@/components/FormDialog.vue'

export default {
  data() {
    return {
      clients: [],
    }
  },
  name: 'ClientList',
  components: {
    CustomButton,
    FormDialog
  },
  methods: {
    addClient(models) {
      this.clients.push(models)
    }
  }
}
</script>