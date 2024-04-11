<template>
  <div class="container">
    <div v-show="step == 0">
      <div v-for="input in dataClients" :key="input.item" class="dialog">
        <label :for="input.title">{{ input.title }}</label>
        <input
          class="input"
          :type="input.type"
          name=""
          :id="input.title"
          required
          autofocus
          :maxlength="input.maxlength"
          :pattern="input.pattern"
          v-model="input.model"
        />
      </div>
      <button @click="addClient()" class="default">Далее</button>
    </div>

    <div v-show="step == 1">
      <div v-for="input in adressesClients" :key="input.item" class="dialog">
        <label :for="input.title">{{ input.title }}</label>
        <input
          class="input"
          :type="input.type"
          name=""
          :id="input.title"
          required
          pattern=".{1,}"
          autofocus
          v-model="input.model"
        />
      </div>
      <button @click="addClient()" class="default">Далее</button>
    </div>

    <div v-show="step == 2">
      <div v-for="input in documentsCliens" :key="input.item" class="dialog">
        <label :for="input.title">{{ input.title }}</label>
        <input
          class="input"
          :type="input.type"
          name=""
          :id="input.title"
          required
          pattern=".{1,}"
          autofocus
          v-model="input.model"
        />
      </div>
      <button @click="addClient()" class="default">Далее</button>
    </div>
  </div>
</template>
<script>
// import CustomInput from "@/ui/CustomInput.vue";
// import CustomButton from "@/ui/CustomButton.vue";
import { dataClients, adressesClients, documentsCliens } from "@/api/clientsService.js";

export default {
  name: "FormDialog",
  components: {
    // CustomButton,
  },
  data() {
    return {
      dataClients,
      adressesClients,
      documentsCliens,
      step: 0,
    };
  },
  methods: {
    addClient() {
      const models = {};
      const value = dataClients;

      models.surnameModel = value[0].model;
      value[0].model = "";
      models.nameModel = value[1].model;
      value[1].model = "";
      models.middleNameModel = value[2].model;
      value[2].model = "";

      models.birth = value[3].model;
      value[3].model = "";
      models.phone = value[4].model;
      value[4].model = "";
      models.gender = value[5].model;
      value[5].model = "";

      models.group = value[6].model;
      value[6].model = "";
      models.doctor = value[7].model;
      value[7].model = "";
      models.noSend = value[8].model;
      value[8].model = "";
      console.log(value);
      this.$emit("addClient", models);
      this.step++
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 640px;
  border: 1px solid #aaaaaa;
  border-radius: 8px;
  padding: 26px;
}

.dialog {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.input {
  border: 1px solid #aaaaaa;
  border-radius: 8px;
  padding: 12px;
}
</style>