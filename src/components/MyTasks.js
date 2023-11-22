import { ChecklistRounded } from '@mui/icons-material';
import { Button, DialogContent, DialogTitle, Drawer, List, ListItem, ModalClose, Typography } from '@mui/joy';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function MyTasks() {
  const [clicked, setCLicked] = useState(false);
  const store = useSelector(state => state.tasks.map(task => (task.title)));
  const handleOpen = () => {
    setCLicked(true);
  };
  const handleClosed = () => {
    setCLicked(false);
  };
  return (
    <>
      <Button
        variant='solid'
        color='danger'
        startDecorator={<ChecklistRounded />}
        onClick={handleOpen}
      >My Tasks</Button>
      <Drawer
        anchor='left'
        open={clicked}
        onClose={handleClosed}
        size="md"
      >
        <ModalClose variant="solid" color="danger" />
        <DialogTitle>My Tasks</DialogTitle>
        <DialogContent>
          <List>
            {store && (
              store.map((item, index) => (
                <ListItem key={index}>
                  <Link to={`/tasks/${item}`}>
                    <Typography
                      level='h4'
                      variant='plain'
                    >
                      {item}
                    </Typography>
                  </Link>
                </ListItem>
              ))
            )}
          </List>
        </DialogContent>
      </Drawer>
    </>
  );
}
