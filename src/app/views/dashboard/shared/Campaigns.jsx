import { Box } from "@mui/material";
import { MatxProgressBar, SimpleCard } from "app/components";
import { Small } from "app/components/Typography";

const Campaigns = () => {
  return (
    <Box>
      <SimpleCard title="Plans Usage Status">
        <Small color="text.secondary">Today</Small>
        <MatxProgressBar value={90} color="primary" text="Success (120)" />
        <MatxProgressBar value={35} color="secondary" text="Failed (30)" />
        <MatxProgressBar value={15} color="primary" text="In Process (20)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={90} color="primary" text="Success (120)" />
        <MatxProgressBar value={35} color="secondary" text="Failed (30)" />
        <MatxProgressBar value={15} color="primary" text="In Process (20)" />
        <Small color="text.secondary" display="block" pt={4}>
          All Previous Status
        </Small>

        <MatxProgressBar value={90} color="primary" text="Success (120)" />
        <MatxProgressBar value={35} color="secondary" text="Failed (30)" />
        <MatxProgressBar value={15} color="primary" text="In Process (20)" />
      </SimpleCard>

      <SimpleCard></SimpleCard>
    </Box>
  );
};

export default Campaigns;
