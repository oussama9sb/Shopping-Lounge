"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CollectionSection from "./CollectionSection";
import AboutSection from "./AboutSection";
import ReviewSection from "./ReviewSection";

const StoreTabs = ({ store }) => {
  return (
    <Tabs defaultValue="collection" className="w-full mt-4">
      <TabsList className="bg-white">
        <TabsTrigger value="collection">Collection</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="review">Review</TabsTrigger>
      </TabsList>
      {/* Collection Tab */}
      <TabsContent value="collection">
        <CollectionSection store={store} />
      </TabsContent>
      {/* About Tab */}
      <TabsContent value="about">
        <AboutSection store={store} />
      </TabsContent>
      {/* Review Tab */}
      <TabsContent value="review">
        <ReviewSection store={store} />
      </TabsContent>
    </Tabs>
  );
};

export default StoreTabs;
