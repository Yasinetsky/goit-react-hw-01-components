
import Profile  from "components/Profile";
import Statistics  from "components/Statistics";



export const App = ({ data }) => {
  return (
    <>
      <Profile {...data.user} />
      <Statistics items={data.statistics} />
    </>
  );
};