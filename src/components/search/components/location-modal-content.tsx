
'use client'
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { Dispatch, SetStateAction, useState } from "react";

interface IFormData {
    selectedDeparture: string[],
    selectedArrival: string[],
    selectedPeople: {
        children: number,
        adults: number
    },
    checkIn: string,
    checkOut: string
}

interface IComponentData {
    cities: string[]
    valueKey: 'selectedDeparture' | 'selectedArrival'
}

interface ILocationModalContentProps {
    formData: IFormData;
    handleClose: () => void;
    setFormData: Dispatch<SetStateAction<IFormData>>;
    componentData: IComponentData;
}

const LocationModalContent = ({ formData, handleClose, setFormData, componentData }: ILocationModalContentProps) => {
    const [searchValue, setSearchValue] = useState('');
    const { cities, valueKey } = componentData;

    const filtered = cities.filter(item => item.toLowerCase().indexOf(searchValue) !== -1)

    const handleCheckboxChange = (country: string) => {
        setFormData(prev => ({
            ...prev,
            [valueKey]: prev[valueKey].includes(country)
                ? prev[valueKey].filter(item => item !== country)
                : [...prev[valueKey], country]
        }))
    };

    return (
        <>
            <Box className="flex justify-between">
                <Typography id="keep-mounted-modal-description" className="text-center font-bold" sx={{ mt: 2 }}>
                    Please choose the destination counties
                </Typography>
                <Box>
                    <SearchIcon />
                    <Input onChange={(e) => setSearchValue(e.target.value)} />
                </Box>
            </Box>
            <Box>
                <FormGroup className="grid gap-4 py-6 lg:grid-cols-3 grid-cols-1 ">
                    {filtered.map((item, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox checked={formData[valueKey].includes(item)} onChange={() => handleCheckboxChange(item)} />}

                            label={item}
                        />
                    ))}
                </FormGroup>
            </Box>
            <Box className="flex justify-end">
                <Button variant="outlined" onClick={handleClose}>Close</Button>
            </Box>
        </>
    )
}

export default LocationModalContent;