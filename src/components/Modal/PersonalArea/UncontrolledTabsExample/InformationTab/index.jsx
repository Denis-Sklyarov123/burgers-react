import { useSelector } from "react-redux";
import "./style.css";

function InformationTab() {
  const user = useSelector((state) => state.mainPage.user);
  console.log("user", user);
  return (
    <div>
      <div className="personal-information">Имя: {user?.name}</div>
      <div className="personal-information">Номер телефона: {user?.number}</div>
      <div className="personal-information">Email: {user?.email}</div>
    </div>
  );
}

export default InformationTab;
