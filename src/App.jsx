import Container from "components/Container";
import Profile  from "components/Profile";
import Statistics from "components/Statistics";
import Friends from "components/Friends";
import Transactions from "components/Transactions";



export const App = ({ data }) => {
  return (
    <Container>
      <Profile {...data.user} />
      <Statistics items={data.statistics} />
      <Friends items={data.friends} />
      <Transactions items={data.transactions} />
   </Container>
  );
};