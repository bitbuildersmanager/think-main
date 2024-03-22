import { GoalList } from "src/widgets/goal-list";
import { useState } from "react";
import { BlueButton } from "src/shared/ui/buttons";

import { userModel } from "src/entities/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SelectGoalPage = () => {
  const [selectedGoal, setSelectedGoal] = useState(NaN);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setUserGoal = async () => {
    await userModel.setUserGoal(selectedGoal)(dispatch);
    navigate("/think-main/task");
  };
  return (
    <div className="bg-[url('/assets/img/bg.png')] bg-center bg-no-repeat bg-cover">
      <GoalList setSelectedGoal={setSelectedGoal} />
      <div className="fixed bottom-[84px] w-full flex justify-center ">
        <BlueButton
          text="Далее"
          onClick={setUserGoal}
          className="w-[122px]"
          disabled={isNaN(selectedGoal)}
        />
      </div>
    </div>
  );
};
