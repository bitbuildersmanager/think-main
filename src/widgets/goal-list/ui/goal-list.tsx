import CheckedIcon from "/assets/svg/checkedIcon.svg?react";

let selectedGoal = NaN;

export const GoalList = ({
  setSelectedGoal,
}: {
  setSelectedGoal: (value: number) => void;
}) => {
  const GOALS = [
    { title: "На лайте", goal: "5 заданий в день", value: 5 },
    { title: "Обычный", goal: "10 заданий в день", value: 10 },
    { title: "Серьезный", goal: "15 заданий в день", value: 15 },
    {
      title: "Не хочу ставить рамки",
      goal: "Буду делать столько, сколько смогу",
      value: 0,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="px-4 pt-6 gap-y-3">
        <div className="text-center">
          <p className="text-xl font-bold mb-3">Выбери свою цель:</p>
          <p className="mb-4">
            Отметь комфортное для себя количество заданий, чтобы выполнив их, ты
            был спокоен за свою подготовку.
          </p>
        </div>
        {GOALS.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-y-4 cursor-pointer h-[54px] bg-white rounded-[14px] px-5 mb-4"
            onClick={() => (
              setSelectedGoal(item.value), (selectedGoal = item.value)
            )}
          >
            <div className="flex flex-col text-[14px] leading-[18px]">
              <p className="font-semibold">{item.title}</p>
              <p>{item.goal}</p>
            </div>
            <div
              className={`w-[22px] h-[22px] border rounded-full cursor-pointer flex justify-center items-center ${
                selectedGoal === item.value ? "border-none" : ""
              }`}
            >
              {selectedGoal === item.value && (
                <CheckedIcon className="w-full h-full" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
