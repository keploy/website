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
    <Box className="scale-[0.85]">
      <FormControl sx={{ m: 0.5, minWidth: 100 }} size="small">
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={selectedLanguage}
          label="Language"
          onChange={handleChange}
          sx={{
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px 10px',
            },
          }}
          renderValue={(value) => {
            const selectedLang = languages.find(lang => lang.name === value);
            return (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {selectedLang && <selectedLang.icon size={25} />}
              </div>
            );
          }}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.name} className='p-0' value={lang.name} sx={{ height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"0"}}>
              <lang.icon size={20} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
