import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FaPython, FaJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

const languages = [
  { name: "Golang", icon: FaGolang },
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: FaJs },
];

interface LanguageSelectorProps {
  onSelectLanguageForCode: (language: string) => void;
}

export default function LanguageSelector({ onSelectLanguageForCode }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("Golang");

  const handleChange = (event: SelectChangeEvent<string>) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    onSelectLanguageForCode(language);
  };

  return (
    <Box sx={{ minWidth: 120}}  >
      <FormControl fullWidth className='scale-75'>
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={selectedLanguage}
          label="Language"
          onChange={handleChange}
          sx={{
            height: 40,
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              padding: '8px 14px',
            },
            '& .MuiSelect-icon': {
              top: 'calc(50% - 10px)',
            }
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                transform: 'scale(0.75)',
                transformOrigin: 'top left',
                width:"10px",
                padding:"0px",
              },
            },
          }}
          renderValue={(value) => {
            const selectedLang = languages.find(lang => lang.name === value);
            return (
              <div style={{ display: 'flex', alignItems: 'center' }}> 
                {selectedLang && <selectedLang.icon size={20} style={{ marginRight: 8 }} />}
                {selectedLang?.name}
              </div>  
            );
          }}
        >
          {languages.map((lang) => (
            lang.name !== selectedLanguage && (
              <MenuItem key={lang.name} value={lang.name} sx={{ height: 40 ,width:"100%" }} className='scale-75 p-0 m-0' >
                <lang.icon size={20} style={{ marginRight: 8 }} />
                {lang.name}
              </MenuItem>
            )
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
