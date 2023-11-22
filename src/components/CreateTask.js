import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router';
import { Modal, ModalDialog, Button, FormControl, FormLabel, Input, ButtonGroup, Typography } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { newTask } from '../redux/actions';

function CreateTask() {
    const [clicked, setClicked] = useState(false);
    const inputRef=useRef("")
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const handleOpen = () => {
        setClicked(true);
    };
    const handleClose = () => {
        setClicked(false);
    };
    const goToTask = () => {
        let taskTitle=inputRef.current;
        console.log(taskTitle);
        handleClose();
        dispatch(newTask(taskTitle));
        navigate(`/tasks/${taskTitle}`);
    };
    return (
        <>
            <Button variant='solid' color="neutral"
                onClick={handleOpen}
            >Create New Task</Button>
            <Modal
                open={clicked}
                onClose={handleClose}
            ><ModalDialog
                variant='soft'
                color="neutral"
            >
                    <Typography>Create Task</Typography>
                    <form onSubmit={goToTask}>
                        <FormControl>
                            <FormLabel
                                htmlFor="taskTitle">
                                Give your task a title
                            </FormLabel>
                            <Input
                                id="taskTitle"
                                type="text"
                                name="taskTitle"
                                placeholder="--Eg: Things to Buy--"
                                onChange={e=>inputRef.current=e.target.value}
                            />
                        </FormControl>
                        <ButtonGroup id="create-task-modal-controls">
                            <Button
                                variant="plain"
                                color='danger'
                                onClick={handleClose}>
                                CANCEL
                            </Button>
                            <Button
                                type="submit"
                                variant="soft"
                                color='primary'>
                                CREATE
                            </Button>
                        </ButtonGroup>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default CreateTask