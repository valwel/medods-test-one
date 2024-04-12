<template>
  <div>
    <FormDialog @addClient="addClient"></FormDialog>
    <!-- <a href="http://localhost:8081/" v-for="(item, i) in clients" :key="item.model">
      <p>{{ clients[i]?.surnameModel }}</p>
      <p>{{ clients[i]?.nameModel }}</p>
    </a> -->
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

      <div class="clients__surname">
        <p>Индекс:</p>
        <div>{{ clients[i]?.index }}</div>
      </div>

      <div class="clients__surname">
        <p>Страна:</p>
        <div>{{ clients[i]?.country }}</div>
      </div>

      <div class="clients__surname">
        <p>Область:</p>
        <div>{{ clients[i]?.region }}</div>
      </div>

      <div class="clients__surname">
        <p>Город:</p>
        <div>{{ clients[i]?.city }}</div>
      </div>

      <div class="clients__surname">
        <p>Улица:</p>
        <div>{{ clients[i]?.street }}</div>
      </div>

      <div class="clients__surname">
        <p>Дом:</p>
        <div>{{ clients[i]?.house }}</div>
      </div>

      <div class="clients__surname">
        <p>Тип документа:</p>
        <div>{{ clients[i]?.type }}</div>
      </div>

      <div class="clients__surname">
        <p>Серия:</p>
        <div>{{ clients[i]?.series }}</div>
      </div>

      <div class="clients__surname">
        <p>Номер:</p>
        <div>{{ clients[i]?.number }}</div>
      </div>

      <div class="clients__surname">
        <p>Кем выдан:</p>
        <div>{{ clients[i]?.whomIssued }}</div>
      </div>

      <div class="clients__surname">
        <p>Дата выдачи:</p>
        <div>{{ clients[i]?.dateIssue }}</div>
      </div>
    </div>

    
    <CustomButton class="default">Новый клиент</CustomButton>
    <label for="cars">Choose a car:</label>

    <!-- <select name="cars" id="cars" multiple>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select> -->
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
  // display: flex;
  background-color: #cecece;
  &__surname {
    padding: 20px;
  }
}
</style>