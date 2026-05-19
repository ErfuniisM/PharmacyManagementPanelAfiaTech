// import Appoinments_list from "../components/common/appoinments_list";
import { useEffect, useState } from "react";
import toolBox from "../components/common/toolBox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import TableList from "../components/common/tabelList";
import { FILTER_OPTIONS, TABEL_HEADER } from "../constants";
import PhatmaciesModal from "./modals/phatmaciesModal";

const PHARMACIES_FILTER_OPTIONS = [FILTER_OPTIONS.branch, FILTER_OPTIONS.wh];

const PHARMACIES_TABEL_HEADER = [
  TABEL_HEADER.pharmacy,
  TABEL_HEADER.phone,
  TABEL_HEADER.branch,
  TABEL_HEADER.wh,
  TABEL_HEADER.action,
];

const Phatmacies = () => {
  const [term, setTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    branch: "All",
    wh: "",
  });

  const [loading, setLoading] = useState(true);
  const [phatmacies, setPhatmacies] = useState([]);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/ErfuniisM/AfiaTechDataBase/refs/heads/main/data/phatmacies.json`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPhatmacies(data);
        setLoading(false);
      });
  }, []);
  const SEARCHED_PHARMACIES = phatmacies
    .filter((appt) => {
      const pharmacy = appt.pharmacyName?.toLowerCase() ?? "";
      const branch = appt.branch?.toLowerCase() ?? "";
      const t = term.toLowerCase();
      return pharmacy.startsWith(t) || branch.startsWith(t);
    })
    .filter(
      (p) =>
        selectedFilters.branch === "All" || p.branch === selectedFilters.branch,
    );

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <Container>
      <Content
        modal={<PhatmaciesModal />}
        title="Phatmacies"
        buttonTitle="Add a Pharmacies"
      >
        <Toolbox
          term={term}
          onSearch={setTerm}
          onFilter={setSelectedFilters}
          SearchPlaceholder="Search Pharmacies"
          onReset={() =>
            setSelectedFilters({
              branch: "All",
              wh: "",
            })
          }
          selectedFilters={selectedFilters}
          filters={PHARMACIES_FILTER_OPTIONS}
        />
        <TableList
          header={PHARMACIES_TABEL_HEADER}
          body={SEARCHED_PHARMACIES}
        />
      </Content>
    </Container>
  );
};

export default Phatmacies;
