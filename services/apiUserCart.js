import supabase from "./supabase";
import { toast } from "sonner";

// Insert a Row

export async function addToCart(item) {
  const { data, error } = await supabase
    .from("userCart")
    .insert([item])
    .select();

  if (error) {
    toast("Error while adding item to cart.");
    console.log("error", error.message);
  }

  return data;
}
