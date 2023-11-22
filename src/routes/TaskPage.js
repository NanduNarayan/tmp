import { Container, Stack,Grid,Input, Typography, FormControl, FormLabel, Button, Modal, ModalDialog, DialogTitle, RadioGroup, Radio } from '@mui/joy';
import React,{useState,useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CreateTask from '../components/CreateTask';
import { MyTasks } from '../components/MyTasks';
import { newTodo } from '../redux/actions';

const radioProps={
  variant:"solid",
}
const todoInit={
  timeStamp:"",
  body:"",
  priority:"",
  isComplete:false
}

function CreateTodo({title}) {
  const [open,setOpen]=useState(false);
  const[todo,setTodo]=useState({...todoInit})
  const todoRef=useRef("");
  const dispatch=useDispatch();
  const handleFormSubmit=(e)=>{
    const {name}=e.target;
    if(name.includes("create")){
      setTodo(currentTodo=>({...currentTodo,body:todoRef.current}))
      setOpen(true);
    }else if(name.includes("priority")){
      const time=new Date();
      setTodo(currentTodo=>({...currentTodo,timeStamp:time}))
      dispatch(newTodo(todo,title))
      setOpen(false);
    }
  }
  return (
    <>
    <form name="create-todo" onSubmit={e=>handleFormSubmit(e)}>
      <Stack id="create-todo"
      direction={{xs:"column",sm:"row"}}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={{xs:2,sm:3}}
      >
        <Grid xs={12} sm={8}>
        <FormControl>
          <FormLabel htmlFor="create-todo-input">Add Todo</FormLabel>
          <Input id="create-todo-input"
          type="text"
          onChange={e=>todoRef.current=e.target.value}
          />
        </FormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <Button
          variant='solid'
          color='danger'
          type="submit"
          onClick={()=>{

          }}
          >ADD</Button>
        </Grid>
      </Stack>
    </form>
    <Modal
    open={open}
    onClose={()=>setOpen(false)}
    >
      <ModalDialog
      variant='soft'
      color='neutral'
      size='lg'
      >
        <DialogTitle
        sx={{color:"black",fontSize:"1em"}}
        >
          SET PRIORITY
        </DialogTitle>
        <form name="set-priority" onSubmit={e=>handleFormSubmit(e)}>
        <FormControl>
          <RadioGroup
          orientation='horizontal'
          name='priority'
          color='neutral'
          onChange={(e)=>setTodo(currentTodo=>({...currentTodo,priority:e.target.value}))}
          >
            <Radio
            value={"l"}
            color='primary'
            label="LOW"
            {...radioProps}/>
            <Radio 
            value={"md"}
            color='warning'
            label="MEDIUM"
            {...radioProps}/>
            <Radio 
            value={"h"}
            color='danger'
            label="HIGH"
            {...radioProps}/>
          </RadioGroup>
        </FormControl>
        <Button
        color='success'
        variant='solid'
        type='submit'
        >SAVE</Button>
        </form>
      </ModalDialog>
    </Modal>
    </>
  )
}

function TaskPage() {
  const params = useParams();
  const task = useSelector(state => state.tasks.filter(task => task.title.includes(params.taskTitle))[0])
  console.log(task)
  return (
    <Container>
      <Typography
        variant='soft'
        color='primary'
        level='h1'
        align='center'
        width={"fitContent"}
      >
        {task?.title}
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={{ xs: 2 }}
      >
        <MyTasks />
        <CreateTask />
      </Stack>
      <CreateTodo title={task?.title}/>
    </Container>
  )
}

export default TaskPage;
