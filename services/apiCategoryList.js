import supabase from "./supabase";

//Read All Rows

export async function getCategoryList() {
  const { data, error } = await supabase.from("categorylist").select("*");

  if (error) {
    console.error(error);
    throw new Error("The category list can not be loaded.");
  }

  return data;
}
