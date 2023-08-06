import { useState, useEffect } from "react";
import Languges from "./Languages";
import Repos from "./Repos";
import { useSearchParams } from "react-router-dom";

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const langParam = searchParams.get("lang");
    if (langParam) {
      setSelectedLanguage(decodeURIComponent(langParam));
    }
  }, []);

  useEffect(() => {
    setSearchParams({ lang: selectedLanguage });
  }, [selectedLanguage]);

  return (
    <div>
      <Languges
        onSelectedLanguage={setSelectedLanguage}
        selectedLanguage={selectedLanguage}
        loading={loading}
      />
      <Repos selectedLanguage={selectedLanguage} onLoading={setLoading}/>
    </div>
  );
};

export default Popular;
