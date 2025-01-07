import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">
        {t("pages.home.title")}
      </h1>
    </div>
  );
}

export default App;
