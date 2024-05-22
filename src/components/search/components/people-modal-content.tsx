
'use client'
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IComponentData {
    cities: string[]
    valueKey: string
}

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

interface IPeopleContentProps {
    formData: IFormData;
    handleClose: () => void;
    setFormData: Dispatch<SetStateAction<IFormData>>;
    componentData: IComponentData;

}


const PeopleContent = ({ formData, handleClose, setFormData }: IPeopleContentProps) => {

    const handleChangeSelectedPeople = (key: string, newValue: number) => {
        if (newValue < 0) {
            return
        }
        setFormData(prev => ({
            ...prev,
            selectedPeople: {
                ...prev.selectedPeople,
                [key]: newValue
            }
        }))
    }

    return (
        <>
            <Box className="flex justify-between">
                <Typography id="keep-mounted-modal-description" className="text-center font-bold" sx={{ mt: 2 }}>
                    Please choose the amount of guests
                </Typography>
            </Box>
            <div className="pt-8 ">
                <div className="flex font-light w-full justify-between mb-6">
                    Adults
                    <div className="flex items-center">
                        <button onClick={() => handleChangeSelectedPeople('adults', formData.selectedPeople.adults - 1)} className="border border-slate-500 rounded-full w-8 h-8 flex justify-center items-center mx-4">-</button>
                        <span className="">{formData.selectedPeople.adults}</span>
                        <button onClick={() => handleChangeSelectedPeople('adults', formData.selectedPeople.adults + 1)} className="border border-slate-500 rounded-full w-8 h-8 flex justify-center items-center mx-4" >+</button>
                    </div>
                </div>
                <div className="flex font-light w-full justify-between ">
                    Children
                    <div className="flex items-center">
                        <button onClick={() => handleChangeSelectedPeople('children', formData.selectedPeople.children - 1)} className="border border-slate-500 rounded-full w-8 h-8 flex justify-center items-center mx-4">-</button>
                        <span className="">{formData.selectedPeople.children}</span>
                        <button onClick={() => handleChangeSelectedPeople('children', formData.selectedPeople.children + 1)} className="border border-slate-500 rounded-full w-8 h-8 flex justify-center items-center mx-4">+</button>
                    </div>
                </div>
                <Box className="flex justify-end mt-6">
                    <Button variant="outlined" onClick={handleClose}>Close</Button>
                </Box>
            </div>
        </>
    )
}

export default PeopleContent;