import * as React from 'react';
import {
  Divider, IconButton, InputBase, InputProps, Paper, Tooltip,
} from '@mui/material';
import { FiSearch, FiTrendingUp } from 'react-icons/fi';

interface SearchInputProps extends InputProps {
  loadTrending: () => void;
  onSearchClick: () => void;
}

export default function SearchInput({
  loadTrending,
  onSearchClick,
  ...inputProps
}: SearchInputProps) {
  return (
    <Paper
      component="div"
      sx={{
        p: '2px 4px', display: 'flex', alignItems: 'center', width: '500px', marginBottom: '3em', mx: 'auto',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Giphy Library"
        inputProps={{ 'aria-label': 'search giphy library' }}
        {...inputProps}
      />
      <Tooltip title="Search">
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={onSearchClick}>
          <FiSearch />
        </IconButton>
      </Tooltip>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Tooltip title="View trending">
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={loadTrending}>
          <FiTrendingUp />
        </IconButton>
      </Tooltip>
    </Paper>
  );
}
