import { collection, getDocs } from "firebase/firestore";
import { addDoc, query, where } from "firebase/firestore";

import { db } from "../../firebase";
// Ajouter un produit

// Activer / Désactiver

export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  console.log(products);

  return products;
}

export async function addNewsletterSubscriber(fullName, email) {
  if (!fullName || !email) {
    console.error("Le nom complet et l'email sont requis.");
    return;
  }

  try {
    const newsletterRef = collection(db, "newsletter");

    // Vérifier si l'email existe déjà
    const q = query(newsletterRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.warn("Cet email est déjà abonné.");
      return;
    }

    // Ajouter l'abonné
    const docRef = await addDoc(newsletterRef, {
      fullName,
      email,
      subscribedAt: new Date().toISOString(),
    });

    console.log("Abonné ajouté avec l'ID :", docRef.id);
  } catch (error) {
    console.error("Erreur lors de l'ajout :", error);
  }
}
