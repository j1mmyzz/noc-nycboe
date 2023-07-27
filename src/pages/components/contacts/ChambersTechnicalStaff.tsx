const ChambersTechnicalStaff: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="font-bold text-3xl">
        52 Chambers Street Technical Staff
      </div>
      <table className="table-auto border border-black text-2xl">
        <thead className="bg-cyan-400">
          <tr className="border border-black">
            <th className="border border-black px-2">Name</th>
            <th className="border border-black px-2">Number</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          <tr className="border border-black">
            <td className="border border-black px-2">Dariusz Leszko</td>
            <td className="border border-black px-2">347 386 0752</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Jose Tajes</td>
            <td className="border border-black px-2">347-992-5609</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Esteban Garcia</td>
            <td className="border border-black px-2">646-210-6805</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Ari Medina</td>
            <td className="border border-black px-2">347-386-0751</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Baron Keels</td>
            <td className="border border-black px-2">917-682-0064</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChambersTechnicalStaff;
