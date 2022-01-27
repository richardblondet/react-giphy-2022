import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton, Tooltip,
} from '@mui/material';
import {
  FiUser, FiExternalLink, FiCopy,
} from 'react-icons/fi';
import Modal from '@mui/material/Modal';

const modalContentStyles = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 640,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

interface GifModalProps {
  gif: any;
  open: boolean;
  onClose: () => void;
  handleOpenGif: () => void;
  handleCopyUrl: () => void;
}
export default function GifModal({
  gif,
  open,
  onClose,
  handleOpenGif,
  handleCopyUrl,
}: GifModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalContentStyles}>
        <Card>
          <CardHeader
            avatar={gif.username ? (
              <Avatar sx={{ bgcolor: '#333' }} aria-label="username">
                <FiUser />
              </Avatar>
            ) : null}
            title={gif.username}
            subheader={gif.import_datetime}
          />
          <CardMedia
            component="img"
            height="194"
            image={gif.images.original.url}
            alt={gif.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {gif.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title="Open gif">
              <IconButton aria-label="open gif" onClick={handleOpenGif}>
                <FiExternalLink />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy gif link">
              <IconButton aria-label="Copy gif link" onClick={handleCopyUrl}>
                <FiCopy />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
}
