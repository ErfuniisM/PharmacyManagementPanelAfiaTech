import Appoinments from "../components/common/appoinments";
import Totalcards from "../components/common/totalcards";
import Container from "../components/layout/container";
import Content from "../components/layout/content";

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
          <Appoinments />
          <Appoinments />
          <Appoinments />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
