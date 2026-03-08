import Totalcards from "../components/common/totalcards";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import TableList from "../components/common/tabelList";
import { TABEL_HEADER } from "../constants";
import { DASHBOARD_ITEMS } from "../constants/database";

const APPOINTNET_TABEL_HEADER = [
  TABEL_HEADER.national,
  TABEL_HEADER.patient,
  TABEL_HEADER.doctor,
  TABEL_HEADER.time,
  TABEL_HEADER.phone,
];

const Dashboard = () => {
  return (
    <Container>
      <Content title="Dashboard">
        <div className="flex flex-row gap-6 justify-center">
          <Totalcards
            total_name="Total Patient"
            total_amount="40,689"
            bg_color="bg-amber-600"
          />
          <Totalcards
            total_name="Total Appointment"
            total_amount="10293"
            bg_color="bg-amber-300"
          />
          <Totalcards
            total_name="Total Sales"
            total_amount="89,000"
            bg_color="bg-emerald-400"
          />
          <Totalcards
            total_name="Total Pending"
            total_amount="2040"
            bg_color="bg-blue-400"
          />
        </div>
        <div className="flex flex-col gap-4 justify-between  h-16 p-4">
          <h1>Appoinment</h1>
          <TableList header={APPOINTNET_TABEL_HEADER} body={DASHBOARD_ITEMS} />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
