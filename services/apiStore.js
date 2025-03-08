import supabase from "./supabase";

//Read All Rows

export async function getStore() {
  let { data, error } = await supabase.from("store").select("*");

  if (error) {
    console.error(error);
    throw new Error("The store list can not be loaded.");
  }

  return data;
}
