const VendorSupplyContactList: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="font-bold text-3xl">Vendor Supply Contact List</div>
      <table className="table-auto border border-black text-xl">
        <thead className="bg-cyan-400">
          <tr className="border border-black">
            <th className="border border-black px-2">NOC</th>
            <th className="border border-black px-2">Main Number</th>
            <th className="border border-black px-2">718-935-3662</th>
            <th>
              <a href="mailto: ems@schools.nyc.gov px-2">ems@schools.nyc.gov</a>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default VendorSupplyContactList;
