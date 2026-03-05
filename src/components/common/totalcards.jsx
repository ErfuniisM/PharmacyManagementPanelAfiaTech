const Totalcards = ({ total_name, total_amount, bg_color }) => {
  return (
    <div className="flex flex-col items-center gap-6 w-70 h-40 rounded-2xl bg-white p-[20px]">
      <div className="flex items-center justify-center gap-[65px]">
        <div className="flex flex-col gap-3">
          <span className="text-[14px]">{total_name}</span>
          <h2 className="text-3xl font-bold">{total_amount}</h2>
        </div>
        <div className={` w-[60px] h-[60px] rounded-[20px]  ${bg_color}`}></div>
      </div>
      <span>8.5% Up from yesetrday</span>
    </div>
  );
};

export default Totalcards;
