<template>
  <div>
    <FormDialog @addClient="addClient"></FormDialog>
    <div v-for="(item, i) in clients" :key="item.model" class="clients">
      <div class="clients__surname">
        <p>Фамилия:</p>
        <div>{{ clients[i]?.surnameModel }}</div>
      </div>

      <div class="clients__surname">
        <p>Имя:</p>
        <div>{{ clients[i]?.nameModel }}</div>
      </div>

      <div class="clients__surname">
        <p>Отчество:</p>
        <div>{{ clients[i]?.middleNameModel }}</div>
      </div>

      <div class="clients__surname">
        <p>Дата рождения:</p>
        <div>{{ clients[i]?.birth }}</div>
      </div>

      <div class="clients__surname">
        <p>Номер телефона:</p>
        <div>{{ clients[i]?.phone }}</div>
      </div>

      <div class="clients__surname">
        <p>Пол:</p>
        <div>{{ clients[i]?.gender }}</div>
      </div>

      <div class="clients__surname">
        <p>Группа клиентов:</p>
        <div>{{ clients[i]?.group }}</div>
      </div>

      <div class="clients__surname">
        <p>Лечащий врач:</p>
        <div>{{ clients[i]?.doctor }}</div>
      </div>

      <div class="clients__surname">
        <p>Не отправлять СМС:</p>
        <div>{{ clients[i]?.noSend }}</div>
      </div>
    </div>
    <CustomButton class="default">Новый клиент</CustomButton>
    <label for="cars">Choose a car:</label>

    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</template>
<script>
import CustomButton from "@/ui/CustomButton.vue";
import FormDialog from "@/components/FormDialog.vue";

export default {
  data() {
    return {
      clients: [],
    };
  },
  name: "ClientList",
  components: {
    CustomButton,
    FormDialog,
  },
  methods: {
    addClient(models) {
      this.clients.push(models);
      console.log(this.clients?.surnameModel);
    },
  },
};
</script>

<style lang="scss" scoped>
.clients {
  display: flex;
  background-color: #cecece;
  &__surname {
    padding: 20px;
  }
}
</style>