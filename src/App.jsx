
import Profile  from "components/Profile";
import Statistics from "components/Statistics";
import Friends from "components/Friends";



export const App = ({ data }) => {
  return (
    <>
      <Profile {...data.user} />
      <Statistics items={data.statistics} />
      <Friends items={data.friends} />
    </>
  );
};