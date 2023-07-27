const NocContactList: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="font-bold text-3xl">NOC Contact List</div>
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
        <tbody className="border border-black">
          <tr className="border border-black h-7">
            <td className="border border-black px-2"></td>
            <td className="border border-black px-2"></td>
            <td className="border border-black px-2"></td>
          </tr>
          <tr className="border border-black bg-cyan-400">
            <th className="border border-black px-2">NOC Personnel</th>
            <th className="border border-black px-2">Position</th>
            <th className="border border-black px-2">Phone</th>
            <th className="border border-black px-2">Email</th>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Juan Alex Williams</td>
            <td className="border border-black px-2">NOC Director</td>
            <td className="border border-black px-2">718-935-5731</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: JWilliams29@schools.nyc.gov">
                JWilliams29@schools.nyc.gov
              </a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Wendy Inniss</td>
            <td className="border border-black px-2">NOC Supervisor</td>
            <td className="border border-black px-2">718-935-5810</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: WInniss@schools.nyc.gov">
                WInniss@schools.nyc.gov
              </a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Debra Waddell</td>
            <td className="border border-black px-2">NOC Field Supervisor</td>
            <td className="border border-black px-2">718-935-5241</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: DWaddel@schools.nyc.gov">
                DWaddel@schools.nyc.gov
              </a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Binh Ho</td>
            <td className="border border-black px-2">EMS Team lead</td>
            <td className="border border-black px-2">718-935-5112</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: bho2@schools.nyc.gov">bho2@schools.nyc.gov</a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Tuan Nguyen</td>
            <td className="border border-black px-2">EMS</td>
            <td className="border border-black px-2">718-935-5094</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: tnguyen6@schools.nyc.gov">
                tnguyen6@schools.nyc.gov
              </a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Yeung King Ling (Mary)</td>
            <td className="border border-black px-2">EMS</td>
            <td className="border border-black px-2">718-935-5670</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: KYeung@schools.nyc.gov">
                KYeung@schools.nyc.gov
              </a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Wang Jia</td>
            <td className="border border-black px-2">EMS</td>
            <td className="border border-black px-2">718-935-3799</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: JWang16@schools.nyc.gov">
                JWang16@schools.nyc.gov
              </a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Woody Ho</td>
            <td className="border border-black px-2">NOC Engineer</td>
            <td className="border border-black px-2">718-935-5774</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: who@schools.nyc.gov">who@schools.nyc.gov</a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Philon Andrews</td>
            <td className="border border-black px-2">Level 2 ProCon</td>
            <td className="border border-black px-2">718-935-5630</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: PAndrews@schools.nyc.gov">
                PAndrews@schools.nyc.gov
              </a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Kevin O&apos;Reilly</td>
            <td className="border border-black px-2">Level 2 ProCon</td>
            <td className="border border-black px-2">718-935-5725</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: koreilly@schools.nyc.gov">
                koreilly@schools.nyc.gov
              </a>
            </td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black px-2">Marcus Stanley</td>
            <td className="border border-black px-2">Level 2 ProCon</td>
            <td className="border border-black px-2">718-935-5119</td>
            <td className="border border-black px-2 text-blue-600">
              <a href="mailto: MStanle@schools.nyc.gov">
                MStanle@schools.nyc.gov
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NocContactList;
