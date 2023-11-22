import { Typography} from "@mui/joy";
import CreateTask from "../components/CreateTask";
export const WelcomePage = () => {

  return (
    <>
      <Typography level='h1' color="danger">Task Keeper Pro</Typography>
      <Typography level='h1' color="neutral">One stop for all your task management needs..</Typography>
      <Typography level="h4" color="danger" variant='soft'>
        We know how important it is to handle a personal task without missing out on the little details in between.
        Tired of using note keepers and todo apps which are'nt flexible? We got you! TLP is a complete task mnagement solution which lets you structure your tasks according to priority and lets you add as much steps as required so you dont
        miss out on any detail! Don't believe us? Try it out for yourself!
      </Typography>
      <CreateTask/>
    </>
  );
};


