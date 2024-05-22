
const contact: React.FC = () => {

    return (
        <section className='flex flex-col items-center mt-10 '>
            <div className="w-9/12 max-w-screen-xl">
                <h4 className="text-center">Contact us</h4>
                <p className="font-light text-xl text-center mt-8">Welcome to JETSET! We value your feedback, inquiries, and suggestions. Contact us through the following channels:</p>

                <div className="flex flex-col md:flex-row mt-14">
                    <div className="border rounded-xl shadow-xl p-4 md:me-10">
                        <span className="font-bold text-xl mb-4">General Inquiries</span>
                        <p className="mb-6 mt-2">For general inquiries, partnership opportunities, or any non-support related matters, feel free to contact us at:</p>
                        <span className="font-bold">
                            Email: info@yourcompany.com
                        </span>
                    </div>

                    <div className="border rounded-xl shadow-xl p-5 mt-10 md:mt-0">
                        <span className="font-bold text-xl mb-4">Customer Support</span>
                        <p className="mb-6 mt-2">If you have any questions, concerns, or need assistance, our dedicated customer support team is here to help you. Please dont hesitate to reach out to us via email or phone.</p>
                        <span className="font-bold"> Email: support@yourcompany.com</span>
                        <br />
                        <span className="font-semibold">
                            Phone: [+6 (423) 555-7890]
                        </span>

                    </div>

                </div>

                <h4 className="mt-10 text-center">More about us</h4>

                <div className="grid gap-20 xl:grid-cols-3 md:grid-cols-2 grod-cols-1 my-20">
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Visit Us</h3>
                        <span className="font-light">If you prefer face-to-face interaction, you can visit our office at the following address:</span>
                        <span>JETSET Inc.</span>
                        <span>st. Reymontee 19</span>
                        <span>Warsaw</span>
                        <span>71-330</span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Mailing address</h3>
                        <span className="font-light">Please use the following address for mailing:</span>
                        <span>JETSET Inc.</span>
                        <span>st. Central 2</span>
                        <span>Gdansk</span>
                        <span>35-300</span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Hotline</h3>
                        <span className="font-light">Sales and information about the offer</span>
                        <span>JETSET Inc.</span>
                        <span className="font-semibold">
                            Phone: [+6 (423) 555-7890]
                        </span>
                        <span className="font-semibold">
                            Phone: [+6 (323) 545-7890]
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Visit Us</h3>
                        <span className="font-light">If you prefer face-to-face interaction, you can visit our office at the following address:</span>
                        <span>JETSET Inc.</span>
                        <span>st. Reymontee 19</span>
                        <span>Warsaw</span>
                        <span>71-330</span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Data Protection Inspector</h3>
                        <span>JETSET Inc.</span>
                        <span>Daniel V.</span>
                        <span className="font-semibold">
                            Phone: [+6 (423) 555-7890]
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold">Contact for Agents </h3>
                        <span className="font-light">If you prefer face-to-face interaction, you can visit our office at the following address:</span>
                        <span>JETSET Inc.</span>
                        <span>Mon-Fri 08:00 - 14:00</span>
                        <span className="font-semibold">
                            Phone: [+6 (423) 555-7890]
                        </span>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default contact;