const Footer = () => {
    return (
        <div>
            <footer className="2sm:hidden footer-web footer-bg bg-[#e9ffe9d4] block pt-[80px] pb-[40px]">
                <div className="footer-content w-[92%] max-w-[1300px] text-left m-auto">
                    <div className="m-auto leading-0 text-0 p-0 border-box w-full footer-box flex justify-between tracking-normal flex-row-reverse max-w-[700px]">
                        <div className="4sm:w-full 4sm:text-center lg:w-[calc(100% / 3)] footer-item text-[14px] inline-block align-top text-left mt-[20px] w-contain">
                            <div className="footer-logo text-[24px] text-[#ccc] leading-[1] ">
                                <a href="#" className="text-[#8c8889] no-underline">Digital States</a>
                            </div>
                            <p className="text-[#8c8889] mt-[10px]">
                                <a href="#" className="text-[#8c8889] no-underline">support@DigitalStates.com</a>
                            </p>
                        </div>
                        <div className="4sm:w-full 4sm:text-center lg:w-[calc(100% / 3)] footer-item text-[14px] inline-block align-top text-left mt-[20px] w-[calc(100%/6.1)]">
                            <h3 className="text-[16px] text-[#5c5758] text-normal m-0">Zones</h3>
                            <ul className="list-none p-0 m-0 border-box">
                                <li className="mt-[16px] list-none p-0 m-0 border-box">
                                    <a className="no-underline text-[#8c8889]" 
                                        rel="noreferrer" target="_blank" href="https://southeast.digitalstates.ng/">South East</a>
                                </li>
                                <li className="mt-[16px] list-none p-0 m-0 border-box">
                                    <a className="no-underline text-[#8c8889]" 
                                        rel="noreferrer" target="_blank" href="https://southwest.digitalstates.ng/">South West</a>
                                </li>
                                <li className="mt-[16px] list-none p-0 m-0 border-box">
                                    <a className="no-underline text-[#8c8889]" 
                                        rel="noreferrer" target="_blank" href="https://southsouth.digitalstates.ng/">South South</a>
                                </li>
                                <li className="mt-[16px] list-none p-0 m-0 border-box">
                                    <a className="no-underline text-[#8c8889]" target="_blank" 
                                        rel="noreferrer" href="https://northeast.digitalstates.ng/">North East</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-foot mt-[70px]">
                        <p className="foot-first inline-block text-[12px] m-0 text-[#8c8889]">

                            <a href="#" className="text-[#8c8889] mr-[20px]">Privacy Policy</a>
                            <a href="#" className="text-[#8c8889] mr-[20px]">User Agreement</a>
                        </p>
                        <p className="foot-last float-right inline-block m-0 text-[#8c8889] text-[12px]">© 2022 Digital States. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            <footer className="2sm:block footer-phone hidden pt-[50px] bg-white ">
                <div className="footer-content w-full max-w-[1300px] text-left m-auto">
                    <div className="footer-header text-[24px] text-black py-[20px] px-[4%]">
                        <a href="#" className="block text-black">Digital States</a>
                    </div>
                    <div className="footer-box bg-[#f7f4f5] text-[0px] w-full m-0 p-0 tracking-0 border-box">

                        <div className="4sm:text-center footer-item w-full block mt-0 text-[14px] text-left">
                            <h3 className="h-[48px] m-0 border-box px-[38px] text-left overflow-hidden relative pointer text-[16px] text-[#5c5758] text-normal" id="firm">Zones</h3>
                            <ul className="bg-white py-[20px] border-box m-0 list-none" id="firm-list">
                                <li className="h-[48px] text-left pl-[38px] mt-0 m-0 p-0 border-box list-none">
                                    <a className="block w-full h-full text-[#8c8889] no-underline" 
                                    rel="noreferrer" target="_blank"href="https://southeast.digitalstates.ng/">South East</a>
                                </li>
                                <li className="h-[48px] text-left pl-[38px] mt-0 m-0 p-0 border-box list-none">
                                    <a className="block w-full h-full text-[#8c8889] no-underline" target="_blank" 
                                        rel="noreferrer" href="https://southwest.digitalstates.ng/">South West</a>
                                </li>
                                <li className="h-[48px] text-left pl-[38px] mt-0 m-0 p-0 border-box list-none">
                                    <a className="block w-full h-full text-[#8c8889] no-underline" 
                                        rel="noreferrer" target="_blank" href="https://southsouth.digitalstates.ng/">South South</a>
                                </li>
                                <li className="h-[48px] text-left pl-[38px] mt-0 m-0 p-0 border-box list-none">
                                    <a className="block w-full h-full text-[#8c8889] no-underline" target="_blank"
                                    rel="noreferrer" href="https://northeast.digitalstates.ng/">North East</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="3sm:block justify-between flex footer-foot bg-[#f7f4f5] m-0 pt-[20px] pb-[80px] px-[4%]">
                    <p className="3sm:block inline-block text-[12px] m-0 text-[#bfbdbd] foot-first">
                        <a href="#" className="text-[#bfbdbd] mr-[20px] no-underline">Privacy Policy</a>
                        <a href="#" className="text-[#bfbdbd] mr-[20px] no-underline">Terms Of Use</a>
                    </p>
                    <p className="3sm:block inline-block text-[12px] m-0 text-[#bfbdbd]">© 2022 Digital States. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
