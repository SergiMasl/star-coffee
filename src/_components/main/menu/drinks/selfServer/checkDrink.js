function checkDrikn(e) {
  switch (e) {
    case "latte":
      return [
        { milk: ["2% milk", "Non-fat milk", "Whole milk"] },
        { temperature: ["Warm", "Steam Hot", "Extra Hot"] },
      ];
      break;
    case "americano":
      return [{ water: ["water", "No-Water", "Extra-Water"] }];
    case "soy":
      return "Soy Milk: A popular non-dairy alternative, high in protein.";
    case "almond":
      return "Almond Milk: Nutty flavor, low in calories, and often used in smoothies.";
    case "oat":
      return "Oat Milk: Creamy texture, excellent for lattes and cooking.";
    default:
      return "";
  }
}

export default checkDrikn;
