import Totalcards from "../components/common/totalCards";
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

const TOTAL_CARD_DATA = [
  {
    name: "Total Patient",
<<<<<<< HEAD
    amount: "40689",
=======
    amount: "400000",
>>>>>>> 5e13725ea09cbcc2f571023f26c5f1b529a581b8
    color: "bg-amber-600",
  },
  {
    name: "Total Appointments",
<<<<<<< HEAD
    amount: "10293",
=======
    amount: "400000",
>>>>>>> 5e13725ea09cbcc2f571023f26c5f1b529a581b8
    color: "bg-amber-300",
  },
  {
    name: "Total Sales",
<<<<<<< HEAD
    amount: "8900",
=======
    amount: "400000",
>>>>>>> 5e13725ea09cbcc2f571023f26c5f1b529a581b8
    color: "bg-amber-400",
  },
  {
    name: "Total Pending",
<<<<<<< HEAD
    amount: "2040",
=======
    amount: "400000",
>>>>>>> 5e13725ea09cbcc2f571023f26c5f1b529a581b8
    color: "bg-amber-400",
  },
];

const Dashboard = () => {
  
  return (
    <Container>
      <Content title="Dashboard">
        <div className="flex flex-row gap-6 justify-center">
          {TOTAL_CARD_DATA.map((item) => (
            <Totalcards
<<<<<<< HEAD
              key={item.name}
=======
>>>>>>> 5e13725ea09cbcc2f571023f26c5f1b529a581b8
              total_name={item.name}
              total_amount={item.amount}
              bg_color={item.color}
            />
          ))}
        </div>
        <div className="flex flex-col mt-4 gap-4 justify-between h-16">
          <h1>Appoinment</h1>
          <TableList header={APPOINTNET_TABEL_HEADER} body={DASHBOARD_ITEMS} />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
