'use client'
import Image from 'next/image';
import React, { use, useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Location from './components/location-modal-content';
import PeopleContent from './components/people-modal-content';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: '#ffffff',
    borderRadius: '10px',
    p: 4,
    boxShadow: 24,
};


enum ModalViewEnum {
    Departure = 'Departure',
    Arrival = 'Arrival',
    // Location = 'Location',
    People = 'People',
}

const modalViewData = {
    [ModalViewEnum.Departure]: {
        Component: Location,
        componentData: {
            cities: ['Warsaw','Belrin','Praga','Gdansk','Dresden','Poznan','Leipzig'],
            valueKey: 'selectedDeparture'
        }

    },
    [ModalViewEnum.Arrival]: {
        Component: Location,
        componentData: {
            cities: ['Paris','Amsterdam','Roma','Venice','Milan','Bolognia','Lion','Barcelona','Madrid','Lisbon'],
            valueKey: 'selectedArrival'
        }

    },
    [ModalViewEnum.People]: {
        Component: PeopleContent,
        componentData: {}
    },
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

const Search: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        selectedDeparture: [],
        selectedArrival: [],
        selectedPeople: {
            children: 0,
            adults: 0
        },
        checkIn: '',
        checkOut: ''
    });
    const [modalView, setModalView] = useState<ModalViewEnum | null>(null);

    const handleClose = () => setModalView(null);

    const { Component: ModalViewComponent, componentData } = modalView
        ? modalViewData[modalView]
        : { Component: () => null, componentData: {} };
    const { selectedDeparture, selectedArrival } = formData;

    return (
        <div className="rounded-full p-3 px-8 flex row border-slate-200 border shadow justify-between items-center mt-8">

            <div className='grid md:grid-cols-4 grid-cols-1'>

                <button onClick={() => setModalView(ModalViewEnum.Departure)} className='flex flex-col'>
                    <span className='font-semibold'>Departure</span>
                    <span className='font-light text-start'>{selectedDeparture.join(', ')}</span>
                </button>

                <button onClick={() => setModalView(ModalViewEnum.Arrival)} className='flex flex-col'>
                    <span className='font-semibold'>Arrival</span>
                    <span className='font-light text-start'>{selectedArrival.join(', ')}</span>
                </button>
            
                <Modal
                    keepMounted
                    open={!!modalView}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                    sx={{
                        '& .MuiBackdrop-root': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <Box sx={style}>
                        <ModalViewComponent
                            formData={formData}
                            handleClose={handleClose}
                            setFormData={setFormData}
                            componentData={componentData as never}
                        />
                    </Box>
                </Modal>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['SingleInputDateRangeField']}>
                        <DateRangePicker
                            slots={{ field: SingleInputDateRangeField }}
                            name="allowedRange"
                            slotProps={{ textField: { variant: 'standard', } }}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                <button onClick={() => setModalView(ModalViewEnum.People)}>
                    <span className='font-semibold'>People</span>
                    <br />
                    <span className='font-light mr-4'>Adults {formData.selectedPeople.adults}</span>
                    <span className='font-light'>Children {formData.selectedPeople.children}</span>

                </button>

            </div>
            <Box className="bg-sky-600 rounded-full h-10 w-10 flex items-center justify-center">
                <button><Image src={'/assets/icons/search-icon.png'} height={20} width={20} alt='search button' className='' /></button>
            </Box>

        </div>
    );
};

export default Search