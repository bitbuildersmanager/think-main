import { useState, useEffect } from "react";
import GoalIcon from "/assets/svg/goalIcon.svg?react";
import StreakIcon from "/assets/svg/streakIcon.svg?react";
import LivesIcon from "/assets/svg/livesIcon.svg?react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface StaticInfo {
  icon: string;
  title: string;
  description: string | JSX.Element;
  bgColor: string;
  canChangeGoal?: boolean;
}

const ICONS = {
  Streak: <StreakIcon />,
  Goal: <GoalIcon />,
  Lives: <LivesIcon />,
};

export const Header = () => {
  const [staticInfo, setStaticInfo] = useState<StaticInfo | null>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const user = useSelector((state: any) => state.user);

  const NOTIFICATION_DATA = {
    streak: {
      icon: "Streak",
      title: "Дневной стрик",
      description: `Дней без перерыва: ${user.streak} \nПродолжай в том же духе!`,
      bgColor: "bg-[#EA5850]",
    },
    goal: {
      icon: "Goal",
      title: "План на день",
      description: (
        <>
          Сегодня ты решил{" "}
          <span style={{ textDecoration: "underline" }}>{`${user.current}/${
            user.goal === 0 ? "∞" : user.goal
          }`}</span>
          . Продолжай в том же духе и план на день не сможет устоять!
        </>
      ),
      bgColor: "bg-[#AC6BE2]",
      canChangeGoal: true,
    },
    lives: {
      icon: "Lives",
      title: "Бесконечные жизни",
      description:
        "Тебе не нужно беспокоится о том, что ты делаешь ошибки. Ошибаться - это нормально",
      bgColor: "bg-[#FF67D5]",
    },
  };

  const showClickedStatic = (clickedStatic: string) => {
    const staticInfo =
      NOTIFICATION_DATA[clickedStatic as keyof typeof NOTIFICATION_DATA];
    setStaticInfo(staticInfo);
  };

  const hideClickedStatic = () => {
    clearTimeout(timer as NodeJS.Timeout);
    setStaticInfo(null);
  };

  useEffect(() => {
    const timerId = setTimeout(() => setStaticInfo(null), 5000);
    setTimer(timerId);

    return () => {
      clearTimeout(timerId as NodeJS.Timeout);
    };
  }, [staticInfo]);

  return (
    <header className="relative w-full flex items-center justify-between py-[5px] bg-[#C8C7CB33] rounded-[9px]">
      <div
        onClick={() => showClickedStatic("streak")}
        className="flex items-center bg-[#F6C9C8] bg-opacity-20 rounded-full min-w-[52px] h-[27px] ml-[9px] pr-2"
      >
        <span className="flex items-center justify-center bg-[#EA5850] w-[27px] h-[27px] rounded-full mr-1">
          <span className="w-[13px] h-[17px]">
            <StreakIcon />
          </span>
        </span>
        <span className="font-bold text-[#EA5850] ">{user.streak}</span>
      </div>
      <div
        onClick={() => showClickedStatic("goal")}
        className="flex items-center h-[27px] bg-[#AC6BE2] bg-opacity-15 rounded-full min-w-[52px] pr-2"
      >
        <span className="flex items-center justify-center bg-[#AC6BE2] w-[27px] h-[27px] rounded-full mr-2">
          <span className="w-[17px] h-[17px]">
            <GoalIcon />
          </span>
        </span>
        <span className="font-bold text-[#AC6BE2] ">
          {user.current}/{user.goal === 0 ? "∞" : user.goal}
        </span>
      </div>
      <div
        onClick={() => showClickedStatic("lives")}
        className="flex items-center bg-[#FF67D5] bg-opacity-20 rounded-full h-[27px] mr-[9px] min-w-[52px] pr-2"
      >
        <span className="flex items-center justify-center bg-[#FF67D5] w-[27px] h-[27px] rounded-full mr-1">
          <span className="w-[16px] h-[14px] ">
            <LivesIcon />
          </span>
        </span>
        <span className="h-full font-bold text-[#FF67D5] mt-[3px]">∞</span>
      </div>
      <div
        onClick={() => hideClickedStatic()}
        className={`w-full flex absolute top-16 z-50 px-4 py-[9px] text-white rounded-[14px] ${
          staticInfo?.bgColor
        } transition-opacity duration-500 ease-in-out ${
          staticInfo
            ? "opacity-100 visibility-visible"
            : "opacity-0 visibility-hidden"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center ">
            <div className="w-[29px] h-[29px] mr-3">
              {ICONS[staticInfo?.icon as keyof typeof ICONS]}
            </div>

            <div className="flex flex-col">
              <p className="font-semibold">{staticInfo?.title}</p>
              <p className="whitespace-pre-line">{staticInfo?.description}</p>
            </div>
          </div>
          {staticInfo?.canChangeGoal && (
            <div className="flex justify-center items-center w-full border-t mt-4">
              <Link
                to="/think-main/select-goal"
                className="flex items-center justify-center text-[17px] mt-[11px] mb-2"
              >
                Изменить количество
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
