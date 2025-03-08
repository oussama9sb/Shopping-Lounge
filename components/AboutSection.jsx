const AboutSection = ({ store }) => {
  return (
    <div>
      <h4 className="text-2xl font-bold text-zinc-800 mb-1">
        About {store.storeName}
      </h4>
      <p className="text-sm text-gray-500">{store.aboutUs}</p>
    </div>
  );
};

export default AboutSection;
