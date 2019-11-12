class Desserts {
  constructor(type, calories) {
    this.type = type;
    this.calories = calories;
  }
}

class IceCream extends Desserts {
  constructor(type, calories, flavor, scoops) {
    super(type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }
  includeSpoon() {
    console.log("Here is your spoon!");
  }
}

const vanillaIceCream = new IceCream("Ice Cream", "340", "Vanilla", "3");

const template = `
  <div>
    <h1>${vanillaIceCream.type}</h1>
    <h2>Type:</h2>
    <ul>
      <li>${vanillaIceCream.calories} calories</li>
      <li>${vanillaIceCream.flavor}</li>
      <li>${vanillaIceCream.scoops} scoops</li>
    </ul>
  </div>
`;

document.body.innerHTML = template;

console.log(vanillaIceCream);

includeSpoon();
