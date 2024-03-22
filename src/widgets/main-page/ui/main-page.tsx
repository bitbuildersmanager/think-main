export const MainPageStatic = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <img
        className="h-[226px] w-[190px] mb-[20px]"
        src="/assets/img/main-page/eraser.png"
      />
      <div className="text-[17px] flex flex-col items-center">
        <img
          className="h-[91px] w-[260px] mb-[23px]"
          src="/assets/img/main-page/logo.png"
        />
        <p>Изучай новое и закрепляй старое.</p>
        <p>Ошибаться - это нормально.</p>
      </div>
    </div>
  );
};
