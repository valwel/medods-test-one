export const dataClients = [
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
    type: "date",
    item: "birth",
  },
  {
    title: "Номер телефона*",
    model: "",
    type: "tel",
    item: "phone",
    maxlength: 11,
    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}"
  },
  {
    title: "Пол",
    model: "",
    type: "text",
    item: "gender",
  },
  {
    title: "Группа клиентов*",
    model: "",
    type: "text",
    item: "group",
  },
  // {
  //   title: "Лечащий врач",
  //   model: "",
  //   type: "text",
  //   item: "doctor",
  // },
  {
    title: "Не отправлять СМС",
    model: "",
    type: "checkbox",
    item: "noSend",
  },
];

export const adressesClients = [
  {
    title: "Индекс",
    model: "",
    type: "text",
    item: "index",
  },
  {
    title: "Страна",
    model: "",
    type: "text",
    item: "country",
  },
  {
    title: "Область",
    model: "",
    type: "text",
    item: "region",
  },
  {
    title: "Город*",
    model: "",
    type: "text",
    item: "city",
  },
  {
    title: "Улица",
    model: "",
    type: "text",
    item: "street",
  },
  {
    title: "Дом",
    model: "",
    type: "text",
    item: "house",
  },
];

export const documentsCliens = [
  // {
  //   title: "Тип документа",
  //   model: "",
  //   type: "text",
  //   item: "type",
  // },
  {
    title: "Серия",
    model: "",
    type: "text",
    item: "series",
  },
  {
    title: "Номер",
    model: "",
    type: "text",
    item: "number",
  },
  {
    title: "Кем выдан",
    model: "",
    type: "text",
    item: "whomIsssued",
  },
  {
    title: "Дата выдачи*",
    model: "",
    type: "text",
    item: "dateIssued",
  },
];
