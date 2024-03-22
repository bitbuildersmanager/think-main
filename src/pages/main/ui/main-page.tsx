import { BlueButton } from "src/shared/ui/buttons";
import { useDispatch, useSelector } from "react-redux";
import { userModel } from "src/entities/user";
import { useEffect } from "react";
import { MainPageStatic } from "src/widgets/main-page";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    getUserByTelegramId();
  }, []);

  const getUserByTelegramId = () => {
    const tg = window.Telegram?.WebApp;
    userModel.getUserByTelegramId(tg.initDataUnsafe.user.id)(dispatch);
  };

  const handleClick = () => {
    if (user.goal === null) {
      navigate("/think-main/select-goal");
    } else {
      navigate("/think-main/task");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between w-full pt-[27px] pb-[84px] bg-[url('/assets/img/bg.png')] bg-center bg-no-repeat bg-cover">
      <MainPageStatic />
      <BlueButton
        text="Начать"
        onClick={handleClick}
        className="w-[122px]"
        disabled={!user.id}
      />
    </div>
  );
};
