// import Appoinments_list from "../components/common/appoinments_list";
import DoctorSchedule from "../components/common/doctorSchedule";
import Toolbox from "../components/common/toolBox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import ScheduleModal from "./modals/scheduleModal";

const Schedule = () => {
  return (
    <Container>
      <Content
        modal={<ScheduleModal />}
        title="Schedule"
        buttonTitle="Add a Time Block"
      ></Content>
      <DoctorSchedule />
    </Container>
  );
};

export default Schedule;
