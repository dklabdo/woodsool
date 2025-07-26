import { ref, push, set } from "firebase/database";
import { rtdb } from "../../firebase";


// Créer une nouvelle commande
export async function createOrder(order) {
  const orderRef = push(ref(rtdb, "orders"));
  await set(orderRef, {
    ...order,
    status: "Pending",
    createdAt: new Date().toISOString(),
    confirmedAt: null,
  });
}

