import React, { useState } from "react";
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuProps as MenuPropsType } from '@mui/material/Menu';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps: Partial<MenuPropsType> = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      overflowY: 'auto' as 'auto',
    },
  },
  disableScrollLock: true,
};

const projectNames = ['Golang', 'Typescript', 'Python'];

function getStyles(name: string, selectedProject: string, theme: Theme) {
  return {
    fontWeight:
      selectedProject === name
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export const LanguageSelector = ({
  onSelectLanguageForCode,
}: {
  onSelectLanguageForCode: (language: string) => void;
}) => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<string>('Golang');

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newProject = event.target.value;
    setSelectedProject(newProject);
    onSelectLanguageForCode(newProject);
  };

  return (
    <div className="mb-5 text-gray-800 w-full p-2 rounded-md">
      <FormControl fullWidth>
        <Select
          value={selectedProject}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <em>Language</em>;
            }
            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Language</em>
          </MenuItem>
          {projectNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, selectedProject, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelector;
