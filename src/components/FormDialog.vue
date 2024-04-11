<template>
  <div class="container">
    <div v-for="input in inputsClient" :key="input.item" class="dialog">
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
    <pre>{{ inputsClient }}</pre>
    <button @click="addClient()">ssssss</button>
  </div>
</template>
<script>
// import CustomInput from "@/ui/CustomInput.vue";

export default {
  name: "FormDialog",
  components: {
    // CustomInput,
  },
  data() {
    return {
      inputsClient: [
        {
          title: "Фамилия*",
          model: "",
          type: "text",
          item: "surname",
        },
        {
          title: "Имя*",
          model: "",
          type: "text",
          item: "name",
        },
        {
          title: "Отчество",
          model: "",
          type: "text",
          item: "middleName",
        },
        {
          title: "Дата рождения*",
          model: "",
          type: "text",
          item: "birth",
        },
        // {
        //   item: "Номер телефона*",
        //   type: "text",
        //   model: "surname"
        // },
        // {
        //   item: "Пол",
        //   type: "text",
        //   model: "surname"
        // },
        // {
        //   item: "Группа клиентов*",
        //   type: "text",
        //   model: "surname"
        // },
        // {
        //   item: "Лечащий врач",
        //   type: "text",
        //   model: "surname"
        // },
        // {
        //   item: "Не отправлять СМС.",
        //   type: "radio",
        //   model: "surname"
        // },
      ],
      client: {
        surname: "",
        name: "",
        middleName: "",
        birth: "",
        phone: "",
        gender: "",
        group: "",
        doctor: "",
        noSend: "",
      },

      adress: {
        index: "",
        country: "",
        region: "",
        city: "",
        street: "",
        house: "",
      },

      document: {
        type: "",
        series: "",
        number: "",
        whomIsssued: "",
        dateIssued: "",
      },
    };
  },
  methods: {
    check() {
      console.log(this.inputsClient[0].model);
    },

    test() {
      // let models = [];
      // for (let i = 0; i < 6; i++) {
      //   models.push(this.inputsClient[i].model);
      // }
        let map = new Map(this.inputsClient);
        for (let keys of map.values()) {
          console.log(keys)
        }
    },

    addClient() {
      this.test()
      // console.log(this.models)
      // this.$emit("addClient", { ...this.inputsClient });
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