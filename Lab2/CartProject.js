import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

// Database using file starts
const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const addToCart = async (product) => {
  const cart = await getCart();
  const isFoundInCart = cart.find((item) => item.id === product.id);
  if (isFoundInCart) {
    isFoundInCart.qty += product.qty;
  } else cart.push(product);
  await saveCart(cart);
  console.log(`${product.name} added/updated to 🛒`);
};

const displayCart = async () => {
  const cart = await getCart();
  if (cart.length == 0) {
    console.log("\nCart is empty\n");
    return;
  }
  console.table(cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  console.log(`Total payble amount Rs. ${total}`);
};

const removeProduct = async (pid) => {
  const cart = await getCart();
  const index = cart.findIndex((item) => item.id === pid);

  if (index !== -1) {
    const rmovedProduct = cart.splice(index, 1)[0];
    await saveCart(cart);

    console.log(`${rmovedProduct.name} removed from cart`);
  } else {
    console.log(`Product with id ${pid} not found in cart`);
  }
};
//update quantity of product in cart

const updateQuantity = async (pid) => {
  const cart = await getCart();
  const index = cart.findIndex((item) => item.id === pid);
  if (index !== -1) {
    cart[index].qty -= 1;
    await saveCart(cart);
    console.log(`${cart[index].name} quantity updated in cart`);
  } else {
    console.log(`Product with id ${pid} not found in cart`);
  }
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });

  do {
    console.log("\n\nWelcome to Amazon Shopping 🛒");
    console.log("1........Show Cart");
    console.log("2........Add Product");
    console.log("3........Remove Product");
    console.log("4........Update Quantity");
    console.log("5........Checkout");
    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await displayCart();
        break;
      case 2:
        const item = await cin.question("Enter id,name,price,qty:");
        const [id, name, price, qty] = item.split(",").map((p) => p.trim());

        await addToCart({
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        });
        break;

      case 3:
        let pid = await cin.question("Enter product id to remove:");
        await removeProduct(Number(pid));
        break;
      case 4:
       let piid = await cin.question("Enter product id to remove:");
        await updateQuantity(Number(piid));
        break;
      case 5:
        console.log("checkout");
        break;
      default:
        console.log("🛑 invalid choice! Try again");
    }
  } while (choice != 5);
  cin.close();
};

main();
