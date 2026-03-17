import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const BackLink = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="back__link text-accent" to="/">
      {t('back')}...
    </button>
  );
};
