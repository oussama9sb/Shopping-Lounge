import supabase from "./supabase";
import { toast } from "sonner";

//Insert A Review

export async function addReview(review) {
  const { data, error } = await supabase
    .from("review")
    .insert([review])
    .select();

  if (error) {
    toast("Error while adding a review.");
    console.log("error", error.message);
  }

  return data;
}

//Read All Rows

export async function getReviews() {
  let { data, error } = await supabase.from("review").select("*");

  if (error) {
    console.error(error);
    throw new Error("Error Reviews can not be loaded.");
  }
  return data;
}
