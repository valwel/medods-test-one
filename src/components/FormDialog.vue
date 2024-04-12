<template>
  <div class="container">
    <div>
  <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
    <label class="form__label">Name</label>
    <input class="form__input" v-model.trim="$v.name.$model"/>
  </div>
  <div class="error" v-if="!$v.name.required">Field is required</div>
  <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
  <div :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></div>
  <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
    <label class="form__label">Age</label>
    <input class="form__input" v-model.trim.lazy="$v.age.$model"/>
  </div>
  <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
  <div :data="$v.age" :options="{rootObjectKey: '$v.age', maxDepth: 2}"></div>
</div>
    <div v-show="step == 0">
      <div v-for="input in dataClients" :key="input.item" class="dialog">
        <label class="label" :for="input.title">{{ input.title }}</label>
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
      <div class="select">
        <label class="label" for="doc">Лечащий врач</label>
        <select name="doc" id="doc">
          <option value="Иванов">Иванов</option>
          <option value="Захаров">Захаров</option>
          <option value="Чернышева">Чернышева</option>
        </select>
      </div>
      <button @click="addClient()" class="default">Далее</button>
    </div>

    <div v-show="step == 1">
      <div v-for="input in adressesClients" :key="input.item" class="dialog">
        <label class="label" :for="input.title">{{ input.title }}</label>
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
      <div class="select">
        <label class="label" for="document">Тип документа</label>
        <select name="document" id="document">
          <option value="Паспорт">Паспорт</option>
          <option value="Свидетельство о рождении">
            Свидетельство о рождении
          </option>
          <option value="Вод. удостоверение">Вод. удостоверение</option>
        </select>
      </div>
      <div v-for="input in documentsCliens" :key="input.item" class="dialog">
        <label class="label" :for="input.title">{{ input.title }}</label>
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
import { required, minLength, between } from 'vuelidate/lib/validators'

import {
  dataClients,
  adressesClients,
  documentsCliens,
} from "@/api/clientsService.js";

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
      name: '',
      age: 0
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  },
  methods: {
    addClient() {
      const models = {};
      const value = dataClients;
      const valueAdress = adressesClients;
      const valueDocument = documentsCliens;

      models.surnameModel = value[0].model;
      models.nameModel = value[1].model;
      models.middleNameModel = value[2].model;
      models.birth = value[3].model;
      models.phone = value[4].model;
      models.gender = value[5].model;
      models.group = value[6].model;
      // models.doctor = value[7].model;
      models.noSend = value[7].model;
      models.index = valueAdress[0].model;
      models.country = valueAdress[1].model;
      models.region = valueAdress[2].model;
      models.city = valueAdress[3].model;
      models.street = valueAdress[4].model;
      models.house = valueAdress[5].model;
      // models.type = valueDocument[0].model;
      models.series = valueDocument[0].model;
      models.number = valueDocument[1].model;
      models.whomIssued = valueDocument[2].model;
      models.dateIssue = valueDocument[3].model;

      console.log(models);
      // this.$emit("addClient", models);
      // this.step++

      function cleaner() {
        value[0].model = "";
        value[1].model = "";
        value[2].model = "";
        value[3].model = "";
        value[4].model = "";
        value[5].model = "";
        value[6].model = "";
        value[7].model = "";
        // value[8].model = "";
        valueAdress[0].model = "";
        valueAdress[1].model = "";
        valueAdress[2].model = "";
        valueAdress[3].model = "";
        valueAdress[4].model = "";
        valueAdress[5].model = "";
        valueDocument[0].model = "";
        valueDocument[1].model = "";
        valueDocument[2].model = "";
        valueDocument[3].model = "";
        // valueDocument[4].model = "";
      }
      this.step === 2
        ? this.$emit("addClient", models) && cleaner()
        : this.step++;
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
  padding: 10px;
}

.input[type="checkbox"] {
  // margin-left: 50px;
}

.label {
  margin: 0 auto 10px auto;
}

.select {
  display: flex;
  flex-direction: column;
  // width: 40%;
  // margin: 0 auto;
  select {
    // max-width: 180px;
    margin: 0 auto;
    border: 1px solid #aaaaaa;
    border-radius: 8px;
    padding: 10px 20px;
  }
}
</style>