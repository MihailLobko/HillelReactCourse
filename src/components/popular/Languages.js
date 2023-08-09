import { memo } from "react";

const languages = ["All", "Javascript", "Java", "Ruby", "CSS", "Pyton"];

const Languges = memo(({ onSelectedLanguage, selectedLanguage, loading }) => {
  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          key={index}
          style={{
            color:
              languages[index] === selectedLanguage ? "#d0021b" : "#000000",
            opacity: loading ? 0.6 : 1,
            pointerEvents: loading ? "none" : "visible",
          }}
          onClick={() => onSelectedLanguage(languages[index])}
        >
          {language}
        </li>
      ))}
    </ul>
  );
});

export default Languges;
