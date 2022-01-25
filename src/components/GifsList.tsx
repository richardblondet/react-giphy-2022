import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GifModal from './GifModal';

interface GifsListsProps {
  gifs: any[];
  source: string;
}
export default function GifsList({ gifs, source }: GifsListsProps) {
  const [open, setOpen] = React.useState(false);
  const [gif, setGif] = React.useState<any>(null);

  const handleModalOpen = (image: any) => {
    setGif(image);
    setOpen(true);
  };
  const handleModalClose = () => setOpen(false);

  const handleOpenGif = () => {
    const newWindow = window.open(gif.bitly_url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(gif.bitly_url);
  };

  return (
    <>
      <Typography variant="overline" display="block" gutterBottom>
        {source}
      </Typography>
      <Box sx={{ width: '100%', marginBottom: '3em' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {gifs.map((item: any) => (
            <ImageListItem key={item.id} onClick={() => handleModalOpen(item)}>
              <img
                src={`${item.images.original_still.url}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {gif && (
        <GifModal
          gif={gif}
          open={open}
          onClose={handleModalClose}
          handleOpenGif={handleOpenGif}
          handleCopyUrl={handleCopyUrl}
        />
      )}
    </>
  );
}
