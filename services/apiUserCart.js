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

// Read All Rows

export async function getUserCart() {
  const { data, error } = await supabase.from("userCart").select("*");

  if (error) {
    console.error(error);
    throw new Error("Error user cart can not be loaded.");
  }

  return data;
}

//Delete A Row

export async function deleteCartItem(id) {
  const { error } = await supabase
    .from("userCart")
    .delete()
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error("Error user cart item can not be deleted.");
  }
  toast("Item Removed");
}

//Delete All Rows

export async function deleteAllCartItems(arr) {
  const { error } = await supabase.from("userCart").delete().in("id", arr);
  if (error) {
    console.error(error);
    throw new Error("Error user cart item can not be deleted.");
  }
  toast("Items purchased");
}
