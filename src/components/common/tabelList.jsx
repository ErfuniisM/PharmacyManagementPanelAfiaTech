const TabelList = ({ header, body }) => {
  return (
    <table className="bg-white shadow-sm text-left  rounded-2xl">
      <thead>
        <tr>
          {header.map((item) => (
            <th className="text-center p-5">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((item, idx) => (
          <tr key={idx}>
            {Object.values(item).map((value, i) => (
              <td className="text-center p-5" key={i}>
                {Array.isArray(value) ? value.join(", ") : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelList;
